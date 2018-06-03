/*
controller for the album API. This file contains all the functions that are responsible for all the CRUD oprations.


*/
// import schema
const AlbumModal = require('../modals/albumModal');

const _exports = new Object();



// function to retrieve the list of all the albums in the database
_exports.albumList = async (req,res) => {

    try{
        // find all
        const list = await AlbumModal.find({})
        // send the list to the client
        res.send(list);
    }
    catch(err){
        res.send(`{message:"can't list album listing right now",code:"02"}`);
    }


};

// function to retrieve album details on a perticular resource
_exports.viewAlbum = async (req,res) => {
    // get the id of the perticular resurce from the URL (the resourceid is a GET parameter)
    let albumid = req.params.albumid;
    try {
   // find a document associated with that id     
   let  doc = await AlbumModal.findById(albumid)
   res.send(doc);
    }
    
    catch(err) {
        
        res.send({message:'album not found in database', code:"01"})
    };
   

    };

    // function to add new album resource to the database
 _exports.newAlbum = async (req,res) => {


    try {
        // get POST data
        const data = req.body.data;

        // make default album object that will contain default values
        let doc =  Object.assign({
            "readOnly":"","name":"","artist":"","Songs":[]
        },JSON.parse(req.body.data));
        //make all new abum entries editable/deletabe
        doc.readOnly = false;

        const album = AlbumModal(doc);
        const result = await album.save();
        res.send(data);
    }

    catch(err){
        res.send(`{message:"error while adding new album, ${err}",code:"04"} `);
    }
 
 };
    
 // function to delete a resouce
_exports.deleteAlbum = async (req,res) => {
    // get the id of the perticular resurce from the URL (the resourceid is a GET parameter)
    let id = req.params.albumid;
    try {
        //make sure the resource isnt read only
        const album = await AlbumModal.findById(id);
        if(album.readOnly){
            throw new Error("Cant delete read only entries")
        }

        else {
            // remove the resource
            await album.remove();
            res.send("{status:'deleted'}");
        }
       
    }
    catch(err) {
        res.send(`{message:"error while deleting new album ,${err}",code:"05" } `);
    }

   
};

// function to update an existin resource
_exports.updateAlbum = async (req,res) => {
    // get the id of the perticular resurce from the URL (the resourceid is a GET parameter)
    let id = req.params.albumid;
    let doc =  Object.assign({
        "readOnly":"","name":"","artist":"","Songs":[]
    },JSON.parse(req.body.data));
    // make sure the resource is  not read only
    doc.readOnly = false;

    try{

        const album = await AlbumModal.findById(id);
        if(album.readOnly){
            throw new Error("Cant delete read only entries")
        }

   // update the resource
    await AlbumModal.update({_id: id}, doc);
    res.send(doc)
    }
    catch(err){
        res.send(`{message:"error while updating new album ,${err}",code:"06" } `);
    }

}

module.exports = _exports;