"use strict";

var express = require("express");
var app = express();

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const uuidv4 = require("uuid/v4");

const MESSAGE = process.env.MESSAGE || "Hello Node Service " + uuidv4() + " Cloud Native Night with SquareScale!";

var payload = { "message" : MESSAGE };

app.get("/", function (req, res) {
    res.contentType("application/json");
    res.json(payload);
});

app.listen(PORT, function () {
    console.log("Node.js demo service listening on http://%s:%d !", HOST, PORT);
});
