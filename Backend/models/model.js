const mongoose=require('mongoose');

const BrandName=mongoose.Schema({
    brandname:{
        type:String,
        required:true,
    },
    modelname:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default: Date.now,
    }
})

module.exports=mongoose.model('brandname',BrandName)