const path = require("path");

module.exports = {
  mode: 'production',
  entry: "./src/angular-wysiwyg.js",
  output: {
    filename: 'angular-wysiwyg.min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
