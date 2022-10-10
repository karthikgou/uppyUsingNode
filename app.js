const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const companion = ('@uppy/companion')
const app = express();
const multer = require('multer');

const cors = require('cors');
app.use(bodyParser.json())
const path = require('path');


const storage = multer.diskStorage({
    destination: 'uploads/',
    fileName: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null, fileName);
},
});

const uploadImage = multer({ storage }).single('photo');

app.use(cors());
app.use(express.static('uploadWidget'));
app.use(express.static('uppy core'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/uploadWidget/index.html'));
});
app.post('/image', uploadImage, (req,res) => {
   console.log(req.file);
   if(req.file) return res.json({msg: 'good job uploading image'});

   res.send('Image upload failed');
});







const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port 3000')
})