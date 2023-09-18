const express=require("express");
const router= express.Router();

router.use("/add-product",(req,res,next)=>{

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
router.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
})
module.exports=router