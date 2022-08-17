const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sreejamohan444:cvn8292R5w6QVsEw@cluster0.mwlsecd.mongodb.net/?retryWrites=true&w=majority");
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;