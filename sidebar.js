// ============ SIDEBAR TAGS ============
function getTagHTML(type) {
  const map = {
    alpha: '<span class="tag tag-alpha">Alphabet</span>',
    num:   '<span class="tag tag-num">Numbers</span>',
    gram:  '<span class="tag tag-gram">Grammar</span>',
    conv:  '<span class="tag tag-conv">Conversation</span>',
    cult:  '<span class="tag tag-cult">Culture</span>',
  };
  return map[type] || '';
}

function getGroupLabel(type) {
  const map = {
    alpha: 'Alphabet Lessons',
    num:   'Numbers',
    gram:  'Grammar Lessons',
    conv:  'Conversational Lessons',
    cult:  'Travel, Culture & History',
  };
  return map[type] || type;
}

// ============ SIDEBAR ============
function buildSidebar() {
  const order = ['alpha','num','gram','conv','cult'];
  const byType = {};
  order.forEach(t => byType[t] = []);
  LESSONS.forEach((l, i) => {
    const t = l.type;
    if (byType[t]) byType[t].push({l, i});
  });

  let html = '';
  order.forEach(type => {
    if (!byType[type] || !byType[type].length) return;
    html += `<div class="section-group"><div class="section-group-label">${getGroupLabel(type)}</div>`;
    byType[type].forEach(({l, i}) => {
      html += `<div class="lesson-link${i === curLesson ? ' active' : ''}" id="link-${i}" onclick="go(${i})">
        <div class="lnum">${l.num}</div>
        <span style="flex:1;line-height:1.3">${l.title}</span>
        ${getTagHTML(l.type)}
      </div>`;
    });
    html += '</div>';
  });
  document.getElementById('sidebarContent').innerHTML = html;
}

// ============ NAVIGATION ============
function go(i) {
  curLesson = i;
  qz = {q:0, score:0, answered:false, done:false};
  buildSidebar();
  const l = LESSONS[i];
  document.getElementById('topbarTitle').textContent = l.title;
  const badge = document.getElementById('topbarBadge');
  if (badge) badge.innerHTML = getTagHTML(l.type);
  switchTab(curTab);
  window.scrollTo(0, 0);
}

function switchTab(t) {
  curTab = t;
  document.querySelectorAll('.tab').forEach(el => el.classList.toggle('active', el.dataset.tab === t));
  document.querySelectorAll('.section').forEach(el => el.classList.toggle('active', el.id === 'sec-' + t));
  if (t === 'learn')   renderLearn();
  if (t === 'vocab')   renderVocab();
  if (t === 'culture') renderCulture();
  if (t === 'quiz')    renderQuiz();
}