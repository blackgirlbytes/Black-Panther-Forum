const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://rizel:bobb@ds261138.mlab.com:61138/fullstack', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
//this is loading our landing page
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {messages: result})
  })
})
//handles when someone posts a message
app.post('/quotes', (req, res) => {
  db.collection('quotes').save({quote: "''"+req.body.quote+"''", char:"-"+ req.body.char, thumbUp: 0, thumbDown:0}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
//handles when someone updates a message
app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({quote: req.body.quote, char: req.body.char}, {
    $set: {
      thumbUp:req.body.thumbUp + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
app.put('/quotesto', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({quote: req.body.quote, char: req.body.char}, {
    $set: {
      thumbDown:req.body.thumbDown + 1
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})
//handles when some deletes a message
app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({quote: req.body.quote, char: req.body.char}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
