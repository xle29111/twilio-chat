module.exports = {
  branches: [
    { name: "main" }, 
    { name: "develop", channel: "develop", prerelease: true }, 
    { name: "release/*", prerelease: "${name.replace(/^release\\//, '')}" } 
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog", 
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/git"  
  ],
  
  git: {
    assets: ["CHANGELOG.md", "package.json"],
    message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
  }
};