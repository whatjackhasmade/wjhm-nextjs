// @ts-ignore
const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  fs.mkdirSync(to);
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

copyFolderSync(`./public/fonts`, `./storybook-public/fonts`);
copyFolderSync(`./public/images`, `./storybook-public/images`);
