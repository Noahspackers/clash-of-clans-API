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
const accestoken_1 = require("./accestoken");
const client = require("clash-of-clans-node");
const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
function myFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.login({ email: 'noah.walz158@gmail.com', password: 'bopba5-fuwryj-nyczEx' });
        yield client.login(`${accestoken_1.accessToken}`);
        const clan = yield client.getClan(`${encodeURIComponent(endzone)}`);
        console.log(`${clan.name} (${clan.tag})`);
    });
}
myFunction();
