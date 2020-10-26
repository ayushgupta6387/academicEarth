const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: true,
        max:32
    },
    slug: {
        type:String,
        lowercase:true,
        unique:true,
        index:true
    },
    image:{
        url:String,
        key:String
    },
    content:{
        type:{},
        min:28,
        max:2000000
    },
    posetedBy:{
        type:ObjectId,
        ref:'User'
    }
},{timestamps:true}) 
module.exports =mongoose.model('Category',categorySchema);