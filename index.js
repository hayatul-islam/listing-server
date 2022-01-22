const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
const multer = require("multer");
const path = require("path");
const listingHandler = require('./routerHandler/listingHander')
const categoryHandler = require('./routerHandler/categoryHandler')

const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri,
    { useNewUrlParser: true })
    .then(() => {
        console.log('Database Connected')

    })
    .catch(e => {
        return console.log(e)
    })

// image upload
app.use("/images", express.static(path.join(__dirname, "public/images")));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
});

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/listing", listingHandler);
app.use("/category", categoryHandler);

function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: err });
}

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})


