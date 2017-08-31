require.ensure(['./chunk2.js'], function(require) {
    var content = require('./chunk2.js');
    document.open();
    document.write('<h1>' + content + '</h1>');
    document.close();
  });