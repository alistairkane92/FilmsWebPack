//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require("express");
var filmRouter = new express.Router();

filmRouter.get('/', function(req, res){
    res.json({films});
});

filmRouter.get('/all', function(req, res){
    films.forEach(function(film){titles.push(film.title)})
    res.json({titles});
});

filmRouter.get("/:id", function(req, res){
    res.json({data: films[req.params.id]});
});

filmRouter.post('/', function(req, res){
    films.push(req.body.film);
    res.json({films});
});

filmRouter.put("/:id", function(req, res){
    films[req.params.id] = req.body.film;
    res.json({films});
});

filmRouter.delete("/:id", function(req, res){
    films.splice(req.params.id, 1);
    res.json({films});
})

filmRouter.post('/:id/add-review', function(req, res){
    films[req.params.id].addReview(req.body.review);
    res.json({films});
})

module.exports = filmRouter;
