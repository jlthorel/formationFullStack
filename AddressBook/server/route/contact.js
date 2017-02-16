/**
 * Created by Administrateur on 16/02/2017.
 */


const Router = require('express').Router;
const bodyparser = require('body-parser');
const controller = require('../controller/contact');


const routes  = new Router() ;

routes.get('/', controller.list);
routes.post('/', bodyparser.json(), controller.add);
routes.get('/:id', controller.show);
routes.delete('/:id', controller.delete);

module.exports = routes;