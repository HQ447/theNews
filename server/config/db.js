import mongoose from "mongoose"

const connect_DB= async (db_url)=>{
    try {
        const db= await mongoose.connect(db_url)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error in database connection")
    }
}

export default connect_DB