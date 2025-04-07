module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"]
    ],
    "scope-case": [2, "always", ["lower-case", "upper-case", "camel-case", "kebab-case"]], // Permite mayúsculas, minúsculas y combinaciones
    "scope-empty": [2, "never"], // No permite scopes vacíos
    "subject-case": [2, "always", ["lower-case", "upper-case", "camel-case", "pascal-case", "sentence-case", "start-case"]], // Permite cualquier formato de capitalización en el subject
    "subject-empty": [2, "never"], // No permite subjects vacíos
    "subject-min-length": [2, "always", 20], // Exige un mínimo de 20 caracteres en el subject
    "header-max-length": [2, "always", 100] // Limita el header a 100 caracteres
  }
}; 