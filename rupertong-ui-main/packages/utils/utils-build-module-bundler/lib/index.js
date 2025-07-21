#!/usr/bin/env node
const path = require('path');

const babel = require('@rollup/plugin-babel').default;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const resolve = require('@rollup/plugin-node-resolve').default;
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup').default;
const fs = require('fs-extra');
const rollup = require('rollup');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rename = require('rollup-plugin-rename-node-modules');
const typescript = require('rollup-plugin-typescript2');

const currentWorkingPath = process.cwd();
const {
  src,
  main,
  dependencies = {},
  devDependencies = {},
  peerDependencies = {},
} = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, src);

const inputOptions = {
  input: inputPath,
  external: [
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies),
    ...Object.keys(peerDependencies),
    /@babel\/runtime/,
    /lodash/,
    /fast-deep-equal\/react/,
    'tslib',
  ],
  plugins: [
    // rename('external', false),
    peerDepsExternal({ includeDependencies: false }),
    // resolve(),
    // commonjs(),
    url({
      include: '**/*.as-url.svg',
    }),
    svgr(),
    json(),
    typescript({
      tsconfig: '../../tsconfig.json',
      useTsconfigDeclarationDir: true,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          baseUrl: currentWorkingPath,
          declaration: true,
          declarationMap: true,
          declarationDir: path.join(currentWorkingPath, 'dist', 'types'),
        },
        outDir: './dist',
        include: [path.join(currentWorkingPath)],
        exclude: [
          './node_modules',
          './dist',
          './**/*.test.*',
          './**/*.spec.*',
          './**/*.story.*',
          './**/*.stories.*',
        ],
      },
    }),
    babel({
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
      // exclude: [/core-js/],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
          /* {
                      corejs: 3,
                      modules: false,
                      targets: "> 0.25%, ie 11, not op_mini all",
                      useBuiltIns: "usage",
                    }, */
        ],
        '@babel/preset-react',
      ],
      plugins: ['@babel/plugin-transform-runtime'],
      babelHelpers: 'runtime',
      exclude: ['node_modules/**', '**/node_modules/**'],
    }),
    postcss({
      modules: true,
    }),
  ],
};

const outputOptions = [
  {
    file: main,
    format: 'cjs',
    sourcemap: false,
    exports: 'named',
  },
  {
    dir: 'dist/esm',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: './lib',
    sourcemap: true,
  },
];

async function build() {
  const DIST_PATH = path.join(currentWorkingPath, 'dist');
  const MANUAL_TYPES_PATH = path.join(currentWorkingPath, 'types');
  await fs.remove(DIST_PATH);
  if (fs.existsSync(MANUAL_TYPES_PATH)) {
    await fs.copy(MANUAL_TYPES_PATH, path.join(DIST_PATH, 'types'));
  }
  const bundle = await rollup.rollup(inputOptions);
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
