import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rajukmvihar125:Raju123@cluster0.5ccdcko.mongodb.net/food_delivery?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database connected")).catch((error)=>{
        console.log(error);
    });
};
