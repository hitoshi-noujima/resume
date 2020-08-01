const path = require('path');
const functions = require('firebase-functions');
const express = require('express');
const basicAuth = require('basic-auth-connect');
require('dotenv').config();

const USERNAME = process.env.USERNAME || 'user';
const PASSWORD = process.env.PASSWORD || 'pass';

const app = express();

app.use(basicAuth(USERNAME, PASSWORD));

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

exports.firebaseAuth = functions.https.onRequest(app);
