const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.cjs');
const firstCharUpperCase = require('../firstCharUpperCase.cjs');
const componentTemplate = require('./componentTemplate.cjs');
const styleTemplate = require('./styleTemplate.cjs');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) =>
        resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (e) {
            console.log('Failed to create UI directive');
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName));
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                styleTemplate(componentName),
            );
        } catch (e) {
            console.log('Failed to create a component');
        }
    };

    await createUIDir();
    await createComponent();
};
