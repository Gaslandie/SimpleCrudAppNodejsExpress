const mongoose = require('mongoose')

//le schema de notre produit
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Veuillez entre le nom du produit']
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
},
    {
        timestamps: true //pour ajouter deux champs supp, createAt et updatedAt:simplifie la gestion des horodatages de création et de mise à jour des documents.
    })

    const Product = mongoose.model("Product",ProductSchema);
    module.exports = Product;