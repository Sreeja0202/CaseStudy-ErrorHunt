const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sreejamohan444:sreejamohan@cluster0.mwlsecd.mongodb.net/LibraryApp", { useNewUrlParser: true, useUnifiedTopology: true });
// const url = "mongodb+srv://sreejamohan444:cvn8292R5w6QVsEw@cluster0.mwlsecd.mongodb.net/LibraryApp";
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;