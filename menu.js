let darkmode = localStorage.getItem('darkmode'); 
const themeSwitch = document.getElementById('theme-switch');

if (darkmode === 'active') enableDarkMode(); // Apply dark mode if stored

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode'); // Fetch current state
    darkmode === 'active' ? disableDarkMode() : enableDarkMode(); // Toggle mode
});

function enableDarkMode() {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active'); // Store dark mode state
}

function disableDarkMode() {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode'); // Remove from localStorage
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.remove('dark'); // Disable dark mode manually
}