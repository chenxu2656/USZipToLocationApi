const { dir } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')
var server = app.listen(3001,()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("应用实例，访问地址为 http://localhost:3001")
})
let searchFromJson = (object,id) => {
    return object.filter(o => o.fields.zip === id)[0].fields.geopoint; 
  }

app.get('/zipCode/Data',(req,res)=>{
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        console.log('test');
        data = JSON.parse( data );
        let result = searchFromJson(data,req.query.id)
        res.end( JSON.stringify(result));
    });
})