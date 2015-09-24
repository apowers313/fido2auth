var defaultAuthPort = 61904;

var io = require('socket.io')(defaultAuthPort);
io
    .of("fido")
    .on('connection', function(socket) {
    	socket.on ("discover", authDiscover);
    	socket.on ("register", authRegister);
    	socket.on ("authenticate", authAuthenticate);
    	socket.on ("deregister", authDeregister);
    });


/**
 * Discovery
 */
function authDiscover(socket) {
    console.log("got connection");

    // Got discovery request
    socket.on("discover", function (msg) {
        console.log("got msg:", msg);
    });
}

/**
 * Register
 */
function authRegister(socket) {

}

/**
 * Authenticate
 */
function authAuthenticate(socket) {
	
}

/**
 * Deregister
 */
function authDeregister(socket) {
	
}