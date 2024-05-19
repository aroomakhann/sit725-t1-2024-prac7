const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://aroomakhan:monday122@cluster0.uklxfa9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client.connect((err) => {
  if (err) {
    console.error("Failed to connect to MongoDB:", err);
  } else {
    console.log("Connected to MongoDB");
  }
});

module.exports = client;
