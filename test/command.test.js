
var command = require('./../lib/command');

module.exports = function(){

    it('ensureKeys', function(done){

        var obj = { name : 'hello', email: 'email', pass: 'pass', _hide : true };

        command.ensureKeys(obj, ['email', 'name', 'pass'], function(o){
            o.name.should.exactly('hello');
            o.email.should.exactly('email');
            o.pass.should.exactly('pass');
            o._hide.should.be.true;
            done();
        });

    })

}