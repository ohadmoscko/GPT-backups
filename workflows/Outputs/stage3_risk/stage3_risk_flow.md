# Stage 3 – Message Review: Output Flow

## Input
- Agent: **Risk Auditor GPT**
- Input Files:
  - `stage1_pitch/stage1_pitch_v1.md`
  - `stage2_posts/post_linkedin_v1.md`
  - `stage2_posts/posts_summary_table_v1.md`

## Task
- Review the LinkedIn post draft and the original Pitch:
  - Identify risky claims, ambiguity, or misleading tone
  - Check authenticity and style (too casual, too technical, etc.)
  - Flag privacy/IP concerns
- Suggest inline edits where needed
- Provide a **clean approved version** of the LinkedIn post
- Produce a **“do-not-reveal-yet” checklist** (max 10 bullets)

## Output
- Files:
  - `stage3_risk_notes_v1.md`
  - `post_linkedin_approved_v1.md`

## Flow to Next Stages
1. Stage 4 – Idea-GPT → uses approved Pitch for PDF copy (Asset Pack).
2. Stage 4 – Catalyst-GPT → uses risk notes to guide minor site upgrades.

## Notes
- This stage adds a **credibility filter** before public release.  
- Ensures the first published post is safe, authentic, and aligned with strategy.
