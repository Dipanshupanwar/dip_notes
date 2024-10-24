document.addEventListener('DOMContentLoaded', () => {
    const sem_1 = document.getElementById("sem1");
    const sem_2 = document.getElementById("sem2");
    const sem_3 = document.getElementById("sem3");
    const sem_4 = document.getElementById("sem4");
    const sem_5 = document.getElementById("sem5");
    const sem_6 = document.getElementById("sem6");
    const sem_7 = document.getElementById("sem7");
    const sem_8 = document.getElementById("sem8");
    const uploadNotesBtn = document.getElementById('uploadNotesBtn');

    // Add event listeners for each semester button
    if (sem_1) {
        sem_1.addEventListener('click', function() {
            window.location.href = '/cal1';
        });
    }

    if (sem_2) {
        sem_2.addEventListener('click', function() {
            window.location.href = '/cal';
        });
    }

    if (sem_3) {
        sem_3.addEventListener('click', function() {
            window.location.href = '/cal3';
        });
    }

    if (sem_4) {
        sem_4.addEventListener('click', function() {
            window.location.href = 'cal4';
        });
    }

    if (sem_5) {
        sem_5.addEventListener('click', function() {
            window.location.href = 'cal5';
        });
    }

    if (sem_6) {
        sem_6.addEventListener('click', function() {
            window.location.href = 'cal6';
        });
    }
    if (sem_7) {
        sem_7.addEventListener('click', function() {
            window.location.href = 'cal7';
        });
    }
    if (sem_8) {
        sem_8.addEventListener('click', function() {
            window.location.href = 'cal8';
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
