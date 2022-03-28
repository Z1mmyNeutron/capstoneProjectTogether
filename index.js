const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3002
const databaseLink = 'mongodb+srv://crzimmer1:Blitzen1@cluster0.sry9r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
main().catch(err=> console.log(err));

async function main(){

    //mongoose database
    await mongoose.connect(databaseLink);

    const articleSchema = new mongoose.Schema({
        id: Number,
        title: String,
        author: String,
        content: String
        
    });



    const Article = mongoose.model('Article', articleSchema);

    // const silence = new Article({name: 'Silence'});
    // console.log(silence.name);
    // articleSchema.methods.speak = function speak(){
    //     const greeting = this.name? "My name is: " + this.name
    //     : "I don't have a name";
    // };
   

    //body 

    let blogPost = [ ];
 

    //json postman get and send requests

    app.use(bodyParser.json())

    //get request
    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

    //get request

    app.get('/content', (req, res) =>{
        res.send(JSON.stringify(blogPost))
    })

    //post method rout
    app.post('/content/new', function(req, res) {

        console.log("req: ", req.body)
        let input = req.body;
        let id = Math.floor(Math.random()*99999999);

       
        const newArticle = new Article({id: id, title: input.title, author: input.author, content: input.content})
      
        blogPost.push(input.content);
    
         newArticle.save();
        res.send('content')
    })

}
//app.get('/users/')