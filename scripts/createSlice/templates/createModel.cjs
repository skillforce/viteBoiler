const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.cjs');
const zustandHookTemplate = require('./zustandHookTemplate.cjs');

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) =>
        resolveRoot('src', layer, sliceName, 'model', ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath('selectors'));
            await fs.mkdir(resolveModelPath('store'));
        } catch (e) {
            console.log(
                `Failed to create model instance for slice with name ${sliceName}`,
                e,
            );
        }
    };

    const createZustandHook = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('store', `${sliceName}Store.ts`),
                zustandHookTemplate(sliceName),
            );
        } catch (e) {
            console.log('Failed to create redux slice instance', e);
        }
    };

    await createModelStructure();
    await createZustandHook();
};
