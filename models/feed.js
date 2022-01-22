const mongoose = require('mongoose');
const mySchema = mongoose.Schema;

const feedSchema = new mySchema({

        name:{
            type:String,
            required:true,
            maxlength:15,
            
            
        },
        message:{
            type:String,
            required:true,
            maxlength:40,
        }

})

module.exports = mongoose.model('feedSchema', feedSchema);
