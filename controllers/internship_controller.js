const internshipRegister = require('../models/internship_schema');

module.exports.internship_registration_page = function(req, res) {
    return res.render('internship');
};

module.exports.internship_register = function(req, res) {
    internshipRegister.create(req.body ,function(err,internshipRegistration){
        if(err){
            console.log("Error in registration",err);
            return;
        }
        console.log(req.body.name);
        res.redirect('back');
    })
};