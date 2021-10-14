const express = require("express");
const rolModel = require("../models/rolModel");
const app = express();

// List rols
app.get("/rols", async(request, response) => {
    const rols = await rolModel.find({});
    try {
        response.send(rols);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Create rol
app.post("/rol", async(request, response) => {
    const rol = new rolModel(request.body);
    try {
        await rol.save();
        response.send(rol);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Get rol details
app.get("/rol/:id", async(request, response) => {
    const { id } = request.params;
    const rol = await rolModel.findById(id);
    try {
        response.send(rol);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Update rol
app.put("/rol/:id", async(request, response) => {
    const rol = new rolModel(request.body);
    try {
        await rolModel.findByIdAndUpdate(request.params.id, request.body);
        await rolModel.save();
        response.send(rol);
    } catch (error) {
        response.status(500).send(error);
    }
});


// Delete rol
app.delete("/rol/:id", async(request, response) => {
    try {
        const rol = await rolModel.findByIdAndDelete(request.params.id);
        if (!rol) response.status(404).send("No item found");
        response.status(200).send();
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;