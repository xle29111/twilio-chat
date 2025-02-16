module.exports = {
    branches: [
      "main",          // Rama principal para lanzamientos en producción
      "develop",       // Rama de desarrollo
      "release/*",     // Ramas de lanzamiento siguiendo el patrón de Gitflow
      "feature/*",     // Opcional: Ramas de características
      "hotfix/*"       // Opcional: Ramas de correcciones rápidas
    ],
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/npm",
      "@semantic-release/github"
    ]
  };