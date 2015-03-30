function util()
{

}

util.is_email = function(email)
{
    var p = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return Boolean(p.test(email));
}

module.exports = util;