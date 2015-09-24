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
function authDiscover(msg) {
    console.log("got connection");

    // Got discovery request
    console.log("got msg:", msg);
}

/**
 * Register
 */
function authRegister(msg) {

}

/**
 * Authenticate
 */
function authAuthenticate(msg) {
	
}

/**
 * Deregister
 */
function authDeregister(msg) {
	
}