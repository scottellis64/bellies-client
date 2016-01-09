var express = require("express");
var cors = require("cors");

var BelliesHttpServer = function() {
    var self = this;

    self.defaultPort = 3001;                 // Port to use if none is provided
    self.defaultIPAddress = "127.0.0.1";     // IP address to use if none is provided

    self.routes = [{
        name: "bellies-home",
        paths: ["", "checkout", "flist", "fgrid", "login", "product", "register", "cartitems", "billinginfo", "paymentmethod"],
        properties: {
            layout: "bellies-home.jade",
            title: "Bellies Bangles",
            isProduction: process.env.NODE_ENV && process.env.NODE_ENV == "production"
        }
    }];

    self.staticResources = [
        {path : "/", loc : "src"}
    ];

    self.jadeTmplFolder = "src/view";

    self._setupVariables = function() {
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP || self.defaultIPAddress;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || self.defaultPort;
    };

    self.terminator = function(sig) {
        var date = Date(Date.now());
        if (typeof sig === "string") {
            console.log('%s: Received %s - terminating sample app ...', date, sig);
            process.exit(1);
        }
        console.log('%s: Node server stopped.', date);
    };

    self._setupTerminationHandlers = function() {
        process.on('exit', function() {
            self.terminator();
        });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element) {
                process.on(element, function() {
                    self.terminator(element);
                });
            });
    };

    self.initializeServer = function() {
        var i;

        self.app = express();
        self.app.use(cors());

        for (i in self.staticResources) {
            var res = self.staticResources[i];
            self.app.use(res.path, express.static(res.loc));
        }

        for (i in self.routes) {
            var route = self.routes[i];
            for (var j in route.paths) {
                var path = route.paths[j];
                var resourcePath = path.length ? "/" + path : "/";
                self.app.get(resourcePath, function(req, res) {
                    res.render(route.name, route.properties);
                });
            }
        }

        self._initializeJade();
    };

    self._initializeJade = function() {
        self.app.set("views", self.jadeTmplFolder);
        self.app.set("view engine", "jade");
        self.app.disable("view cache");
    };

    self.initialize = function() {
        self._setupVariables();
        self._setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };

    self.start = function() {
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                Date(Date.now() ), self.ipaddress, self.port);
        });
    };
};

var belliesHttpServer = new BelliesHttpServer();
belliesHttpServer.initialize();
belliesHttpServer.start();