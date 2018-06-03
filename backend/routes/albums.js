
const express = require('express');
const route = express.Router() ;
const albumController = require('../controllers/albumController');

// setting routes with controller functions

route.get('/list',(albumController.albumList));
route.get('/:albumid',albumController.viewAlbum);


route.post('/',albumController.newAlbum);
route.put('/:albumid',albumController.updateAlbum);
route.delete('/:albumid',albumController.deleteAlbum);

module.exports = route;