const express = require('express');
const app = express();
const port = 8080;

const publicFilesOptions = {
  'dotfiles': 'ignore',
  'extensions': ['html'],
}
app.use(express.static('public', publicFilesOptions));

const jsFilesOptions = {
  'dotfiles': 'ignore',
  'extensions': ['js'],
};
app.use('/js', express.static('dist/client/js', jsFilesOptions));

const cssFilesOptions = {
  'dotfiles': 'ignore',
  'extensions': ['css'],
}
app.use('css', express.static('dist/client/css', cssFilesOptions));

app.listen(port, () => console.log(`Example app listening`));
