const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const srcPath = '../src/styles/theme.ts';
const srcResoloved = path.resolve(__dirname, srcPath);
const target = path.resolve(__dirname, '../src/styles/less/theme-vars.less');
const buildLessVar = () => {
  delete require.cache[srcResoloved];
  const theme = require(srcPath);
  fs.writeFileSync(
    target,
    Object.keys(theme.default)
      .map(k => `@${k.replace(/_/g, '-')}: ${theme.default[k]};`)
      .join('\r\n'),
  );
};

// watch file theme.js to less-var
fs.watchFile(srcResoloved, { interval: 1000 }, (event: any, filename: any) => {
  try {
    buildLessVar();
    console.log(chalk.red('update LESS file : ') + target);
  } catch (e) {
    console.log(chalk.bgRed(e));
  }
});
console.log(chalk.yellow.bold(`Watching theme files : `) + srcResoloved);

// build less vars
buildLessVar();
