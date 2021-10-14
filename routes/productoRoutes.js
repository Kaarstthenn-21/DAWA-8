const express = require("express");
const productModel = require("../models/productoModel");
const app = express();
// List products
app.get("/products", async(request, response) => {
    const products = await productModel.find({});
    try {
        response.send(products);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Create product
app.post("/product", async(request, response) => {
    const product = new productModel(request.body);
    try {
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Get product details
app.get("/product/:id", async(request, response) => {
    const { id } = request.params;
    const product = await productModel.findById(id);
    try {
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Update product
app.put("/product/:id", async(request, response) => {
    const product = new productModel(request.body);
    try {
        await productModel.findByIdAndUpdate(request.params.id, request.body);
        await productModel.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});
// Delete product
app.delete("/product/:id", async(request, response) => {
    try {
        const product = await productModel.findByIdAndDelete(request.params.id);
        if (!product) response.status(404).send("No item found");
        response.status(200).send();
    } catch (error) {
        response.status(500).send(error);
    }
});
module.exports = app;