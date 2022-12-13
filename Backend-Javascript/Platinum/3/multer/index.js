const express = require('express')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const fs = require('fs')
const port = 3005;

const app = express()

cloudinary.config({
  cloud_name:'duysasscj',
  api_key:'147916173229296',
  api_secret:'VfLk1TL4qra438tTd_m66Lfr3r4'
})

const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, './uploads')
  },
  filename:function(req, file, callback){
    callback(null, file.originalname)
  }
})

const upload = multer({
  storage:storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      return callback(null, true)
    }
    callback(null, false)
    return callback(new Error('Only .jpg .png .jpeg format allowed'))
  },
  limits:{
    fileSize: 4194304
  }
})


async function uploadFileCloudinary(filepath){
  let result;
  try {
    result = await cloudinary.uploader.upload(filepath, {
      use_filename:true
    })

    // hapus file yang sudah di upload
    fs.unlinkSync(filepath)
    return result.url;
    
  } catch (error) {
      // hapus file yang gagal di upload
      fs.unlinkSync(filepath)

      return null
  }
}

// app.post('/upload', upload.single('image'), async(req, res) =>{
//   res.json({
//     file: req.file
//   })
// })

// app.post('/upload/multi', upload.array('photos', 3), (req, res) =>{
//   res.json({
//     file: req.files
//   })
// })

app.post('/upload', upload.single('image'), async(req, res) =>{
  
  const url = await uploadFileCloudinary(req.file.path)
  if (url) {
    return res.json({
      message:'Upload Cloudinary Berhasil',
      url: url
    })
  } else{
    return res.json({
      message:'Upload gagal',
    })
  }
  // res.json({
  //   file: req.file
  // })
})

app.post('/upload/multi', upload.array('photos', 3), async(req, res) =>{
  let urls = []
  for(const file of req.files){
    const uploadFile = await uploadFileCloudinary(file.path)
    if (uploadFile) {
      urls.push(uploadFile)
    }
  }
  res.json({
    response:urls
  })
})




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})