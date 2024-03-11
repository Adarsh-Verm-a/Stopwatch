function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const stopwatch = document.getElementById('stopwatch');
    stopwatch.classList.toggle('dark-theme');
}