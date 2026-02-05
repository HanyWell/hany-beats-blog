---
description: Generating a Task List from a Prompt
---
Below is an updated version of the workflow that keeps the overall structure and interaction model intact, but replaces the PRD-based flow with a prompt-driven one that optionally asks the user clarifying questions.

---

# Generating a Task List from a Prompt

## Goal

Guide an AI assistant to produce a detailed, step-by-step task list (Markdown) for a **junior developer** based on a *textual prompt* that describes a feature or project idea—rather than on a standalone PRD file.

## Output

* **Format:** Markdown (`.md`)
* **Location:** `/tasks/`
* **Filename:** `tasks-[slugified-prompt].md`

  * Derive `[slugified-prompt]` by lower-casing the prompt’s key noun-phrase, replacing spaces with dashes, and trimming to \~8 words (e.g., `tasks-user-profile-editing.md`).

## Process

1. **Receive Prompt**
   The user supplies a concise description of the desired feature, goal, or project (e.g., “Add dark-mode toggle to the settings page”).

2. **Clarify Requirements (if needed)**

   * The AI quickly scans the prompt.
   * If critical details are missing (e.g., target platform, acceptance criteria, major dependencies), it asks up to **two** focused clarifying questions.
   * Once answers are provided—or if no questions are needed—proceed to the next step.

3. **Phase 1 – Generate Parent Tasks**

   * Create a new Markdown file in `/tasks/` using the filename rule above.
   * From the prompt (and any clarifications), draft \~5 high-level *parent* tasks that cover the full implementation path (backend, UI, testing, docs, etc.).
   * Present these tasks to the user in the `## Tasks` section **without** sub-tasks yet.
   * End with:

     > “I have generated the high-level tasks based on your prompt. Ready to generate the sub-tasks? Respond with **‘Go’** to proceed.”

4. **Wait for Confirmation**

   * Pause until the user replies **“Go”** (case-insensitive).
   * If the user requests edits, adjust the parent tasks and repeat this step.

5. **Phase 2 – Generate Sub-Tasks**

   * Break each parent task into clear, actionable sub-tasks.
   * Use numbering like `1.1`, `1.2`, etc. Ensure logical flow and sufficient granularity for a junior developer.

6. **Identify Relevant Files**

   * Infer which source, test, config, or docs files are likely affected or newly created.
   * List them under `## Relevant Files`, with one-line rationales.

7. **Generate Final Output**

   * Combine **Relevant Files**, **Notes** (testing guidance, commands, environment tips), and the full hierarchical **Tasks** list.
   * Follow the Output Format shown below verbatim.

8. **Save Task List**

   * Write the completed Markdown to `/tasks/` using the derived filename.
   * (If the environment cannot auto-save, provide the Markdown to the user to copy or commit.)

## Output Format

```markdown
## Relevant Files

- `path/to/file.tsx` – Brief reason this file matters
- `path/to/file.test.tsx` – Unit tests for file.tsx
- ...

### Notes

- Unit tests live beside their source files.
- Use `npx jest` to run tests (omit a path to run all).

## Tasks

- [ ] 1.0 Parent Task Title
  - [ ] 1.1 Sub-task description
  - [ ] 1.2 Sub-task description
- [ ] 2.0 Parent Task Title
  - [ ] 2.1 Sub-task description
- [ ] 3.0 Parent Task Title
```

## Interaction Model

The assistant **must** pause after Phase 1 to let the user confirm the high-level direction before expanding into detailed sub-tasks, mirroring the original PRD-based flow.
