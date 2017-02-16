/**
 * Created by Administrateur on 15/02/2017.
 */

const express = require('express');

const server = express();

const contacts = [{
    prenom : 'Jean',
    nom: 'Dupont',
    id : 1
},
    {
        prenom : 'Eric',
        nom: 'Martin',
        id : 2
    }];


server.get('/api/contacts', function (req, res) {
    res.json(contacts);
});


server.all('/api/contacts/:id', function (req,res) {
    var id = Number(req.params.id);
    var contact = contacts.find(c => id  === c.id);
    res.json(contact);
});



server.listen(8080, function() {
    console.log('server listening');
})