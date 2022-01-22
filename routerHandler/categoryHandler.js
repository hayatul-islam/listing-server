const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const categorySchema = require('../schemass/categorySchema');
const Category = new mongoose.model('category', categorySchema);


router.get('/', async (req, res) => {
    try {
        const data = await Category.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);

    try {
        const saveCategory = await newCategory.save();
        res.status(200).json(saveCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;