// create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// http://localhost:3000/comments/4
// http://localhost:3000/comments/5

var express = require('express');
var app = express();
var fs = require('fs');

// create web server
app.listen(3000, function() {
    console.log('Server is running...');
});

// http://localhost:3000/comments
app.get('/comments', function(req, res) {
    fs.readFile('data/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {'Content-Type':'text/json;charset=utf-8'});
            res.end(data);
        }
    });
});

// http://localhost:3000/comments/1
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    fs.readFile('data/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var comments = JSON.parse(data);
            if (id > 0 && id <= comments.length) {
                res.writeHead(200, {'Content-Type':'text/json;charset=utf-8'});
                res.end(JSON.stringify(comments[id-1]));
            } else {
                res.writeHead(404, {'Content-Type':'text/json;charset=utf-8'});
                res.end('404 Not Found');
            }
        }
    });
});