const mongoose = require('mongoose');
const url = "mongodb+srv://sreejamohan444:Devsree0202@cluster0.mwlsecd.mongodb.net/LibraryApp";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;