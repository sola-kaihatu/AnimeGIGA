// babel.config.js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    production: {
      plugins: [
        'ignite-ignore-reactotron',
        '@babel/plugin-proposal-class-properties',
      ],
    },
  },
};
