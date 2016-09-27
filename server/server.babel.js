import express from 'express';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coinderby');
const path = require('path')
const port = process.env.PORT || 3000
const app = express();
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // MONGOOOSE EXAMPLE
    //
    // const kittySchema = mongoose.Schema({
    //     name: String
    // });
    //
    // kittySchema.methods.speak = function () {
    //     var greeting = this.name
    //         ? "Meow name is " + this.name
    //         : "I don't have a name";
    //     console.log(greeting);
    // }
    //
    // const Kitten = mongoose.model('Kitten', kittySchema);
    // const silence = new Kitten({ name: 'Silence' });
    // console.log(silence.name);
    //
    // var fluffy = new Kitten({ name: 'fluffy' });
    // fluffy.speak(); //
    //
    // fluffy.save(function (err, fluffy) {
    //     if (err) return console.error('ERROR', err);
    //     fluffy.speak();
    // }).then(function () {
    //     Kitten.find(function (err, kittens) {
    //         if (err) return console.error('ERROR', err);
    //         console.log(kittens);
    //     })
    //     Kitten.find({ name: 'fluffy' }, function (err, resp) {
    //         if (err) return console.error('ERROR', err);
    //         console.log('resp', resp)
    //     });
    // });
    //
    //

});

app.use('/', express.static('../public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    console.log('route')
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})


var router = require('./routes')(app);
module.exports = app;

app.listen(port);