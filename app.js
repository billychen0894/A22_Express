const express = require('express')
const app = express();
const PORT = 3000;
const exphbs = require('express-handlebars');

// setting template engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// setting static files
app.use(express.static("public"));


app.get('/about', (req, res)=> {
  res.render('about')
})

app.get('/portfolio', (req, res)=> {
  res.render('portfolio')
})

app.get('/contact', (req, res)=> {
  res.render('contact')
})

app.get('/', (req, res)=> {
  res.render('index')
})
app.listen(PORT, () => {
  `Listening on to ${PORT} port`
})
