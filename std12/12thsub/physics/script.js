document.getElementById('toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.toggle').forEach(function(toggle) {
        toggle.classList.toggle('active');
    });
});
