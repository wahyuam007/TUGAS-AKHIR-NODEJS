// filename : mahasiswaController

// import mahasiswa model
var Mahasiswa = require('../models/mahasiswaModel');

//handle index actions
exports.index = function(req, res){
    Mahasiswa.get(function(err, mahasiswas){
        if(err){
            res.json({
                status:'error',
                message:'error',
            });
        }
        res.json({
            status:'success',
            message:'Data Mahasiswa Berhasil Didapatkan',
            data:mahasiswas
        });
    });
};

// handle create mahasiswa actions
exports.new = function(req, res){
    var mahasiswa = new Mahasiswa();
    mahasiswa.nim = req.body.nim;
    mahasiswa.nama = req.body.nama;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.semester = req.body.semester;
// save siswa and check error
    mahasiswa.save(function(err){
        if(err)
            res.send(err);
        res.json({
            message:'Mahasiswa Baru Terdaftar!',
            data:mahasiswa
        });
    });
};

exports.view = function(req, res){
    Mahasiswa.findOne({
        nim:req.params.nim}, function(err, mahasiswas)
    {
        if(err)
            res.send(err);
        res.json({
            message:'Mahasiswa Details Loading..',
            data:mahasiswas
        });
    });
}
exports.update = function(req, res){
    Mahasiswa.findOne({
        nim:req.params.nim
    }, function (err, mahasiswa){
        if(err)
            res.send(err)
        mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
        mahasiswa.nama = req.body.nama;
        mahasiswa.jurusan = req.body.jurusan;
        mahasiswa.semester = req.body.semester;
    // save mahasiswas
        mahasiswa.save(function(err){
            if(err)
                res.send(err);
            res.json({
                status:'success',
                message:'Siswa Info Updated',
                data:mahasiswa
            });
        });
    });
}

// handle delete data
exports.delete = function(req, res){
    Mahasiswa.remove({
        nim:req.params.nim
    }, function(err){
        if(err)
            res.send(err)
        res.json({
            status:'success',
            message:'Mahasiswa Info Delete'
        });
    });
}
