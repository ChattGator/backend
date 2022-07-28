import express from 'express';
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express();
const PORT = process.env.port || 5000;



// mongoose.connect(process.env.DATABASE_URL, {              // connect to Mongodb
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })

app.get("/", (req, res) => {
    res.status(200).json({ message: 'welcome to express servr' })
})

app.use((req, res) => {                                    // 404 
    res.status(404).json({ message: 'Not found 404' })
})

app.listen(PORT, () => console.log('express server ready'))