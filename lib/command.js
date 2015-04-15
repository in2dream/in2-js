
var prompt = require('prompt');
var async = require('async');

function Command( options )
{
    var self = this;
    options = options || {};


}

Command.ensureKeys = function(obj, keys, cb)
{
    async.eachSeries(Object.keys(keys), function(k, done){
        if (obj[k]) {
            prompt.override[k] = obj[k];
            done();
        } else { done(); }
    }, function(){
        prompt.start();
        prompt.addProperties(obj, keys, function(){
            return cb(obj);
        })
    })
}

module.exports = Command;