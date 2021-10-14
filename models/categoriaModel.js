const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    usuario: {
        type: String,
        required: true,
    }
});
const Category = mongoose.model("Categoria", CategorySchema);
module.exports = Category;