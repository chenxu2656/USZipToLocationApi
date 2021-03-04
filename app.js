const { dir } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')
var server = app.listen(3001,()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("应用实例，访问地址为 http://localhost:3001")
})
let fn = function(onject,id) {
    return onject.filter(o => o.fields.zip === id)[0].fields.geopoint; // id一定有对应值的情况
  }

app.get('/:id',(req,res)=>{
    fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        console.log(req.params.id);
        console.log(data.length);
        // data.forEach()
        let result = fn(data,req.params.id)
        console.log(result);

        // dir()
        res.end( JSON.stringify(result));
    });
})