const mongoose = require('mongoose');

// const url = "mongodb+srv://sreejamohan444:cvn8292R5w6QVsEw@cluster0.mwlsecd.mongodb.net/LibraryApp";
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect('mongodb+srv://sreejamohan444:Devsree0202@cluster0.mwlsecd.mongodb.net/LibraryApp');

mongoose.connect("mongodb+srv://sreejamohan444:q7tlWx5Aa8mAi2LS@cluster0.mwlsecd.mongodb.net/LibraryApp?retryWrites=true&w=majority");

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;