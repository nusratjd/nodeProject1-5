const express = require('express');

const app = express();

const PORT = 3000;


// JSON body
app.use(express.json());


// ---------- Custom Middleware 1: Logger ----------
const logger = (req, res, next) => {

    console.log(`${req.method} request to ${req.url}`);

    next();
};

app.use(logger);

