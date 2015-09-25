var defaultAuthPort = 61904;

var _ioSocket;

var io = require('socket.io')(defaultAuthPort);
io
    .of("fido")
    .on('connection', function(socket) {
        _ioSocket = socket;
    	socket.on ("discover", authenticatorDiscover);
        // Do these belong in a socket.io room associated with the AAID?
    	socket.on ("make-credential", authenticatorMakeCredential);
    	socket.on ("get-assertion", authenticatorGetAssertion);
    	socket.on ("authentication-cancel", authenticatorCancel);
    });

/**
 * Discovery
 */
function authenticatorDiscover(msg) {
    console.log("got connection");

    // Got discovery request
    console.log("got discovery request:", msg);

    var authenticatorDescription = {
        name: "Adam's Authenticator",
        company: "Super Powers, Inc.",
        aaid: "F1D0#0001"
    };
    var socket = _ioSocket;
    socket.emit ("discover", authenticatorDescription);
}

/**
 * Make Credential
 */
function authenticatorMakeCredential(msg) {

}

/**
 * Get Assertion
 */
function authenticatorGetAssertion(msg) {
	
}

/**
 * Cancel
 */
function authenticatorCancel(msg) {
	
}