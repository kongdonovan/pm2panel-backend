/**
 * schedule comparison tool backend
 * please do not copy -- thanks!
 */

"use strict";

// express setup
const express = require('express');
const app = express();
const cors = require('cors');
const whitelist = ["http://73.109.61.72:8000", "http://kongdonovan.duckdns.org:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
    optionsSuccessStatus: 200,
    credentials: true
  }
app.use(cors(corsOptions));

// sqlite setup
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

// multer setup
const multer = require('multer');
app.use(multer().none());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// cookie parser setup
const cookie = require('cookie-parser')
app.use(cookie())

// pm2 setup
const pm2 = require('pm2')

// require an auth key and a login to use any endpoints
const bcrypt = require('bcrypt')
const user = "kongdonovan"
const pass = "The35trollers"

// POST -- get a list of active processes
app.post("/list", async (req, res) => {
  
})



const PORT = 7000;
app.listen(PORT);