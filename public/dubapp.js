document.addEventListener('DOMContentLoaded', () => {
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
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            window.location.href = '/login';
        });
    }

    if (uploadNotesBtn) {
        uploadNotesBtn.addEventListener('click', function() {
            window.location.href = '/upload';
        });
    }

    if (uploadPaperBtn) {
        uploadPaperBtn.addEventListener('click', function() {
            window.location.href = '/upload';
        });
    }

    if (uploadLabBtn) {
        uploadLabBtn.addEventListener('click', function() {
            window.location.href = '/upload';
        });
    }
});
