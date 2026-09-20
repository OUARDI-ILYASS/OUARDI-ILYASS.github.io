---
layout: page
title: Mechanistic Interpretability Papers
seo_title: "Mechanistic Interpretability Papers & Syllabus | Ilyass Ouardi"
description: "Curated syllabus and research bibliography in mechanistic interpretability, representation geometry, sparse autoencoders, and causal alignment by Ilyass Ouardi."
author_profile: true
permalink: "/mech-interp-papers"
---

<p style="margin-bottom: 1.5rem;">
  <a href="/reading-list" style="text-decoration: none; font-size: 0.9rem; color: #4a5568;">&larr; Back to Reading List</a>
</p>

<div class="research-intro">
  <p>
    A curated syllabus of foundational and seminal papers in <strong>mechanistic interpretability</strong>, <strong>representation geometry</strong>, and <strong>causal alignment</strong>. This bibliography reflects the scientific backbone behind my research—tracing the evolution from toy superposition models to high-dimensional concept cones and verifiable model interventions.
  </p>
  <p>
    Each section is organized around a central mechanistic inquiry, complete with verified citations, direct preprint links, and synthesized takeaways.
  </p>
</div>

---

### 1. The Linear Representation Hypothesis & Representation Geometry

*How do concepts inhabit activation spaces, and where does single-vector linearity break down?*

- **The Linear Representation Hypothesis and the Geometry of Large Language Models**  
  *Kiho Park, Yo Joong Choe, Victor Veitch (2023)* &bull; [[arXiv:2311.03658](https://arxiv.org/abs/2311.03658)]  
  > **Core Insight:** Formalizes the theoretical conditions under which high-level latent variables are linearly decodable in intermediate representations, establishing the mathematical foundations of directional representation.

- **The Geometry of Truth: Emergent Linear Structure in Large Language Model Representations of True/False Datasets**  
  *Samuel Marks, Max Tegmark (2023)* &bull; [[arXiv:2310.06824](https://arxiv.org/abs/2310.06824)]  
  > **Core Insight:** Demonstrates that binary truth judgments across factual statements project onto low-dimensional linear subspaces across diverse model scales, sparking wide interest in internal belief extraction.

- **The Geometry of Refusal in Large Language Models: Concept Cones and Representational Independence**  
  *Tom Wollschläger, Jannes Elstner, Simon Geisler et al. (2025)* &bull; [[arXiv:2502.17420](https://arxiv.org/abs/2502.17420)]  
  > **Core Insight:** Reveals that safety refusal is not merely a 1D vector but exhibits convex cone geometry, demonstrating how multidimensional concept cones govern complex model guardrails.

- **The Geometries of Truth Are Orthogonal Across Tasks**  
  *Waiss Azizian, Michael Kirchhof, Eugene Ndiaye et al. (2025)* &bull; [[arXiv:2506.08572](https://arxiv.org/abs/2506.08572)]  
  > **Core Insight:** Proves that linear truth probes trained on one dataset often fail to generalize to other factual distributions because task-specific truth manifolds lie in mutually orthogonal subspaces.

- **The Geometry of Categorical and Hierarchical Concepts in Large Language Models**  
  *Kiho Park, Yo Joong Choe, Yibo Jiang, Victor Veitch (2024)* &bull; [[arXiv:2406.01506](https://arxiv.org/abs/2406.01506)]  
  > **Core Insight:** Extends geometric probing to hierarchical ontologies and categorical groupings, showing how nested semantic structures embed as geometric simplices and cones rather than flat lines.

---

### 2. Superposition, Polysemanticity & Sparse Autoencoders (SAEs)

*How do models pack more features than dimensions, and how do we untangle them?*

- **Toy Models of Superposition**  
  *Nelson Elhage, Tristan Hume, Catherine Olsson, Neel Nanda et al. (Anthropic, 2022)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2022/toy_model/index.html)]  
  > **Core Insight:** The foundational paper establishing superposition: shows that neural networks exploit nearly orthogonal geometry in high-dimensional vector spaces to represent vastly more features than available dimensions when features are sparse.

- **Sparse Autoencoders Find Highly Interpretable Features in Language Models**  
  *Hoagy Cunningham, Aidan Ewart, Logan Riggs, Robert Huben, Lee Sharkey (ICLR 2024)* &bull; [[arXiv:2309.08600](https://arxiv.org/abs/2309.08600)]  
  > **Core Insight:** One of the first demonstrations that $L_1$-regularized Sparse Autoencoders trained on transformer residual streams resolve polysemantic neurons into monosemantic, steerable linear features.

- **Towards Monosemanticity: Decomposing Language Models with Dictionary Learning**  
  *Trenton Bricken et al. (Anthropic, 2023)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2023/monosemantic-features/index.html)]  
  > **Core Insight:** Deploys dictionary learning on a one-layer transformer, demonstrating that SAEs yield features that are more interpretable than neurons, causally active, and less prone to interference.

- **Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet**  
  *Adly Templeton et al. (Anthropic, 2024)* &bull; [[arXiv:2605.29358](https://arxiv.org/abs/2605.29358)] &bull; [[Transformer Circuits](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html)]  
  > **Core Insight:** Scales SAE dictionary learning to a frontier production model (Claude 3 Sonnet), extracting millions of abstract features (deception, sycophancy, code vulnerabilities) that enable direct behavioral steering.

- **Scaling and Evaluating Sparse Autoencoders**  
  *Leo Gao, Tom Dupré la Tour, Henk Tillman, Gabriel Goh et al. (OpenAI, 2024)* &bull; [[arXiv:2406.04093](https://arxiv.org/abs/2406.04093)]  
  > **Core Insight:** Proposes scaling laws and rigorous evaluation methodologies for SAEs, analyzing reconstruction loss versus sparsity trade-offs and feature absorption phenomena.

- **Improving Dictionary Learning with Gated Sparse Autoencoders**  
  *Senthooran Rajamanoharan, Arthur Conmy, Lewis Smith, Neel Nanda et al. (Google DeepMind, 2024)* &bull; [[arXiv:2404.16014](https://arxiv.org/abs/2404.16014)]  
  > **Core Insight:** Introduces Gated SAEs to tackle feature shrinkage caused by $L_1$ penalty by separating the gating decision (support detection) from magnitude estimation.

- **Jumping Ahead: Improving Reconstruction Fidelity with JumpReLU Sparse Autoencoders**  
  *Senthooran Rajamanoharan, Tom Lieberum, Nicolas Sonnerat, Neel Nanda et al. (Google DeepMind, 2024)* &bull; [[arXiv:2407.14435](https://arxiv.org/abs/2407.14435)]  
  > **Core Insight:** Replaces continuous ReLU activations with discontinuous JumpReLU activation functions, drastically improving Pareto frontiers between reconstruction fidelity and $L_0$ sparsity.

---

### 3. Causal Mediation, Activation Patching & Circuit Discovery

*Moving from observational correlation to surgical, falsifiable intervention.*

- **Locating and Editing Factual Associations in GPT (ROME)**  
  *Kevin Meng, David Bau, Alex Andonian, Yonatan Belinkov (NeurIPS 2022)* &bull; [[arXiv:2202.05262](https://arxiv.org/abs/2202.05262)]  
  > **Core Insight:** Introduces causal tracing via activation corruption and restoration to localize factual recall to mid-layer MLP modules, enabling surgical rank-one weight updates.

- **In-Context Learning and Induction Heads**  
  *Catherine Olsson, Nelson Elhage, Neel Nanda et al. (Anthropic, 2022)* &bull; [[arXiv:2209.11895](https://arxiv.org/abs/2209.11895)]  
  > **Core Insight:** Identifies two-layer attention head circuits ("induction heads") that execute token copy-and-paste algorithms, serving as the core mechanistic engine behind in-context learning.

- **Interpretability in the Wild: A Circuit for Indirect Object Identification in GPT-2 small**  
  *Kevin Wang, Alexandre Variengien, Arthur Conmy, Neel Nanda et al. (ICLR 2023)* &bull; [[arXiv:2211.00593](https://arxiv.org/abs/2211.00593)]  
  > **Core Insight:** Reverse-engineers a complete 26-head circuit responsible for Indirect Object Identification (IOI), illustrating how specialized heads (Name Mover, S-Inhibition, Duplicate Token) cooperate to perform reasoning.

- **Towards Automated Circuit Discovery for Language Models (ACDC)**  
  *Arthur Conmy, Augustine N. Mavor-Parker, Aengus Lynch et al. (NeurIPS 2023)* &bull; [[arXiv:2304.14997](https://arxiv.org/abs/2304.14997)]  
  > **Core Insight:** Automates the laborious process of manual circuit finding by systematically pruning non-essential model edges via activation patching against a Kullback-Leibler divergence threshold.

- **Progress Measures for Grokking via Mechanistic Interpretability**  
  *Neel Nanda, Lawrence Chan, Tom Lieberum, Jess Smith, Jacob Steinhardt (ICLR 2023)* &bull; [[arXiv:2301.05217](https://arxiv.org/abs/2301.05217)]  
  > **Core Insight:** Demonstrates that during delayed generalization (grokking) on modular arithmetic, models transition from memorization to a clean discrete Fourier transform algorithm, tracked via internal geometric progress measures.

---

### 4. Representation Engineering & Concept Erasure

*Controlling representations, removing unwanted capabilities, and measuring off-target harm.*

- **Representation Engineering: A Top-Down Approach to AI Transparency**  
  *Andy Zou, Long Phan, Sarah Chen et al. (Center for AI Safety, 2023)* &bull; [[arXiv:2310.01405](https://arxiv.org/abs/2310.01405)]  
  > **Core Insight:** Establishes a top-down paradigm (RepE) for reading and controlling model honesty, hallucination, and morality by extracting reading vectors and injecting steering vectors at inference time.

- **Steering Language Models With Activation Engineering**  
  *Alexander Matt Turner, Lisa Thiergart, David Udell et al. (2023)* &bull; [[arXiv:2308.10248](https://arxiv.org/abs/2308.10248)]  
  > **Core Insight:** Proposes Activation Addition (ActAdd), modifying forward passes without weight optimization by adding concept difference vectors directly into hidden states.

- **LEACE: Perfect Linear Concept Erasure in Closed Form**  
  *Nora Belrose, David Schneider-Joseph, Shauli Ravfogel et al. (NeurIPS 2023)* &bull; [[arXiv:2306.03819](https://arxiv.org/abs/2306.03819)]  
  > **Core Insight:** Proves that linear concept erasure can be solved optimally in closed form, guaranteeing that no linear classifier can extract the target concept from erased representations while minimizing overall distortion.

- **Refusal in Language Models Is Mediated by a Single Direction**  
  *Andy Arditi, Oscar Obeso, Aaquib Syed et al. (2024)* &bull; [[arXiv:2406.11717](https://arxiv.org/abs/2406.11717)]  
  > **Core Insight:** Shows that refusal behavior across safety-aligned open-weight models is bottlenecked through a single linear direction, establishing directional abliteration as a fundamental concept-erasure baseline.

---

### 5. Unsupervised Discovery & Eliciting Latent Knowledge (ELK)

*Discovering internal beliefs without reliance on behavioral labels.*

- **Discovering Latent Knowledge in Language Models Without Supervision**  
  *Collin Burns, Haotian Ye, Dan Klein, Jacob Steinhardt (ICLR 2023)* &bull; [[arXiv:2212.03827](https://arxiv.org/abs/2212.03827)]  
  > **Core Insight:** Introduces Contrast Consistent Search (CCS), identifying internal representations of truth without ground-truth labels by enforcing logical consistency constraints ($P(A) + P(\neg A) = 1$) on activation space.

- **The Internal State of an LLM Knows When It's Lying**  
  *Amos Azaria, Tom Mitchell (EMNLP 2023)* &bull; [[arXiv:2304.13734](https://arxiv.org/abs/2304.13734)]  
  > **Core Insight:** Shows that classifiers trained on hidden layers can detect when a model is outputting false statements even when the model expresses high verbal confidence in its generation.
