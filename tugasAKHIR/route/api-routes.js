let router = require('express').Router();

// set default API response
router.get('/', function(req, res){
    res.json({
        status:'API its working',
        message:'Welcome to TUGASAKHIR crafted!'
    });
});

// import mahasiswa controller
var mahasiswaController = require('../app/controllers/mahasiswaController');

// mahasiswa APIRoutes
router.route('/mahasiswas')
.get(mahasiswaController.index)
.post(mahasiswaController.new);
router.route('/mahasiswas/:nim')
.get(mahasiswaController.view)
.patch(mahasiswaController.update)
.put(mahasiswaController.update)
.delete(mahasiswaController.delete);

// exports API
module.exports = router;