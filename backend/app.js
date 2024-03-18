const express=require('express')
const app=express()
const mongoose=require('mongoose')
const listing = require('./models/listing')
const path=require("path")
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

// app.get('/testlisting',async (req,res)=>{
//     let sample=new listing({
//         title:"My new villa",
//         description:"by the beach",
//         prive:1200,
//         location:"Rishikonda,Vizag",
//         country:"India"
//     })
//     await sample.save()
//     console.log("sample was saved")
//     res.send("successful testing")
// })

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("hehe")
})

app.get('/listings',async (req,res)=>{
    const allListings=await listing.find({})
    res.render('listings/index.ejs',{allListings})
})

app.get('/listings/new',(req,res)=>{
    res.render('listings/new.ejs')
})

app.get('/listings/:id',async (req,res)=>{
    let {id}=req.params
    const Listing=await listing.findById(id)
    res.render("listings/show.ejs",{Listing})
})

app.post("/listings", async (req, res) => {
    const newListing = new listing(req.body.listing)
    await newListing.save()
    res.redirect("/listings")
  })


app.listen(3001,()=>{
    console.log('serever is listening to port 3001')
})