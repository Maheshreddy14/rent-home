const mongoose=require('mongoose')
const initdata=require('./data')
const listing=require('../models/listing')

const mongourl="mongodb+srv://maheswarreddyavula111:ZQabAWtPcPnWJLYi@cluster0.nzfkmcg.mongodb.net/renthome"

main().then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect(mongourl)
}

const initdb=async()=>{
    await listing.deleteMany({})
    await listing.insertMany(initdata.data)
    console.log("data was initialised")
}

initdb();