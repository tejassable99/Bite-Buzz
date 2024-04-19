const mongoose=require("mongoose")
const FoodSchema=new mongoose.Schema(
    {
        dish: { type: String, required: true },
  imgdata: { type: String, required: true },
  address: { type: String, required: true },
  delimg: { type: String, required: true },
  somedata: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: String, required: true },
  arrimg: { type: String, required: true },
  qnty: { type: Number, default: 0 }
    }
)

module.exports=mongoose.model("Food",FoodSchema)