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
    
    // rpId
    // account (AccountInfo)
    // clientDataHash (Byte Array)
    // cryptoParameters (sequence of FIDOCredentialParameters / AlgorithmIdentifier)
    // [blacklist (Sequence of strings)]
    // [extensions (FIDOExtensions)]

    // 1. If the blacklist parameter is present and contains a credential ID that is present on this authenticator, terminate this procedure and return error code TDB.
    // 2. If the cryptoParameters parameter does not contain a valid AlgorithmIdentifier structure that is supported by the authenticator, terminate this procedure and return error code TBD.
    // 3. Optionally, if the extensions parameter is present, process any extensions that this authenticator supports.
    // 4. If the authenticator has a display, show the contents of the account parameter to the user. Request permission to create a credential. If the user declines permission return an error code.
    // 5. Generate a new cryptographic key pair for the algorithm specified.
    // 6. Associate the rpId with the newly-created keypair.
    // 7. Generate an attestation statement for the newly-created key using clientDataHash.

    // Returns structure:
    // credential (Credential)
    // algorithm (Algorithm)
    // publicKey (String / serialized JSON Web Key)
    // attestationStatement (AttestationStatement)
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