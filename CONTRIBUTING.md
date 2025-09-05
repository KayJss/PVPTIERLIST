# Contributing to PVPTIERLIST

Thanks for your interest in improving **PVPTIERLIST**! This guide explains how to report issues, propose changes, and open pull requests.

> If anything here is unclear, open an issue and we’ll help you get started.

---

## Code of Conduct
By participating in this project you agree to uphold a respectful, inclusive, and harassment-free environment. Be kind, assume good intent, and collaborate constructively.

If you experience or witness unacceptable behavior, please open a confidential issue or contact a maintainer.

---

## Ways to Contribute
- **Bug reports** – Help us find and fix problems.
- **Feature requests** – Suggest improvements or new functionality.
- **Code contributions** – Fix bugs, add features, improve performance.
- **Docs** – Improve README, usage examples, and comments.
- **Triage** – Reproduce issues, verify fixes, and suggest labels.

---

## Before You Start
1. **Check existing issues/PRs** to avoid duplicates.
2. **Discuss large changes** by opening an issue first so we can align on scope.
3. **Fork** the repository and work on a topic branch in your fork.

> Tip: Small, focused pull requests are easier to review and merge.

---

## Reporting Issues
Use the issue tracker and include:
- A **clear title** and **concise description**.
- **Steps to reproduce**, expected vs. actual behavior.
- **Environment details** (OS, version, tooling) if relevant.
- **Logs, screenshots, or minimal repro** when possible.

Please search for similar issues before opening a new one.

---

## Proposing Changes
1. **Fork** and **clone** your fork.
2. Create a branch: `git switch -c feat/short-description` (or `fix/...`, `chore/...`).
3. Make your changes. Keep them focused and self‑contained.
4. Run tests and quality checks locally (see below).
5. Push your branch and open a pull request.

If your change impacts users, update documentation accordingly.

---

## Pull Request Process
- **One change per PR**: keep PRs small and scoped.
- **Describe the change**: what, why, and how (include screenshots if UI).
- **Link related issues** using `Fixes #123` so they auto‑close on merge.
- **Checklist** (please confirm in your PR description):
  - [ ] Code builds locally
  - [ ] Tests pass (and new tests added if needed)
  - [ ] Docs updated (README/usage/changelog)
  - [ ] No unrelated changes

Maintainers may request changes. After approval, a maintainer will merge the PR.

---

## Coding Style & Commit Messages
- Follow the existing code style of the repository. When in doubt, match the surrounding code.
- Keep functions small and readable; prefer clear naming and comments where helpful.
- **Commit messages**: we prefer [Conventional Commits](https://www.conventionalcommits.org/) (optional but encouraged):
  - `feat: add fighter search to tier list`
  - `fix: correct S-tier ordering logic`
  - `docs: update contribution guide`
  - `chore: format code`

This helps with changelogs and release notes.

---

## Tests & Quality Checks
- Add or update **tests** for any bug fix or new feature.
- Ensure **all tests pass** before submitting a PR.
- Run **linters/formatters** if configured (e.g., ESLint/Prettier, flake8/black, etc.).
- Avoid introducing new warnings. If you must, explain why in the PR.

> If the project lacks tests or tooling, feel free to propose adding them in a separate PR.

---

## Documentation
- Update the **README** and any relevant docs when behavior changes.
- Include **usage examples** for new features.
- Comment non‑obvious code paths and rationale where appropriate.

---

## Security
If you discover a security vulnerability, **do not** open a public issue. Instead, report it privately to a maintainer. We will coordinate a fix and disclosure.

---

## License
By contributing, you agree that your contributions will be licensed under the same license as the project. See the repository’s `LICENSE` file for details.

---


**Thank you for helping improve PVPTIERLIST!**
