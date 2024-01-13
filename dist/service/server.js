"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const axios_1 = __importDefault(require("axios"));
const accestoken_1 = require("./accestoken");
const API_KEY = `${accestoken_1.accessToken}`; // Replace with your Clash of Clans API access token
const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
const handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let url = '';
        switch (event.path) {
            case '/clans/endzone':
                url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(endzone)}`;
                break;
            case '/clans/secondzone':
                url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(secondzone)}`;
                break;
            case '/clans/firstzone':
                url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(firstzone)}`;
                break;
            default:
                return {
                    statusCode: 404,
                    body: JSON.stringify({ error: 'Not Found' }),
                };
        }
        const response = yield axios_1.default.get(url, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    }
    catch (error) {
        console.error('Error fetching data from Clash of Clans API:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
});
exports.handler = handler;
