const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sreejamohan444:Devsree0202@cluster0.mwlsecd.mongodb.net/LibraryApp?retryWrites=true&w=majority");
// mongoose.connect('mongodb+srv://sreejamohan444:Devsree0202@cluster0.mwlsecd.mongodb.net/LibraryApp');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;