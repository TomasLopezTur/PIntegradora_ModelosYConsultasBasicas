const db = require ('../database/models')
module.exports = {
    list: (req, res) => {
        /* retorna la vista genreslist con todos los generos de la BBDD */
        db.Genre.findAll()
        .then((genres)=>{
            return res.render('genresList',{
                genres
            })
        })
    },
    detail: (req, res) => {
        const genreId = req.params.id;
        db.Genre.findByPk(genreId)
        .then((genre)=>{
            return res.render('genresDetail',{
                genre
            })
        })
    }
}