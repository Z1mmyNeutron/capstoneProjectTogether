

import path from 'path'; 
import bodyParser from 'body-parser';
import express from'express';
const app = express();
const PORT = process.env.PORT || 5000;
import fs from 'fs';
//mongo 
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://AdminUser:Asd123asd@capstoneproject.xbu68gm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
//start here 

async function run() {
  try {
    const database = client.db('test');
    const collection = database.collection('newData');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'topCharts1' };
    const artist = await collection.findOne(query);
    console.log(artist);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use(bodyParser.json()); //this line allows your express server to process post requests

main().catch(err=> console.log(err));

async function main(){
    app.use(express.static(path.join(__dirname, 'public')));            //static = serving public website.
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`));  

    
    // let messages = [];
    // let blogContent = [];
    // let goalsContent = [];
 
  //  app.get('/',  express.static(path.join(__dirname, "public")));  //this line hosts your public website, found in your public folder

    // app.get('/messages', (req, res)=>{
    //     //don't forget JSON.stringify to bundle your output in JSON parsable form.
    //     res.send(JSON.stringify(messages));
    // })
    // app.get('/content', (req, res)=>{
    //     res.send(blogContent);
    // })

    // app.post('/goals', (req, res)=>{
    //     res.send(JSON.stringify(goalsContent));
    // })

    // app.post('/goals/new', function(req, res){
    //     console.log("goals/new: ", req.body)
        
    //     //validate 
    //     let input = req.body;   //write body into input

    //     //then verify that all needed properties exist and are non-empty if strings
        
    //     let hasGoals = input.goals !== undefined && input.goals.length > 0;
    //     let hasSteps = input.steps !== undefined && input.steps.length > 0;

    //     if(hasGoals === true && hasSteps === true) {
    //         //if all validation checks are met, create a content object
    //         let content = {
    //             steps        : input.steps, 
    //             goals        : input.goals, 
    //             timestamp     : new Date(),
    //             contentID     : Math.floor(Math.random()*99999999) 
    //         };
    //         //push to the array
    //         goalsContent.push(content);

    //         //return a data packet to the user
    //         res.send(JSON.stringify(goalsContent));
    //     } else {
    //         //otherwise, report error
    //         res.send(JSON.stringify({
    //             error : "Missing requisite property (check your spelling)",
    //             missingSteps   : !hasSteps,
    //             missingGoals    : !hasGoals,
    //         }))
    //     }
    // })

    // app.post('/messages/new', function(req, res){
    //     console.log("messages/new: ", req.body)
    //     let input = req.body;

    //     let hasSender = input.sender !== undefined && input.sender.length > 0;
    //     let hasReceiver = input.receiver !== undefined && input.receiver.length > 0;
    //     let hasMessage = input.message !== undefined && input.message.length > 0;

    //     if(hasSender === true && hasReceiver === true && hasMessage === true) {
    //         let message = {
    //             sender        : input.sender, 
    //             receiver      : input.receiver, 
    //             message       : input.message,
    //             timestamp     : new Date(),
    //             messageNumber : Math.floor(Math.random()*99999999) 
    //         };

    //         messages.push(JSON.stringify(message));

    //         res.send(message);
    //     } else {
    //         res.send(JSON.stringify({
    //             error : "Missing requisite property (check your spelling)",
    //             missingSender   : !hasSender,
    //             missingReceiver : !hasReceiver,
    //             missingMessage  : !hasMessage,
    //         }))
    //     }
    // })

    // app.post('/content/new', function(req, res){
    //     console.log("content/new: ", req.body)
        
    //     console.log("here is a change");
    //     //validate 
    //     let input = req.body;   //write body into input

    //     //then verify that all needed properties exist and are non-empty if strings
        
    //     let hasAuthor = input.author !== undefined && input.author.length > 0;
    //     let hasTitle = input.title !== undefined && input.title.length > 0;
    //     let hasContent = input.content !== undefined && input.content.length > 0;

    //     if(hasAuthor === true && hasTitle === true && hasContent === true) {
    //         //if all validation checks are met, create a content object
    //         let content = {
    //             author        : input.author, 
    //             title         : input.title, 
    //             content       : input.content,
    //             timestamp     : new Date(),
    //             contentID     : Math.floor(Math.random()*99999999) 
    //         };
    //         //push to the array
    //         blogContent.push(content);

    //         //return a data packet to the user
    //         res.send(JSON.stringify(content));
    //     } else {
    //         //otherwise, report error
    //         res.send(JSON.stringify({
    //             error : "Missing requisite property (check your spelling)",
    //             missingAuthor   : !hasAuthor,
    //             missingTitle    : !hasTitle,
    //             missingContent  : !hasContent,
    //         }))
    //     }
    // })

    //json postman get and send requests
}
