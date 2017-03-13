var express = require('express');
var multer = require('multer');
//var storage = multer.memoryStorage();
var upload = multer();
var app = express();

function response(file){
    return {
        'original name': file.originalname,
        'mimetype': file.mimetype,
        'size': file.size
    }
}

app.get('/', function (req, res, err){
    if (err) console.error(err);
    res.sendFile(__dirname + '/index.html');
});
app.post('/upload', upload.single('file'), function(req, res){
   //console.dir(req.file);
   res.send(response(req.file)).end();
});


app.listen(8080, () =>{
    console.log('application listening on port 80');
});