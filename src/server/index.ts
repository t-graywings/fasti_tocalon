import * as Express from 'express';
import api from './api/v1/routes';

const app = Express();
const PORT = 8080;

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

const publicFilesOptions = {
  'dotfiles': 'ignore',
  'extensions': ['html'],
};
app.use(Express.static('public', publicFilesOptions));

const jsFilesOptions = {
  'dotfiles': 'ignore',
  'extensions': ['js'],
};
app.use('/js', Express.static('dist/client/js', jsFilesOptions));

const cssFilesOptions = {
  'dotfiles': 'ignore',
  'extensions': ['css'],
};
app.use('/css', Express.static('dist/client/css', cssFilesOptions));

app.use('/api/v1', api);

app.listen(PORT, () => console.log('Starting server at "localhost:8080"'));