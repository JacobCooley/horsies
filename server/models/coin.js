/**
 * Created by jake on 9/21/16.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CoinSchema = new Schema({
    name: String,
    symbol: String,
    price: Number
});

module.exports = mongoose.model('Coin', CoinSchema);