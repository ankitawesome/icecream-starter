const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const ejs = require('ejs');
const path = require('path');

const port = 3000 || process.env.PORT

// Assets
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home')
})

app.use(expressLayout)
app.set('views', path.join(__dirname, 'resources/views'))
app.set('view engine', 'ejs')


app.listen(port, ()=>{
    console.log('listening on port 3000')
})