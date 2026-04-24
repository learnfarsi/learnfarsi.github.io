// ============ PAGES ============
let curPage = 'welcome'; // 'welcome' | 'about' | null (lesson active)

function goPage(id) {
  curPage = id;
  qz = {q:0, score:0, answered:false, done:false};

  // Update topbar
  document.getElementById('topbarTitle').textContent = id === 'welcome' ? 'Welcome' : 'About';
  const badge = document.getElementById('topbarBadge');
  if (badge) badge.innerHTML = '';

  // Hide tabs, show only sec-learn
  document.querySelector('.tabs').style.display = 'none';
  document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
  document.getElementById('sec-learn').classList.add('active');

  buildSidebar();

  if (id === 'welcome') renderWelcome();
  if (id === 'about')   renderAbout();

  window.scrollTo(0, 0);
}

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
  const theoreticalTypes = ['alpha','num','gram','cult'];
  const practiceTypes    = ['conv'];
  const order            = ['alpha','num','gram','cult'];

  function buildGroup(type, lessons) {
    if (!lessons.length) return '';
    let h = `<div class="section-group"><div class="section-group-label">${getGroupLabel(type)}</div>`;
    lessons.forEach(({l, i}) => {
      const isActive = curPage === null && i === curLesson;
      h += `<div class="lesson-link${isActive ? ' active' : ''}" id="link-${i}" onclick="go(${i})">
        <div class="lnum">${l.num}</div>
        <span style="flex:1;line-height:1.3">${l.title}</span>
        ${getTagHTML(l.type)}
      </div>`;
    });
    h += '</div>';
    return h;
  }

  const levelLessons = LESSONS
    .map((l, i) => ({l, i}))
    .filter(item => getLevel(item.l) === curLevel);

  // Split by section
  const byType = {};
  [...theoreticalTypes, ...practiceTypes].forEach(t => byType[t] = []);
  levelLessons.forEach(({l, i}) => {
    if (byType[l.type]) byType[l.type].push({l, i});
  });

  // Page links
  let html = `<div class="section-group pg-link-group">
    <div class="lesson-link${curPage === 'welcome' ? ' active' : ''}" onclick="goPage('welcome')">
      <div class="lnum">🏠</div>
      <span style="flex:1;line-height:1.3">Welcome</span>
    </div>
    <div class="lesson-link${curPage === 'about' ? ' active' : ''}" onclick="goPage('about')">
      <div class="lnum">👤</div>
      <span style="flex:1;line-height:1.3">About</span>
    </div>
  </div>
  <div class="pg-sidebar-divider"></div>`;

  html += buildLevelNav();

  // — THEORETICAL LESSONS —
  const hasTheory = theoreticalTypes.some(t => byType[t] && byType[t].length);
  if (hasTheory) {
    html += `<div class="sidebar-section-heading">
      <span class="ssh-dot ssh-dot-theory"></span>Theoretical Lessons
    </div>`;
    order.forEach(type => {
      if (byType[type] && byType[type].length) html += buildGroup(type, byType[type]);
    });
  }

  // — REAL SITUATIONAL PRACTICE —
  const hasPractice = practiceTypes.some(t => byType[t] && byType[t].length);
  if (hasPractice) {
    html += `<div class="pg-sidebar-divider" style="margin:.5rem 0"></div>
    <div class="sidebar-section-heading">
      <span class="ssh-dot ssh-dot-practice"></span>Real Situational Practice
    </div>`;
    practiceTypes.forEach(type => {
      if (byType[type] && byType[type].length) html += buildGroup(type, byType[type]);
    });
  }

  if (!hasTheory && !hasPractice) {
    html += `<div class="empty-level">
      <div class="empty-level-title">${getLevelLabel(curLevel)} Lessons</div>
      <p>There are no lessons for this level yet. Add lessons with <code>level: '${curLevel}'</code> in <code>data.js</code>.</p>
    </div>`;
  }

  document.getElementById('sidebarContent').innerHTML = html;
}

// ============ NAVIGATION ============
function go(i) {
  curPage = null; // leaving a page, entering a lesson
  curLesson = i;
  qz = {q:0, score:0, answered:false, done:false};
  buildSidebar();
  const l = LESSONS[i];
  document.getElementById('topbarTitle').textContent = l.title;
  const badge = document.getElementById('topbarBadge');
  if (badge) badge.innerHTML = getTagHTML(l.type);
  // restore tabs
  document.querySelector('.tabs').style.display = 'flex';
  switchTab('learn');
  window.scrollTo(0, 0);
}

function switchTab(t) {
  curTab = t;
  
  // Hide vocab tab for 'cult' type lessons
  const vocabTab = document.querySelector('[data-tab="vocab"]');
  const currentLesson = LESSONS[curLesson];
  if (currentLesson.type === 'cult') {
    vocabTab.style.display = 'none';
    // If vocab tab was active, switch to learn
    if (t === 'vocab') t = 'learn';
  } else {
    vocabTab.style.display = 'block';
  }
  
  document.querySelectorAll('.tab').forEach(el => el.classList.toggle('active', el.dataset.tab === t));
  document.querySelectorAll('.section').forEach(el => el.classList.toggle('active', el.id === 'sec-' + t));
  if (t === 'learn')   renderLearn();
  if (t === 'vocab')   renderVocab();
  if (t === 'culture') renderCulture();
  if (t === 'quiz')    renderQuiz();
}
