import express from 'express';

const app = express();

app.get("/", (req, res, next) => {
    res.send("Hi from youtube live...")
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
