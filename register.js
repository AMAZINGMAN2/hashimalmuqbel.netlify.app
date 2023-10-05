var username, password, email;

window.addEventListener('load', function() {
    // Get the input values when the 'load' event occurs
    username = document.getElementById('username1').value;
    password = document.getElementById('password-input').value;
    email = document.getElementById('email').value;
});

document.getElementById('registerSubmitButton').onclick = function() {
    // Get the input values when the 'registerSubmitButton' is clicked
    username = document.getElementById('username1').value;
    password = document.getElementById('password-input').value;
    email = document.getElementById('email').value;
    registerwithemail();
};

function registerwithemail() {
    var loginWithPlayfabRequest = {
        TitleId: "B58F6",
        Username: username,
        Password: password,
        Email: email
    };

    PlayFabClientSDK.RegisterPlayFabUser(loginWithPlayfabRequest, function (result, error) {
        if (result !== null) {
            console.log('Register successful:', result);
            window.open("http://hashimalmuqbel.netlify.app/profile");
            window.close();
        } else if (error !== null) {
            console.error('Register error:', error);
        }
    });
}
