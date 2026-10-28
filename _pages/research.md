---
layout: page
title: Research & Projects
author_profile: true
permalink: "/research"
mathjax: true
---

<div class="phd-callout">
  <h4>Prospective Collaborations & Inquiries</h4>
  <p>
    I am actively seeking <strong>PhD positions, pre-doctoral fellowships, and lab collaborations</strong> starting in 2026/2027. If your research group works on mechanistic interpretability, representation geometry, or verifiable AI safety, I welcome the opportunity to discuss shared research directions.
  </p>
  <p>
    <strong>Contact:</strong> <a href="mailto:ilyassouardi@gmail.com">ilyassouardi@gmail.com</a> &bull; <a href="https://github.com/OUARDI-ILYASS">GitHub</a> &bull; <a href="https://www.linkedin.com/in/ilyass-ouardi/">LinkedIn</a> &bull; <a href="/cv">View Curriculum Vitae</a>
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

## Ongoing: M.Sc. Thesis

<div class="thesis-block">
  <h3>What Does Forgetting Look Like? Where activations land after concept erasure</h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span>, with <a href="https://eliroc98.github.io/">Elisabetta Rocchetti</a> and <a href="https://www.unimi.it/en/ugov/person/alfio-ferrara">Alfio Ferrara</a></span> &bull;
    <span class="venue"><a href="https://islab.di.unimi.it/">ISLab</a>, University of Milan</span> &bull;
    <time>Expected 2027</time>
  </div>
  <p>Concept erasure methods are usually judged by what they remove and how much else they damage, but not by <em>where the edited activations end up</em>. My thesis studies these post-erasure activations directly and compares them with the activations the model produces on natural inputs. A guiding question is whether making a concept unrecoverable (representational absence) also makes the model treat it like a concept it has never known (semantic absence).</p>
  <p class="muted">Proposal stage. Related post: <a href="/posts/2026/09/representational-vs-semantic-absence/">Representational Absence vs. Semantic Absence</a>.</p>
</div>

## Papers & Preprints

<div class="project-card is-link">
  <img class="card-thumb" src="/assets/images/papers/truth-cones.png" alt="" loading="lazy">
  <h3><a class="card-link" href="/papers/truth-cones">The Multidimensional Geometry of Truth in Large Language Models: A Concept-Cone Extension of the Linear Representation Hypothesis</a></h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span></span> &bull;
    <span class="venue">Preprint (draft), University of Milan</span> &bull;
    <time>2026</time>
  </div>
  <div class="project-desc">
    Is propositional truth one linear direction in a model's residual stream, or a small <em>concept cone</em>? I optimize a single direction (TDO) and a $k$-dimensional cone (TCO) under two causal axioms and a KL-retention term, on six instruction-tuned models from three families. One direction is enough for the smaller models but fails for the larger ones; a 2-D cone closes the gap for every model, with basis vectors near-orthogonal to the Difference-in-Means probe yet each causally effective.
  </div>
  <div class="project-tags">
    <span class="tag">Mechanistic Interpretability</span>
    <span class="tag">Representation Geometry</span>
    <span class="tag">Concept Cones</span>
    <span class="tag">Causal Mediation</span>
  </div>
  <div class="project-actions">
    <a href="/papers/truth-cones">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="14" y2="18"></line></svg>
      Abstract
    </a>
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

<div class="project-card is-link">
  <img class="card-thumb" src="/assets/images/papers/heart-sounds.png" alt="" loading="lazy">
  <h3><a class="card-link" href="/papers/heart-sounds">What Does a Heart Sound Classifier Actually Learn? A Controlled Comparison of Cepstral, Spectral and Wavelet-Packet Representations</a></h3>
  <div class="project-meta">
    <span class="authors"><span class="me">Ilyass Ouardi</span></span> &bull;
    <span class="venue">Preprint (draft), University of Milan</span> &bull;
    <time>2026</time>
  </div>
  <div class="project-desc">
    Three feature representations and three classifiers on PhysioNet/CinC 2016, with every performance claim paired with a diagnostic that could refute it. The best model reaches a modified accuracy of 0.866, but the recording site is recoverable from the same features and diagnostic performance drops to near chance under leave-one-site-out evaluation: the aggregate metric overstates what the models learned.
  </div>
  <div class="project-tags">
    <span class="tag">Shortcut Learning</span>
    <span class="tag">Explainability</span>
    <span class="tag">Audio Pattern Recognition</span>
    <span class="tag">Evaluation</span>
  </div>
  <div class="project-actions">
    <a href="/papers/heart-sounds">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="14" y2="18"></line></svg>
      Abstract
    </a>
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


<div class="project-card is-link">
  <img class="card-thumb" src="/assets/images/papers/legend-challenge.png" alt="" loading="lazy">
  <h3><a class="card-link" href="/papers/legend-challenge">The Legend Challenge: Embedding Ethical Compliance into LLMs through Champion Narratives</a></h3>
  <div class="project-meta">
    <span class="authors">Fatmir Bylyshi*, Hicham El-Khazri*, <span class="me">Ilyass Ouardi</span>*</span> &bull;
    <span class="venue">Preprint (draft), SESAR Lab, University of Milan</span> &bull;
    <time>2026</time>
  </div>
  <div class="project-desc">
    Does a model learn a regulation better from stories of it being followed than from the regulation itself? We fine-tune the same backbone on either corpus, holding everything else fixed, and introduce GenderEqGLUE, a five-task benchmark, plus an occlusion-based interpretability analysis. The two regimes teach complementary competences: the regulation text wins on aggregate, the legends win on selecting the compliant action. <span class="muted">*Equal contribution.</span>
  </div>
  <div class="project-tags">
    <span class="tag">LLM Fine-tuning</span>
    <span class="tag">AI Ethics</span>
    <span class="tag">Benchmarks</span>
    <span class="tag">Interpretability</span>
  </div>
  <div class="project-actions">
    <a href="/papers/legend-challenge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="14" y2="18"></line></svg>
      Abstract
    </a>
    <a href="https://github.com/OUARDI-ILYASS/SOASEC-project" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      Code
    </a>
  </div>
</div>

## Writing

<ul class="writing-list">
{% assign research_posts = site.posts | where: "research", true %}
{% for post in research_posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %Y" }}</time>
    {% if post.description %}<p>{{ post.description }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
<p class="section-more"><a href="/articles">All articles &rarr;</a></p>

## Resources

<div class="project-card is-link">
  <h3><a class="card-link" href="/mech-interp-papers">Mechanistic Interpretability: A Reading Curriculum</a></h3>
  <div class="project-desc">
    A self-study curriculum ordered the way I would teach it: the conceptual vocabulary first, then reverse-engineering small models by hand, causal methods, and current open problems. Starred papers make a one-pass version.
  </div>
  <div class="project-actions">
    <a href="/mech-interp-papers">Open the curriculum</a>
  </div>
</div>

## Engineering Projects




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
