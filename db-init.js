import express from 'express';
var app = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
app.set("view engine", "ejs");
import dotenv from 'dotenv';
dotenv.config();

 
mongoose.connect(process.env.MONGO_URL).then(console.log("db connected"));

const data = [
    {
        name: "John",
        Major: "IT",
        tip: "asdfsaf"
    },
    {
        name: "Doe",
        Major: "IT",
        tip: "dasfdasf"
    },
    {
        name: "Smith",
        Major: "IT",
        tip: "asdfasfas"
    },
    {
        name: "Peter",
        Major: "IT",
        tip: "jkdfhjkdsaf"
    }
]
const gfgSchema = new mongoose
    .Schema({
        name: { type: String, required: false },
        Major: { type: String, required: false },
        tip: { type: String, required: true},
    });

const GFGCollection = mongoose
    .model("studTips", gfgSchema);

async function addDataToMongodb() {
    await GFGCollection
        .deleteMany();
    await GFGCollection
        .insertMany(data);
    console.log("Data added to MongoDB");
}

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



app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/track', (req, res) => {
    addDataToMongodb();
    res.send('Meow');
});


var port = process.env.PORT || '5000';
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port);
});

