const express = require('express');
const app = express();
const path = require('path')

const multer = require('multer');

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null,'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage});

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/upload', upload.single("file"),(req, res) => {
    res.send('Arquivo enviado com sucesso!')
});

app.listen(8080, () => {
    console.log('servidor rodando');
})