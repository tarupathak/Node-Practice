const { MongoClient } = require("mongodb");
const url = "mongodb+srv://pathaktaru2002:jHDZVsfhjjTYuoPC@cluster0.ti2tfsl.mongodb.net/";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection('products');
  // let response = await collection.find({name:'u 10'}).toArray();
  // console.log(response);
}

module.exports= dbConnect;