const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const getStartedBtn = document.getElementById('getStartedBtn');
const uploadNotesBtn = document.getElementById('uploadNotesBtn');
const uploadPaperBtn = document.getElementById('uploadPaperBtn');
const uploadLabBtn = document.getElementById('uploadLabBtn');

// Adding event listeners to each button
loginBtn.addEventListener('click', function() {
    // Redirect to the login page
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
    window.location.href = '/upload';  // Adjust as needed
});

uploadLabBtn.addEventListener('click', function() {
    // Redirect to the Upload Lab page
    window.location.href = '/upload';// Adjust as needed
});
