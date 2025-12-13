#!/usr/bin/env python3.11
"""
Script per estrarre:
1. Classi di concorso → Titoli richiesti
2. Titoli di studio → Classi accessibili
da classidiconcorso.it
"""

import requests
from bs4 import BeautifulSoup
import json
import time

BASE_URL = "https://www.classidiconcorso.it"

def get_all_classes():
    """Estrae la lista di tutte le classi di concorso"""
    url = f"{BASE_URL}/nuove-classi-di-concorso-aggiornate-2016-2017.html"
    
    print(f"Scarico lista classi da: {url}")
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    classes = []
    
    # Trova tutte le righe della tabella
    rows = soup.find_all('tr')
    
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 2:
            code_cell = cells[0]
            code_link = code_cell.find('a')
            if code_link:
                code = code_link.text.strip()
                class_url = code_link.get('href', '')
                if class_url and not class_url.startswith('http'):
                    class_url = BASE_URL + class_url
                
                desc_cell = cells[1]
                desc_link = desc_cell.find('a')
                description = desc_link.text.strip() if desc_link else desc_cell.text.strip()
                
                notes = cells[2].text.strip() if len(cells) > 2 else ""
                
                classes.append({
                    'code': code,
                    'description': description,
                    'notes': notes,
                    'url': class_url
                })
    
    print(f"Trovate {len(classes)} classi di concorso")
    return classes

def get_all_titles():
    """Estrae la lista di tutti i titoli di studio"""
    url = f"{BASE_URL}/titoli-di-studio.html"
    
    print(f"\nScarico lista titoli da: {url}")
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    titles = []
    
    # Trova tutte le righe della tabella
    rows = soup.find_all('tr')
    
    for row in rows:
        cells = row.find_all('td')
        if len(cells) >= 2:
            title_cell = cells[0]
            title_link = title_cell.find('a')
            if title_link:
                title_name = title_link.text.strip()
                title_url = title_link.get('href', '')
                if title_url and not title_url.startswith('http'):
                    title_url = BASE_URL + title_url
                
                # Seconda cella potrebbe contenere info aggiuntive
                info = cells[1].text.strip() if len(cells) > 1 else ""
                
                titles.append({
                    'name': title_name,
                    'info': info,
                    'url': title_url
                })
    
    print(f"Trovati {len(titles)} titoli di studio")
    return titles

def get_class_details(class_info):
    """Estrae i dettagli di una singola classe di concorso"""
    url = class_info['url']
    
    if not url:
        return class_info
    
    try:
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        titles = []
        tables = soup.find_all('table')
        
        for table in tables:
            rows = table.find_all('tr')
            for row in rows:
                cells = row.find_all('td')
                if len(cells) >= 2:
                    title_text = cells[0].text.strip()
                    
                    if any(keyword in title_text.lower() for keyword in ['laurea', 'diploma', 'master', 'dottorat', 'lm-', 'ls-', 'l-']):
                        notes = cells[1].text.strip() if len(cells) > 1 else ""
                        
                        titles.append({
                            'title': title_text,
                            'requirements': notes
                        })
        
        class_info['required_titles'] = titles
        time.sleep(0.3)
        
    except Exception as e:
        print(f"  Errore: {e}")
        class_info['required_titles'] = []
    
    return class_info

def get_title_details(title_info):
    """Estrae le classi accessibili con un titolo di studio"""
    url = title_info['url']
    
    if not url:
        return title_info
    
    try:
        response = requests.get(url, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        accessible_classes = []
        tables = soup.find_all('table')
        
        for table in tables:
            rows = table.find_all('tr')
            for row in rows:
                cells = row.find_all('td')
                if len(cells) >= 2:
                    class_code = cells[0].text.strip()
                    class_desc = cells[1].text.strip() if len(cells) > 1 else ""
                    
                    # Filtra solo codici classe validi
                    if class_code and (class_code.startswith('A-') or class_code.startswith('B-') or 
                                      class_code.startswith('00') or 'EE' in class_code):
                        accessible_classes.append({
                            'code': class_code,
                            'description': class_desc
                        })
        
        title_info['accessible_classes'] = accessible_classes
        time.sleep(0.3)
        
    except Exception as e:
        print(f"  Errore: {e}")
        title_info['accessible_classes'] = []
    
    return title_info

def main():
    print("=== SCRAPING CLASSI DI CONCORSO E TITOLI DI STUDIO ===\n")
    
    # 1. Estrai classi di concorso
    print("FASE 1: Estrazione classi di concorso")
    all_classes = get_all_classes()
    
    print(f"\nEstrazione dettagli per {len(all_classes)} classi...")
    detailed_classes = []
    for i, class_info in enumerate(all_classes, 1):
        if i % 10 == 0:
            print(f"  Progresso: {i}/{len(all_classes)}")
        detailed_class = get_class_details(class_info)
        detailed_classes.append(detailed_class)
    
    # Salva classi
    classes_file = '/home/ubuntu/gps_calculator/classi_concorso_data.json'
    with open(classes_file, 'w', encoding='utf-8') as f:
        json.dump(detailed_classes, f, ensure_ascii=False, indent=2)
    print(f"\n✓ Classi salvate in: {classes_file}")
    
    # 2. Estrai titoli di studio
    print("\nFASE 2: Estrazione titoli di studio")
    all_titles = get_all_titles()
    
    print(f"\nEstrazione dettagli per {len(all_titles)} titoli...")
    detailed_titles = []
    for i, title_info in enumerate(all_titles, 1):
        if i % 10 == 0:
            print(f"  Progresso: {i}/{len(all_titles)}")
        detailed_title = get_title_details(title_info)
        detailed_titles.append(detailed_title)
    
    # Salva titoli
    titles_file = '/home/ubuntu/gps_calculator/titoli_studio_data.json'
    with open(titles_file, 'w', encoding='utf-8') as f:
        json.dump(detailed_titles, f, ensure_ascii=False, indent=2)
    print(f"\n✓ Titoli salvati in: {titles_file}")
    
    # Statistiche finali
    print("\n=== COMPLETATO ===")
    print(f"Classi estratte: {len(detailed_classes)}")
    print(f"Titoli estratti: {len(detailed_titles)}")
    classes_with_data = sum(1 for c in detailed_classes if c.get('required_titles'))
    titles_with_data = sum(1 for t in detailed_titles if t.get('accessible_classes'))
    print(f"Classi con titoli: {classes_with_data}")
    print(f"Titoli con classi: {titles_with_data}")

if __name__ == "__main__":
    main()
