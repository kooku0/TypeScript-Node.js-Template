"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger_1 = require("./logger");
function runServer() {
    const app = express();
    app.listen(5000, () => {
        console.log('start server');
        logger_1.default.info('Server app listening on port 5000!');
    });
}
runServer();
