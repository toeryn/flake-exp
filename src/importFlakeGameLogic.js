module.exports = (version) => {
    const { createFlakeGameLogic, createStore } = require(`../flake-game-logic/versions/v${version}/src/index.js`);

    const { initialiseGameState, updateGameState, } = createFlakeGameLogic();

    const battleId = "my-battle";
    const startTime = 0;
    const rngSeed = 0;
    const players = [];

    const initState = initialiseGameState(players, battleId, startTime, rngSeed);
    updateGameState({ store: createStore(initState) });

    return initState;
};
