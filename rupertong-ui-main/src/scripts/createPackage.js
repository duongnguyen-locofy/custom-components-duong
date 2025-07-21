const path = require('path');

const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');

const { PACKAGE_SCOPE } = require('../config/constants');
const originalPackageJson = require('../templates/template-package/package.json');

const errorStyle = chalk.bold.red;
const successStyle = chalk.bold.green;

const program = new commander.Command();

program
  .version('0.0.1')
  .requiredOption('-n --name <string>', 'package name, ex: "core-header"')
  .requiredOption('-t --type <string>', 'package type, ex: <core>|<ui>|<utils>')
  .option(
    '-pv --packageVersion <string>',
    'package version',
    originalPackageJson.version
  )
  .option(
    '-d --description <string>',
    'package description',
    originalPackageJson.description
  )
  .parse(process.argv);

const options = program.opts();

const srcDir = path.resolve(
  process.cwd(),
  'src',
  'templates',
  'template-package'
);

const destDir = path.resolve(
  process.cwd(),
  'packages',
  options.type,
  options.name
);

if (fs.existsSync(destDir)) {
  console.error(
    errorStyle('Please supply a directory that does not already exist')
  );
  process.exit(1);
}

async function copyFiles() {
  try {
    await fs.copy(srcDir, destDir);
    const packageJsonData = await fs.readFile(
      path.resolve(destDir, 'package.json'),
      'utf-8'
    );
    const packageJson = JSON.parse(packageJsonData);
    packageJson.name = `${PACKAGE_SCOPE}${options.name}`;
    packageJson.version = options.packageVersion;
    packageJson.description = options.description;
    await fs.writeFile(
      path.resolve(destDir, 'package.json'),
      JSON.stringify(packageJson, null, 2)
    );
    console.log(successStyle('Package successfully created'));
  } catch (error) {
    console.error(errorStyle(error));
    process.exit(1);
  }
}

copyFiles();
