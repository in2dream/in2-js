
var prompt = require('prompt');
var async = require('async');

function Command( options )
{
    var self = this;
    options = options || {};


}

Command.ensureKeys = function(obj, keys, cb)
{
    prompt.override = {};
    async.eachSeries(keys, function(k, done){
        var key = k;
        if (k.name) {
            key = k.name;
        }
        if (obj[key]) {
            prompt.override[key] = obj[key];
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