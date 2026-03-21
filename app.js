const QUIZ_LINK = "https://wayground.com/join?gc=17623646&source=liveDashboard";

const DATA = {

  marquee: [
    "INTELIGENȚA ARTIFICIALĂ", "AI RESPONSABIL", "EDUCAȚIE DIGITALĂ",
    "SIGURANȚĂ ONLINE", "VIITORUL TEHNOLOGIEI", "FOLOSEȘTE AI CU CAP",
  ],

  ceEste: {
    label: "01 - DEFINIȚIE",
    title: "CE ESTE INTELIGENȚA ARTIFICIALĂ?",
    paragraphs: [
      "<strong>Inteligența artificială (AI)</strong> este o tehnologie care permite calculatoarelor și programelor să analizeze informații, să învețe din date și să ofere răspunsuri sau predicții.",
      "În loc să execute doar instrucțiuni simple, sistemele AI pot identifica tipare, pot rezolva probleme și pot <strong>automatiza procese</strong> care înainte necesitau intervenția umană.",
      "Astăzi, AI este folosit pentru lucruri precum asistenți virtuali, traduceri automate, recomandări de conținut sau analiză de date. Scopul acestei tehnologii este de a <strong>sprijini oamenii</strong> și de a face procesele mai rapide și mai eficiente.",
    ],
    image: "imagini/aiimg2.jpg",
    imageAlt: "Ce este inteligența artificială",
    reverse: false,
  },

  domenii: {
    label: "02 - APLICAȚII",
    title: "UNDE ESTE FOLOSIT AI",
    paragraphs: [
      "Inteligența artificială a pătruns în aproape toate domeniile activității umane. De la aplicații pe care le folosim zilnic până la sisteme complexe din industrie, AI ajută la <strong>automatizarea proceselor</strong> și la analiza rapidă a datelor.",
    ],
    image: "imagini/aiimg3.jpg",
    imageAlt: "Domenii de utilizare AI",
    reverse: true,
    cards: [
      {
        title: "Educație",
        desc: "Platforme care personalizează procesul de învățare pentru fiecare elev.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
      },
      {
        title: "Medicină",
        desc: "Analiză de imagini medicale și diagnostic asistat de calculator.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
      },
      {
        title: "Afaceri",
        desc: "Analiză de date și automatizarea proceselor repetitive.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
      },
      {
        title: "Divertisment",
        desc: "Recomandări de filme, muzică sau conținut online personalizat.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`
      },
      {
        title: "Securitate",
        desc: "Detectarea amenințărilor și a atacurilor informatice în timp real.",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
      },
    ],
  },

  avantaje: {
    label: "03 - BENEFICII",
    title: "AVANTAJELE AI",
    paragraphs: [
      "Tehnologia AI aduce beneficii reale atunci când este utilizată corect. Aceasta poate <strong>accelera procesele</strong>, poate reduce erorile și poate ajuta la luarea unor decizii mai informate.",
      "Folosirea responsabilă a AI poate contribui la dezvoltarea tehnologică și la crearea unor soluții eficiente pentru probleme complexe.",
    ],
    list: [
      "Automatizarea sarcinilor repetitive",
      "Analiza rapidă a unor cantități mari de date",
      "Creșterea productivității în multe domenii",
      "Sprijin pentru cercetare și inovație",
      "Îmbunătățirea serviciilor digitale",
    ],
    image: "imagini/aiimg4.jpeg",
    imageAlt: "Avantajele AI",
    reverse: false,
  },

  riscuri: {
    label: "04 - ATENȚIE",
    title: "RISCURI ȘI PROVOCĂRI",
    paragraphs: [
      "O utilizare responsabilă a inteligenței artificiale presupune să înțelegem și riscurile pe care le poate implica. Deși AI poate fi foarte util, <strong>utilizarea necorespunzătoare</strong> poate duce la probleme serioase.",
      "De aceea, este important ca AI să fie utilizat responsabil și cu spirit critic.",
    ],
    list: [
      "Generarea de informații incorecte sau înșelătoare",
      "Probleme legate de confidențialitatea datelor",
      "Bias sau discriminare în algoritmi",
      "Utilizarea tehnologiei pentru manipulare sau dezinformare",
      "Impact asupra anumitor locuri de muncă",
    ],
    image: "imagini/aiimg5.png",
    imageAlt: "Riscuri AI",
    reverse: true,
  },

  siguranta: {
    label: "05 - BUNE PRACTICI",
    title: "CUM SĂ FOLOSEȘTI AI ÎN SIGURANȚĂ",
    paragraphs: [
      "Pentru a folosi inteligența artificială în mod responsabil, este important să respectăm câteva reguli simple.",
      "Utilizată corect, AI poate fi un <strong>instrument extrem de util</strong> în învățare, muncă și creativitate.",
    ],
    list: [
      "Evită introducerea datelor personale sau sensibile",
      "Verifică informațiile generate de AI din mai multe surse",
      "Folosește AI ca instrument de sprijin, nu ca singura sursă de adevăr",
      "Analizează critic rezultatele oferite de sistemele AI",
      "Respectă regulile etice și legale atunci când utilizezi aceste tehnologii",
    ],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&q=80",
    imageAlt: "Siguranță AI",
    reverse: false,
  },

  comparatie: {
    bine: {
      header: "UTILIZARE CORECTĂ",
      items: [
        "Generarea de idei sau brainstorming",
        "Rezumarea și organizarea informațiilor",
        "Traduceri și explicații pentru studiu",
        "Analiză de date sau sprijin în proiecte",
        "Scrierea unui draft pe care îl editezi tu",
        "Asistență în învățare",
      ],
    },
    rau: {
      header: "UTILIZARE INCORECTĂ",
      items: [
        "Răspândirea de informații neverificate",
        "Copierea conținutului fără înțelegere",
        "Folosirea AI pentru manipulare",
        "Decizii importante fără consultarea experților",
        "Introducerea datelor personale sensibile",
        "Acceptarea răspunsurilor fără verificare",
      ],
    },
  },

  quiz: [
    {
      q: "Ce este inteligența artificială?",
      opts: [
        "Un robot fizic care gândește ca omul",
        "O tehnologie care analizează date și generează răspunsuri",
        "Un program de jocuri video",
        "O rețea de calculatoare conectate la internet",
      ],
      correct: 1,
      feedback: "AI este o tehnologie care analizează informații, învață din date și oferă răspunsuri sau predicții.",
    },
    {
      q: "Ce NU ar trebui să introduci niciodată într-un chatbot AI?",
      opts: [
        "O întrebare despre matematică",
        "O cerere de traducere",
        "Parola ta sau CNP-ul",
        "O idee de brainstorming",
      ],
      correct: 2,
      feedback: "Niciodată nu introduce parole, CNP sau date financiare în platforme AI publice.",
    },
    {
      q: "Cum trebuie să tratezi informațiile oferite de AI?",
      opts: [
        "Le accept mereu ca adevăr absolut",
        "Le ignor complet",
        "Le verific din surse de încredere",
        "Le public imediat pe rețelele sociale",
      ],
      correct: 2,
      feedback: "Informațiile AI trebuie mereu verificate din surse sigure înainte de a le folosi.",
    },
    {
      q: "Care este un avantaj real al inteligenței artificiale?",
      opts: [
        "Poate înlocui complet gândirea umană",
        "Analizează rapid cantități mari de date",
        "Are întotdeauna dreptate",
        "Nu face niciodată greșeli",
      ],
      correct: 1,
      feedback: "AI poate procesa volume uriașe de date mult mai rapid decât un om, dar poate și greși.",
    },
    {
      q: "AI poate genera informații greșite?",
      opts: [
        "Nu, AI este mereu precis",
        "Da, uneori produce erori sau informații false",
        "Doar dacă este stricat",
        "Numai dacă îl întrebi greșit",
      ],
      correct: 1,
      feedback: "AI poate genera informații plauzibile dar false. De aceea verificarea surselor este esențială.",
    },
  ],

  faq: [
    {
      q: "ESTE INTELIGENȚA ARTIFICIALĂ PERICULOASĂ?",
      a: "AI nu este în mod direct periculos, dar poate crea probleme dacă este folosit fără responsabilitate sau fără verificarea informațiilor. Ca orice instrument, pericolul vine din modul de utilizare, nu din tehnologia în sine.",
    },
    {
      q: "POATE AI SĂ ÎNLOCUIASCĂ OAMENII?",
      a: "AI poate automatiza anumite sarcini, dar în majoritatea cazurilor funcționează ca un instrument care sprijină activitatea umană. Nu poate înlocui creativitatea, empatia și judecata etică specifice omului.",
    },
    {
      q: "SUNT DATELE MELE ÎN SIGURANȚĂ CÂND FOLOSESC AI?",
      a: "Depinde de modul în care sunt folosite platformele AI. Este recomandat să nu introduci date personale sau informații sensibile. Citește mereu politica de confidențialitate înainte de a folosi un serviciu nou.",
    },
    {
      q: "CÂT DE CORECTE SUNT RĂSPUNSURILE AI?",
      a: "Deși AI poate oferi informații utile, uneori poate genera erori sau răspunsuri incorecte. De aceea, este important să verifici informațiile din surse sigure, mai ales pentru subiecte importante.",
    },
  ],

  footer: {
    desc: "Proiect educativ non-comercial despre utilizarea responsabilă a inteligenței artificiale. Realizat de echipa <strong>CyberShield</strong> pentru Ideathon.",
    cols: [
      {
        title: "SECȚIUNI",
        links: [
          { label: "Ce este AI", href: "#ce-este" },
          { label: "Domenii", href: "#domenii" },
          { label: "Avantaje", href: "#avantaje" },
          { label: "Riscuri", href: "#riscuri" },
          { label: "Siguranță", href: "#siguranta" },
        ],
      },
      {
        title: "RESURSE",
        links: [
          { label: "UNESCO AI Ethics", href: "https://www.unesco.org/en/artificial-intelligence" },
          { label: "EU AI Act", href: "https://artificialintelligenceact.eu/" },
          { label: "Partnership on AI", href: "https://partnershiponai.org/" },
        ],
      },
    ],
  },
};

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("hamburger");
  menu.classList.toggle("open");
  btn.classList.toggle("open");
}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("hamburger");
  menu.classList.remove("open");
  btn.classList.remove("open");
}

function renderQR() {
  const img = document.getElementById("qr-img");
  const btn = document.querySelector(".quiz-link-btn");
  if (!img) return;
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(QUIZ_LINK)}&bgcolor=FFD93D&color=000000&qzone=2`;
  if (btn) btn.href = QUIZ_LINK;
}

function renderMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;
  track.innerHTML = [...DATA.marquee, ...DATA.marquee].map(t =>
    `<span class="marquee-item">${t}</span>`
  ).join("");
}

function makeAltSection(d, listDotClass) {
  const imgBlock = d.image
    ? `<div class="alt-image"><img src="${d.image}" alt="${d.imageAlt}" /></div>`
    : `<div class="alt-image-empty"><div class="empty-ph">IMAGINE</div></div>`;

  const listHtml = d.list ? `
    <ul>
      ${d.list.map((item, i) => `
        <li>
          <span class="li-dot ${listDotClass}">${listDotClass === 'blue' ? i + 1 : listDotClass === 'green' ? '✓' : '!'}</span>
          ${item}
        </li>
      `).join("")}
    </ul>` : "";

  const cardsHtml = d.cards ? `
    <div class="domain-cards-inline">
      ${d.cards.map(c => `
        <div class="domain-card">
          <div class="domain-icon">${c.icon}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
        </div>
      `).join("")}
    </div>` : "";

  return `
    <div class="alt-section ${d.reverse ? 'reverse' : ''} reveal">
      ${imgBlock}
      <div class="alt-text">
        <div class="section-tag">${d.label}</div>
        <h2 class="section-title">${d.title}</h2>
        ${d.paragraphs.map(p => `<p>${p}</p>`).join("")}
        ${listHtml}
        ${cardsHtml}
      </div>
    </div>
  `;
}

function renderCeEste() {
  const el = document.getElementById("ce-este-content");
  if (el) el.innerHTML = makeAltSection(DATA.ceEste, 'green');
}

function renderDomenii() {
  const el = document.getElementById("domenii-content");
  if (el) el.innerHTML = makeAltSection(DATA.domenii, 'green');
}

function renderAvantaje() {
  const el = document.getElementById("avantaje-content");
  if (el) el.innerHTML = makeAltSection(DATA.avantaje, 'green');
}

function renderRiscuri() {
  const el = document.getElementById("riscuri-content");
  if (el) el.innerHTML = makeAltSection(DATA.riscuri, 'red');
}

function renderSiguranta() {
  const el = document.getElementById("siguranta-content");
  if (el) el.innerHTML = makeAltSection(DATA.siguranta, 'blue');
}

function renderComparatie() {
  const el = document.getElementById("compare-grid");
  if (!el) return;
  const { bine, rau } = DATA.comparatie;
  const makeCol = (col, type) => `
    <div class="compare-col ${type}">
      <div class="compare-header">${type === 'good' ? '✓' : '✗'} ${col.header}</div>
      <div class="compare-items">
        ${col.items.map(item => `
          <div class="compare-item">
            <span class="ci-icon">${type === 'good' ? '✓' : '✗'}</span>
            <span>${item}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  el.innerHTML = makeCol(bine, "good") + makeCol(rau, "bad");
}

function renderFAQ() {
  const el = document.getElementById("faq-list");
  if (!el) return;
  el.innerHTML = DATA.faq.map((item, i) => `
    <div class="faq-item reveal" data-index="${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${item.q}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a" id="faq-a-${i}">
        <div class="faq-a-inner">${item.a}</div>
      </div>
    </div>
  `).join("");
}

function toggleFAQ(index) {
  const item = document.querySelector(`.faq-item[data-index="${index}"]`);
  const answer = document.getElementById(`faq-a-${index}`);
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach(el => {
    el.classList.remove("open");
    el.querySelector(".faq-a").style.maxHeight = "0";
  });
  if (!isOpen) {
    item.classList.add("open");
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

function renderFooter() {
  const el = document.getElementById("footer-content");
  if (!el) return;
  const { desc, cols } = DATA.footer;
  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">AI<span class="logo-accent">PRIETENOS</span></div>
          <p>${desc}</p>
        </div>
        ${cols.map(col => `
          <div class="footer-col">
            <h4>${col.title}</h4>
            <ul>${col.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>
      <div class="footer-bottom">
        <p>PROIECT EDUCATIV NON-COMERCIAL REALIZAT PENTRU IDEATHON</p>
        <div class="footer-team">
          <span class="footer-team-label">ECHIPA</span>
          <span class="footer-team-name">CYBERSHIELD</span>
        </div>
      </div>
      <div class="footer-sig">
        <span class="footer-sig-label">FĂCUT CU SUFLET DE</span>
        <div class="footer-sig-links">
          <a href="https://github.com/Bogdansw" target="_blank" class="sig-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            @Bogdansw
          </a>
          <a href="https://www.instagram.com/bogdanshr1/" target="_blank" class="sig-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            @bogdanshr1
          </a>
        </div>
      </div>
    </div>
  `;
}

let quizState = { current: 0, score: 0, answered: false };

function startQuizPage() {
  const card = document.getElementById("quiz-card");
  if (!card) return;
  showQuestion();
}

function showQuestion() {
  const card = document.getElementById("quiz-card");
  if (!card) return;
  const q = DATA.quiz[quizState.current];
  const pct = (quizState.current / DATA.quiz.length) * 100;
  card.innerHTML = `
    <div class="qp-progress">
      <div class="qp-bar-track"><div class="qp-bar-fill" style="width:${pct}%"></div></div>
      <span class="qp-counter">${quizState.current + 1} / ${DATA.quiz.length}</span>
    </div>
    <div class="qp-question">${q.q}</div>
    <div class="qp-options">
      ${q.opts.map((opt, i) => `<button class="qp-opt" onclick="answerQuiz(${i})">${opt}</button>`).join("")}
    </div>
    <div class="qp-feedback" id="quiz-fb"></div>
    <button class="btn-primary qp-next" id="quiz-next" onclick="nextQuestion()">
      ${quizState.current < DATA.quiz.length - 1 ? "URMĂTOAREA ÎNTREBARE" : "VEZI REZULTATUL"}
    </button>
  `;
}

function answerQuiz(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = DATA.quiz[quizState.current];
  const opts = document.querySelectorAll(".qp-opt");
  const fb = document.getElementById("quiz-fb");
  const nextBtn = document.getElementById("quiz-next");
  opts.forEach(btn => btn.disabled = true);
  opts[q.correct].classList.add("correct");
  if (idx === q.correct) {
    quizState.score++;
    fb.className = "qp-feedback correct";
    fb.textContent = "CORECT! " + q.feedback;
  } else {
    opts[idx].classList.add("wrong");
    fb.className = "qp-feedback wrong";
    fb.textContent = "GREȘIT. " + q.feedback;
  }
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  quizState.current++;
  quizState.answered = false;
  if (quizState.current >= DATA.quiz.length) {
    showQuizResult();
  } else {
    showQuestion();
  }
}

function showQuizResult() {
  const card = document.getElementById("quiz-card");
  const score = quizState.score;
  const total = DATA.quiz.length;
  const msg = score === total ? "PERFECT! EȘTI UN EXPERT ÎN AI RESPONSABIL!"
    : score >= total / 2 ? "BINE! MAI AI CÂTE CEVA DE ÎNVĂȚAT."
    : "NU-I NIMIC! CITEȘTE DIN NOU GHIDUL ȘI ÎNCEARCĂ DIN NOU.";
  card.innerHTML = `
    <div class="qp-result">
      <div class="qp-score">${score}/${total}</div>
      <h3>${msg}</h3>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:28px;">
        <button class="btn-primary" onclick="restartQuiz()">ÎNCEARCĂ DIN NOU</button>
        <a href="index.html" class="btn-secondary">ÎNAPOI LA GHID</a>
      </div>
    </div>
  `;
}

function restartQuiz() {
  quizState = { current: 0, score: 0, answered: false };
  showQuestion();
}

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.style.boxShadow = window.scrollY > 50 ? "0 4px 0 #000" : "none";
  });
}

const isIndexPage = document.getElementById("ce-este-content") !== null;
const isQuizPage = document.getElementById("quiz-card") !== null;

document.addEventListener("DOMContentLoaded", () => {
  renderFooter();
  initNavbar();

  if (isIndexPage) {
    renderMarquee();
    renderQR();
    renderCeEste();
    renderDomenii();
    renderAvantaje();
    renderRiscuri();
    renderSiguranta();
    renderComparatie();
    renderFAQ();
  }

  if (isQuizPage) {
    startQuizPage();
  }

  setTimeout(initScrollReveal, 100);
});