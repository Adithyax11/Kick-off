const productModel = require('../models/ProductModel')
const fsPromises = require('fs').promises
const path = require ('path')

const addProduct = async (req, res) => { // Added req, res parameters
    let image_filename = `${req.file.filename}` // Changed from requestAnimationFrame to req

    try {
        await productModel.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        })
        res.status(201).json({"message": "Product added"})
   
    } catch (error) {
        console.log(error)
        res.status(500).json({"message": error.message})
    }
}

const listProduct = async(req,res)=>{
    try {
        const products = await productModel.find({})
        res.json({data:products})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message": error.message})
    }
}

const removeProduct = async(req,res)=>{
    try {
        const {id} = req.query
        console.log(id);
        const product = await productModel.findById(id)
        if(!product)
            return res.status(404).json({"message":"Product not found"})

        await fsPromises.unlink(path.join(__dirname,'..','uploads',`${product.image}`))
        await productModel.deleteOne({_id:id})
            res.status(200).json({"message":"Product deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message": error.message})
    }
}

module.exports = {addProduct,listProduct,removeProduct}