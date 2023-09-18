const express=require("express")

const app=express()

const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

app.use("/add-product",(req,res,next)=>{

    res.send(`<form action='/product' method='POST'>
    <label > Name:</label>
     <input type='text' name='title' label='name'> <br>
     <label> Size</label>
     <input type='text' name='size'> <br>
     
         <button type='submit'>Add product
          </button>
         
          
          </input>  
           </form>`)
 
    // res.send("<h2> Welcome to add product page </h2>");

    
})
app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
})

app.use("/",(req,res,next)=>{
  
    res.send("<h1>Hello from expressJS </h1>")

})
app.listen(3000)
console.log("server is running successfully")
   