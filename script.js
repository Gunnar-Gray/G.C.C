const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');

  if (document.documentElement.classList.contains('dark-mode')) {
    document.documentElement.style.setProperty('--primary-color', '#fff');
    document.documentElement.style.setProperty('--background-color', '#222');
  } else {
    document.documentElement.style.setProperty('--primary-color', '#222');
    document.documentElement.style.setProperty('--background-color', '#fff');
  }
});