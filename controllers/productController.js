const Product = require('../models/products');

getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ mess: error.message });
    }
}

getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ mess: error.message });
    }
}

createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ mess: error.message });
    }
}
updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ mess: error.message });
    }
}
deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({mess:"product not found"});
        }
        res.status(200).json({mess:"product has been deleted"});
    } catch (error) {
        res.status(500).json({mess:error.message});
    }
}

module.exports = {getProducts,getProduct,createProduct,updateProduct,deleteProduct}