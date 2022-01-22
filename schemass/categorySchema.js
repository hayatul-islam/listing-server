const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {
        name: { type: String },
        image: { type: String },
    }
);

module.exports = categorySchema;