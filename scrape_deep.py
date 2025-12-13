#!/usr/bin/env python3.11
"""
Script per scraping COMPLETO dei titoli richiesti per ogni classe di concorso
"""
import requests
from bs4 import BeautifulSoup
import json
import time
import sys

BASE_URL = "https://www.classidiconcorso.it"

def extract_required_titles_from_page(class_url):
    """Estrae i titoli richiesti dalla pagina dettaglio di una classe"""
    try:
        response = requests.get(class_url, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        titles = []
        
        # Cerca tabelle con titoli richiesti
        tables = soup.find_all('table')
        
        for table in tables:
            rows = table.find_all('tr')
            for row in rows:
                cells = row.find_all(['td', 'th'])
                if len(cells) >= 2:
                    # Cerca pattern comuni: "Laurea in..." oppure "Diploma di..."
                    text = ' '.join([c.get_text(strip=True) for c in cells])
                    
                    if any(keyword in text.lower() for keyword in ['laurea', 'diploma', 'master', 'dottorato']):
                        title_text = cells[0].get_text(strip=True)
                        requirements = ' '.join([c.get_text(strip=True) for c in cells[1:]])
                        
                        if title_text and len(title_text) > 3:
                            titles.append({
                                'title': title_text,
                                'requirements': requirements
                            })
        
        # Se non trova tabelle, cerca liste
        if not titles:
            lists = soup.find_all(['ul', 'ol'])
            for lst in lists:
                items = lst.find_all('li')
                for item in items:
                    text = item.get_text(strip=True)
                    if any(keyword in text.lower() for keyword in ['laurea', 'diploma', 'master']):
                        if len(text) > 10:
                            titles.append({
                                'title': text,
                                'requirements': ''
                            })
        
        # Rimuovi duplicati
        seen = set()
        unique_titles = []
        for t in titles:
            key = t['title'].lower()
            if key not in seen and len(key) > 5:
                seen.add(key)
                unique_titles.append(t)
        
        return unique_titles[:20]  # Max 20 titoli per classe
        
    except Exception as e:
        print(f"  Errore estrazione titoli: {e}", file=sys.stderr)
        return []

def main():
    print("=== SCRAPING PROFONDO CLASSI DI CONCORSO ===\n")
    
    # Carica le classi già estratte
    try:
        with open('classi_concorso_data.json', 'r', encoding='utf-8') as f:
            classes = json.load(f)
        print(f"Caricate {len(classes)} classi dal file esistente\n")
    except:
        print("Errore: file classi_concorso_data.json non trovato!")
        return
    
    total = len(classes)
    updated = 0
    
    for i, cls in enumerate(classes, 1):
        code = cls.get('code', '?')
        url = cls.get('url', '')
        
        print(f"[{i}/{total}] {code}...", end=' ', flush=True)
        
        if not url or url == BASE_URL:
            print("SKIP (no URL)")
            continue
        
        # Estrai titoli
        titles = extract_required_titles_from_page(url)
        
        if titles:
            cls['required_titles'] = titles
            updated += 1
            print(f"OK ({len(titles)} titoli)")
        else:
            print("VUOTO")
        
        # Salva ogni 10 classi
        if i % 10 == 0:
            with open('classi_concorso_data.json', 'w', encoding='utf-8') as f:
                json.dump(classes, f, ensure_ascii=False, indent=2)
            print(f"  → Salvato checkpoint ({updated} classi con titoli)")
        
        # Pausa per non sovraccaricare il server
        time.sleep(2)
    
    # Salvataggio finale
    with open('classi_concorso_data.json', 'w', encoding='utf-8') as f:
        json.dump(classes, f, ensure_ascii=False, indent=2)
    
    print(f"\n=== COMPLETATO ===")
    print(f"Classi totali: {total}")
    print(f"Classi con titoli estratti: {updated}")
    print(f"Classi senza titoli: {total - updated}")

if __name__ == '__main__':
    main()
