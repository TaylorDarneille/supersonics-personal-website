const express = require('express')
const app = express()

// tell express we're using ejs as our view engine
app.set('view engine', 'ejs')

// HOME ROUTE
app.get('/', (req, res)=>{
    // res.sendFile(__dirname+'/views/index.html')
    res.render('index.ejs', {name: 'Sterling Archer', age: 35})
})

// ABOUT ROUTE
app.get('/about', (req, res)=>{
    res.render('about.ejs', {faveFoods: ['sushi', 'kale', 'kombucha']})
})

// BLOG ROUTE
app.get('/blog', (req, res)=>{
    res.render('blog-directory.ejs')
})

app.listen(3000, ()=>{
    console.log('I am listening via port 3000')
})