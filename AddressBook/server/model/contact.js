/**
 * Created by Administrateur on 16/02/2017.
 */

const  mongoose = require('mongoose');
let Contact = mongoose.model('contacts', {
    prenom: String,
    nom: String
});




module.exports = Contact;