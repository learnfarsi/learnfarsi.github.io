// ============ STATE ============
const COLORS = ['#c8703a','#5b9bd5','#6baa7a','#9b7fc8','#d4a843'];
let curLesson = 0;
let curTab = 'learn';
let qz = {q:0, score:0, answered:false, done:false};
let isLight = true;

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

// ============ RENDER LEARN ============
function renderLearn() {
  const l = LESSONS[curLesson];
  let h = `<div class="intro-card"><h2>${l.title}</h2><p>${l.intro}</p></div>`;

  // ---- ALPHABET: letter cards ----
  if (l.chars) {
    h += `<div class="label">New Letters</div><div class="char-grid">`;
    l.chars.forEach((c, i) => {
      const col = COLORS[i];
      h += `<div class="char-card">
        <div class="c-main" style="color:${col}">${c.l}</div>
        <div class="c-name" style="color:${col}">${c.n}</div>
        <div class="c-roman">${c.r}</div>
        ${c.nc ? '<div class="c-nc">★ non-connector</div>' : ''}
        <div class="c-desc">${c.d}</div>
      </div>`;
    });
    h += `</div>`;

    h += `<div class="label">Letter Forms in Words</div>
    <div class="forms-wrap"><table class="forms">
    <tr><th>Letter</th><th>Standalone</th><th>Initial (start)</th><th>Medial (middle)</th><th>Final (end)</th></tr>`;
    l.forms.forEach((f, i) => {
      const col = COLORS[i];
      h += `<tr>
        <td><span style="color:${col};font-size:18px">${f.c}</span> ${f.n} ${f.nc ? '<span class="nc-badge">non-connector</span>' : ''}</td>
        <td><span class="f-form" style="color:${col}">${f.s}</span></td>
        <td><span class="f-form" style="color:${col}">${f.i}</span></td>
        <td><span class="f-form" style="color:${col}">${f.m}</span></td>
        <td><span class="f-form" style="color:${col}">${f.f}</span></td>
      </tr>`;
      if (f.tip) h += `<tr class="tip-row"><td colspan="5">⚠ ${f.tip}</td></tr>`;
    });
    h += `</table></div>`;
    h += `<div class="vowel-box"><strong>Short vowels (حرکت):</strong> Usually omitted in everyday writing, but shown in learning materials:
    <br><strong>َ</strong> = "a" (above) · <strong>ِ</strong> = "e" (below) · <strong>ُ</strong> = "o" (above) · Example: <span style="font-size:18px;color:var(--accent2)">پِدَر</span> (pedar = father)</div>`;
  }

  // ---- PHRASES (conv lessons — learn tab only) ----
  if (l.phrases && l.type !== 'cult') {
    h += `<div class="label">Key Phrases</div>
    <div class="phrase-list">
    <div class="phrase-item" style="font-size:11px;font-weight:500;color:var(--text3)">
      <span style="text-align:right">Persian</span><span>Pronunciation</span><span>Meaning</span>
    </div>`;
    l.phrases.forEach(p => {
      h += `<div class="phrase-item"><span class="p-fa">${p.fa}</span><span class="p-ro">${p.ro}</span><span class="p-en">${p.en}</span></div>`;
    });
    h += `</div>`;
  }

  // ---- DAYS OF THE WEEK ----
  if (l.days) {
    h += `<div class="label">Days of the Week — روزهای هفته</div><div class="phrase-list">`;
    l.days.forEach(d => {
      h += `<div class="phrase-item"><span class="p-fa">${d.fa}</span><span class="p-ro">${d.ro}</span><span class="p-en">${d.en}</span></div>`;
    });
    h += `</div>`;
    h += `<div class="vowel-box" style="margin-bottom:1.5rem"><strong>Note:</strong> Days are named numerically around شنبه (shanbe = Saturday).
    یکشنبه = one-shanbe (Sunday) · دوشنبه = two-shanbe (Monday) · سه‌شنبه = three-shanbe (Tuesday) etc.
    Only جمعه (Friday) has a separate name, from Arabic جمعه (jumu'a = gathering).</div>`;
  }

  // ---- TIME WORDS ----
  if (l.timeWords) {
    h += `<div class="label">Time Vocabulary</div><div class="phrase-list">`;
    l.timeWords.forEach(t => {
      h += `<div class="phrase-item"><span class="p-fa">${t.fa}</span><span class="p-ro">${t.ro}</span><span class="p-en">${t.en}</span></div>`;
    });
    h += `</div>`;
  }

  // ---- NUMBERS 1–10 ----
  if (l.nums1to10) {
    h += `<div class="label">Numbers 1–10</div><div class="num-box"><div class="num-grid">`;
    l.nums1to10.forEach(n => {
      h += `<div class="num-card"><div class="nf">${n.f}</div><div class="na">${n.a}</div><div class="nr">${n.r}</div><div class="nv">${n.v}</div></div>`;
    });
    h += `</div><p style="font-size:12px;color:var(--text3);margin-top:.75rem">Row: Persian word · Persian numeral · romanisation · Western numeral</p></div>`;
  }

  // ---- NUMBERS 11–100 ----
  if (l.nums11to100) {
    h += `<div class="label">Numbers 11–100</div><div class="num-box"><div class="num-grid">`;
    l.nums11to100.forEach(n => {
      h += `<div class="num-card"><div class="nf" style="font-size:16px">${n.f}</div><div class="na">${n.a}</div><div class="nr">${n.r}</div><div class="nv">${n.v}</div></div>`;
    });
    h += `</div></div>`;
    if (l.numRules) {
      h += `<div class="label">Building Rules</div>`;
      l.numRules.forEach(r => {
        h += `<div class="num-rule"><strong>${r.title}</strong><br>${r.body}</div>`;
      });
    }
  }

  // ---- NUMBERS 100–1000 ----
  if (l.nums100s) {
    h += `<div class="label">Hundreds & Thousands</div><div class="num-box"><div class="num-grid">`;
    l.nums100s.forEach(n => {
      h += `<div class="num-card"><div class="nf" style="font-size:15px">${n.f}</div><div class="na">${n.a}</div><div class="nr" style="font-size:10px">${n.r}</div><div class="nv">${n.v}</div></div>`;
    });
    h += `</div></div>`;
    if (l.numRules) {
      h += `<div class="label">Rules & Patterns</div>`;
      l.numRules.forEach(r => {
        h += `<div class="num-rule"><strong>${r.title}</strong><br>${r.body}</div>`;
      });
    }
  }

  // ---- GRAMMAR: VERB CONJUGATION ----
  if (l.verbs) {
    l.verbs.forEach(v => {
      h += `<div class="gram-box"><h3>${v.inf} &nbsp;(${v.ro}) — "${v.en}"</h3>`;
      h += `<div class="gram-note">
        <strong>Present stem:</strong> <span class="stem-pill">${v.pstem}</span> (${v.pstemRo})
        &nbsp;·&nbsp;
        <strong>Past stem:</strong> <span class="stem-pill">${v.pastStem}</span> (${v.pastStemRo})
        <br><br>${v.note}
      </div>`;

      // Two-column: present | past
      h += `<div class="conj-grid">`;

      // Present tense
      h += `<div><div class="label" style="margin-bottom:.5rem">Present — حال</div>
      <table class="conj-table">
        <tr><th>Pronoun</th><th>Persian</th><th>Roman</th></tr>`;
      v.present.forEach(r => {
        h += `<tr>
          <td class="ct-pron">${r.p}<br><span style="font-size:10px">${r.pr} · ${r.e}</span></td>
          <td class="ct-fa">${r.f}</td>
          <td class="ct-ro">${r.ro}</td>
        </tr>`;
      });
      h += `</table></div>`;

      // Past tense
      h += `<div><div class="label" style="margin-bottom:.5rem">Past — گذشته</div>
      <table class="conj-table">
        <tr><th>Pronoun</th><th>Persian</th><th>Roman</th></tr>`;
      v.past.forEach(r => {
        h += `<tr>
          <td class="ct-pron">${r.p}<br><span style="font-size:10px">${r.pr}</span></td>
          <td class="ct-fa">${r.f}</td>
          <td class="ct-ro">${r.ro}</td>
        </tr>`;
      });
      h += `</table></div></div>`; // end conj-grid

      // Spoken short forms (بودن only)
      if (v.spoken) {
        h += `<div style="margin-top:1.25rem"><div class="label" style="margin-bottom:.5rem">Spoken short forms — most common in daily speech</div>
        <table class="conj-table">
          <tr><th>Pronoun</th><th>Suffix</th><th>Example</th><th>Meaning</th></tr>`;
        v.spoken.forEach(r => {
          h += `<tr>
            <td class="ct-pron">${r.p} · ${r.e}</td>
            <td class="ct-fa" style="color:var(--accent2)">${r.suf} <span class="ct-ro">${r.sRo}</span></td>
            <td class="ct-fa" style="color:var(--gold)">${r.ex} <span class="ct-ro">(${r.exRo})</span></td>
            <td style="font-size:12px;color:var(--text2)">${r.exEn}</td>
          </tr>`;
        });
        h += `</table></div>`;
      }
      h += `</div>`; // end gram-box
    });
  }

  // ---- DIALOGUE ----
  if (l.dialogue) {
    h += `<div class="label">Sample Conversation</div>
    <div class="dialogue">
    <div class="dlg-meta">${l.dialogue.title}</div>`;
    l.dialogue.lines.forEach(line => {
      const right = line.who === 'B';
      h += `<div class="dlg-line${right ? ' r' : ''}">
        <div class="dlg-name ${line.who === 'A' ? 'a' : 'b'}">${line.name}</div>
        <div class="dlg-bubble">
          <div class="dlg-fa">${line.fa}</div>
          <div class="dlg-ro">${line.ro}</div>
          <div class="dlg-en">${line.en}</div>
        </div>
      </div>`;
    });
    h += `</div>`;
  }

  // ---- TRAVEL TIPS ----
  if (l.tips) {
    h += `<div class="label">Travel Tips</div><div class="info-grid">`;
    l.tips.forEach(t => {
      h += `<div class="info-box"><h4>${t.icon} ${t.title}</h4><p>${t.body}</p></div>`;
    });
    h += `</div>`;
    if (l.travelPhrases) {
      h += `<div class="label">Essential Traveller Phrases</div><div class="phrase-list">`;
      l.travelPhrases.forEach(p => {
        h += `<div class="phrase-item"><span class="p-fa">${p.fa}</span><span class="p-ro">${p.ro}</span><span class="p-en">${p.en}</span></div>`;
      });
      h += `</div>`;
    }
  }

  // ---- TIMELINE ----
  if (l.timeline) {
    h += `<div class="label">Timeline of Persian History</div><div class="timeline">`;
    l.timeline.forEach(t => {
      h += `<div class="tl-item">
        <div class="tl-year">${t.year}</div>
        <div class="tl-title">${t.title}</div>
        <div class="tl-body">${t.body}</div>
        <div class="tl-fa">${t.fa}</div>
      </div>`;
    });
    h += `</div>`;
  }

  // ---- SEASONS / WEATHER ----
  if (l.seasons) {
    h += `<div class="label">Seasons & Climate</div><div class="weather-grid">`;
    l.seasons.forEach(s => {
      h += `<div class="wth-card">
        <div style="font-size:20px;margin-bottom:4px">${s.icon}</div>
        <div class="wth-season">${s.s}</div>
        <div class="wth-temp">${s.temp}</div>
        <div class="wth-desc" style="font-style:italic;color:var(--blue)">${s.r}</div>
        <div class="wth-desc">${s.desc}</div>
      </div>`;
    });
    h += `</div>`;
    if (l.weatherPhrases) {
      h += `<div class="label">Weather Phrases</div><div class="phrase-list">`;
      l.weatherPhrases.forEach(p => {
        h += `<div class="phrase-item"><span class="p-fa">${p.fa}</span><span class="p-ro">${p.ro}</span><span class="p-en">${p.en}</span></div>`;
      });
      h += `</div>`;
    }
  }

  // ---- CITIES ----
  if (l.cities) {
    h += `<div class="label">Cities</div><div class="city-grid">`;
    l.cities.forEach(c => {
      h += `<div class="city-card">
        <div class="city-fa">${c.fa}</div>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <div class="city-sights">📍 ${c.sights}</div>
      </div>`;
    });
    h += `</div>`;
    if (l.sightPhrases) {
      h += `<div class="label">Useful Phrases at Sights</div><div class="phrase-list">`;
      l.sightPhrases.forEach(p => {
        h += `<div class="phrase-item"><span class="p-fa">${p.fa}</span><span class="p-ro">${p.ro}</span><span class="p-en">${p.en}</span></div>`;
      });
      h += `</div>`;
    }
  }

  document.getElementById('sec-learn').innerHTML = h;
}

// ============ RENDER VOCAB ============
function renderVocab() {
  const l = LESSONS[curLesson];
  let h = '';

  // Conversation lessons: vocabSections array
  if (l.vocabSections) {
    l.vocabSections.forEach(sec => {
      h += `<div class="vsec-title">${sec.title}</div><div class="vocab-list">`;
      sec.items.forEach((v, i) => {
        h += `<div class="vocab-item">
          <div class="v-fa" style="color:${COLORS[i % 5]}">${v.fa}</div>
          <div style="flex:1">
            <div class="v-ro">${v.ro}</div>
            <div class="v-en">${v.en}</div>
          </div>
        </div>`;
      });
      h += `</div>`;
    });
  }

  // Standard vocab (alphabet + number lessons)
  if (l.vocab && !l.vocabSections) {
    h += `<div class="label">Vocabulary</div><div class="vocab-list">`;
    l.vocab.forEach((v, i) => {
      h += `<div class="vocab-item">
        <div class="v-fa" style="color:${COLORS[i % 5]}">${v.fa}</div>
        <div style="flex:1">
          <div class="v-ro">${v.ro}</div>
          <div class="v-en">${v.en}</div>
        </div>
      </div>`;
    });
    h += `</div>`;
  }

  // Sentences
  if (l.sentences) {
    h += `<div class="label">Sentences</div><div class="sent-list">`;
    l.sentences.forEach(s => {
      h += `<div class="sent-item">
        <div class="s-fa">${s.fa}</div>
        <div class="s-ro">${s.ro}</div>
        <div class="s-en">${s.en}</div>
      </div>`;
    });
    h += `</div>`;
  }

  if (!h) {
    h = `<div style="color:var(--text3);font-size:14px;padding:2rem 0">Vocabulary is integrated into the Learn tab for this lesson.</div>`;
  }

  document.getElementById('sec-vocab').innerHTML = h;
}

// ============ RENDER CULTURE ============
function renderCulture() {
  const c = LESSONS[curLesson].culture;
  document.getElementById('sec-culture').innerHTML = `
    <div class="cult-card">
      <div class="cult-hdr">
        <span style="font-size:18px">${c.icon}</span>
        <span style="font-size:11px;padding:2px 8px;border-radius:3px;background:var(--bg3);color:var(--text3)">${c.tag}</span>
        <h3>${c.title}</h3>
      </div>
      <div class="cult-body">
        <div class="cult-fa">${c.fa}</div>
        <div class="cult-ro">${c.ro}</div>
        <div class="cult-en">${c.en}</div>
        <div class="cult-txt">${c.body}</div>
      </div>
    </div>`;
}

// ============ RENDER QUIZ ============
function renderQuiz() {
  const l  = LESSONS[curLesson];
  const qs = l.quiz;
  if (!qs || !qs.length) {
    document.getElementById('sec-quiz').innerHTML = `<div style="color:var(--text3);padding:2rem 0;font-size:14px">No quiz for this lesson yet.</div>`;
    return;
  }

  if (qz.done) {
    const pct = Math.round((qz.score / qs.length) * 100);
    const msg = pct >= 80
      ? 'آفرین! (Āfarin!) Excellent work. Ready for the next lesson!'
      : pct >= 60
        ? 'خوب! (Khub!) Good effort. Review what you missed and try again.'
        : 'ادامه بده! (Edāme bede!) Keep going — practice makes perfect!';
    document.getElementById('sec-quiz').innerHTML = `
      <div class="score-board">
        <div class="sc-big">${qz.score}/${qs.length}</div>
        <div class="sc-lbl">${pct}%</div>
        <div style="font-size:36px;margin:1rem 0">${pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '📖'}</div>
        <div class="sc-msg">${msg}</div>
        <div style="display:flex;gap:10px;justify-content:center">
          <button class="btn btn-sec" onclick="resetQuiz()">Try Again</button>
          ${curLesson < LESSONS.length - 1 ? `<button class="btn btn-acc" onclick="go(${curLesson + 1})">Next Lesson →</button>` : ''}
        </div>
      </div>`;
    return;
  }

  const q    = qs[qz.q];
  const dots = qs.map((_, i) => `<div class="qp-dot ${i < qz.q ? 'done' : i === qz.q ? 'cur' : ''}"></div>`).join('');
  document.getElementById('sec-quiz').innerHTML = `
    <div class="quiz-progress">${dots}</div>
    <div class="quiz-card">
      <div class="q-num">Question ${qz.q + 1} of ${qs.length}</div>
      <div class="q-text">${q.q}</div>
      ${q.c ? `<div class="q-char">${q.c}</div>` : ''}
      <div class="q-opts">
        ${q.opts.map((o, i) => `<button class="q-opt" id="qo${i}" onclick="answerQ(${i})">${o}</button>`).join('')}
      </div>
      <div class="q-fb" id="qfb"></div>
    </div>
    <div class="q-next"><button class="btn btn-acc" id="qnext" onclick="nextQ()" style="display:none">Next →</button></div>`;
}

function answerQ(chosen) {
  if (qz.answered) return;
  qz.answered = true;
  const q  = LESSONS[curLesson].quiz[qz.q];
  const ok = q.a === chosen;
  if (ok) qz.score++;
  document.querySelectorAll('.q-opt').forEach((b, i) => {
    b.disabled = true;
    if (i === q.a)              b.classList.add('ok');
    else if (i === chosen && !ok) b.classList.add('no');
  });
  const fb = document.getElementById('qfb');
  fb.className = 'q-fb show ' + (ok ? 'ok' : 'no');
  fb.textContent = ok ? '✓ Correct! آفرین!' : '✗ Correct answer: "' + q.opts[q.a] + '"';
  document.getElementById('qnext').style.display = 'inline-block';
}

function nextQ() {
  qz.q++;
  qz.answered = false;
  if (qz.q >= LESSONS[curLesson].quiz.length) qz.done = true;
  renderQuiz();
}

function resetQuiz() {
  qz = {q:0, score:0, answered:false, done:false};
  renderQuiz();
}

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
