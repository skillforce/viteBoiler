const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot.cjs');
const firstCharUpperCase = require('../firstCharUpperCase.cjs');

module.exports = async (layer, sliceName) => {
    const componentName = firstCharUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            `export { ${componentName} } from './ui/${componentName}/${componentName}';`,
        );
    } catch (e) {
        console.log('Failed to create public API');
    }
};
