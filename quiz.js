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
          ${curLesson < LESSONS.length - 1 ? `<button class="btn btn-acc" onclick="go(${curLesson + 1}, 'learn')">Next Lesson →</button>` : ''}
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