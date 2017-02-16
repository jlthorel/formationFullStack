/**
 * Created by Administrateur on 15/02/2017.
 */

const express = require('express');
const  mongoose = require('mongoose');
const contact = require('./route/contact');


mongoose.connect('mongodb://localhost/addressbook');

const app = express();

app.use('/api/contacts/' , contact);


app.listen(8080, function() {
    console.log('server listening');
})