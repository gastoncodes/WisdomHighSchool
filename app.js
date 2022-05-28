const http = require('http');

const express = require('express');

const path = require('path');

const app = express();

const port = 8081;


app.use(express.static('public'));

app.use('/styling',express.static(__dirname + 'public/styling'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/images',express.static(__dirname + 'public/images'));

app.set('views','./views');
app.set('view engine', 'ejs')

const { engine } = require ('express-handlebars');
app.engine('ejs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'ejs',
    defaultLayout: 'index',
    partialsDir:`${__dirname}/views/partials`
}));



app.get('/',(req,res)=>{
    res.render('index',{layout:'index'});
})
// app.get('/',(req,res)=>{ res.render('index') })
app.get('/accademics',(req,res)=>{ res.render('accademics') })
app.get('/apply',(req,res)=>{ res.render('apply') })
app.get('/clubs',(req,res)=>{ res.render('clubs') })
app.get('/contact',(req,res)=>{ res.render('contact') })
app.get('/contact',(req,res)=>{ res.render('contact') })
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});

app.get('/e-learning',(req,res)=>{ res.render('e-learning') })
app.get('/galary',(req,res)=>{ res.render('galary') })
app.get('/games_sports',(req,res)=>{ res.render('games_sports') })
app.get('/Non-teaching_staff',(req,res)=>{ res.render('Non-teaching_staff') })
app.get('/student_life',(req,res)=>{ res.render('student_life') })
app.get('/Support_staff',(req,res)=>{ res.render('Support_staff') })
app.get('/wisdom_magazine',(req,res)=>{ res.render('wisdom_magazine') })
app.get('/teaching_staff',(req,res)=>{ res.render('teaching_staff') })



app.all('*',(req,res)=>{
    res.status(404).send('oooppss!!!!  There is nothing here');
})

app.listen(port,(req,res)=>{
    console.log(`the server is listening on port ${port} .........`);
})
