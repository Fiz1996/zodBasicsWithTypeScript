import express from 'express';
import parkRouter from "./router/park.routers"
const app = express();
const PORT = 5001;
app.use(express.json())

app.use('/api/parks',parkRouter)
app.listen(PORT,() => {
    console.log("server listeneing" +PORT)
});

