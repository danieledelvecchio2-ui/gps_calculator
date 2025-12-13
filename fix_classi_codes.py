#!/usr/bin/env python3
"""
Script per aggiungere il campo codeId (A-01, A-26, ecc.) al database classi
"""
import json
import re

# Leggi il JSON
with open('classi_concorso_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Aggiungi codeId a ogni classe
for classe in data:
    url = classe.get('url', '')
    # Estrai codice dall'URL (es. "A-01" da "classe-di-concorso-A-01")
    match = re.search(r'classe-di-concorso-(.+)$', url)
    if match:
        code_id = match.group(1)
        classe['codeId'] = code_id
    else:
        # Fallback: usa il code esistente
        classe['codeId'] = classe['code']

# Salva il JSON aggiornato
with open('classi_concorso_data_fixed.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"✅ Aggiornati {len(data)} record con campo codeId")
print("💾 Salvato in: classi_concorso_data_fixed.json")

# Mostra alcuni esempi
print("\n📋 Esempi:")
for i, classe in enumerate(data[:5]):
    print(f"  {classe.get('codeId', 'N/A')}: {classe['code'][:60]}...")
