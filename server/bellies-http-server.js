var express = require("express");
var cors = require("cors");

var defaultPort = 8080;                 // Port to use if none is provided
var defaultIPAddress = "127.0.0.1";     // IP address to use if none is provided
var ipaddress = null;
var port = null;

app = express();

var routes = [{
    name: "bellies-home",
    paths: ["", "checkout", "flist", "fgrid", "login", "product", "register"],
    properties: {
        layout: "bellies-home.jade",
        title: "Bellies Bangles"
    }
}];

var staticResources = [
    {path : "/", loc : "src"},
    {path : "/bellies/lib", loc : "src/lib"},
    {path : "/bellies/resources", loc : "src/resources"},
    {path : "/bellies/app", loc : "src/js"},
    {path : "/bellies/unify", loc : "src/resources/theme/Unify-v1.7/HTML/assets"}
];

var jadeTmplFolder = "src/resources/view";

function _setupVariables() {
    ipaddress = process.env.OPENSHIFT_NODEJS_IP;
    port      = process.env.OPENSHIFT_NODEJS_PORT || this.defaultPort;

    if (ipaddress) {
        console.warn("No OPENSHIFT_NODEJS_IP var, using " + defaultIPAddress);
        ipaddress = defaultIPAddress;
    }
}

function terminator(sig) {
    var date = Date(Date.now());
    if (typeof sig === "string") {
        console.log('%s: Received %s - terminating sample app ...', date, sig);
        process.exit(1);
    }
    console.log('%s: Node server stopped.', date);
}


function _setupTerminationHandlers() {
    process.on('exit', function() {
        terminator();
    });

    // Removed 'SIGPIPE' from the list - bugz 852598.
    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV',
        'SIGUSR2', 'SIGTERM'
    ].forEach(function(element) {
            process.on(element, function() {
                terminator(element);
            });
        });
}

function _initializeJade() {
    app.set("views", jadeTmplFolder);
    app.set("view engine", "jade");
    app.disable("view cache");
}

_setupVariables();
_setupTerminationHandlers();

app.use(cors());

_initializeJade();

var i;
for (i in staticResources) {
    var res = staticResources[i];
    app.use(res.path, express.static(res.loc));
}

for (i in routes) {
    var route = routes[i];
    for (var j in route.paths) {
        var path = route.paths[j];
        var resourcePath = path.length ? "/bellies/" + path : "/bellies";
        app.get(resourcePath, function(req, res) {
            res.render(route.name, route.properties);
        });
    }
}

app.listen(3001);

module.exports = app;