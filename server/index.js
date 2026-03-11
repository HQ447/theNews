import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()


const app=express()
app.use(express.json())

app.get((req,res)=>{
    console.log("testing")
})
f
app.listen(9000 , ()=>{
    console.log("server is running ")
})
