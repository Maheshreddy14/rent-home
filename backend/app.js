const express=require('express')
const app=express()
const mongoose=require('mongoose')
const listing = require('./models/listing')

const mongourl="mongodb+srv://maheswarreddyavula111:ZQabAWtPcPnWJLYi@cluster0.nzfkmcg.mongodb.net/renthome"

main().then(
    ()=>{
        console.log("connect to db")
    })
    .catch((err)=>{
        console.log(err)
    })

async function main(){
    await mongoose.connect(mongourl)
}

app.get('/testlisting',async (req,res)=>{
    let sample=new listing({
        title:"My new villa",
        description:"by the beach",
        prive:1200,
        location:"Rishikonda,Vizag",
        country:"India"
    })
    await sample.save()
    console.log("sample was saved")
    res.send("successful testing")
})
app.get('/',(req,res)=>{
    res.send("hehe")
})

app.listen(3001,()=>{
    console.log('serever is listening to port 3001')
})