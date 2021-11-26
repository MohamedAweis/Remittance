const express = require('express');
const router = express.Router();

/**
 * importing routes modules
 */
const userRoute = require('./user.route')
const operationRoute = require('./operation.route');
const remittanceRoute = require('./remittance.route');
const authRoute = require('./auth.route');
const customerRoute = require('./customer.route');

const routePaths = [{
        path: '/users',
        route: userRoute
    },
    {
        path: '/operations',
        route: operationRoute
    },
    {
        path: '/remittances',
        route: remittanceRoute
    },
    {
        path: '/authen',
        route: authRoute
    },
    {
        path: '/customers',
        route: customerRoute
    }
];

routePaths.forEach(myroutes => {
    router.use(myroutes.path, myroutes.route)
});

//export the router
module.exports = router