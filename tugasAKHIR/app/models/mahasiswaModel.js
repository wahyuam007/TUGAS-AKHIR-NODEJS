// filename : mahasiswaModel.js

var mongoose = require('mongoose');

// setup schema
var mahasiswaSchema = mongoose.Schema({
    created_date:{
        type:Date,
        default:Date.now
    },
    nim:{
        type:String,
        required:true
    },
    nama:{
        type:String,
        required:true
    },
    jurusan:String,
    semester:String
});

// export mahasiswa model
var mahasiswa = module.exports = mongoose.model('mahasiswa', mahasiswaSchema);
module.exports.get = function(callback, limit){
    mahasiswa.find(callback).limit(limit);
}