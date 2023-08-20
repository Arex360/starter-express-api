const express = require('express');
const client = require('../backend/mongo');
const router = express.Router();

router.post('/insert/:key/:value', async (req, res) => {
    console.log("upserting");
    const { key, value } = req.params;
    
    try {
        await client.connect();
        const db = client.db("rfc");
        
        // Check if the document with the given key exists
        const existingDoc = await db.collection(key).findOne({});

        if (existingDoc) {
            // Update the existing document
            await db.collection(key).updateOne({}, { $set: { value } });
        } else {
            // Insert a new document
            await db.collection(key).insertOne({ value });
        }

        await client.close();
        res.send("sent");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred");
    }
});

module.exports = router;
