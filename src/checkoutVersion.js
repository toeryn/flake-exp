const { stat, cp } = require('fs/promises');
const simpleGit = require('simple-git');

module.exports = async (version) => {
    const versionFileName = `./flake-game-logic/versions/v${version}`;

    try {
        await stat(versionFileName);
    } catch {
        console.log(`copying v${version}`);
        await cp("./flake-game-logic/base", versionFileName, { recursive: true });
        console.log(`done`);
        console.log(`checkout`);
        await simpleGit(versionFileName).checkout(`v${version}`);
        console.log('done');
    }

};
