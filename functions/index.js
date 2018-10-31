const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');

const firebaseApp = firebase.initializeApp(functions.config().firebase);

const app = express();

app.set('views','./views');
app.engine('html',engines.mustache);
app.set('view engine','html');

const homeRouter = require('./routers/homeRouter');

app.use('/', homeRouter);



//app.listen(3000);
exports.app = functions.https.onRequest(app);
