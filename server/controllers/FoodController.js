const { default: mongoose } = require("mongoose");
const Food=require("../models/FoodModel")
const stripe = require("stripe")(process.env.Secret_Key);
// get all workouts
const getFood=async(req,res)=>{
    
    try{
    const Foods= await Food.find()
    res.send(Foods);
    }
    catch(error){
        res.send({error:error.message})
    }
}



// create new workout
const createFood=async(req,res)=>{
    const {dish,imgdata,address,delimg,somedata,price,rating,arrimg,qnty}=req.body;

    // add doc to db
    try{
        const Food= await Workout.insertMany({dish,imgdata,address,delimg,somedata,price,rating,arrimg,qnty});
        res.send(Food);
    }
    catch(error){
        res.send({error:error.message})
    }
}

//checkout api
const chekout=async(req,res)=>{
    const {products} = req.body;


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
    });

    res.json({id:session.id})
 
}




module.exports={

    getFood,
    createFood,chekout
   
}