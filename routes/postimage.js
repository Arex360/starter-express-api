const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/post', async (req, res) => {
    const { clientID, sourceImage, targetImage } = req.body;
    const body = { clientID, sourceImage, targetImage };

    try {
        // Make a request to get the image data
        const response = await axios.post('http://129.151.159.104:443/postPhoto', body);

        // Download the image using the URL
        const imageResponse = await axios.get(response.data, { responseType: 'arraybuffer' });

        // Convert the image to base64
        const base64Image = Buffer.from(imageResponse.data, 'binary').toString('base64');

        // Send the base64 string as a response
        res.send({ base64Image });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

module.exports = router;
