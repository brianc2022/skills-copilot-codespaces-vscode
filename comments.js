// Create web server using express
// Create a route for /comments that returns a JSON object with all comments
// Create a route for /comments/:id that returns a JSON object with a single comment matching the provided id
// Create a route for /comments that returns a JSON object with all comments matching the query string

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const comments = require('./comments.json');

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given id was not found');
    }
    res.send(comment);
});

app.get('/comments', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given id was not found');
    }
    res.send(comment);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});