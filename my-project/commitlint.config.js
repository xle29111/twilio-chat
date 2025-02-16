module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore","ci","cd"]
    ],
    "scope-case": [2, "always", "lower-case"],
    "scope-empty": [2, "never"],
    "subject-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-min-length": [2, "always", 100],  
    "header-max-length": [2, "always", 100]
  }
};