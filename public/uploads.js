const uploadNotesBtn = document.getElementById('uploadNotesBtn');
const uploadPaperBtn = document.getElementById('uploadPaperBtn');
const uploadLabBtn = document.getElementById('uploadLabBtn');
uploadNotesBtn.addEventListener('click', function() {
    // Redirect to the Upload Notes page
    window.location.href = '/upload';  // Replace with actual Upload Notes page URL
});

uploadPaperBtn.addEventListener('click', function() {
    // Redirect to the Upload Paper page
    window.location.href = '/upload';  // Replace with actual Upload Paper page URL
});

uploadLabBtn.addEventListener('click', function() {
    // Redirect to the Upload Lab page
    window.location.href = '/upload';  // Replace with actual Upload Lab page URL
});

