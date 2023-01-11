
require('dotenv').config()
const GithubDB = require("github-db").default

const options = {
     host: "api.github.com", 
     pathPrefix: "", 
     protocol: "https",
     owner: "effordDev", 
     repo: "db", 
     path: "db.json" // <- File with extension .json, file should contain [] to begin
};
const token = process.env.TOKEN

const db = new GithubDB(options)

db.auth(token)
db.connectToRepo();

// insert
// db.save({ 
//      name: 'tokyo',
//      message: "meow",

console.log(db.find().then(res => console.log(res)))

// delete
// db.remove({_id:'9b0b19f01d8d471a81ea24c365e3b6e6'}, false)


