#!/usr/bin/env python3
"""
Script per estrarre TUTTI i dati da cattedra.it:
1. Lista completa lauree magistrali
2. Per ogni laurea: quali classi di concorso sono accessibili (con note CFU)
3. Per ogni classe: quali lauree danno accesso (con note CFU)
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re

BASE_URL = "https://cattedra.it"

def get_page(url):
    """Scarica una pagina con retry"""
    for attempt in range(3):
        try:
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            return response.text
        except Exception as e:
            print(f"Errore tentativo {attempt+1}: {e}")
            time.sleep(2)
    return None

def extract_lauree_list():
    """Estrae lista completa lauree magistrali"""
    print("📚 Estraggo lista lauree magistrali...")
    html = get_page(f"{BASE_URL}/titolitocdc.php")
    if not html:
        return []
    
    soup = BeautifulSoup(html, 'html.parser')
    lauree = []
    
    # Trova tutte le righe della tabella lauree
    rows = soup.find_all('tr')
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 2:
            laurea_text = cells[0].get_text(strip=True)
            link = cells[1].find('a')
            if link and 'titolitocdc_dettagli.php' in link.get('href', ''):
                lauree.append({
                    'codice': laurea_text,
                    'url': BASE_URL + '/' + link['href']
                })
    
    print(f"✅ Trovate {len(lauree)} lauree magistrali")
    return lauree

def extract_classi_from_laurea(laurea_url):
    """Estrae le classi accessibili con una laurea"""
    html = get_page(laurea_url)
    if not html:
        return []
    
    soup = BeautifulSoup(html, 'html.parser')
    classi = []
    
    # Trova tabella con classi
    rows = soup.find_all('tr')
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 3:
            classe_code = cells[0].get_text(strip=True)
            classe_desc = cells[1].get_text(strip=True)
            note_cfu = cells[2].get_text(strip=True)
            
            # Verifica che sia una classe valida (formato A-XX)
            if re.match(r'^[A-Z]-\d+', classe_code):
                classi.append({
                    'codice': classe_code,
                    'descrizione': classe_desc,
                    'note_cfu': note_cfu
                })
    
    return classi

def extract_classi_list():
    """Estrae lista completa classi di concorso"""
    print("🎓 Estraggo lista classi di concorso...")
    html = get_page(f"{BASE_URL}/cdcfromcdl.php")
    if not html:
        return []
    
    soup = BeautifulSoup(html, 'html.parser')
    classi = []
    
    # Trova tutte le righe della tabella classi
    rows = soup.find_all('tr')
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 3:
            classe_code = cells[0].get_text(strip=True)
            classe_desc = cells[1].get_text(strip=True)
            link = cells[3].find('a') if len(cells) > 3 else None
            
            # Verifica che sia una classe valida
            if re.match(r'^[A-Z]-\d+', classe_code) and link and 'cdcfromcdl_dettagli.php' in link.get('href', ''):
                classi.append({
                    'codice': classe_code,
                    'descrizione': classe_desc,
                    'url': BASE_URL + '/' + link['href']
                })
    
    print(f"✅ Trovate {len(classi)} classi di concorso")
    return classi

def extract_lauree_from_classe(classe_url):
    """Estrae le lauree che danno accesso a una classe"""
    html = get_page(classe_url)
    if not html:
        return []
    
    soup = BeautifulSoup(html, 'html.parser')
    lauree = []
    
    # Trova tabella con lauree
    rows = soup.find_all('tr')
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 2:
            laurea_text = cells[0].get_text(strip=True)
            note_cfu = cells[1].get_text(strip=True)
            
            # Verifica che sia una laurea valida (LM, LS, Diploma, ecc.)
            if any(keyword in laurea_text for keyword in ['LM', 'LS', 'Laurea', 'Diploma', 'LMR', 'LMG']):
                lauree.append({
                    'titolo': laurea_text,
                    'note_cfu': note_cfu
                })
    
    return lauree

def main():
    print("🚀 Inizio scraping completo cattedra.it\n")
    
    # 1. Estrai lista lauree
    lauree_list = extract_lauree_list()
    
    # 2. Per ogni laurea, estrai le classi accessibili
    print("\n📊 Estraggo mapping Laurea → Classi...")
    laurea_to_classi = {}
    for i, laurea in enumerate(lauree_list[:50], 1):  # Prime 50 lauree per non sovraccaricare
        print(f"  [{i}/{min(50, len(lauree_list))}] {laurea['codice']}")
        classi = extract_classi_from_laurea(laurea['url'])
        laurea_to_classi[laurea['codice']] = classi
        time.sleep(1)  # Pausa per non sovraccaricare il server
    
    # 3. Estrai lista classi
    classi_list = extract_classi_list()
    
    # 4. Per ogni classe, estrai le lauree richieste
    print("\n📊 Estraggo mapping Classe → Lauree...")
    classe_to_lauree = {}
    for i, classe in enumerate(classi_list[:60], 1):  # Prime 60 classi
        print(f"  [{i}/{min(60, len(classi_list))}] {classe['codice']} - {classe['descrizione']}")
        lauree = extract_lauree_from_classe(classe['url'])
        classe_to_lauree[classe['codice']] = {
            'descrizione': classe['descrizione'],
            'lauree': lauree
        }
        time.sleep(1)
    
    # 5. Salva tutto in JSON
    data = {
        'lauree': lauree_list,
        'classi': classi_list,
        'laurea_to_classi': laurea_to_classi,
        'classe_to_lauree': classe_to_lauree
    }
    
    with open('cattedra_complete_data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"\n✅ COMPLETATO!")
    print(f"   - {len(lauree_list)} lauree magistrali")
    print(f"   - {len(classi_list)} classi di concorso")
    print(f"   - {len(laurea_to_classi)} mapping Laurea→Classi")
    print(f"   - {len(classe_to_lauree)} mapping Classe→Lauree")
    print(f"\n💾 Dati salvati in: cattedra_complete_data.json")

if __name__ == "__main__":
    main()
