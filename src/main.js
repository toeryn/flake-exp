const importFlakeGameLogic = require('./importFlakeGameLogic');
const checkoutVersion = require('./checkoutVersion');
const fetchAllTags = require('./fetchAllTags');

const express = require("express");
const app = express();

const versions = ["1.2.0", "1.1.0"];

app.get("/")

const init = async () => {
    console.log("fetch all tags")
    await fetchAllTags();
    console.log("done")
}


init();


app.get("/version/:version", async (req, res) => {
    const version = req.params.version;

    await checkoutVersion(version)
    const state = await importFlakeGameLogic(version);

    res.send(state);
});

app.listen(8080, () => {
    console.log("listening on port 8080");
})


/*
    // TODO ( w/ issues )

    - Checkout the right version ✅
        - Handle if no version found?
    - Install node_modules (cmd line) ✅
        - What version of npm/node should it use?  (use nvm? or ignore)
    - Decache old version ✅
    - Import game logic ✅
        - Node version - not possible to be different to whatever the admin is running with
    - Do the rebuild
*/
