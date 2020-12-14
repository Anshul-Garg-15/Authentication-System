const express = require('express');
const app = express();
const port = 9009;
const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

//require all for session cookie
const session = require('express-session');
const passport = require('passport');

const mongoStore = require('connect-mongo')(session);//becz we require to store session data

app.use(express.urlencoded());
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('./assets'));

app.use(passport.initialize());
app.use(passport.session());

app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is Running on : ${port}`);
});