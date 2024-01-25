import express from "express";
import cors from "cors";
import axios from "axios";
import serverless from "serverless-http";
import { accessToken } from "./accestoken";
import { Client } from 'clashofclans.js';

const app = express();
const router = express.Router();


const clan = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
const client = new Client({ keys: [`${accessToken}`] });

(async function () {
  const clan = await client.getClan('#2YQQ80QGL');
  console.log(`${clan.name} (${clan.tag})`);
})();
