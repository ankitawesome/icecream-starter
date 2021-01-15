// Important Imports
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path');

// App initialised
const app = express();

// Serving on localhost as well as deployment
const port = 3000 || process.env.PORT

// Assets
app.use(express.static('public'))
app.use(expressLayout)
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'ejs')

// first route to home page
app.get('/', (req, res) =>{
    res.render('home')
})
app.get('/cart', (req, res) =>{
    res.render('customers/cart')
})

app.get('/login', (req, res) =>{
    res.render('auth/login')
})
app.get('/register', (req, res) =>{
    res.render('auth/register')
})



app.listen(port, ()=>{
    console.log('listening on port 3000')
})