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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const server_1 = require("next/server");
const proxy_1 = require("./proxy");
const tag = "#2YPY9PLUU";
const apiUrl = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(tag)}`;
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res_ip = yield fetch("https://api.ipify.org/", { method: "GET" });
            const ip_data = yield res_ip.text();
            console.log(ip_data);
            const res = yield fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${proxy_1.accessToken}`
                },
            });
            console.log(res.status, res.statusText);
            const data = yield res.json();
            console.log(data);
            return server_1.NextResponse.json(data, { status: 200 });
        }
        catch (error) {
            return server_1.NextResponse.json(error);
        }
    });
}
exports.fetchData = fetchData;
fetchData();
