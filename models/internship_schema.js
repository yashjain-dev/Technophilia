const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{ 
        type: String,
        required: true,
        unique: true
    },
    contact:{
        type: String,
        required: true
    },
    domain:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    reference:{
        type: String
    }
},{
    timestamps : true
});

const internship_register = mongoose.model('internship_register',internshipSchema);
module.exports = internship_register;