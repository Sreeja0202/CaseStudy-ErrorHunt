const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sreejamohan444:Devsree0202@cluster0.mwlsecd.mongodb.net/LibraryApp?retryWrites=true&w=majority");
// mongoose.connect('mongodb+srv://sreejamohan444:Devsree0202@cluster0.mwlsecd.mongodb.net/LibraryApp');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;