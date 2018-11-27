var express = require('express')
var app = express()
var cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')
var urlPost = bodyParser.urlencoded({ extended: true }) 
app.use(bodyParser.json());

var questions = require('./routes/questions');
var nivel = require('./routes/nivel');
var alternativas = require('./routes/alternativas');

app.use('/questions', questions);
app.use('/nivel', nivel);
app.use('/alternativas', alternativas);

app.listen(3000)