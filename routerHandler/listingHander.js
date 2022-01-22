const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const listingSchemas = require('../schemass/listingSchema');
const Listing = new mongoose.model('Listing', listingSchemas);


router.get('/', async (req, res) => {
    try {
        const data = await Listing.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newListing = new Listing(req.body);
    try {
        const saveListing = await newListing.save();
        res.status(200).json(saveListing);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;