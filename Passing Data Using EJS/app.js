import axios from "axios";
import express from "express";

const app = express();
app.use(express.static("public"));
app.get("/", async(req, res) =>{
    try{
        const response = await axios.get(url);
        const data = response.data
    } catch(error)

})