(function (CoffeeScript) {
    if (typeof require.extensions != "undefined") {
        require.extensions[".coffee"] = function (resource) {
            return CoffeeScript.compile(resource.getContent(), { bare: true });
        };
    }

    if (require.main == module) {
        var coffee = require("fs").read(system.args[1]);
        var js = CoffeeScript.compile(coffee, { bare: true });
        Function.apply(null, [js]).apply(this);
    }
})(require("./coffee-script").CoffeeScript);
