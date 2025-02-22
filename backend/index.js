const express = require("express");
const dotenv = require("dotenv")
const cors = require('cors');
const { SchemeDetails} = require('./database/schemeDetails')
const  { Schemes } = require('./database/schemes');
const mongoose = require('mongoose');
const { Translate } = require("@google-cloud/translate").v2;

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

// Initialize Google Cloud Translate API
const translate = new Translate({
    keyFilename: "sonorous-antler-450307-j0-9d5b48b200dc.json",
});


mongoose.connect('mongodb+srv://amitlpatil282006:azaDXBYoOz7ryKwI@cluster1.h8gyl.mongodb.net/')


app.get('/schemes', async (req, res) => {

    try {
        const allSchemes = await Schemes.find();
        res.json(allSchemes);  // Send JSON response
    } catch (error) {
        console.error("Error fetching schemes:", error);
        res.status(500).send("Internal Server Error");
    }
})

app.get('/schemes/:id', async (req, res) => {
    try {
        const id = String(req.params.id);
        const allSchemes = await  SchemeDetails.find({id});
        console.log(allSchemes);
        res.json(allSchemes);  // Send JSON response
    } catch (error) {
        console.error("Error fetching schemes:", error);
        res.status(500).send("Internal Server Error");
    }
})

app.post("/translate", async (req, res) => {
    try {
        const { text, targetLanguage } = req.body;

        if (!text || !targetLanguage) {
            return res.status(400).json({ error: "Text and targetLanguage are required." });
        }

        if (targetLanguage === "en") {
            return res.json({ translatedText: text });
        }

        // Perform translation
        const [translatedText] = await translate.translate(text, targetLanguage);
        res.json({ translatedText });

    } catch (error) {
        console.error("Translation Error:", error);
        res.status(500).json({ error: "Translation failed", details: error.message });
    }
});

app.post('/schemes', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})