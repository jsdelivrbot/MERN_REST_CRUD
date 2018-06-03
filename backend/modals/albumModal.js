/*
This file contains the mongoose schema for album resource
*/

const mongoose = require('mongoose');

// Define  the schema
const Schema = mongoose.Schema;

// subdocument schem for storing the tracklisting
const SchemaForSongs = mongoose.Schema;

const SongModalSchema = new SchemaForSongs({
    title: String
})

// create the modal
const AlbumModelSchema = new Schema({
    name          : String,
    artist            : String,
    year:              Date,
    Songs : [SongModalSchema],
    readOnly : {type:Boolean, default: false}
});   

module.exports = mongoose.model('AlbumModel', AlbumModelSchema );