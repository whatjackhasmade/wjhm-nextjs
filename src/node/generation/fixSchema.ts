// @ts-ignore
const fs = require('fs');
const schemaFile = 'src/generated/types/wjhm.tsx';

fs.readFile(schemaFile, 'utf8', function (err, data) {
  if (err) return console.log(err);

  var result = data.replace(/1536X1536 = '_1536X1536',/g, '');
  result = result.replace(/2048X2048 = '_2048X2048'/g, '');

  fs.writeFile(schemaFile, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
