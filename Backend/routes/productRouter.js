const express = require('express')
const productRouter = express.Router()
const {addProduct,listProduct,removeProduct} = require('../controllers/productController')
const multer = require('multer')

//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage})

productRouter.post('/add',upload.single("image"),addProduct)
productRouter.get('/list',listProduct)
productRouter.delete('/remove',removeProduct)

module.exports = productRouter