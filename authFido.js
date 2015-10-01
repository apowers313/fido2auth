/********************************************************************************
 * Everything below this line is part of the Socket.io authenticator interface implementation
 * TODO: this should be moved to a separate module
 *********************************************************************************/

function socketIoAuthenticator() {
    // invoke the superclass constructor
    fidoAuthenticator.call(this);
}
socketIoAuthenticator.prototype = Object.create (fidoAuthenticator.prototype);
var _discoveredAuthenticators = [];
socketIoAuthenticator.__proto__.authenticatorDiscover = socketIoDiscover;

/**
 * Discover
 */
function socketIoDiscover() {
    console.log("authDiscover");
    // TODO: Discovery cache
    // TODO: Fire events when discovered / state changes
    var authSocket = io.connect("http://localhost:" + defaultAuthPort + "/fido");
    authSocket.on("connect", function (socket) {
        console.log("connected");
        // Do the discovery of all the authenticators
        authSocket.emit("discover", {
            command: "discover"
        });
        // If an authenticator responds, remember it for the future
        authSocket.on("discover", function (msg) {
            if (msg.aaid === undefined) {
                // TODO: throw error?
                return;
            }
            // console.log ("Got discovery response:", msg);
            if (_discoveredAuthenticators[msg.aaid] === undefined) {
                _discoveredAuthenticators[msg.aaid] = msg;
                console.log("Adding authenticator:" + msg.aaid + " List is:", _discoveredAuthenticators);
            }
        });
    });
}

/********************************************************************************
 * Everything below this line is part of the Socket.io authenticator interface implementation
 * TODO: this should be moved to a separate module
 *********************************************************************************/
window.fido.addAuthenticator (new socketIoAuthenticator());