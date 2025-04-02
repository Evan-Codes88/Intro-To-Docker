import express from 'express';

const app = express();

app.get("/", (request, response) => {
    response.send("Hello from Docker");
})

app.listen(1000, () => {
    console.log("Sever running on port 1000");
})