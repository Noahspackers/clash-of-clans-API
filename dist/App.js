"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.scss");
const Body_1 = __importDefault(require("./components/Body/Body"));
const App = () => {
    (0, react_1.useEffect)(() => {
        document.title = "Endzone Clan Clash of Clans";
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Body_1.default, {}) }));
};
exports.default = App;
