const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const getStartedBtn = document.getElementById('getStartedBtn');
const uploadNotesBtn = document.getElementById('uploadNotesBtn');
const uploadPaperBtn = document.getElementById('uploadPaperBtn');
const uploadLabBtn = document.getElementById('uploadLabBtn');
const burgerMenu = document.getElementById('burger');
const navbar = document.getElementById('navbar');
console.log(navbar); // Should log the <ul> element

function togglenav() {
    console.log("Toggling navbar visibility");
    navbar.classList.toggle('show');
    console.log(navbar.classList); // Check the current class list
}


// Add event listener for click on burger menu
burgerMenu.addEventListener('click', togglenav);


// Adding event listeners to each button
loginBtn.addEventListener('click', function() {
    // Redirect to the login page
    console.log("login");
    window.location.href = '/login';  // Replace 'login.html' with the actual login page URL
});

signupBtn.addEventListener('click', function() {
    // Redirect to the signup page
    window.location.href = '/signup';  // This now points to the new route
});


getStartedBtn.addEventListener('click', function() {
    // Redirect to the Get Started page
    window.location.href = '/login';  // Adjust as needed
});

uploadNotesBtn.addEventListener('click', function() {
    // Redirect to the Upload Notes page
    window.location.href = '/upload';;  // Adjust as needed
});

uploadPaperBtn.addEventListener('click', function() {
    // Redirect to the Upload Paper page
    console.log("upload something ")
    window.location.href = '/upload';  // Adjust as needed
});

uploadLabBtn.addEventListener('click', function() {
    // Redirect to the Upload Lab page
    window.location.href = '/upload';// Adjust as neededd
});
