var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, function(error, list) {
    if (error) return console.log(error);
    list.forEach(function(item) {
        if (path.extname(item) == extension) {
            console.log(item);
        }
    })
})