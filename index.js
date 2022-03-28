const express = require('express')
const app = express()
const port = 3002




let blogPost = [ ];

var bodyParser = require('body-parser')

app.use(bodyParser.json())

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
    blogPost.push(input.content)
    res.send('cnontent')
})


//app.get('/users/')