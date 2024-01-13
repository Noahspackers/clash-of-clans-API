"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Header.scss");
const react_1 = require("react");
const Header = () => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const [scrollHeight, setScrollHeight] = (0, react_1.useState)(0);
    const handleLinkClick = () => {
        const newScrollHeight = scrollHeight + 120;
        setScrollHeight(newScrollHeight);
        setIsOpen(!isOpen);
        console.log(newScrollHeight);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "header" }));
};
exports.default = Header;
