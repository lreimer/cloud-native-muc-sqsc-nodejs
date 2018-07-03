"use strict";

var express = require("express");
var app = express();

const PORT = 8080 | process.env.PORT;
const HOST = "0.0.0.0";

var payload = { "message" : "Hello Cloud Native Night Muc with SquareScale!" };

app.get("/", function (req, res) {
    res.contentType("application/json");
    res.json(payload);
});

app.listen(PORT, function () {
    console.log("Node.js demo service listening on http://%s:%d !", HOST, PORT);
});
