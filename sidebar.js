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

const LEVELS = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

function getLevel(lesson) {
  return (lesson.level || 'beginner').toLowerCase();
}

function getLevelLabel(levelId) {
  const level = LEVELS.find(l => l.id === levelId);
  return level ? level.label : 'Beginner';
}

function setLevel(level) {
  const nextLevel = (level || 'beginner').toLowerCase();
  if (!LEVELS.find(l => l.id === nextLevel)) return;
  if (curLevel === nextLevel) return;

  curLevel = nextLevel;
  qz = {q: 0, score: 0, answered: false, done: false};

  if (getLevel(LESSONS[curLesson]) === curLevel) {
    buildSidebar();
    switchTab(curTab);
    return;
  }

  const firstLessonInLevel = LESSONS.findIndex(l => getLevel(l) === curLevel);
  if (firstLessonInLevel === -1) {
    buildSidebar();
    document.getElementById('topbarTitle').textContent = 'No lessons yet';
    document.getElementById('topbarBadge').innerHTML = '';
    return;
  }
  go(firstLessonInLevel);
}

function buildLevelNav() {
  let h = '<div class="level-nav"><div class="level-nav-label">Learning Level</div><div class="level-pill-wrap">';
  LEVELS.forEach(level => {
    const active = level.id === curLevel ? ' active' : '';
    h += `<button class="level-pill${active}" onclick="setLevel('${level.id}')">${level.label}</button>`;
  });
  h += '</div></div>';
  return h;
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
  const levelLessons = LESSONS
    .map((l, i) => ({l, i}))
    .filter(item => getLevel(item.l) === curLevel);

  levelLessons.forEach(({l, i}) => {
    const t = l.type;
    if (byType[t]) byType[t].push({l, i});
  });

  let html = buildLevelNav();
  let hasLessons = false;
  order.forEach(type => {
    if (!byType[type] || !byType[type].length) return;
    hasLessons = true;
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

  if (!hasLessons) {
    html += `<div class="empty-level">
      <div class="empty-level-title">${getLevelLabel(curLevel)} Lessons</div>
      <p>There are no lessons for this level yet. Add lessons with <code>level: '${curLevel}'</code> in <code>data.js</code>.</p>
    </div>`;
  }

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