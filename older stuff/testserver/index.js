const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
// app.[method]( [path], [handler])

app.get('/api/bird', function(req,res){
    respond.status(200).send('no bird')
})

app.post('/api/createBird', function(req,res){
    console.log(req.body.bird)
    res.status(200).send('bird is created')
})

app.put('/api/bird', function(req,res){
    
})

const port = 3005;
app.listen(3005, function(){
    console.log('Listening on port: ', port);
})