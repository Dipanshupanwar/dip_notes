document.addEventListener('DOMContentLoaded', () => {
    const sem_1 = document.getElementById("sem1");
    const sem_2 = document.getElementById("sem2");
    const sem_3 = document.getElementById("sem3");
    const sem_4 = document.getElementById("sem4");
    const sem_5 = document.getElementById("sem5");
    const sem_6 = document.getElementById("sem6");
    const uploadNotesBtn = document.getElementById('uploadNotesBtn');

    // Add event listeners for each semester button
    if (sem_1) {
        sem_1.addEventListener('click', function() {
            window.location.href = '/';
        });
    }

    if (sem_2) {
        sem_2.addEventListener('click', function() {
            window.location.href = '/semester/2';
        });
    }

    if (sem_3) {
        sem_3.addEventListener('click', function() {
            window.location.href = '/semester/3';
        });
    }

    if (sem_4) {
        sem_4.addEventListener('click', function() {
            window.location.href = '/semester/4';
        });
    }

    if (sem_5) {
        sem_5.addEventListener('click', function() {
            window.location.href = '/semester/5';
        });
    }

    if (sem_6) {
        sem_6.addEventListener('click', function() {
            window.location.href = '/semester/6';
        });
    }

    // Add event listener for the upload button
    if (uploadNotesBtn) {
        uploadNotesBtn.addEventListener('click', () => {
            alert('Redirecting to Upload Notes page...');
            window.location.href = '/upload'; // Adjust this to your upload route if necessary
        });
    }
});
