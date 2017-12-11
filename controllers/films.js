//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

var filmsArr = ["Star Wars", "Star Trek", "A Great Film"];

filmRouter.get('/', function(req, res){
    res.json({filmsArr})
})

filmRouter.post('/', function(req, res){
    filmsArr.push(req.body.film);
    res.json({filmsArr})
})

filmRouter.get(':id', function(req, res){
    res.json({data: films[req.params.id]});
})

filmRouter.put("/:id", function(req, res){
    filmsArr[req.params.id] = req.body.film;
    res.json({films});
});

filmRouter.delete("/:id", function(req, res){
    films.splice(req.params.id, 1);
    res.json({films});
})

module.exports = filmRouter;
