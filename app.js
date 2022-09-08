//------------------Import packages------------------//
const express = require( 'express' );
require('dotenv').config();

const app = express();
//------------------Setting middlewares------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));


//------------------Routes import------------------//
const routes = require( './routes/routes' );


//------------------Routes------------------//
app.use( '/', routes );


module.exports = {
    app
};