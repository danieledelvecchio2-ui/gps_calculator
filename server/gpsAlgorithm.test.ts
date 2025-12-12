import { describe, it, expect } from 'vitest';
import { calculateScore } from '../client/src/lib/gpsAlgorithm';

describe('GPS Algorithm - Calcolo Completo', () => {
  const baseData = {
    votoLaurea: 100,
    lode: false,
    numB2: 0,
    numC1: 0,
    numC2: 0,
    numClil: 0,
    hasDottorato: false,
    hasSecondaLaurea: false,
    numMasterUniv: 0,
    hasMasterL2: false,
    numDigComp22: 0,
    numDigCompEdu: 0,
  };

  // Test Certificazioni Linguistiche
  it('dovrebbe calcolare correttamente certificazioni B2 (3 punti)', () => {
    const result = calculateScore({
      ...baseData,
      numB2: 2, // 2 * 3 = 6 punti
    });
    
    expect(result.breakdown.titoliCulturali).toBe(6);
  });

  it('dovrebbe calcolare correttamente certificazioni C1 (4 punti)', () => {
    const result = calculateScore({
      ...baseData,
      numC1: 1, // 1 * 4 = 4 punti
    });
    
    expect(result.breakdown.titoliCulturali).toBe(4);
  });

  it('dovrebbe calcolare correttamente certificazioni C2 (6 punti)', () => {
    const result = calculateScore({
      ...baseData,
      numC2: 1, // 1 * 6 = 6 punti
    });
    
    expect(result.breakdown.titoliCulturali).toBe(6);
  });

  // Test Titoli Accademici
  it('dovrebbe calcolare correttamente Dottorato di Ricerca (12 punti)', () => {
    const result = calculateScore({
      ...baseData,
      hasDottorato: true,
    });
    
    expect(result.breakdown.titoliCulturali).toBe(12);
  });

  it('dovrebbe calcolare correttamente Seconda Laurea (1.5 punti)', () => {
    const result = calculateScore({
      ...baseData,
      hasSecondaLaurea: true,
    });
    
    expect(result.breakdown.titoliCulturali).toBe(1.5);
  });

  // Test Master e Perfezionamenti
  it('dovrebbe calcolare correttamente Master Universitari (1 punto, max 3)', () => {
    const result = calculateScore({
      ...baseData,
      numMasterUniv: 2, // 2 * 1 = 2 punti
    });
    
    expect(result.breakdown.titoliCulturali).toBe(2);
  });

  it('dovrebbe applicare il cap massimo di 3 Master Universitari', () => {
    const result = calculateScore({
      ...baseData,
      numMasterUniv: 5, // max 3 * 1 = 3 punti
    });
    
    expect(result.breakdown.titoliCulturali).toBe(3);
  });

  it('dovrebbe calcolare correttamente Master L2 (3 punti)', () => {
    const result = calculateScore({
      ...baseData,
      hasMasterL2: true,
    });
    
    expect(result.breakdown.titoliCulturali).toBe(3);
  });

  it('dovrebbe applicare il cap massimo di 1 CLIL', () => {
    const result = calculateScore({
      ...baseData,
      numClil: 3, // max 1 * 3 = 3 punti
    });
    
    expect(result.breakdown.titoliCulturali).toBe(3);
  });

  // Test Certificazioni Informatiche
  it('dovrebbe calcolare correttamente DigComp 2.2 (0.5 punti)', () => {
    const result = calculateScore({
      ...baseData,
      numDigComp22: 2, // 2 * 0.5 = 1 punto
    });
    
    expect(result.breakdown.informatica).toBe(1);
  });

  it('dovrebbe calcolare correttamente DigComp Edu (1 punto)', () => {
    const result = calculateScore({
      ...baseData,
      numDigCompEdu: 1, // 1 * 1 = 1 punto
    });
    
    expect(result.breakdown.informatica).toBe(1);
  });

  it('dovrebbe applicare il cap massimo di 2 punti per certificazioni informatiche', () => {
    const result = calculateScore({
      ...baseData,
      numDigComp22: 2, // 1 punto
      numDigCompEdu: 2, // 2 punti
    });
    
    // 1 + 2 = 3, ma il massimo è 2
    expect(result.breakdown.informatica).toBe(2);
  });

  // Test Completo
  it('dovrebbe calcolare correttamente il punteggio totale con tutti i titoli', () => {
    const result = calculateScore({
      votoLaurea: 110,
      lode: true,
      numB2: 1, // 3 punti
      numC1: 1, // 4 punti
      numC2: 1, // 6 punti
      numClil: 1, // 3 punti
      hasDottorato: true, // 12 punti
      hasSecondaLaurea: true, // 1.5 punti
      numMasterUniv: 3, // 3 punti
      hasMasterL2: true, // 3 punti
      numDigComp22: 2, // 1 punto
      numDigCompEdu: 1, // 1 punto
    });
    
    // Laurea: 12 + 17 + 4 = 33
    // Titoli culturali: 3 + 4 + 6 + 3 + 12 + 1.5 + 3 + 3 = 35.5
    // Informatica: 1 + 1 = 2
    // Totale: 33 + 35.5 + 2 = 70.5
    expect(result.totalScore).toBe(70.5);
    expect(result.breakdown.laurea).toBe(33);
    expect(result.breakdown.titoliCulturali).toBe(35.5);
    expect(result.breakdown.informatica).toBe(2);
  });
});
