import express from "express";
import cors from "cors";
import axios from "axios";
import serverless from "serverless-http";
import { accessToken } from "../src/service/accestoken";

const app = express();
const router = express.Router();

router.use(cors({
    origin: "*"
}));

router.get("/clan/main", async (req, res) => {
    try {
        const url = 'https://cocproxy.royaleapi.dev/v1/clans/%2YPY9PLUU';
        const token = `${accessToken}`;
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            'Cache-Control': 'no-store',
            'Expires': new Date(0).toUTCString(),
            'Pragma': 'no-cache',
        };
        res.set({
            'Cache-Control': 'no-store',
            'Expires': new Date(0).toUTCString(),
            'Pragma': 'no-cache',
        });
        const response = await axios.get(url, { headers });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching data from the Clash of Clans API.",
        });
    }
});


app.use('/.netlify/functions/api', router);
export const handler = serverless(app);