const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const listingschema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
       
        filename:String,
        url:String,
        
    },
    price:Number,
    location:String,
    country:String,
})

const listing=mongoose.model('listing',listingschema)
module.exports=listing