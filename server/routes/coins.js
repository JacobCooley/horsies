/**
 * Created by jake on 9/21/16.
 */
const express = require('express');
const router = express.Router();
const Coin = require('../models/coin')
var request = require('request');


router.route('/')

// create a Project (accessed at POST http://localhost:8080/api/coins)
    .post(function (req, res)
    {
        console.log("POST: The data received is: ");
        console.log(req.body);

    })

    // get all the Projects (accessed at GET http://localhost:8080/api/coins)
    .get(function (req, res)
    {
        console.log('getCOINS')
        var options = {
            url: 'http://www.coincap.io/coins',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body) // Show the HTML for the Google homepage.
            }
        })
    });


module.exports = router;
