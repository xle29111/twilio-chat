module.exports = {
  extends: ["@commitlint/config-conventional"], 
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"]
    ],
    "scope-case": [2, "always", "lower-case"],
    "scope-empty": [2, "never"],
    "subject-case": [2, "always", "sentence-case"], 
    "subject-empty": [2, "never"],
    "subject-min-length": [2, "always", 20],  
    "header-max-length": [2, "always", 100]
  }
};