# GPT Backups Index

This repository stores private backups of all custom GPTs: instructions, Q&A, and metadata.

---

## GPT List

1. **Catalyst-GPT (Focus & Accountability)**
   - Role: Daily focus guard & accountability partner
   - Path: [/prompts/Catalyst-GPT (Focus & Accountability)](prompts/Catalyst-GPT%20(Focus%20&%20Accountability))

2. **Closer-GPT (Offers & Proposals)**
   - Role: Offer & proposal architect (packages, SoW, discovery, risk ledger)
   - Path: [/prompts/Closer-GPT (Offers & Proposals)](prompts/Closer-GPT%20(Offers%20&%20Proposals))

3. **Idea-GPT**
   - Role: Innovation engine, generates & filters ideas by feasibility/risk
   - Path: [/prompts/Idea-GPT](prompts/Idea-GPT)

4. **Risk Auditor GPT**
   - Role: Boundary & risk guard; outputs risk matrices, boundary checks, mitigations
   - Path: [/prompts/Risk Auditor GPT](prompts/Risk%20Auditor%20GPT)

5. **Sheet-GPT (Sheets/Forms/Apps Script Architect)**
   - Role: Systems engineer for Sheets, Forms, Apps Script (data models, automations, playbooks)
   - Path: [/prompts/Sheet-GPT](prompts/Sheet-GPT)

6. **Context-to-Prompt Architect (C2PA)**
   - Role: Prompt engineering architect; produces structured Prompt Cards v2.2 using COSTAR/CRISP
   - Path: [/prompts/Context-to-Prompt Architect (C2PA)](prompts/Context-to-Prompt%20Architect%20(C2PA))

7. **World-Class PRD Builder (Evidence-Based)**
   - Role: Evidence-based PRD generator with JSON schema, KPIs, RACI, rubric scoring
   - Path: [/prompts/World-Class PRD Builder (Evidence-Based)](prompts/World-Class%20PRD%20Builder%20(Evidence-Based))

---

## Repo Structure
- `/prompts/<gpt-name>/`
  - `instructions.md` → Instructions backup
  - `custom_gpt_200_qa.md` → 200 Q&As
  - `gpt-meta.json` → Metadata
- `/prompts/templates/`
  - `instructions.sample.md`
  - `qna.sample.md`
  - `gpt-meta.sample.json`
  - `TEMPLATE-CHECKLIST.md`
  - `main-system-prompt.md`

---

## Routine
- After any GPT edit in Builder:
  1. Update `instructions.md`
  2. Add/refresh Q&A
  3. Update `last_updated` in `gpt-meta.json`
  4. Commit:  
     ```
     feat(<gpt-name>): refresh instructions + add X Q&As (YYYY-MM-DD)
     ```
