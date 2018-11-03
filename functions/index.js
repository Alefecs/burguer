const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');

const firebaseApp = firebase.initializeApp(functions.config().firebase);

const app = express();

app.set('views','./views');
app.engine('html',engines.mustache);
app.set('view engine','html');

app.use(express.static('../public'));

const homeRouter = require('./routers/homeRouter');
const loginAdmRouter = require('./routers/loginAdmRouter');


app.use('/', homeRouter);
app.use('/loginAdm', loginAdmRouter);


//app.listen(3001);
exports.app = functions.https.onRequest(app);
