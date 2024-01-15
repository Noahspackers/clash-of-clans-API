"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const accestoken_1 = require("./accestoken");
const express_1 = require("express");
const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.static('build'));
app.get('/api/clash-of-clans', async (req, res) => {
    try {
        const response = await axios_1.default.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(endzone)}`, {
            headers: {
                Authorization: `Bearer ${accestoken_1.accessToken}`,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
