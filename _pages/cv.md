---
layout: page
title: Curriculum Vitae
author_profile: true
permalink: "/cv"
---

<p style="margin-bottom: 1.5rem;">
  <a href="{{ site.baseurl }}/assets/cv-ilyass-ouardi.pdf" target="_blank" style="display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.45rem 0.9rem; background: #2b6cb0; color: #ffffff; text-decoration: none; border-radius: 4px; font-weight: 500; font-size: 0.95rem;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    Download Academic CV (PDF)
  </a>
</p>

## Research Interests

I am interested in **AI safety** and **mechanistic interpretability**. To me, interpretability is not an academic exercise for its own sake, but a pragmatic tool to make model safety measurable and verifiable on the path toward safe AGI. Right now I am particularly focused on the **geometry of representations**: how abstract concepts — like refusal and truth — are encoded within a model's activation space.

Two questions follow from this:
1. **Model biology:** whether such concepts conform strictly to single linear directions, or rely instead on higher-dimensional, possibly non-linear manifolds.
2. **Applied interpretability:** whether representation-level edits — steering, abliteration, concept erasure — are genuinely surgical when evaluated against practical baselines, with off-target side-effects measured as rigorously as the primary behavioral change.

The two are connected, since an intervention built on the wrong picture of the geometry is precisely one whose side-effects go unmeasured.

## Education

**M.Sc. in Computer Science** (Laurea Magistrale in Informatica, LM-18)  
_University of Milan, Italy_ &bull; `Sep 2024 – Present`  
- **Thesis:** _The Geometry of Absence, Opposite, and the Activation Manifold in Representation-Level Interventions on LLMs_
- **Advisors:** Prof. Alfio Ferrara & Elisabetta Rocchetti (University of Milan)
- **Focus:** Investigating representation-level interventions (linear concept erasure, steering) and studying how models encode the absence of a concept versus its opposite on the activation manifold.
- **Expected defense:** Summer 2027 (July 2027) &bull; **Weighted Average:** **29.13/30** (3.88/4.00)

<details class="coursework-accordion" open>
  <summary>M.Sc. Advanced Coursework Highlights</summary>
  <div class="coursework-grid">
    <div class="course-card"><span class="course-title">Natural Language Processing</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Distributed & Pervasive Systems</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Security of SOA Architectures</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Advanced Biometrics</span> <span class="grade-badge grade-top">30</span></div>
    <div class="course-card"><span class="course-title">Audio Pattern Recognition</span> <span class="grade-badge grade-top">30</span></div>
    <div class="course-card"><span class="course-title">Privacy and Data Protection</span> <span class="grade-badge grade-top">29</span></div>
  </div>
</details>

**B.Sc. in Computer Science** (Laurea in Informatica, L-31)  
_University of Milan, Italy_ &bull; `Sep 2020 – Oct 2024`  
- **Final grade:** **110/110 _cum laude_** &bull; **Weighted Average:** **28.55/30** (3.81/4.00)
- **Thesis:** _Design and development of a donation-tracking system for RECUP APS_ (_Sviluppo di uno strumento di supporto all'associazione Recup_)
- **Advisor:** Prof. Carlo Maria Bellettini

<details class="coursework-accordion" open>
  <summary>B.Sc. Mathematical & Theoretical Foundations</summary>
  <div class="coursework-grid">
    <div class="course-card"><span class="course-title">Discrete Mathematics</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Mathematical Logic</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Automata & Formal Languages</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Programming Languages</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Artificial Intelligence I</span> <span class="grade-badge grade-laude">30L</span></div>
    <div class="course-card"><span class="course-title">Calculus</span> <span class="grade-badge grade-top">30</span></div>
    <div class="course-card"><span class="course-title">Statistics & Data Analysis</span> <span class="grade-badge grade-top">30</span></div>
    <div class="course-card"><span class="course-title">Algorithms & Data Structures</span> <span class="grade-badge grade-top">30</span></div>
  </div>
</details>

**Diploma, Computer Science (Perito Informatico)**  
_ITT "G. e M. Montani", Fermo, Italy_ &bull; `Sep 2015 – Jul 2020`  
- **Final grade:** **100/100 _cum laude_** (Focus on Programming and Computer Networks)

## Research Experience

**Independent Research — Representation Geometry of Truth**  
_ISLab, University of Milan_ (Sole author; Natural Language Processing course)  
`Dec 2025 – Jul 2026`

- Tested whether propositional truth is mediated by one linear direction or by a $k$-dimensional concept cone. Adapted form Wollschlager et. al (2025), **TDO** and **TCO**: gradient-optimised directions and cones under causal necessity, sufficiency and KL-retention losses.
- **Result:** A single direction is insufficient for the larger models, and a low-dimensional cone ($k=2$) is the better model of the concept. Its basis is near-orthogonal to the Difference-in-Means probe yet individually causally effective.
- **Manuscript:** _The Multidimensional Geometry of Truth in LLMs: A Concept-Cone Extension of the Linear Representation Hypothesis_ (2026). [[Draft](https://github.com/OUARDI-ILYASS/truth_cones/blob/main/report.pdf)] [[Code](https://github.com/OUARDI-ILYASS/truth_cones)]
- Techniques: activation patching, directional ablation/addition, Difference-in-Means probes, `nnsight`, PyTorch; single-GPU (A40).

**Research Project — What a Heart-Sound Classifier Actually Learns**  
_University of Milan_ (Sole author; Audio Pattern Recognition course)  
`Apr 2026 – Jul 2026`

- Compared three feature representations (MFCC, log-Mel, perceptual wavelet packet) against three classifier families (SVM, Random Forest, CNN) on PhysioNet/CinC 2016 under one recording-level protocol, pairing every performance claim with a diagnostic capable of refuting it.
- **Result:** The headline MAcc of 0.866 is largely a recording-site artefact — site recoverable from the same features at 0.647 against 0.167 chance, diagnosis collapsing from 0.840 to 0.457 under leave-one-site-out. Attribution leans systolic, but no more so on correct than on incorrect predictions.
- **Manuscript:** _What Does a Heart Sound Classifier Actually Learn?_ (2026). [[Draft](https://github.com/OUARDI-ILYASS/apr-heart-sounds/blob/main/report.pdf)] [[Code](https://github.com/OUARDI-ILYASS/apr-heart-sounds)]

**Research Project — Empirical Test of the Legends Hypothesis**  
_SESAR Lab, University of Milan_ (With F. Bylyshi & H. El-Khazri, equal contribution)  
`Feb 2026 – Jun 2026`

- Tested whether a model learns a regulation better from stories showing it being followed than from the regulation itself. Built a pipeline producing training corpora matched on everything but content, and **GenderEqGLUE**, a five-task benchmark evaluated on documents held out from training.
- **Result:** The two regimes teach complementary competences — training on the rule wins overall, training on the stories wins on the tasks that require applying it.
- **Manuscript:** _The Legend Challenge: Embedding Ethical Compliance into LLMs through Champion Narratives_ (2026). [[Draft](https://github.com/OUARDI-ILYASS/SOASEC-project/blob/main/paper/paper_exp.pdf)] [[Code](https://github.com/OUARDI-ILYASS/SOASEC-project)]

## Teaching Experience

**Teaching Assistant — Accertamento delle Competenze Informatiche (3 CFU)**  
_University of Milan_ (Scientific lead: Prof. Stefano Montanelli; delivered by CTU)  
`Jan 2026 – Present`

- Prepared and delivered lectures to classes of students, authoring the accompanying teaching material.
- Led lab sessions of a blended-learning course shared across numerous undergraduate degree programmes, and invigilated examinations.

## Engineering Experience

**Lead Developer / Consultant**  
_RECUP APS — University of Milan_  
`Jan 2024 – Dec 2025`

- Designed and built a donation-tracking web platform (React + TypeScript, Supabase DB/Auth/Storage, Netlify Functions); began as B.Sc. thesis, continued as a consultancy with me as lead developer.
- **RecupGPT** (2025): Retrieval-augmented natural-language querying over the production database (LangChain, LangGraph, NL2SQL with query rewriting and routing).

**Full-Stack Developer Consultant**  
_Value Process Srl, Milan_  
`Jun 2022 – Sep 2022`

- Developed microservices architecture in Spring Boot and React; led migration of a legacy system to a serverless architecture.

**Full Stack Developer Intern**  
_PC & Informatica SRL_  
`Apr 2019 – Jun 2019`

- Created responsive front-end interfaces; optimized SQL queries improving performance by 40% (PHP, JavaScript, MySQL).

## Fellowships, Awards, and Honours

- **Full academic + merit scholarships** (tuition and housing), University of Milan (`Sep 2020 – Sep 2026`)
- **Lead the Future** — STEM mentorship community, Mentee (`Sep 2025 – Present`)
- **BOOST '24** — Selected for the Bologna Orthogonal Summer Term for outstanding B.Sc./M.Sc. CS students (`Aug 2024`)
- **Futuro Annunciato '24** — Selected for the event, for outstanding students (`Jul 2024`)
- **Nomination, "Alfieri del Lavoro" Award** — Presidency of the Italian Republic (`Jul 2020`)
- **Participant, National Olympiads in Informatics & Mathematics** (`2017 – 2020`)

## Technical Skills

- **Mechanistic Interpretability:** Denoising activation patching, directional ablation and activation addition, Difference-in-Means probes, gradient-based direction/cone optimisation, concept erasure (INLP, LEACE), activation steering
- **Post-hoc XAI:** SHAP (tree and kernel estimators), Grad-CAM with saliency sanity checks, structured occlusion
- **Experimental Method:** Causal mediation protocols, permutation and analytic nulls, grouped / leave-one-group-out cross-validation, paired significance testing with multiple-comparison correction, bootstrap over the correct unit of independence
- **ML & LLM Tooling:** PyTorch, nnsight, scikit-learn, LangChain, LangGraph, RAG, NL2SQL, supervised fine-tuning
- **Programming Languages:** Python, Java, TypeScript (proficient); Go, C, Scala, OCaml, Erlang (familiar)
- **Web, Data & Cloud:** React, SQL / PL-SQL, Supabase (PostgreSQL + RBAC), Netlify Functions, CI/CD
- **Languages:** Italian (native), Arabic (native), English (fluent, working language)

## Projects

**RecupGPT — Intelligent Natural-Language Querying**  
_Retrieval-Augmented Generation over a food-surplus database_
- Built with LangChain and LangGraph, integrating NL2SQL translation with query rewriting and routing
- Natural-language access to a Supabase database with thousands of records
- Cloud-native deployment (React, Supabase, Netlify Functions)

**Extended Ricart–Agrawala — Distributed Mutual Exclusion**  
_Distributed and Pervasive Systems (30 cum laude)_
- Implemented and extended the Ricart–Agrawala algorithm, resolving correctness issues arising from removing the Lamport-clock assumptions
- Developed test-first (TDD); code under a 1-year embargo

**Non-Profit Information System (B.Sc. Thesis Project)**  
_Full-stack web application for NGO operations_
- React + TypeScript frontend and Netlify Functions backend
- Real-time data synchronization using Supabase
- Custom multi-role access control (RBAC)
- Features: donation tracking, volunteer management, reporting dashboards
- In use by volunteers and coordinators in the markets of Milan and Rome
