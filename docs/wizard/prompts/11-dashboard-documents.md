# Screen 11: Documents & Brief (Source of Truth)

## Progress Tracker Matrix
| Design | Logic | Agents | Testing | Status |
| :--- | :--- | :--- | :--- | :--- |
| [ ] | [ ] | [ ] | [ ] | ⚪ |

## 1. Description & Purpose
- **Description**: The "Knowledge Base" of the system where all business context lives.
- **Purpose**: RAG (Retrieval Augmented Generation) management.
- **Goals**: Ensure the AI is always operating on the latest business truth.

## 2. UI/UX Layout (3-Panel)
- **Left (Context)**: "Knowledge Statistics." Shows how much of the AI's "Brain" is filled with specific categories (Legal, Sales, Tech).
- **Main (Work)**: File explorer for uploaded PDFs, CSVs, and URLs. Includes the "Approved Business Brief" as the primary file.
- **Right (Intelligence)**: "Knowledge Search." A chat-like box to "Ask anything about your business docs."

## 3. Features
- **Core**: File upload/delete, Document status (Indexing, Ready), Document summaries.
- **Advanced**: "Conflict Detection" (AI identifies if Doc A contradicts Doc B).

## 4. Content & Data
- `documents`: array<{id, name, type, size, status}>
- `indexed_tokens`: number
- `search_queries`: array<Queries>

## 5. Real-World Use Cases
1. **Sales Lead**: Uploads a new "Pricing Guide 2024". AI automatically updates the Concierge agent's knowledge.
2. **HR Manager**: Uploads "Remote Work Policy". Right panel search allows them to instantly find specific clauses.
3. **Founder**: Edits the "Business Brief" (Screen 1 data) directly to pivot the strategy.

## 6. User Journey
1. User uploads a PDF.
2. Loader: "Extractor agent is reading your document..."
3. PDF appears in list with "Summary" available.
4. User asks Right Panel: "What is our policy on international shipping?" AI answers using RAG.

## 7. AI Agents & Workflows
- **Retriever (RAG)**: The workhorse. Finds context for all Gemini calls.
- **Extractor**: Pulls structured data from unstructured uploads.
- **Workflow**: File Upload -> Extractor -> Vector DB Indexing -> Retriever Access.

## 8. Gemini 3 Features & Tools
- **Model**: Gemini 3 Pro (for complex RAG extraction).
- **RAG (Feature)**: Built-in document grounding.
- **Structured Outputs**: Used to turn PDF text into clean business briefs.
