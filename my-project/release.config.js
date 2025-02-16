module.exports = {
  branches: [
    { name: "main" },  // Solo la rama principal para releases
    { name: "develop", channel: "develop", prerelease: true }, // Para pre-releases
    { name: "release/*", prerelease: "${name.replace(/^release\\//, '')}" } // Soporte para ramas de release
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog", 
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
};


