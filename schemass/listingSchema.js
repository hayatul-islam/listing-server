const mongoose = require('mongoose');

const listingSchemas = mongoose.Schema(
    {
        title: { type: String },
        category: { type: String },
        description: { type: String },
        location: { type: String },
        curriculum: { type: String },
        investment: { type: String },
        image: { type: String },
        bannerImg1: { type: String },
        bannerImg2: { type: String },
        bannerImg3: { type: String },
        minCash: { type: Number },
        totalCash: { type: Number },
    }
);

module.exports = listingSchemas;