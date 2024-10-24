const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.cjs');
const createModel = require('./createModel.cjs');
const createUI = require('./createUI.cjs');
const createPublicApi = require('./createPublicApi.cjs');

module.exports = async (layer, sliceName) => {
    try {
        await fs.mkdir(resolveRoot('src', layer, sliceName));
    } catch (e) {
        console.log(`Failed to create slice with name ${sliceName}`);
    }

    await createModel(layer, sliceName);
    await createUI(layer, sliceName);
    await createPublicApi(layer, sliceName);
};
