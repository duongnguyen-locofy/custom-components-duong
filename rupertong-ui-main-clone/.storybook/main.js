const path = require('path');

module.exports = {
  stories: [
    '../packages/**/*.stories.@(mdx|js|jsx|ts|tsx)',
    '../src/**/*.stories.@(mdx|js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    'storybook-readme',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-addon-material-ui',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: [
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-transform-optional-chaining',
        ],
      },
    });

    // SVG fix
    // https://github.com/boopathi/react-svg-loader/issues/197#issuecomment-691335365
    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: ['@svgr/webpack'],
      include: [path.resolve(process.cwd(), 'packages/core/core-pcc-logo')],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      include: [
        path.resolve(process.cwd(), 'packages/orders/orders-drug-search'),
      ],
    });

    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: ['@svgr/webpack'],
      include: [
        path.resolve(process.cwd(), 'packages/charts/charts-bar-chart'),
      ],
    });

    const indexOfRuleToRemove = config.module.rules.findIndex((rule) =>
      rule.test.toString().includes('svg')
    );
    config.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf|svg)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false,
      },
      exclude: [
        path.resolve(process.cwd(), 'packages/core/core-pcc-logo'),
        path.resolve(process.cwd(), 'packages/orders/orders-drug-search'),
        path.resolve(process.cwd(), 'packages/charts/charts-bar-chart'),
      ],
    });

    // Allow CSS Modules
    config.module.rules = config.module.rules.filter(
      (f) => f.test.toString() !== '/\\.css$/'
    );

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    });

    // Set priority order for stor(ies) source files
    config.resolve.mainFields = ['src', 'module', 'main'];

    // Return the altered config
    return config;
  },
};
