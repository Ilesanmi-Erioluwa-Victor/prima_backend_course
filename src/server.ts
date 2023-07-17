import express from 'express';
import cookieParser from "cookie-parser"

const app = express();

app.get("/", (req, res, next) => {
    res.send("Hi from youtube live...")
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
