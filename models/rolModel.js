const mongoose = require("mongoose");
const RolSchema = new mongoose.Schema({
    rol: {
        type: String,
        required: true,
    },
});
const Rol = mongoose.model("Rol", RolSchema);
module.exports = Rol;