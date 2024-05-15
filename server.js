var express = require ("express") 
const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express ()
const uri = "mongodb+srv://aroomakhan:monday122@cluster0.uklxfa9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var port = process.env.port || 5500;

const cardList = [ 
    { 
        title: "Caret", 
        image: "images/@soffairys.jpeg",  
        link: "About Caret", 
        description: "Basic information about Caret" 
    },  
    { 
        title: "Le Relais de l’Entrecôte", 
        image: "images/Red wine, entrecote and french fries @ Le Relais de L'entrecôte - Paris, France.jpeg", 
        link: "About Le Relais de l’Entrecôte", 
        description: "Basic information about Le Relais De L’Entrecôte" 
    }, 
    { 
        title: "Cedric Grolet",  
        image: "images/croissant.jpeg", 
        link: "About Cedric Grolet", 
        description: "Basic information about Cedric Grolet"
    }
]; 


let collection;
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.json()); app.use(express.urlencoded({extended: false}));


// MongoClient with MongoClient object for stable API
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        useNewUrlParser: true,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db('Restaurants').collection('Paris');
        console.log("MongoDB connected successfully!");
    } catch (ex) {
        console.error("Failed to connect to MongoDB", ex);
    }
}

runDBConnection();

app.get('/', function (req,res) {
    res.render('index.html');
});

app.get('/api/paris', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.get('/', async (req, res) => {
    getAllParis((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: "Retrieved all Paris data successfully" });
        } else {
            console.error("Error fetching Paris data:", err);
            res.status(500).json({ statusCode: 500, message: "Error" });
        }
    });
});

app.post('/api/paris', (req, res) => {
    let Paris = req.body;
     collection.insertOne(Paris, (err, result) => {
        if (!err) {
            res.status(201).json({ statusCode: 201, data: result.ops, message: "Paris data added successfully" });
        } else {
            console.error("There was an error in posting Paris data:", err);
            res.status(500).json({ statusCode: 500, message: "Error" });
        }
    });
});

function postParis(parisData, callback) {
    collection.insertOne(parisData, (err, result) => {
        if (err) {
            console.error("Error inserting Paris data:", err);
            callback(err);
        } else {
            callback(null, result.ops); 
        }
    });
}


app.listen(port, ()=>{
    console.log("App listening to:" +port)
})