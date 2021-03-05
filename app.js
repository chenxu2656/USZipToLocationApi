const { dir } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')
var server = app.listen(3001, () => {
    console.log(`listen on http://localhost:3001`)
})
let searchFromJson = (object, id) => {
    return object.filter(option => { option.fields.zip === id})[0].fields.geopoint
}

app.get('/zipCode/Data', (req, res) => {
    fs.readFile('http://file.xccblog.cn/us-zip-code-latitude-and-longitude.json', 'utf8', function (err, data) {
        if (err) console.error(err);
        data = JSON.parse(data);
        let result = searchFromJson(data, req.query.id)
        res.end(JSON.stringify(result));
    });
})