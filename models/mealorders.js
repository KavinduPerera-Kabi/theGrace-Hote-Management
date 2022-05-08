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
    room:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('mealOrders',postSchema);