const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Create application/x-www-from-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

const port = '8080';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
	res.render('home');
});

app.all('*', (req, res)=>{
	res.render('404');
});

app.listen(port, ()=>{
	console.log('Server is running at', 'http://localhost:8080');
});