import express from 'express';
var app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
app.set("view engine", "ejs");
import dotenv from 'dotenv';
dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(console.log("db connected"));


const gfgSchema = new mongoose
    .Schema({
        name: { type: String, required: false },
        Major: { type: String, required: false },
        tip: { type: String, required: true}
    });


const GFGCollection = mongoose.model("Tip", gfgSchema, "studtips");

app.get('/tips', async (req, res) => {
    try {
        const data = await GFGCollection.find();
        res.json(data);
        console.log(data);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var port = process.env.PORT || '5000';
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port);
});

app.post('/tips', async (req, res) => {
  try {
    const { name = "Anonymous", Major = "Student", tip } = req.body;
    if (!tip) return res.status(400).json({ error: "Tip is required" });
    const newTip = new GFGCollection({ name, Major, tip});
    await newTip.save();
    res.status(201).json({ message: "Tip saved!" });
  } catch (err) {
    console.error("Failed to save tip:", err);
    res.status(500).json({ error: "Failed to save tip" });
  }
});

