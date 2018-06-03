
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const SchemaForSongs = mongoose.Schema;

const SongModalSchema = new SchemaForSongs({
    title: String
})

const AlbumModelSchema = new Schema({
    name          : String,
    artist            : String,
    year:              Date,
    Songs : [SongModalSchema],
    readOnly : {type:Boolean, default: false}
});   

module.exports = mongoose.model('AlbumModel', AlbumModelSchema );