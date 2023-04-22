const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String},
    img: {type: String},
    year: {type: Number},
    genre: {type: [String]},
    CompanyURL: {type: String}
});

module.exports = mongoose.model("movie", movieSchema);