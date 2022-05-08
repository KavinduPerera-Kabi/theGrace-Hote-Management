const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postCategory:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    phn:{
        type:String,
        required:true
    },
    jobS:{
        type:String,
        required:true
    },
    ws:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

    },{
        timestamps:true
    });

module.exports = mongoose.model('staffposts',postSchema);
