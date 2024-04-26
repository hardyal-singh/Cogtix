
import env from "dotenv";
import { conn } from "./conn/conn.js";
import app from "./app.js";

env.config()
const port = process.env.PORT || 3000;



app.listen(port, async()=>{
    await conn();
    console.log(`sever work on http://localhost:${port}`)
}) 