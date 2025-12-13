#!/usr/bin/env python3
import json

with open('classi_concorso_data_fixed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Genera TypeScript
ts_content = """// Auto-generated from classidiconcorso.it
// Generato automaticamente da scraping di classidiconcorso.it

export interface RequiredTitle {
  title: string;
  requirements: string;
}

export interface ClasseConcorso {
  codeId: string;
  code: string;
  description: string;
  notes: string;
  url: string;
  required_titles?: RequiredTitle[];
}

export const classiConcorsoData: ClasseConcorso[] = """

ts_content += json.dumps(data, ensure_ascii=False, indent=2)
ts_content += ";\n"

with open('client/src/data/classiConcorsoData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"✅ Generato TypeScript con {len(data)} classi")
print("💾 Salvato in: client/src/data/classiConcorsoData.ts")
