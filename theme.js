// ============ THEME ============
function toggleTheme() {
  isLight = !isLight;
  document.body.classList.toggle('light', isLight);
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');
  if (icon)  icon.textContent  = isLight ? '☀️' : '🌙';
  if (label) label.textContent = isLight ? 'Light' : 'Dark';
  try { localStorage.setItem('persian_theme', isLight ? 'light' : 'dark'); } catch(e) {}
}
(function initTheme() {
  try {
    const saved = localStorage.getItem('persian_theme');
    // Default is light — only switch to dark if user chose dark
    if (saved === 'dark') {
      isLight = false;
      document.body.classList.remove('light');
      const icon  = document.getElementById('themeIcon');
      const label = document.getElementById('themeLabel');
      if (icon)  icon.textContent  = '🌙';
      if (label) label.textContent = 'Dark';
    } else {
      // Default: light mode
      isLight = true;
      document.body.classList.add('light');
      const icon  = document.getElementById('themeIcon');
      const label = document.getElementById('themeLabel');
      if (icon)  icon.textContent  = '☀️';
      if (label) label.textContent = 'Light';
    }
  } catch(e) {}
})();