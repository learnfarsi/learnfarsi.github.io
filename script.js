{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let curLesson = 0;\
let curTab = 'learn';\
let qz = \{q:0,score:0,answered:false,done:false\};\
\
function getTagHTML(type)\{\
  if(type==='alpha') return '<span class="tag tag-alpha">Alphabet</span>';\
  if(type==='conv') return '<span class="tag tag-conv">Conversation</span>';\
  if(type==='cult') return '<span class="tag tag-cult">Travel & Culture</span>';\
  if(type==='hist') return '<span class="tag tag-hist">History</span>';\
  return '';\
\}\
\
function buildSidebar()\{\
  const groups = \{alpha:'Alphabet Lessons',conv:'Conversational Lessons',cult:'Travel, Culture & History'\};\
  const byType = \{alpha:[],conv:[],cult:[]\};\
  LESSONS.forEach((l,i)=>\{const t=l.type==='hist'?'cult':l.type; byType[t].push(\{l,i\})\});\
  let html='';\
  Object.keys(groups).forEach(type=>\{\
    if(!byType[type].length) return;\
    html+=`<div class="section-group"><div class="section-group-label">$\{groups[type]\}</div>`;\
    byType[type].forEach((\{l,i\})=>\{\
      html+=`<div class="lesson-link $\{i===curLesson?'active':''\}" id="link-$\{i\}" onclick="go($\{i\})">\
        <div class="num">$\{l.num\}</div>\
        <span style="flex:1">$\{l.title\}</span>\
        $\{getTagHTML(l.type)\}\
      </div>`;\
    \});\
    html+='</div>';\
  \});\
  document.getElementById('sidebarContent').innerHTML=html;\
\}\
\
function go(i)\{\
  curLesson=i;\
  qz=\{q:0,score:0,answered:false,done:false\};\
  buildSidebar();\
  const l=LESSONS[i];\
  document.getElementById('topbarTitle').textContent=l.title;\
  document.getElementById('topbarBadge').innerHTML=getTagHTML(l.type);\
  document.getElementById('topbarBadge').className='topbar-badge';\
  switchTab(curTab);\
\}\
\
function switchTab(t)\{\
  curTab=t;\
  document.querySelectorAll('.tab').forEach(el=>el.classList.toggle('active',el.dataset.tab===t));\
  document.querySelectorAll('.section').forEach(el=>el.classList.toggle('active',el.id==='sec-'+t));\
  if(t==='learn') renderLearn();\
  if(t==='vocab') renderVocab();\
  if(t==='culture') renderCulture();\
  if(t==='quiz') renderQuiz();\
\}\
\
function renderLearn()\{\
  const l=LESSONS[curLesson];\
  let h=`<div class="intro-card"><h2>$\{l.title\}</h2><p>$\{l.intro\}</p></div>`;\
\
  if(l.chars)\{\
    h+=`<div class="label">New Letters</div>\
    <div class="char-grid">`;\
    l.chars.forEach((c,i)=>\{\
      const col=COLORS[i];\
      h+=`<div class="char-card">\
        <div class="c-main" style="color:$\{col\}">$\{c.l\}</div>\
        <div class="c-name" style="color:$\{col\}">$\{c.n\}</div>\
        <div class="c-roman">$\{c.r\}</div>\
        $\{c.nc?'<div class="c-nc">\uc0\u9733  non-connector</div>':''\}\
        <div class="c-desc">$\{c.d\}</div>\
      </div>`;\
    \});\
    h+=`</div>`;\
\
    h+=`<div class="label">Letter Forms in Words</div>\
    <div class="forms-wrap"><table class="forms">\
    <tr><th>Letter</th><th>Standalone</th><th>Initial (start)</th><th>Medial (middle)</th><th>Final (end)</th></tr>`;\
    l.forms.forEach((f,i)=>\{\
      const col=COLORS[i];\
      h+=`<tr>\
        <td><span style="color:$\{col\};font-size:18px">$\{f.c\}</span> $\{f.n\} $\{f.nc?'<span class="nc-badge">non-connector</span>':''\}</td>\
        <td><span class="f-form" style="color:$\{col\}">$\{f.s\}</span></td>\
        <td><span class="f-form" style="color:$\{col\}">$\{f.i\}</span></td>\
        <td><span class="f-form" style="color:$\{col\}">$\{f.m\}</span></td>\
        <td><span class="f-form" style="color:$\{col\}">$\{f.f\}</span></td>\
      </tr>`;\
      if(f.tip) h+=`<tr class="tip-row"><td colspan="5">\uc0\u9888  $\{f.tip\}</td></tr>`;\
    \});\
    h+=`</table></div>\
    <div class="vowel-box"><strong>Short vowels (\uc0\u1581 \u1585 \u1705 \u1578 ):</strong> Usually omitted in everyday text, but shown in learning materials:\
    <br><strong>\uc0\u1614 </strong> = "a" (above) \'b7 <strong>\u1616 </strong> = "e" (below) \'b7 <strong>\u1615 </strong> = "o" (above) \'b7 Example: <span style="font-size:18px;color:var(--accent2)">\u1662 \u1616 \u1583 \u1614 \u1585 </span> (pedar = father)</div>`;\
  \}\
\
  if(l.phrases)\{\
    h+=`<div class="label">Key Phrases</div><div class="phrase-list">\
    <div class="phrase-item" style="font-size:11px;color:var(--text3);font-weight:500"><span style="text-align:right">Persian</span><span>Pronunciation</span><span>Meaning</span></div>`;\
    l.phrases.forEach(p=>\{\
      h+=`<div class="phrase-item"><span class="phrase-fa">$\{p.fa\}</span><span class="phrase-ro">$\{p.ro\}</span><span class="phrase-en">$\{p.en\}</span></div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.numbers)\{\
    h+=`<div class="label">Numbers \'97 \uc0\u1575 \u1593 \u1583 \u1575 \u1583 </div>\
    <div class="char-grid" style="grid-template-columns:repeat(4,1fr)">`;\
    l.numbers.forEach((n,i)=>\{\
      const col=COLORS[i%5];\
      h+=`<div class="char-card">\
        <div class="c-main" style="color:$\{col\};font-size:28px">$\{n.n\}</div>\
        <div class="c-name" style="color:$\{col\}">$\{n.r\}</div>\
        <div class="c-roman" style="font-size:16px;font-weight:500">$\{n.v\}</div>\
      </div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.jobs)\{\
    h+=`<div class="label">Jobs & Professions</div><div class="phrase-list">`;\
    l.jobs.forEach(j=>\{\
      h+=`<div class="phrase-item"><span class="phrase-fa">$\{j.fa\}</span><span class="phrase-ro">$\{j.ro\}</span><span class="phrase-en">$\{j.en\}</span></div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.family)\{\
    h+=`<div class="label">Family Words \'97 \uc0\u1582 \u1575 \u1606 \u1608 \u1575 \u1583 \u1607 </div><div class="phrase-list">`;\
    l.family.forEach(f=>\{\
      h+=`<div class="phrase-item"><span class="phrase-fa">$\{f.fa\}</span><span class="phrase-ro">$\{f.ro\}</span><span class="phrase-en">$\{f.en\}</span></div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.food)\{\
    h+=`<div class="label">Persian Foods</div><div class="phrase-list">`;\
    l.food.forEach(f=>\{\
      h+=`<div class="phrase-item"><span class="phrase-fa">$\{f.fa\}</span><span class="phrase-ro">$\{f.ro\}</span><span class="phrase-en">$\{f.en\}</span></div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.weather_phrases)\{\
    h+=`<div class="label">Weather Phrases</div><div class="phrase-list">`;\
    l.weather_phrases.forEach(p=>\{\
      h+=`<div class="phrase-item"><span class="phrase-fa">$\{p.fa\}</span><span class="phrase-ro">$\{p.ro\}</span><span class="phrase-en">$\{p.en\}</span></div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.tips)\{\
    h+=`<div class="label">Travel Tips</div><div class="info-grid">`;\
    l.tips.forEach(t=>\{\
      h+=`<div class="info-box"><h4>$\{t.icon\} $\{t.title\}</h4><p>$\{t.body\}</p></div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.timeline)\{\
    h+=`<div class="label">Timeline of Persian History</div>\
    <div class="timeline">`;\
    l.timeline.forEach(t=>\{\
      h+=`<div class="tl-item">\
        <div class="tl-year">$\{t.year\}</div>\
        <div class="tl-title">$\{t.title\}</div>\
        <div class="tl-body">$\{t.body\}</div>\
        <div class="tl-fa">$\{t.fa\}</div>\
      </div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.seasons)\{\
    h+=`<div class="label">Seasons & Climate</div>\
    <div class="weather-grid">`;\
    l.seasons.forEach(s=>\{\
      h+=`<div class="wth-card">\
        <div class="icon">$\{s.icon\}</div>\
        <div class="season">$\{s.s\}</div>\
        <div class="temp">$\{s.temp\}</div>\
        <div class="desc" style="font-size:12px;font-style:italic;color:var(--blue)">$\{s.r\}</div>\
        <div class="desc">$\{s.desc\}</div>\
      </div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.cities)\{\
    h+=`<div class="label">Cities</div>\
    <div class="city-grid">`;\
    l.cities.forEach(c=>\{\
      h+=`<div class="city-card">\
        <div class="city-fa">$\{c.fa\}</div>\
        <h3>$\{c.name\}</h3>\
        <p>$\{c.desc\}</p>\
        <div class="sights">\uc0\u55357 \u56525  $\{c.sights\}</div>\
      </div>`;\
    \});\
    h+=`</div>`;\
    if(l.phrases)\{\
      h+=`<div class="label">Useful Phrases at Sights</div><div class="phrase-list">`;\
      l.phrases.forEach(p=>\{\
        h+=`<div class="phrase-item"><span class="phrase-fa">$\{p.fa\}</span><span class="phrase-ro">$\{p.ro\}</span><span class="phrase-en">$\{p.en\}</span></div>`;\
      \});\
      h+=`</div>`;\
    \}\
  \}\
\
  if(l.dialogue)\{\
    h+=`<div class="label">Sample Conversation</div>\
    <div class="dialogue">\
    <div class="dialogue" style="font-size:13px;color:var(--text3);margin-bottom:12px;background:none;border:none;padding:0">$\{l.dialogue.title\}</div>`;\
    l.dialogue.lines.forEach(line=>\{\
      const right=line.who==='B';\
      h+=`<div class="dlg-line $\{right?'right':''\}">\
        <div class="dlg-name $\{line.who==='A'?'a':'b'\}">$\{line.name\}</div>\
        <div class="dlg-bubble">\
          <div class="dlg-fa">$\{line.fa\}</div>\
          <div class="dlg-ro">$\{line.ro\}</div>\
          <div class="dlg-en">$\{line.en\}</div>\
        </div>\
      </div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  document.getElementById('sec-learn').innerHTML=h;\
\}\
\
function renderVocab()\{\
  const l=LESSONS[curLesson];\
  let h='';\
\
  if(l.vocab)\{\
    h+=`<div class="label">Vocabulary</div><div class="vocab-list">`;\
    l.vocab.forEach((v,i)=>\{\
      h+=`<div class="vocab-item">\
        <div class="v-farsi" style="color:$\{COLORS[i%5]\}">$\{v.fa\}</div>\
        <div style="flex:1">\
          <div class="v-roman">$\{v.ro\}</div>\
          <div class="v-meaning">$\{v.en\}</div>\
        </div>\
      </div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(l.sentences)\{\
    h+=`<div class="label">Sentences</div><div class="sent-list">`;\
    l.sentences.forEach(s=>\{\
      h+=`<div class="sent-item">\
        <div class="s-fa">$\{s.fa\}</div>\
        <div class="s-ro">$\{s.ro\}</div>\
        <div class="s-en">$\{s.en\}</div>\
      </div>`;\
    \});\
    h+=`</div>`;\
  \}\
\
  if(!l.vocab && !l.sentences)\{\
    h=`<div style="color:var(--text3);font-size:14px;padding:2rem 0">Vocabulary is integrated into the Learn tab for this lesson.</div>`;\
  \}\
\
  document.getElementById('sec-vocab').innerHTML=h;\
\}\
\
function renderCulture()\{\
  const l=LESSONS[curLesson];\
  const c=l.culture;\
  let h=`<div class="culture-card">\
    <div class="culture-header"><span class="icon">$\{c.icon\}</span>\
    <span style="font-size:11px;padding:2px 8px;border-radius:3px;background:var(--bg);color:var(--text3)">$\{c.tag\}</span>\
    <h3>$\{c.title\}</h3></div>\
    <div class="culture-body">\
      <div class="cult-fa">$\{c.fa\}</div>\
      <div class="cult-ro">$\{c.ro\}</div>\
      <div class="cult-en">$\{c.en\}</div>\
      <div class="cult-body">$\{c.body\}</div>\
    </div>\
  </div>`;\
  document.getElementById('sec-culture').innerHTML=h;\
\}\
\
function renderQuiz()\{\
  const l=LESSONS[curLesson];\
  const qs=l.quiz;\
  if(!qs||!qs.length)\{\
    document.getElementById('sec-quiz').innerHTML=`<div style="color:var(--text3);padding:2rem 0;font-size:14px">No quiz for this lesson yet.</div>`;\
    return;\
  \}\
  if(qz.done)\{\
    const pct=Math.round((qz.score/qs.length)*100);\
    const msg=pct>=80?'\uc0\u1570 \u1601 \u1585 \u1740 \u1606 ! (\u256 farin!) Excellent work. Ready for the next lesson!'\
      :pct>=60?'\uc0\u1582 \u1608 \u1576 ! (Khub!) Good effort. Review what you missed and try again.'\
      :'\uc0\u1575 \u1583 \u1575 \u1605 \u1607  \u1576 \u1583 \u1607 ! (Ed\u257 me bede!) Keep going! Practice makes perfect.';\
    document.getElementById('sec-quiz').innerHTML=`<div class="score-board">\
      <div class="sc-big">$\{qz.score\}/$\{qs.length\}</div>\
      <div class="sc-label">$\{pct\}%</div>\
      <div style="font-size:36px;margin:1rem 0">$\{pct>=80?'\uc0\u55356 \u57119 ':pct>=60?'\u55357 \u56397 ':'\u55357 \u56534 '\}</div>\
      <div class="sc-msg">$\{msg\}</div>\
      <div style="display:flex;gap:10px;justify-content:center">\
        <button class="btn btn-sec" onclick="resetQuiz()">Try Again</button>\
        $\{curLesson<LESSONS.length-1?`<button class="btn btn-acc" onclick="go($\{curLesson+1\})">Next Lesson \uc0\u8594 </button>`:''\}\
      </div>\
    </div>`;\
    return;\
  \}\
  const q=qs[qz.q];\
  const dots=qs.map((_,i)=>`<div class="qp-dot $\{i<qz.q?'done':i===qz.q?'cur':''\}"></div>`).join('');\
  let h=`<div class="quiz-progress">$\{dots\}</div>\
  <div class="quiz-card">\
    <div class="q-label">Question $\{qz.q+1\} of $\{qs.length\}</div>\
    <div class="q-text">$\{q.q\}</div>\
    $\{q.c?`<div class="q-char">$\{q.c\}</div>`:''\}\
    <div class="q-opts">\
      $\{q.opts.map((o,i)=>`<button class="q-opt" id="qo$\{i\}" onclick="answerQ($\{i\})">$\{o\}</button>`).join('')\}\
    </div>\
    <div class="q-feedback" id="qfb"></div>\
  </div>\
  <div class="q-next"><button class="btn btn-acc" id="qnext" onclick="nextQ()" style="display:none">Next \uc0\u8594 </button></div>`;\
  document.getElementById('sec-quiz').innerHTML=h;\
\}\
\
function answerQ(chosen)\{\
  if(qz.answered)return;\
  qz.answered=true;\
  const q=LESSONS[curLesson].quiz[qz.q];\
  const ok=q.a===chosen;\
  if(ok)qz.score++;\
  document.querySelectorAll('.q-opt').forEach((b,i)=>\{\
    b.disabled=true;\
    if(i===q.a)b.classList.add('ok');\
    else if(i===chosen&&!ok)b.classList.add('no');\
  \});\
  const fb=document.getElementById('qfb');\
  fb.className='q-feedback show '+(ok?'ok':'no');\
  fb.textContent=ok?'\uc0\u10003  Correct! \u1570 \u1601 \u1585 \u1740 \u1606 !':'\u10007  Correct answer: "'+q.opts[q.a]+'"';\
  document.getElementById('qnext').style.display='inline-block';\
\}\
\
function nextQ()\{\
  qz.q++;\
  qz.answered=false;\
  if(qz.q>=LESSONS[curLesson].quiz.length)qz.done=true;\
  renderQuiz();\
\}\
\
function resetQuiz()\{\
  qz=\{q:0,score:0,answered:false,done:false\};\
  renderQuiz();\
\}\
\
function filterLessons(val)\{\
  const v=val.toLowerCase();\
  document.querySelectorAll('.lesson-link').forEach((el,i)=>\{\
    const l=LESSONS[i];\
    const match=!v||l.title.toLowerCase().includes(v)||l.fa.includes(v)||(l.num+'').toLowerCase().includes(v);\
    el.style.display=match?'flex':'none';\
  \});\
\}\
\
// Init\
go(0);\
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>switchTab(t.dataset.tab)));}