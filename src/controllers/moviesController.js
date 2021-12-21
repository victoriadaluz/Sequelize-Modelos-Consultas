const db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    list: (req, res) => {
        db.Movies.findAll()
            .then(movies => {
                res.render('moviesList', {
                    movies
                })
            })
    },
    neww: (req, res) => {
        db.Movies.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        })
        .then(movies => {
            res.render('newestMovies', {
                movies
            })
        })
    },
    recommended: (req, res) => {
        db.Movies.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 5
        })
        .then(movies => {
            res.render('recommendedMovies', {
                movies
            })
        })
    },
    detail: (req, res) => {
        db.Movies.findByPk(+req.params.id)
            .then(movies => {
                res.render('moviesDetail', {
                    movie: movies
            })
        })
    }
}