var express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express();
const uri = "mongodb+srv://aroomakhan:monday122@cluster0.uklxfa9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var port = process.env.PORT || 3000;

let collection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db('Restaurants').collection('Paris');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

runDBConnection();

app.get('/', (req, res) => {
    res.render("index.html");
});

app.get('/api/paris', (req, res) => {
    getAllParis((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, message: "data retrieved" });
        }
    });
});

app.post('/api/paris', (req, res) => {
    let parisData = req.body;
     postParis(parisData, (err, result) => {
        if (!err) {
            res.status(201).json({ statusCode: 201, data: result, message: "Form submitted successfully!" });
        }
    });
});

function postParis(paris, callback) {
    collection.insertOne(paris, callback); 
}

function getAllParis(callback){
    collection.find({}).toArray(callback);
}

app.listen(port, () => {
    console.log("App listening to: " + port);
});
