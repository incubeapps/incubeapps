/**
 * Created by Phani on 7/5/2016.
 */
var express = require('express'),
    app = express(),
    fs = require('fs'),
    nconf = require('nconf');


nconf.argv()
    .env()
    .file({file: 'proxy/config/integration.json'});

console.log('foo: ' + nconf.get('name'));
console.log('foo: ' + nconf.get('NODE_ENV'));


app.use(express.static('portal'));

app.listen(3000, function () {
    console.log('Server started at 3000!!');
})