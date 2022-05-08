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

    bookingdate:{

        type:String,

        required:true

    },

    time:{

        type:String,

        required:true

    },

    nodatesrent:{

        type:String,

        required:true

    },

    location:{

        type:String,

        required:true

    }

});



module.exports = mongoose.model('rentOrders',postSchema);