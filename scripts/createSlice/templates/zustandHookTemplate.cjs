const firstCharUpperCase = require('../firstCharUpperCase.cjs');
const interfaceConst = 'interface';

module.exports = (sliceName) => {


    const typeName = `${firstCharUpperCase(sliceName)}StoreSchema`;

    return `import { create } from 'zustand';

${interfaceConst} ${typeName} {
  type:any // SPECIFY SCHEMA FOR CURRENT STORE
}

export const ${sliceName}Store = create<${typeName}>(() => ({
    type: '123',
}));`;
};
