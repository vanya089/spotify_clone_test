require("dotenv").config();
import express from "express";
import cors from "cors";


const corsOptions = {
    origin: ['http://localhost:3000','https://course-project-cjz7.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};



const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));



async function startApp() {
    try {
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();