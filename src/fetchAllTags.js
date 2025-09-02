const simpleGit = require('simple-git');

module.exports = () =>
    simpleGit("./flake-game-logic/base/")
    .fetch({ "--all": null, "--tags": null });
