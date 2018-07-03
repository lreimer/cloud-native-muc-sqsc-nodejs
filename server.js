"use strict";

var express = require("express");
var app = express();

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const MESSAGE = process.env.MESSAGE || "Hello Cloud Native Night Muc with SquareScale!";

var payload = { "message" : MESSAGE };

app.get("/", function (req, res) {
    res.contentType("application/json");
    res.json(payload);
});

app.listen(PORT, function () {
    console.log("Node.js demo service listening on http://%s:%d !", HOST, PORT);
});
