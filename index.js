const express = require('express') // requiring the express module
const app = express()
const path = require('path')

//Network stuff
const port = 3000
const message = 'listening on '+ port

//Getting the html files

app.listen(port,()=>{
    console.log(message)
})

// The home page
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

// The contact page
app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'contact.html'))
})

// The about page
app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})
// the not found page

/*
// Creating our first server
const http = require('http')
const fs = require('fs')

//Network stuff
const port = 3000
const message = 'listening'

// Getting the html files and store them in const variables
const homePage =fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')

const server = http.createServer((req,res)=>{
    // Defining different responses depending on the input in the url field
    if(req.url==='/about')
        res.end(aboutPage, console.log('About'))
    else if(req.url === '/contact')
        res.end(contactPage)
    else if(req.url === '/')
        res.end(homePage)
    // If none of the above is written in the url, we return a page not found page.
    else{
        res.writeHead(404)
        res.end(notFoundPage)
    }
})

server.listen(port, console.log(message))
*/
