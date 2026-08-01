---
layout: page
title: Curriculum Vitae
author_profile: true
permalink: "/cv"
---

## Research Interests

Mechanistic interpretability of Large Language Models: the geometry of internal
representations, causal mediation of concepts (activation patching, directional
ablation), and model safety, reliability, and alignment.

## Education

**Laurea Magistrale in Informatica** (LM-18)  
_Università degli Studi di Milano_  
`2024 - present`

- Weighted average (exams taken): ~29.1/30
- M.Sc. thesis (starting 2026) on **mechanistic interpretability of LLMs** — ISLab, advisor Prof. Alfio Ferrara, in collaboration with Elisabetta Rocchetti (PhD)
- Selected coursework (grade): Natural Language Processing (30 cum laude), Distributed and Pervasive Systems (30 cum laude), Security of Service-Oriented Architectures (30 cum laude), Audio Pattern Recognition (30), Biometrics (30), Methods for Image Processing (28)

**Laurea in Informatica** (L-31)  
_Università degli Studi di Milano_  
`2020 - 2024`

- Graduated with 110/110 cum laude (weighted average 28.55/30)
- Advisor: Prof. Carlo Maria Bellettini
- Thesis: _"Sviluppo di uno strumento di supporto all'associazione Recup, che recupera e distribuisce a fini sociali le donazioni del mercato ortofrutticolo di Milano"_
- Relevant coursework: Software Engineering, Algorithms, Artificial Intelligence, Computer Networks

**Diploma di Maturità - Perito Informatico**  
_Istituto Tecnico Tecnologico "G. e M. Montani"_  
`2015 - 2020`

- Graduated with 100/100 cum laude
- Focus on Programming and Computer Networks

## Research

**The Multidimensional Geometry of Truth in LLMs** — _mechanistic interpretability_  
*Research project (sole author) — basis of the M.Sc. thesis, ISLab*  
`2025 - present`

- Extended the Linear Representation Hypothesis from a single linear direction to a multi-dimensional **concept cone** for propositional truth
- Developed two optimization methods: **TDO** (gradient-based refinement of a Difference-in-Means probe under causal axioms and a KL-retention loss) and **TCO** (orthonormal k-D cone with Monte-Carlo interior sampling)
- Across 6 instruction-tuned models (Qwen-2.5, Gemma-2, Llama-3.1), showed a single direction suffices for smaller models but fails for larger ones, while a 2-D cone restores both causal effectiveness (Answer Switching Rate) and surgicality (low KL), with a basis nearly orthogonal to the linear probe
- Techniques: activation patching, directional ablation/addition, `nnsight`; single-GPU (A40)
- [GitHub Repo](https://github.com/OUARDI-ILYASS/truth_cones)

**The Legend Challenge: Embedding Ethical Compliance into LLMs** — _LLM alignment / AI security_  
*Research project with F. Bylyshi and H. El-Khazri (equal contribution) — SOASEC Legend Challenge*  
`2026`

- First empirical test of the Sargsyan–Damiani hypothesis: whether fine-tuning an LLM on narrative exemplars of compliant behaviour (_legends_) embeds regulatory ethics better than fine-tuning on the regulatory text, at matched backbone (`gpt-4o`) and corpora
- Built **GenderEqGLUE**, a 5-task compliance-reasoning benchmark adapted from GLUE/SuperGLUE, and an interpretability analysis via structured occlusion over API log-probabilities
- Found the two regimes teach complementary competences; led to a thesis offer at the **SESAR Lab** (AI security)

**What Does a Heart Sound Classifier Actually Learn?** — _audio ML for medical diagnosis_  
*Research project (sole author) — Audio Pattern Recognition*  
`2026`

- Recording-level phonocardiogram classification pipeline on PhysioNet/CinC 2016 comparing 3 feature representations (MFCC, log-Mel, perceptual wavelet packet) and 3 classifiers (SVM, Random Forest, CNN)
- Paired each performance claim with a **falsification test** (k-means geometry, per-site breakdown, leave-one-site-out, SHAP/Grad-CAM); the aggregate metric (0.866) largely reflects a recording-site shortcut, with diagnosis collapsing from 0.84 to 0.46 under leave-one-site-out
- Led to a thesis offer on a medical audio ML project
- [GitHub Repo](https://github.com/OUARDI-ILYASS/apr-heart-sounds)

## Awards & Honors

- **BOOST '24** — Selected for the Bologna Orthogonal Summer Term, a summer school for outstanding B.Sc. and M.Sc. Computer Science students, `Aug 2024`
- **Futuro Annunciato '24** — Selected for the event, for outstanding students, `Jul 2024`
- **Nomination for the "Alfieri del Lavoro" Award** — Presidency of the Italian Republic, `2020`
- **Academic scholarship** (full tuition + housing) — University of Milan, `2020 - 2024`
- **Merit scholarship** — University of Milan, `2020 - 2023`

## Professional Experience

**Lead Developer / Consultant**  
_Recup APS — University of Milan_  
`Jan 2024 - present`

- Started as a B.Sc. thesis; continued as a consultancy for RECUP APS
- Designed and developed a web platform for donation tracking (React + TypeScript, Supabase DB/Auth/Storage, Netlify Functions)
- Lead developer in the post-academic phase, coordinating iterations and new features

**Full Stack Developer Consultant**  
_Value Process SRL_  
`Jun 2022 - Oct 2022`

- Developed microservices architecture using Spring Boot and React
- Led migration of legacy system to cloud-native architecture

**Full Stack Developer Intern**  
_PC & Informatica SRL_  
`Apr 2019 - Jun 2019`

- Created responsive front-end interfaces
- Optimized SQL queries improving performance by 40%
- Technologies: PHP, JavaScript, MySQL

## Technical Skills

**Mechanistic Interpretability & XAI**  
Activation patching, directional ablation/addition, Difference-in-Means probes, linear representation analysis, SHAP, Grad-CAM

**Machine Learning & LLMs**  
PyTorch, scikit-learn, nnsight, LangChain, LangGraph, Retrieval-Augmented Generation (RAG), NL2SQL, fine-tuning, prompt engineering

**Languages**  
Python, Java, JavaScript (ES6+), TypeScript, Go, SQL, C, OCaml, Scala, Erlang

**Frameworks & Libraries**  
Spring Boot, React, Redux, Node.js, Flask

**Tools & Technologies**

- Cloud: Netlify, Supabase, Docker
- Databases: PostgreSQL, MySQL
- DevOps: Jenkins, Git, GitHub Actions
- Other: Linux

## Projects

**RecupGPT — Intelligent Natural-Language Querying**  
*Retrieval-Augmented Generation over a food-surplus database*  
- Built with LangChain and LangGraph, integrating NL2SQL translation with query rewriting and routing
- Natural-language access to a Supabase database with thousands of records
- Cloud-native deployment (React, Supabase, Netlify Functions)
- [GitHub Repo](https://github.com/OUARDI-ILYASS/truth_cones)

**Extended Ricart–Agrawala — Distributed Mutual Exclusion**  
*Distributed and Pervasive Systems (30 cum laude)*  
- Implemented and extended the Ricart–Agrawala algorithm, resolving correctness issues arising from removing the Lamport-clock assumptions
- Developed test-first (TDD); code under a 1-year embargo

**Non-Profit Information System (B.Sc. Thesis Project)**  
*Full-stack web application for NGO operations*  
- React + TypeScript frontend and Netlify Functions backend
- Real-time data synchronization using Supabase
- Custom multi-role access control (RBAC)
- Features: donation tracking, volunteer management, reporting dashboards
- In use by volunteers and coordinators in the markets of Milan and Rome

## Languages

- Italian: Native
- Arabic: Native
- English: Professional Proficiency (C1)