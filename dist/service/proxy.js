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
exports.clan_tag = exports.accessToken = void 0;
const axios_1 = __importDefault(require("axios"));
exports.accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVlNTUxYzMzLWFiMDAtNGZiNC04MGQ2LWMxMDA3YzE1MTI1OCIsImlhdCI6MTcwNDc1NTEzOSwic3ViIjoiZGV2ZWxvcGVyLzllODZjN2U4LTI2ZjctNjRmOC0zOTE4LWQ3MGQ2MzM1Y2FjMyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjgxLjE2OS4xNDUuMTYzIiwiNjIuMTU3LjY1LjIxMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.PXrA97dIdLu4_vheurBmDnJoiTjxriFjEg3x0iOwCN9DCCZRj1oNZNuanj1rFIIVKfumsSg9_0bquvFWf9xiMw";
exports.clan_tag = "#2YPY9PLUU";
function handler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(exports.clan_tag)}`, {
                headers: {
                    Authorization: `Bearer ${exports.accessToken}`,
                },
            });
            res.status(response.status).json(response.data);
        }
        catch (error) {
            console.error('Proxy API Call Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
}
exports.default = handler;
