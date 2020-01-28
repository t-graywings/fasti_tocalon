const express = require('express');
const app = express();
const port = 8080;

const staticFilesOptions = {
    'dotfiles': 'ignore',
    'extensions': ['html'],
}
app.use(express.static('public', staticFilesOptions))

app.listen(port, () => console.log(`Example app listening`));
