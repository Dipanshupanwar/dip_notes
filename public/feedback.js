const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    window.location.href = '/feedback/mail';
});
