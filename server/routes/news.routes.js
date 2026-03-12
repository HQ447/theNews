import express from "express"
import { addNews } from "../controllers/addNews.controller.js";


const router=express.Router()


router.post("/add" , addNews)


export default router