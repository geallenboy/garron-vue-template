const {vue3Lint} = require('@garron/rule');

vue3Lint.rules['vue/require-prop-types'] = 'off';

module.exports = {
  ...vue3Lint
};
