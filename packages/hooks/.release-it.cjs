const baseConfig = require("../../.release-it.base.cjs");

const config = {
  ...baseConfig,
  hooks: {
    "after:bump": ["yarn bump -p chains -p types -p utils"],
  },
};

module.exports = config;
