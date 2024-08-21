const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;
const cors =require('cors');

const NEWS_API_KEY = '0105ab8be5434126ad4e86c73e8a7a0e';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

app.use(cors());
app.get('/news', async (req, res) => {
    const category = req.query.category;
    const country = 'in';

    try {
        const response = await axios.get(`${BASE_URL}?sources=techcrunch&apiKey=${NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from NewsAPI' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
