// ============ RENDER WELCOME ============
function renderWelcome() {
  document.getElementById('sec-learn').innerHTML = `

    <div class="pg-hero">
      <svg class="pg-calligraphy-svg pg-fade-up" style="animation-delay:.05s"
           viewBox="0 0 558 234" xmlns="http://www.w3.org/2000/svg" aria-label="فارسی">

        <!-- ف body (rightmost — drawn first in RTL order) -->
        <path class="pg-calligraphy-path" pathLength="1"
              style="--draw-delay:.1s;--fill-delay:3.6s;fill-rule:evenodd"
              d="M428.977448,118.049347
C433.960541,110.613342 438.041168,102.779770 443.930267,96.697174
C450.992554,89.402817 459.150238,91.373245 463.799255,100.533806
C469.975861,112.704201 470.947052,126.080666 471.644684,139.393143
C471.948181,145.185318 471.424530,151.027176 471.152954,156.840698
C470.993561,160.252930 469.057037,161.850739 465.611206,161.844528
C443.304993,161.804337 420.993011,162.103973 398.694672,161.677963
C386.432587,161.443695 380.717529,155.514420 380.566956,143.136627
C380.236725,115.986839 380.416260,88.830841 380.394592,61.677372
C380.394043,61.013451 380.221771,60.159622 380.555908,59.714348
C384.678192,54.221413 388.879944,48.788124 393.061188,43.339424
C393.588989,43.545307 394.116791,43.751190 394.644592,43.957073
C394.727661,45.643776 394.882263,47.330437 394.883148,49.017181
C394.898163,78.336639 394.887939,107.656105 394.899414,136.975571
C394.902069,143.712830 395.281189,144.087814 401.945282,144.094849
C415.357635,144.108994 428.769958,144.099060 442.500702,143.680450
C431.783508,138.383682 423.819183,131.839569 428.977448,118.049347
M458.191162,124.429756
C457.472900,122.940323 456.986298,121.269432 455.990204,119.997574
C453.603943,116.950729 450.978027,114.091560 448.448883,111.156616
C445.393463,114.026520 442.331116,116.889175 439.304321,119.788979
C439.161621,119.925735 439.335541,120.392998 439.398071,121.133858
C446.026611,124.714897 452.845215,128.398636 459.663849,132.082382
C459.939056,131.763138 460.214264,131.443909 460.489471,131.124664
C459.843903,129.120560 459.198334,127.116455 458.191162,124.429756 z"/>

        <!-- dot on ف -->
        <path class="pg-calligraphy-path" pathLength="1"
              style="--draw-delay:.4s;--fill-delay:3.6s"
              d="M443.917542,72.035606
C441.476074,70.578636 439.354980,69.299088 436.609741,67.643021
C439.244263,62.880074 441.759613,58.332550 444.642639,53.120281
C451.020782,56.786362 457.069824,60.165878 462.967102,63.792225
C463.610718,64.188004 463.903595,66.279716 463.465454,67.117317
C461.395020,71.075455 459.013763,74.870995 456.426666,79.261871
C452.180695,76.806396 448.209320,74.509712 443.917542,72.035606 z"/>

        <!-- flourish / ر curve -->
        <path class="pg-calligraphy-path" pathLength="1"
              style="--draw-delay:.7s;--fill-delay:3.6s"
              d="M295.541016,195.477219
C291.237152,190.828049 287.203613,186.409592 283.170044,181.991150
C283.561127,181.590302 283.952209,181.189453 284.343292,180.788620
C288.603638,182.296524 292.796539,184.042389 297.135559,185.272873
C321.301880,192.126114 338.063721,180.187317 347.802277,160.806076
C349.096191,158.230942 348.616760,153.518204 347.032806,151.013031
C344.084503,146.349976 339.953156,142.328232 335.845612,138.548935
C333.725830,136.598557 333.157471,135.184723 334.427277,132.687134
C336.586853,128.439560 338.556427,124.095375 340.839325,119.301445
C349.299683,124.182137 353.849731,131.371613 356.654846,139.638672
C366.296051,168.052460 351.508606,190.464584 329.156586,201.128952
C316.915253,206.969421 305.861115,204.074966 295.541016,195.477219 z"/>

        <!-- main letter body (ی س ر ا — leftmost, drawn last) -->
        <path class="pg-calligraphy-path" pathLength="1"
              style="--draw-delay:1s;--fill-delay:3.6s"
              d="M121.746414,197.717636
C107.367401,202.089706 93.395538,203.893631 79.470161,197.488022
C66.253990,191.408676 59.690159,180.110550 61.465218,165.641296
C62.947895,153.555374 67.642769,142.542648 73.797508,132.144241
C74.690186,130.636078 76.336075,129.573746 77.633415,128.305115
C78.116600,128.572830 78.599785,128.840561 79.082962,129.108292
C78.655563,131.037262 78.248817,132.971100 77.797195,134.894379
C75.789597,143.443924 72.871246,151.898636 71.985512,160.561783
C70.929916,170.886322 75.992989,176.446640 86.133347,179.209045
C96.867798,182.133255 107.284821,179.585831 117.730247,177.582443
C122.087959,176.746628 126.382164,175.579681 130.913300,173.285782
C127.170349,171.510971 123.402916,169.785706 119.688950,167.952164
C107.891090,162.127762 107.303337,160.280945 111.985809,147.876389
C116.485657,135.955658 124.434608,127.601112 136.360092,123.031616
C143.167160,120.423355 147.037994,121.218132 152.037567,126.530067
C155.918503,130.653458 159.468124,135.135651 163.672607,138.889847
C166.160141,141.110977 169.569336,143.448425 172.676880,143.613785
C182.451935,144.133987 192.280884,143.687256 202.087814,143.539169
C206.013199,143.479904 208.307724,141.180023 207.417603,137.457520
C204.870834,126.806763 214.487991,123.720177 219.177841,116.111710
C222.887863,125.833946 219.512833,133.981583 218.564392,142.857651
C222.797256,143.553253 226.809128,144.602524 230.861023,144.790955
C237.677490,145.107971 244.520432,144.806580 251.350204,144.905228
C255.423416,144.964035 257.966736,143.531555 257.054626,139.091431
C254.828293,128.253525 263.655914,124.440681 269.128448,118.478539
C269.718536,118.608986 270.308594,118.739426 270.898682,118.869873
C270.250946,127.124138 269.603180,135.378403 268.913330,144.168823
C274.770447,145.850357 281.103088,146.443985 287.025879,144.015945
C292.610260,141.726593 290.271423,136.298233 288.560059,133.203033
C286.063690,128.687943 287.751740,126.711067 290.926727,124.236755
C293.908630,121.912949 296.626068,119.249794 300.555481,115.764008
C301.796936,121.248383 303.342163,125.608383 303.661987,130.056488
C304.161926,137.010681 304.112335,144.037842 303.780243,151.009552
C303.404541,158.895584 299.664978,162.524170 291.698334,162.972961
C281.959351,163.521591 272.478546,162.123383 263.258301,158.726379
C261.139771,157.945847 258.228668,157.667984 256.225952,158.487427
C242.531342,164.090698 228.870056,162.714493 215.057098,159.198975
C213.058914,158.690399 210.680176,159.065018 208.606277,159.564957
C194.853638,162.880157 181.034409,163.995132 167.231888,160.319916
C164.358429,159.554794 161.591278,157.411926 159.401123,155.265305
C155.008911,150.960373 151.320938,145.914810 146.781006,141.793213
C144.875320,140.063126 141.121964,138.585281 138.941452,139.283020
C132.961929,141.196365 127.516418,144.515060 123.244301,150.977310
C129.354813,153.412613 134.981415,155.637772 140.594147,157.897339
C145.234375,159.765411 151.405579,160.304626 151.288925,167.168610
C151.169815,174.177704 151.970688,181.876648 144.153137,186.057938
C136.843277,189.967682 129.468765,193.756516 121.746414,197.717636 z"/>

      </svg>
      <h1 class="pg-tagline pg-fade-up" style="animation-delay:.25s">Learn to read, write and speak Persian</h1>
      <p class="pg-sub pg-fade-up" style="animation-delay:.38s">From the alphabet to real conversations — structured lessons, beautiful script, and the culture woven through every word.</p>
    </div>

    <div class="pg-proverb-wrap">
      <div class="pg-proverb-fa">هر زبانی که بدانی، یک انسان دیگری هستی.</div>
      <div class="pg-proverb-ro">Har zabāni ke bedāni, yek ensān-e digari hasti.</div>
      <div class="pg-proverb-en">"For every language you know, you are a different person."</div>
      <div class="pg-proverb-note">A beloved Persian proverb — every new tongue opens a new world, a new way of seeing. The perfect reason to begin.</div>
    </div>

  `;
}

// ============ RENDER ABOUT ============
function renderAbout() {
  document.getElementById('sec-learn').innerHTML = `

    <div class="pg-about">

      <div class="pg-about-hero">
          <img src="images/shiain.jpg" class="pg-photo-real" alt="Shiain - Author" />
        <div class="pg-about-intro">
          <h1 class="pg-about-name">Hi, I'm shiain</h1>
          <p class="pg-about-role">I love art, languages, and culture.</p>
          <p class="pg-about-bio">I built this because I wanted to learn Persian properly — not just phrases, but the real script, real grammar, and the culture woven through the language. I couldn't find a single resource that taught all of that together, so I made one.</p>
        </div>
      </div>

      <div class="pg-about-divider"></div>

      <div class="pg-about-section">
        <h2 class="pg-about-h2">What this site is</h2>
        <div class="pg-about-grid">
          <div class="pg-about-card">
            <div class="pg-about-card-icon">📖</div>
            <div class="pg-about-card-title">The full alphabet</div>
            <div class="pg-about-card-body">All 32 letters, every positional form, colour-coded and explained — so you can read real Farsi, not just transliterations.</div>
          </div>
          <div class="pg-about-card">
            <div class="pg-about-card-icon">💬</div>
            <div class="pg-about-card-title">Real conversations</div>
            <div class="pg-about-card-body">Dialogues between real personas, covering greetings, food, shopping, family, and work. A1 to B1 level.</div>
          </div>
          <div class="pg-about-card">
            <div class="pg-about-card-icon">📐</div>
            <div class="pg-about-card-title">Actual grammar</div>
            <div class="pg-about-card-body">Verb conjugation tables, stem explanations, spoken vs written forms — the structure that makes everything else make sense.</div>
          </div>
          <div class="pg-about-card">
            <div class="pg-about-card-icon">🌍</div>
            <div class="pg-about-card-title">Culture & history</div>
            <div class="pg-about-card-body">Persian poetry, famous cities, Nowruz, the bazaar, travel tips — because language only comes alive in its culture.</div>
          </div>
        </div>
      </div>

      <div class="pg-personal-note">
        <div class="pg-personal-note-quote">"</div>
        <p>This is a passion project, built with love for a language and a civilisation that has shaped centuries of art, 
literature, and human expression. I hope it makes learning Persian feel less daunting and more inviting — for anyone who has ever wanted to begin.</p>
        <p style="margin-top:.75rem;color:var(--accent2)">— shiain</p>
      </div>

    </div>
  `;
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
    });
    h += `</table></div>`;
    h += `<div class="vowel-box"><strong>Short vowels (حرکت):</strong> Usually omitted in everyday writing, but shown in learning materials:
    <br><strong>َ</strong> = "a" (above) · <strong>ِ</strong> = "e" (below) · <strong>ُ</strong> = "o" (above) · Example: <span style="font-size:18px;color:var(--accent2)">پِدَر</span> (pedar = father)</div>`;
  }

  // ---- PHRASES (conv lessons — learn tab only) ----
  if (l.phrases && l.type !== 'cult') {
    h += `<div class="label">Key Phrases</div>
    <div class="phrase-list">
    <div class="phrase-item" style="font-size:12px;font-weight:500;color:var(--text3)">
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
      h += `<div class="num-card"><div class="nf" style="font-size:15px">${n.f}</div><div class="na">${n.a}</div><div class="nr" style="font-size:12px">${n.r}</div><div class="nv">${n.v}</div></div>`;
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

  // ---- COMPOUND VERBS ----
  if (l.compounds) {
    h += `<div class="gram-box">
      <h3>Compound Verbs — فعل‌های مرکب</h3>
      <div class="gram-note">
        Pattern: <span style="color:var(--accent2)">NOUN + کردن</span> — attach any noun to کردن to create a new verb.
        The noun stays fixed; only کردن conjugates. Present: <span style="color:var(--gold)">کار می‌کنم</span> · Past: <span style="color:var(--gold)">کار کردم</span>
      </div>
      <div class="forms-wrap"><table class="conj-table">
        <tr>
          <th>Noun / Prefix</th>
          <th>Compound Verb</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>`;
    l.compounds.forEach(c => {
      h += `<tr>
        <td class="ct-fa" style="color:var(--gold)">${c.noun}
          <br><span class="ct-ro">${c.nRo}</span>
          <span style="font-size:11px;color:var(--text3)"> · ${c.en}</span>
        </td>
        <td class="ct-fa" style="color:var(--accent2)">${c.verb}
          <br><span class="ct-ro" style="font-size:11px">${c.vRo}</span>
        </td>
        <td style="font-size:12px;color:var(--text2)">${c.vEn}</td>
        <td class="ct-fa">${c.ex}
          <br><span class="ct-ro" style="font-size:11px">${c.exRo}</span>
          <br><span style="font-size:11px;color:var(--text3)">${c.exEn}</span>
        </td>
      </tr>`;
    });
    h += `</table></div></div>`;
  }

  // ---- PREPOSITIONS TABLE ----
  if (l.preps) {
    h += `<div class="gram-box">
      <h3>Core Prepositions — حروف اضافه</h3>
      <div class="gram-note">
        These five prepositions cover the vast majority of everyday Persian. Each one is placed <strong>before</strong> the noun, just like English.
      </div>`;
    l.preps.forEach(p => {
      h += `<div style="margin-bottom:1.5rem;border-left:3px solid var(--accent2);padding-left:.9rem">
        <div style="margin-bottom:.4rem">
          <span class="ct-fa" style="font-size:1.4rem;color:var(--gold)">${p.fa}</span>
          &nbsp;<span style="font-size:.85rem;color:var(--accent2);font-weight:600">${p.ro}</span>
          &nbsp;—&nbsp;<span style="font-size:.85rem;color:var(--text2)">${p.en}</span>
        </div>
        <div class="gram-note" style="margin-bottom:.6rem;font-size:12px">${p.note}</div>
        <div class="forms-wrap">`;
      p.examples.forEach(ex => {
        h += `<div class="phrase-item" style="margin:.2rem 0">
          <span class="p-fa">${ex.fa}</span>
          <span class="p-ro">${ex.ro}</span>
          <span class="p-en">${ex.en}</span>
        </div>`;
      });
      h += `</div></div>`;
    });
    h += `</div>`;
  }

  // ---- GRAMMAR RULES ----
  if (l.gramRules) {
    h += `<div class="label">Usage Rules & Patterns</div>`;
    l.gramRules.forEach(r => {
      h += `<div class="num-rule"><strong>${r.title}</strong><br>${r.body}</div>`;
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

  // ---- POETS (T4 Persian Poetry) ----
  if (l.poets) {
    l.poets.forEach(poet => {
      h += `<div class="gram-box">
        <h3>
          <span style="font-size:22px;margin-right:8px">${poet.fa}</span>${poet.name}
          <span style="font-size:13px;color:var(--text3);font-weight:400">&nbsp;${poet.years} · ${poet.city}</span>
        </h3>
        <div class="gram-note" style="font-style:italic;color:var(--text2);font-size:13px">${poet.title}</div>
        <p style="font-size:14px;line-height:1.7;color:var(--text2);margin:1rem 0">${poet.bio}</p>
        <div class="label" style="margin-bottom:.5rem">Themes</div>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.25rem">
          ${poet.themes.map(t => `<span style="background:var(--bg3);color:var(--text2);padding:3px 10px;border-radius:12px;font-size:12px">${t}</span>`).join('')}
        </div>
        <div class="label" style="margin-bottom:.75rem">Selected Poems</div>
        ${poet.poems.map(p => `<div style="border-left:3px solid var(--accent2);padding:.75rem 1rem;margin-bottom:.9rem;background:var(--bg2);border-radius:0 6px 6px 0">
          <div style="font-size:18px;color:var(--gold);text-align:right;line-height:1.6;margin-bottom:.4rem;white-space:pre-line">${p.title}</div>
          <div style="font-size:12px;color:var(--text3);font-style:italic;margin-bottom:.25rem;white-space:pre-line">${p.ro}</div>
          <div style="font-size:13px;color:var(--accent2);margin-bottom:.5rem">${p.en}</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.6">${p.note}</div>
        </div>`).join('')}
      </div>`;
    });
  }

  // ---- POETRY PHRASES (T4) ----
  if (l.poetryPhrases) {
    h += `<div class="label">Key Phrases</div>
    <div class="phrase-list">
    <div class="phrase-item" style="font-size:12px;font-weight:500;color:var(--text3)">
      <span style="text-align:right">Persian</span><span>Pronunciation</span><span>Meaning</span>
    </div>`;
    l.poetryPhrases.forEach(p => {
      h += `<div class="phrase-item"><span class="p-fa">${p.fa}</span><span class="p-ro">${p.ro}</span><span class="p-en">${p.en}</span></div>`;
    });
    h += `</div>`;
  }

  // ---- DISH GROUPS (T6 Persian Cuisine) ----
  if (l.dishGroups) {
    h += `<div class="label">Persian Food Categories</div><div class="info-grid">`;
    l.dishGroups.forEach(g => {
      h += `<div class="info-box"><h4>${g.icon} ${g.title}</h4><p>${g.body}</p></div>`;
    });
    h += `</div>`;
  }

  // ---- RECIPES (T6) ----
  if (l.recipes) {
    h += `<div class="label">Recipes</div>`;
    l.recipes.forEach(r => {
      h += `<div class="gram-box">
        <h3>${r.emoji} ${r.fa} <span style="font-size:14px;font-weight:400;color:var(--text2)">${r.en}</span></h3>
        <div class="gram-note" style="font-size:12px">${r.ro} &nbsp;·&nbsp; ⏱ ${r.time} &nbsp;·&nbsp; ${r.difficulty}</div>
        <p style="font-size:13px;color:var(--text2);margin:.75rem 0">${r.desc}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-top:1rem">
          <div>
            <div class="label" style="margin-bottom:.5rem">Ingredients</div>
            <ul style="font-size:13px;color:var(--text2);line-height:2;padding-left:1.2rem;margin:0">
              ${r.ingredients.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
          <div>
            <div class="label" style="margin-bottom:.5rem">Method</div>
            <ol style="font-size:13px;color:var(--text2);line-height:1.8;padding-left:1.2rem;margin:0">
              ${r.steps.map(s => `<li style="margin-bottom:.4rem">${s}</li>`).join('')}
            </ol>
          </div>
        </div>
        <div style="margin-top:1rem;padding:.75rem 1rem;background:var(--bg2);border-radius:6px;font-size:12px;color:var(--text2);border-left:3px solid var(--gold)">
          💡 <strong>Tip:</strong> ${r.tip}
        </div>
      </div>`;
    });
  }

  // ---- COOKING PHRASES (T6) ----
  if (l.cookingPhrases) {
    h += `<div class="label">Key Phrases</div>
    <div class="phrase-list">
    <div class="phrase-item" style="font-size:12px;font-weight:500;color:var(--text3)">
      <span style="text-align:right">Persian</span><span>Pronunciation</span><span>Meaning</span>
    </div>`;
    l.cookingPhrases.forEach(p => {
      h += `<div class="phrase-item"><span class="p-fa">${p.fa}</span><span class="p-ro">${p.ro}</span><span class="p-en">${p.en}</span></div>`;
    });
    h += `</div>`;
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
        <span style="font-size:12px;padding:2px 8px;border-radius:3px;background:var(--bg3);color:var(--text3)">${c.tag}</span>
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