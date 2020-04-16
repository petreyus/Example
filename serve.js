const express = require('express');
const app = express();
app.listen( 3000, function(){console.log("Running");})
app.use(express.static('everyone'));
app.use(express.json());


app.get('/', (req, res, next) => {
    res.sendFile('C:/Users/Captain/Desktop/HTML test project/LATLON/lat.html');

});

app.post('/send', (req,res) => {
    
console.log(req.body);
let lat  =(req.body.lat);
let long =(req.body.long);







})
