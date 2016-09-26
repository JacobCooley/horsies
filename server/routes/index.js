module.exports = function (app) {
    app.use('/api/coins', require('./coins'));
}