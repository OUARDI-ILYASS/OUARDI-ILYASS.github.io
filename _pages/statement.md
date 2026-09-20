---
layout: page
title: Research Statement
seo_title: "Research Statement | Ilyass Ouardi"
description: "Research statement and scientific vision of Ilyass Ouardi on mechanistic interpretability, representation geometry, and verifiable AI safety."
author_profile: true
permalink: "/statement"
mathjax: true
---

<div class="research-intro">
  <p>
    My long-term research goal is to develop <strong>mechanistically grounded, verifiable safety guarantees</strong> for advanced artificial intelligence. I focus on the intersection of <strong>mechanistic interpretability</strong>, <strong>representation geometry</strong>, and <strong>causal intervention</strong>: moving beyond correlational probes toward understanding how abstract semantic concepts inhabit high-dimensional activation manifolds, and how we can intervene on them surgically without unmeasured collateral damage.
  </p>
</div>

---

### 1. The Core Challenge: From Correlational Probing to Causal Biology

Much of empirical deep learning relies on behavioral evaluations—benchmarks that evaluate models solely on their generated tokens. While indispensable, behavioral evaluation alone cannot distinguish between genuine reasoning and deceptive shortcut exploitation, nor can it provide guarantees about how models will generalize out-of-distribution.

Mechanistic interpretability offers a rigorous alternative: treating deep networks as complex biological systems to be dissected and reverse-engineered. However, much of contemporary interpretability remains tethered to **correlational probes**:
- Fitting a linear classifier (e.g., logistic regression or Difference-in-Means) on residual stream activations to detect a concept like "truth" or "refusal."
- Conflating high probe classification accuracy with causal mediation.

As demonstrated in my recent work on truth representations, a direction that correlates strongly with a concept often fails causal interchange tests. To build reliable alignment techniques—such as unlearning dangerous capabilities or enforcing honest representations—we must operate on the exact submanifolds that **causally govern** model decisions, rather than passive statistical artifacts.

---

### 2. Geometry Beyond the Linear Representation Hypothesis

The **Linear Representation Hypothesis (LRH)** posits that high-level concepts correspond to single one-dimensional vectors in activation space. While this abstraction holds approximately for simple toy concepts, it fractures when applied to complex, context-dependent semantics.

My current research challenges and extends this hypothesis in two primary directions:

#### A. Multi-Dimensional Concept Cones (TCO)
In [*The Multidimensional Geometry of Truth in LLMs*](https://github.com/OUARDI-ILYASS/truth_cones) (2026), I investigated whether propositional truth conforms to a 1D direction or a $k$-dimensional convex concept cone. By formulating **Targeted Cone Optimization (TCO)** under simultaneous causal necessity, causal sufficiency, and KL-retention losses, empirical results revealed that:
1. In larger language models (Llama-3, Gemma), a single linear probe fails causal interchange tests.
2. A low-dimensional concept cone ($k=2$) successfully mediates truth judgments while remaining near-orthogonal to naive Difference-in-Means directions.
3. Higher-dimensional geometry naturally disentangles epistemic confidence from syntactic assertion polarity, which 1D lines conflate.

#### B. The Geometry of Absence vs. Semantic Opposite (M.Sc. Thesis)
In collaboration with Prof. Alfio Ferrara and Elisabetta Rocchetti at ISLab (University of Milan), my ongoing Master's thesis investigates how language models encode the **absence of a concept** versus its **semantic opposite** on the internal activation manifold. Understanding this topological distinction is essential for reliable concept erasure: erasing a concept must not inadvertently steer the model toward its inverted polarity.

---

### 3. Surgical Model Interventions & Off-Target Harm

An intervention built on an inaccurate geometric model is an intervention whose side-effects go unmeasured. 

Techniques such as activation steering, directional abliteration, and linear concept erasure (e.g., INLP, LEACE) are frequently celebrated for altering a target behavior (e.g., suppressing refusal or removing biased associations). Yet, in practice:
- Off-target reasoning capabilities frequently degrade.
- Suppressed features often remain latent in orthogonal subspaces, leaving models vulnerable to trivial adversarial elicitation.

My research insists that **side-effects must be measured as rigorously as primary behavioral changes**. By measuring causal retention divergence ($D_{\text{KL}}$) across unrelated factual domains, we can formulate intervention operators that provably preserve base model capabilities outside the target concept subspace.

---

### 4. Long-Term Vision & PhD Objectives (2026–2030)

During my doctoral studies, I intend to focus on three interconnected milestones:

1. **Topological Mapping of Complex Concepts:** Characterizing the intrinsic dimensionality and curvature of activation manifolds representing normative reasoning, truthfulness, and safety constraints across model families and parameter scales.
2. **Scalable Causal Intervention Tooling:** Developing open-source causal tracing and cone-optimization frameworks that integrate seamlessly with frontier model architectures (`nnsight`, PyTorch, Slurm clusters).
3. **Mathematically Certified Alignment:** Bridging the gap between empirical mechanistic interpretability and formal verification—designing internal intervention operators equipped with provable bounds against adversarial evasion.

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
