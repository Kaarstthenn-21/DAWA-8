const express = require("express");
const categoryModel = require("../models/categoriaModel");
const app = express();
// List categories
app.get("/categories", async(request, response) => {
    const categories = await categoryModel.find({});
    try {
        response.send(categories);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Create category
app.post("/category", async(request, response) => {
    const category = new categoryModel(request.body);
    try {
        await category.save();
        response.send(category);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Get category details
app.get("/categpry/:id", async(request, response) => {
    const { id } = request.params;
    const category = await categoryModel.findById(id);
    try {
        response.send(category);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Update category
app.put("/category/:id", async(request, response) => {
    const category = new categoryModel(request.body);
    try {
        await categoryModel.findByIdAndUpdate(request.params.id, request.body);
        await categoryModel.save();
        response.send(category);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Delete category
app.delete("/category/:id", async(request, response) => {
    try {
        const category = await categoryModel.findByIdAndDelete(request.params.id);
        if (!category) response.status(404).send("No item found");
        response.status(200).send();
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = app;