module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false 
        },
        rating: {
            type: dataTypes.DECIMAL.UNSIGNED,
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false 
        },
        release_date: {
            type: dataTypes.DATE,
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        }
    }
    
    let config = {
        tableName: "movies",
        timestamps: false
    }

    const Movie = sequelize.define(alias, cols, config)

    return Movie;
}