---
description: TDD workflow for Cascade
---
# Test‑Driven Development Workflow for Cascade

## Overview

This workflow directs **Cascade** to drive an interactive TDD loop while collaborating with a human engineer.  At every step Cascade **must**:

1. Announce the current phase (**RED**, **GREEN**, or **REFACTOR**)
2. Explain why it is in that phase
3. Prompt the user for confirmation before advancing

---

## Step‑by‑Step Flow

### 1  Setup

* Verify you are on a feature branch. If on `main`, checkout a new branch for this feature.
* Figure out which test‑runner command to use (e.g. `npm test`, `bundle exec rspec`). Store as `{{TEST_CMD}}`.
* Locate or create the appropriate test file for the feature.

### 2  🔴 RED Phase

1. **Announce:** `🔴 Entering RED phase`.
2. Ask the user to describe the desired behavior / acceptance criterion.
3. Generate a failing test that captures that behavior and add it to the test file.
4. **Run tests:** `{{TEST_CMD}}` (scope to the new test if possible).
5. Display the failing output summary.
6. Prompt: *“Tests are failing as expected. Proceed to GREEN?”*

### 3  🟢 GREEN Phase

1. **Announce:** `🟢 Entering GREEN phase`.
2. Implement the minimal code change required for the failing test to pass—touch only necessary files.
3. **Run tests** again with `{{TEST_CMD}}`.
4. If tests still fail → explain why and ask for guidance; remain in GREEN.
5. If tests pass → show summary, then prompt: *“All tests pass. Proceed to REFACTOR?”*

### 4  🟡 REFACTOR Phase

1. **Announce:** `🟡 Entering REFACTOR phase`.
2. Improve code quality (deduplicate, rename, extract, optimise) **without changing behavior**.
3. **Run tests** after each refactor block using `{{TEST_CMD}}`.
4. If tests fail → revert the last change and return to GREEN or ask the user.
5. When stable, present the diff to the user for approval.

### 5  Loop / Next Steps

* Ask the user whether to:

  * Add another behavior (return to RED)
  * Commit & push changes
  * End the workflow

### 6  Commit & Push (optional)

1. Stage relevant files: `git add <files>`
2. Commit with a conventional message, e.g. `feat(test): add rotateElement negative‑input test`.
3. Ask if the user wants to open a PR; if yes, run the PR workflow.

---

## Conventions & Banner Snippets

* Never change production code unless a failing test justifies it.
* Keep commits focused—one behavior per commit.
* Use clear console banners:

  ```
  🔴 RED       — writing failing test …
  🟢 GREEN     — making test pass …
  🟡 REFACTOR  — cleaning code …
  ```

---

*End of workflow*

# Test-Driven Development High-Level Guidance

## Core Loop
1. **🔴 RED**: Write failing test for desired behavior
2. **🟢 GREEN**: Write minimal code to pass the test  
3. **🟡 REFACTOR**: Clean up code while keeping tests green

## Phase Actions:
- **RED**: Ask user for behavior → Write failing test → Run tests
- **GREEN**: Write minimal implementation → Run tests → Verify pass
- **REFACTOR**: Improve code quality → Run tests → Verify still pass

## Key Rules:
- Never write production code without a failing test
- Keep commits focused (one behavior per cycle)
- Always run tests after each change
