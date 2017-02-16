/**
 * Created by Administrateur on 16/02/2017.
 */


const Contact = require('../model/contact');

module.exports.list = function (req, res,next) {
    Contact.find({}, function (err, contacts) {
        res.json(contacts);
    });
    
};

module.exports.add = function (req, res,next) {

 //  console.log(req.body);
 //  res.json(req.body);
   let contact = new Contact(req.body);
   contact.save(function(err, contact) {
       res.statusCode = 201;
       res.json(contact);
   });

};

module.exports.show = function (req, res,next) {

    let id = req.params.id;
    Contact.findById(id, function (err, user) {
        res.json(user);
    });

};



module.exports.delete = function (req, res,next) {

    let id = req.params.id;
    Contact.findByIdAndRemove(id, function (err, user ) {
        res.json(user);
       // res.end('User deleted');
    });

};
