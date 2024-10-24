document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const uploadNotesBtn = document.getElementById('uploadNotesBtn');
    const uploadPaperBtn = document.getElementById('uploadPaperBtn');
    const uploadLabBtn = document.getElementById('uploadLabBtn');

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
