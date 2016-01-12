module.exports = {
    requireAuth: function (req, res, next) {
        console.log('private route son!');
        next();
    },
    logger: function(req, res, next) {
        console.log("req: [date: " + new Date().toLocaleString() + "][method: " + req.method + '][url: ' + req.originalUrl + "]");
        next();
    }
}