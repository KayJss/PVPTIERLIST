# Pull Request Template

## 📌 Summary
Provide a clear and concise description of what this pull request does:
- What is the feature, fix, or improvement?
- Why is it needed?

---

## 🔍 Related Issues
Link related issues here. Use keywords so issues auto-close on merge:
- Fixes # (issue)
- Closes # (issue)
- Resolves # (issue)

---

## ✅ Checklist
Please confirm the following before requesting a review:

- [ ] Code builds and runs locally without errors
- [ ] I ran **`npm test`** and all tests passed
- [ ] I have added/updated tests for the changes
- [ ] Documentation updated (README, usage examples, comments)
- [ ] Followed the existing code style & conventions
- [ ] No unrelated changes included
- [ ] Changes are backwards-compatible (won’t break existing usage)

---

## 🧪 How to Test
Steps for reviewers to test this PR:

1. Checkout the branch:
   git fetch origin
   git checkout <branch-name>

2. Install dependencies (if not already):
   npm install

3. Run tests:
   npm test

4. Verify that the feature/bugfix works as expected.
