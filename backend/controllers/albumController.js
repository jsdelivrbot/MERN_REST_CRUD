
const AlbumModal = require('../modals/albumModal');

const _exports = new Object();




_exports.albumList = async (req,res) => {

    try{
        const list = await AlbumModal.find({})
        res.send(list);
    }
    catch(err){
        res.send(`{message:"can't list album listing right now",code:"02"}`);
    }


};


_exports.viewAlbum = async (req,res) => {
    let albumid = req.params.albumid;
    try {
   let  doc = await AlbumModal.findById(albumid)
   res.send(doc);
    }
    
    catch(err) {
        
        res.send({message:'album not found in database', code:"01"})
    };
   

    };

 _exports.newAlbum = async (req,res) => {


    try {
        const data = req.body.data;

        console.log("response" + JSON.stringify(req.body));

        let doc =  Object.assign({
            "readOnly":"","name":"","artist":"","Songs":[]
        },JSON.parse(req.body.data));
        doc.readOnly = false;

        const album = AlbumModal(doc);
        const result = await album.save();
        res.send(data);
    }

    catch(err){
        res.send(`{message:"error while adding new album, ${err}",code:"04"} `);
    }
 
 };
    
_exports.deleteAlbum = async (req,res) => {
    let id = req.params.albumid;
    try {
        const album = await AlbumModal.findById(id);
        if(album.readOnly){
            throw new Error("Cant delete read only entries")
        }

        else {
            await album.remove();
            res.send("{status:'deleted'}");
        }
       
    }
    catch(err) {
        res.send(`{message:"error while deleting new album ,${err}",code:"05" } `);
    }

   
};

_exports.updateAlbum = async (req,res) => {
    let id = req.params.albumid;
    let doc =  Object.assign({
        "readOnly":"","name":"","artist":"","Songs":[]
    },JSON.parse(req.body.data));
    doc.readOnly = false;

    try{

        const album = await AlbumModal.findById(id);
        if(album.readOnly){
            throw new Error("Cant delete read only entries")
        }


    await AlbumModal.update({_id: id}, doc);
    res.send(doc)
    }
    catch(err){
        res.send(`{message:"error while updating new album ,${err}",code:"06" } `);
    }

}

module.exports = _exports;