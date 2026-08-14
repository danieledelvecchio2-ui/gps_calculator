import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(__dirname, "..");

function source(path: string) {
  return readFileSync(resolve(projectRoot, path), "utf8");
}

describe("Linee guida visive MONDO SCUOLA", () => {
  it("usa palette blu o azzurra nelle pagine pubbliche principali", () => {
    const files = [
      "client/src/index.css",
      "client/src/pages/Home.tsx",
      "client/src/pages/Contact.tsx",
      "client/src/pages/Privacy.tsx",
      "client/src/pages/Corsi.tsx",
      "client/src/pages/CookiePolicy.tsx",
      "client/src/pages/TermsConditions.tsx",
      "client/src/pages/InfoGPS.tsx",
      "client/src/pages/NewsGPS2026.tsx",
      "client/src/pages/GuideAumentarePunteggio.tsx",
      "client/src/pages/FAQGPS.tsx",
    ];

    files.forEach(file => {
      expect(source(file)).not.toMatch(/purple|violet|indigo/);
    });
  });

  it("attiva il menu compatto prima dei layout stretti", () => {
    const navigation = source("client/src/components/Navigation.tsx");

    expect(navigation).toContain("hidden xl:block");
    expect(navigation).toContain("xl:hidden");
  });

  it("mantiene le card corsi leggibili prima del breakpoint desktop ampio", () => {
    const corsi = source("client/src/pages/Corsi.tsx");

    expect(corsi).toContain("grid-cols-1 sm:grid-cols-2 xl:grid-cols-3");
    expect(corsi).toContain('href="/privacy"');
  });
});
