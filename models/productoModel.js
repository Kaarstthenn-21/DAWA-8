const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    precio: {
        type: Schema.Types.Decimal128,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    disponible: {
        type: Boolean,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    }
});
const Producto = mongoose.model("Producto", ProductSchema);
module.exports = Producto;