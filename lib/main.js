var fs             = require('fs');
var {CoffeeScript} = require('./coffee-script');

function main() {
    var coffee = fs.read(system.args[1]);
    var js     = CoffeeScript.compile(coffee, {bare: true});

    eval(js);
}

if (require.main == module)
    main();
