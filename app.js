// ============ SEARCH ============
function filterLessons(val) {
  const v = val.toLowerCase();
  document.querySelectorAll('.lesson-link').forEach((el, i) => {
    const l = LESSONS[i];
    const match = !v
      || l.title.toLowerCase().includes(v)
      || l.fa.includes(v)
      || (l.num + '').toLowerCase().includes(v);
    el.style.display = match ? 'flex' : 'none';
  });
}

// ============ INIT ============
go(0);
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));