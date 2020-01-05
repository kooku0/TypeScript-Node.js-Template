"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
function runServer() {
    const app = express();
    app.listen(5000, () => {
        console.log("start server");
        console.log(process.env.NODE_ENV);
    });
}
runServer();
