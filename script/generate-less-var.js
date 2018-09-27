const path = require('path');
const fs = require('fs-extra');

function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

function buildLessVar() {
  try {
    const theme = requireUncached('../src/styles/theme.js');
    // console.log(theme.primary_color);

    let themeVars = [];
    Object.keys(theme).map(function(k) {
      themeVars.push(`@${k.replace('_', '-')}: ${theme[k]};`);
    });

    fs.writeFileSync(
      path.resolve(__dirname, '../src/styles/less/theme-vars.less'),
      themeVars.join('\r\n'),
    );
    console.log('build src/styles/less/theme-vars.less');
  } catch (err) {
    console.error(err);
  }
}

// build less vars
buildLessVar();
console.log('start watch');

// watch file theme.js to less-var
fs.watchFile(
  path.resolve(__dirname, '../src/styles/theme.js'),
  { interval: 1000 },
  (event, filename) => {
    console.log(`src/styles/theme.js file Changed`);
    buildLessVar();
  },
);
