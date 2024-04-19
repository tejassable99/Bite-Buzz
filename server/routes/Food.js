const express=require("express")
const {getFood,createFood,chekout}=require("../controllers/FoodController")
const router=express.Router()

// get all workouts
router.get("/",getFood)



// post new workout
router.post("/",createFood)

//stripe checkout
router.post("/api/create-checkout-session",chekout)


module.exports=router;
