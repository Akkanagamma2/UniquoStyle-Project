'use strict';

var server = require('server');

var loginCustomer = require('*/cartridge/scripts/middleware/userLoggedIn')

server.get('Show',loginCustomer.validateLoggedIn,function(req,res,next){

    var read = require('../scripts/ass19p');
    var orderList = read.getOrders(req);

    res.render('assignment/ass19',{
        orders:orderList
    })
    next();
});
module.exports = server.exports();