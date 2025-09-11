```mermaid
flowchart TD

A[📥 Customer Message] --> B{Message Type?}

B -->|Empty/Short| C[🟥 Agents detect generic inquiry]
C --> C1[Idea: Identify as a new lead]
C --> C2[Strategy: Generate basic questions]
C --> C3[Documentation: Create internal lead card]
C --> C4[Catalyst: Auto-reply to customer]
C --> D1[📤 Output to Customer: Request for more details]
C --> D2[📤 Output to Business: Lead card + questions for call]

B -->|Partial| E[🟨 Agents detect missing info]
E --> E1[Idea: Break down what was said]
E --> E2[Strategy: Map known vs missing]
E --> E3[Risk: Highlight key gaps]
E --> E4[Documentation: Internal requirements table]
E --> E5[Catalyst: Follow-up questions for customer]
E --> F1[📤 Output to Customer: Clarification questions]
E --> F2[📤 Output to Business: Requirements + missing info]

B -->|Detailed| G[🟩 Agents detect full requirements]
G --> G1[Idea: Confirm requirements are clear]
G --> G2[Strategy: Draft structure for price quote]
G --> G3[Risk: Flag missing points (hosting, maintenance)]
G --> G4[Documentation: Draft price quote document]
G --> G5[Catalyst: Suggest next steps]
G --> H1[📤 Output to Customer: Immediate price quote]
G --> H2[📤 Output to Business: Internal draft document]
