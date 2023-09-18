const express=require("express")

const app=express()

const bodyParser=require("body-parser")

const adminRoute=require("./routes/admin")

const shopRoute=require("./routes/shop")

app.use(bodyParser.urlencoded({extended:true}))

app.use(adminRoute)

app.use(shopRoute)

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not Found </h1>")
})





app.listen(3000)
console.log("server is running successfully")
    