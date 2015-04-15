
var command = require('./../lib/command');

module.exports = function(){

    it('ensureKeys', function(done){

        var obj = { name : 'hello', email: 'email', pass: 'pass', _hide : true };

        command.ensureKeys(obj, [
            {name: 'email', require:true},
            {name: 'name', require:true},
            {name: 'pass', hidden:true}
            ], function(o){
            o.name.should.exactly('hello');
            o.email.should.exactly('email');
            o.pass.should.exactly('pass');
            o._hide.should.be.true;
            
            command.ensureKeys(obj, ['name', 'email', 'pass'], function(o){
                o.name.should.exactly('hello');
                o.email.should.exactly('email');
                o.pass.should.exactly('pass');
                o._hide.should.be.true;
                done();
            });

        });

    })

}