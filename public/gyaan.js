document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('mouseover', function() {
        const title = this.getAttribute('data-title');
        const content = this.getAttribute('data-content');
        const image = this.getAttribute('data-image'); // Get the new image source
        
        // Update the title and content in the right box
        document.querySelector('.content-title').innerText = title;
        document.querySelector('.content-text').innerText = content;
        
        // Update the image source
        const dynamicImage = document.getElementById('dynamicImage');
        dynamicImage.src = image; // Change the image source
    });
});

// Fade in the right box content on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.right-box').classList.add('show');
});
