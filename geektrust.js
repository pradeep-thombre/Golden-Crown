// importing libraries and files 
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
// const port = 8000;
const port = process.env.PORT||8000;

const expressLayouts = require('express-ejs-layouts');

// used for session cookie
const session = require('express-session');

app.use(express.urlencoded());
app.use(cookieParser());
// setting static files 
app.use(express.static('./assets'));



// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



// use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});

module.exports=app;