const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?`~';

var username, password;

window.addEventListener('load', function() {
    // Get the input values when the 'load' event occurs
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
});

document.getElementById('loginSubmitButton').onclick = function() {
    // Get the input values when the 'loginSubmitButton' is clicked
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    loginwithuser();
};

function loginwithuser() {
    var loginWithPlayfabRequest = {
        TitleId: "B58F6",
        Username: username,
        Password: password
    };

    PlayFabClientSDK.LoginWithPlayFab(loginWithPlayfabRequest, function (result, error) {
        if (result !== null) {
            console.log('Login successful:', result);
        } else if (error !== null) {
            console.error('Login error:', error);
        }
    });
}
