---
layout: page
title: Research & Projects
author_profile: true
permalink: "/research"
mathjax: true
---

<div class="phd-callout">
  <h4>Looking for PhD Positions & Fellowships (2026–2027)</h4>
  <p>
    I am actively exploring PhD positions, <strong>pre-doctoral fellowships</strong>, and <strong>lab collaborations</strong> in <strong>mechanistic interpretability</strong>, <strong>representation geometry</strong> and <strong>AI safety</strong> starting in 2026/2027.
  </p>
  <p>
    If you are a PI, researcher, or lab interested in collaborating, please reach out at <a href="mailto:ilyassouardi@gmail.com">ilyassouardi@gmail.com</a>.
  </p>
</div>

<div class="research-intro">
  <p>
    I am interested in <strong>AI safety</strong> and <strong>mechanistic interpretability</strong>. To me, interpretability is not an academic exercise for its own sake, but a pragmatic tool to make model safety measurable and verifiable on the path toward safe AGI. Right now I am particularly focused on the <strong>geometry of representations</strong>: how abstract concepts — like refusal and truth — are encoded within a model's activation space.

Two questions follow from this:
<ul>
<li> <strong>Model biology:</strong> whether such concepts conform strictly to single linear directions, or rely instead on higher-dimensional, possibly non-linear manifolds.</li>
<li> <strong>Applied interpretability:</strong> whether representation-level edits — steering, abliteration, concept erasure — are genuinely surgical when evaluated against practical baselines, with off-target side-effects measured as rigorously as the primary behavioral change.</li>
</ul>
The two are connected, since an intervention built on the wrong picture of the geometry is precisely one whose side-effects go unmeasured.
  </p>
</div>





## Ongoing Research & Thesis

<div class="project-card">
  <h3>The Geometry of Absence, Opposite, and the Activation Manifold in Representation-Level Interventions</h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span>, Elisabetta Rocchetti, Alfio Ferrara</span> &bull; 
    <span class="venue">M.Sc. Thesis / ISLab, University of Milan</span> &bull; 
    <time>Ongoing (Expected 2027)</time>
  </div>
  <div class="project-desc">
    Investigating how language models encode the absence of a concept versus its semantic opposite on the internal activation manifold. We evaluate representation-level interventions—including linear concept erasure (INLP, LEACE) and directional activation steering—measuring off-target collateral damage and reasoning degradation alongside targeted behavioral modifications.
  </div>
  <div class="project-tags">
    <span class="tag">M.Sc. Thesis</span>
    <span class="tag">Representation Manifolds</span>
    <span class="tag">Concept Erasure</span>
    <span class="tag">Activation Steering</span>
    <span class="tag">ISLab</span>
  </div>
  <div class="project-actions">
    <span style="font-size: 0.82rem; color: #718096; font-style: italic;">In Progress &bull; Pre-print in preparation</span>
  </div>
</div>


## Research Papers & Preprints

<div class="project-card">
  <h3>The Multidimensional Geometry of Truth in LLMs: A Concept-Cone Extension of the Linear Representation Hypothesis</h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span></span> &bull; 
    <span class="venue">Research Report / ISLab</span> &bull; 
    <time>2026</time>
  </div>
  <div class="project-desc">
    Investigates whether propositional truth is mediated by a single linear direction or by a $k$-dimensional concept cone. Adapting Targeted Directional Optimization (TDO) and Targeted Cone Optimization (TCO) from Wollschlager et al. (2025) under causal necessity, sufficiency, and KL-retention losses, we demonstrate that in larger models (e.g. Llama-3, Gemma), a single linear probe fails causal interchange tests, whereas a low-dimensional concept cone ($k=2$) successfully mediates truth judgments while remaining near-orthogonal to naive Difference-in-Means directions.
  </div>
  <div class="project-tags">
    <span class="tag">Mechanistic Interpretability</span>
    <span class="tag">Representation Geometry</span>
    <span class="tag">Concept Cones</span>
    <span class="tag">Causal Mediation</span>
    <span class="tag">nnsight</span>
    <span class="tag">PyTorch</span>
  </div>
  <div class="project-actions">
    <a href="https://github.com/OUARDI-ILYASS/truth_cones/blob/main/report.pdf" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      Draft PDF
    </a>
    <a href="https://github.com/OUARDI-ILYASS/truth_cones" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      Code
    </a>
  </div>
</div>

<div class="project-card">
  <h3>What Does a Heart-Sound Classifier Actually Learn? A Diagnostic Audit on PhysioNet CinC 2016</h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span></span> &bull; 
    <span class="venue">Research Report / University of Milan</span> &bull; 
    <time>2026</time>
  </div>
  <div class="project-desc">
    A diagnostic refutation of shortcut learning in cardiac murmur classification. Demonstrates that CNN phonocardiogram models trained on PhysioNet CinC 2016 exploit recording-site background acoustic artifacts rather than true cardiac pathological signals, causing macro-accuracy to collapse from 0.866 to 0.457 under leave-site-out cross-validation. Proposes an explicit spectral diagnostic filter to catch spurious feature reliance prior to clinical deployment.
  </div>
  <div class="project-tags">
    <span class="tag">Shortcut Learning</span>
    <span class="tag">Diagnostic Audit</span>
    <span class="tag">Audio Pattern Recognition</span>
    <span class="tag">Healthcare AI Safety</span>
    <span class="tag">CNNs</span>
  </div>
  <div class="project-actions">
    <a href="https://github.com/OUARDI-ILYASS/apr-heart-sounds/blob/main/report.pdf" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      Draft PDF
    </a>
    <a href="https://github.com/OUARDI-ILYASS/apr-heart-sounds" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      Code
    </a>
  </div>
</div>


## Applied & Open-Source Projects

<div class="project-card">
  <h3>The Legend Challenge: Embedding Ethical Compliance into LLMs</h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span></span> &bull; 
    <span class="venue">Security of Service-Oriented Architectures</span> &bull; 
    <time>2026</time>
  </div>
  <div class="project-desc">
    Evaluates regulatory prompting versus narrative exemplars ("champion stories") for debiasing large language models and enforcing normative ethical constraints. Benchmarked systematically on GenderEqGLUE across varying prompt configurations and model scales.
  </div>
  <div class="project-tags">
    <span class="tag">AI Alignment</span>
    <span class="tag">GenderEqGLUE</span>
    <span class="tag">Ethical Compliance</span>
    <span class="tag">Prompt Engineering</span>
  </div>
  <div class="project-actions">
    <a href="https://github.com/OUARDI-ILYASS/SOASEC-project" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      Code
    </a>
  </div>
</div>

<div class="project-card">
  <h3>RecupGPT & Production Donation Infrastructure</h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span>, Carlo Maria Bellettini (Advisor)</span> &bull; 
    <span class="venue">B.Sc. Thesis (110/110 cum laude) & Production Deployment</span> &bull; 
    <time>2024–2025</time>
  </div>
  <div class="project-desc">
    Complete digital donation and logistics management platform built for RECUP APS (Milan food rescue NGO). Deployed production backend with Supabase and integrated an experimental LangChain/LangGraph natural-language-to-SQL conversational agent allowing NGO staff to query logistics and inventory data using natural Italian queries.
  </div>
  <div class="project-tags">
    <span class="tag">LangGraph</span>
    <span class="tag">NL2SQL</span>
    <span class="tag">Supabase</span>
    <span class="tag">B.Sc. Thesis</span>
  </div>
</div>
