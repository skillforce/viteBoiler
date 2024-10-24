const createTemplate = require('./templates/createTemplate.cjs');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entities', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`USE LAYER : ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Specify name of slice');
}

createTemplate(layer, sliceName);
