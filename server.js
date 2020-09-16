
const express = require('express');
const fileUploader = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, "/uploads/");

const app = express();

app.use(fileUploader({
    createParentPath: true
}));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

app.post("/picture", async (req, res) => {
    try {
        if(!req.files) {
          res.send({
            status: false,
            message: "No files"
          })
        } else {
          const {picture} = req.files;
    
          picture.mv("./uploads/" + picture.name)
    
          res.send({
            status: true,
            message: "File is uploaded"
          })

        }
          
      } catch (err) {
        res.status(500).send(err)
      }
    
})

app.get("/uploads", (req,res) => {

    fs.readdir(imagesDir, (err, files) => {
        if (err) {
          return console.log("Unable to scan: " + err);
        }

        let images = [];
        res.setHeader('Content-Type', 'text/html')
        files.forEach(file => {
            images.push(imagesDir + file)
        })
       res.json({images: images})

      // res.sendFile(imagesDir)


    })
    
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server's running"))