---
layout: page
title: Mechanistic Interpretability Papers
seo_title: "Mechanistic Interpretability Papers & Syllabus | Ilyass Ouardi"
description: "Curated syllabus and research bibliography in mechanistic interpretability, representation geometry, sparse autoencoders, and causal alignment by Ilyass Ouardi."
author_profile: true
permalink: "/mech-interp-papers"
back_url: "/research"
back_label: "Research"
---

<div class="research-intro">
  <p>
    A self-study curriculum in <strong>mechanistic interpretability</strong>, ordered the way I would teach it: build the conceptual vocabulary, reverse-engineer small models by hand, learn the causal toolkit, move to dictionary learning and frontier-scale circuit tracing, then apply it to representation geometry, steering, and safety.
  </p>
  <p>
    Each part opens with the question it answers. Within a part, papers are in suggested reading order. If you only have time for one pass, read the <strong>★ starred</strong> items.
  </p>
</div>

---

### Part 0: Orientation & Prerequisites

*Why the field exists, how to enter it, and what to know before reading a paper.*

- **Neural Networks: Zero to Hero** (Andrej Karpathy) &bull; [[YouTube](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)]  
  > Build a GPT from scratch; you cannot reverse-engineer what you have not implemented.

- **Neural Networks / Essence of Linear Algebra** (3Blue1Brown) &bull; [[Neural Networks](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)] &bull; [[Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)]  
  > Geometric intuition for vectors, subspaces, and projections, which the rest of the field leans on.

- **The Urgency of Interpretability**  
  *Dario Amodei (2025)* &bull; [[Essay](https://www.darioamodei.com/post/the-urgency-of-interpretability)]  
  > The motivating case: why understanding models should mature before they become more capable.

- ★ **How To Become A Mechanistic Interpretability Researcher**  
  *Neel Nanda (2025)* &bull; [[Alignment Forum](https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher)]  
  > Practical roadmap for entering the field and doing research that holds up.

**Tooling to install early:** [Neuronpedia](https://www.neuronpedia.org/) (browse SAE features) &bull; [EleutherAI](https://github.com/EleutherAI) (automated feature interpretation) &bull; [EasySteer](https://github.com/ZJU-REAL/EasySteer) (steering) &bull; [learnmechinterp.com](https://learnmechinterp.com) (general guide)

---

### Part 1: Core Concepts: Features, Circuits & Superposition

*What are the units of computation in a network, and why are they hard to find?*

- ★ **Zoom In: An Introduction to Circuits**  
  *Chris Olah et al. (Distill, 2020)* &bull; [[Distill](https://distill.pub/2020/circuits/zoom-in/)]  
  > The founding statement of the research agenda: features are the units of representation, circuits are the weights connecting them.

- **Efficient Estimation of Word Representations in Vector Space**  
  *Tomas Mikolov et al. (2013)* &bull; [[arXiv:1301.3781](https://arxiv.org/abs/1301.3781)]  
  > word2vec: the classic demonstration of linear structure in learned embeddings.

- ★ **Toy Models of Superposition**  
  *Nelson Elhage, Tristan Hume, Catherine Olsson, Neel Nanda et al. (Anthropic, 2022)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2022/toy_model/index.html)]  
  > Networks exploit near-orthogonal geometry to represent more sparse features than they have dimensions, which is why individual neurons are polysemantic.

- ★ **The Linear Representation Hypothesis and the Geometry of Large Language Models**  
  *Kiho Park, Yo Joong Choe, Victor Veitch (2023)* &bull; [[arXiv:2311.03658](https://arxiv.org/abs/2311.03658)]  
  > Formalizes when high-level concepts are linearly decodable in intermediate representations, the mathematical foundation for directional representation.

---

### Part 2: Reverse-Engineering Small Models

*Can we fully explain an algorithm a transformer learned? Start where ground truth exists.*

- ★ **In-Context Learning and Induction Heads**  
  *Catherine Olsson, Nelson Elhage, Neel Nanda et al. (Anthropic, 2022)* &bull; [[arXiv:2209.11895](https://arxiv.org/abs/2209.11895)]  
  > Two-layer attention circuits that implement copy-and-complete, a core mechanism behind in-context learning.

- ★ **Progress Measures for Grokking via Mechanistic Interpretability**  
  *Neel Nanda, Lawrence Chan, Tom Lieberum, Jess Smith, Jacob Steinhardt (ICLR 2023)* &bull; [[arXiv:2301.05217](https://arxiv.org/abs/2301.05217)]  
  > Delayed generalization on modular arithmetic corresponds to the model learning a discrete-Fourier-transform algorithm, tracked with internal progress measures.

- **Language Models Use Trigonometry to Do Addition**  
  *Subhash Kantamneni, Max Tegmark (2025)* &bull; [[arXiv:2502.00873](https://arxiv.org/abs/2502.00873)]  
  > The grokking-style story extended to a pretrained LLM: arithmetic implemented through trigonometric structure in activations.

- **Interpretability in the Wild: A Circuit for Indirect Object Identification in GPT-2 small**  
  *Kevin Wang, Alexandre Variengien, Arthur Conmy, Neel Nanda et al. (ICLR 2023)* &bull; [[arXiv:2211.00593](https://arxiv.org/abs/2211.00593)]  
  > A full circuit for IOI in a real model, with specialized head classes (Name Mover, S-Inhibition, Duplicate Token) cooperating.

#### Case study: Othello-GPT (do these in order)

*Does a model trained only on move sequences build an internal world model?*

- ★ **Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task**  
  *Kenneth Li et al. (2022)* &bull; [[arXiv:2210.13382](https://arxiv.org/abs/2210.13382)]
- **Interpreting Othello-GPT**  
  *Neel Nanda (2023)* &bull; [[Alignment Forum](https://www.alignmentforum.org/s/nhGNHyJHbrofpPbRG)]
- **Some OthelloGPT Circuits**  
  *Wong (2025)* &bull; [[LessWrong](https://www.lesswrong.com/posts/YYci85rqjucBYQGjr/some-othellogpt-circuits)]
- **Automatically Finding Rule-Based Neurons in OthelloGPT**  
  *Singh et al. (2025)* &bull; [[arXiv:2511.00059](https://arxiv.org/abs/2511.00059)]

(The SAE-on-Othello papers appear in Part 4, where they serve as evaluations.)

---

### Part 3: The Causal Toolkit: Patching & Circuit Discovery

*From correlation to falsifiable intervention.*

- ★ **Locating and Editing Factual Associations in GPT (ROME)**  
  *Kevin Meng, David Bau, Alex Andonian, Yonatan Belinkov (NeurIPS 2022)* &bull; [[arXiv:2202.05262](https://arxiv.org/abs/2202.05262)]  
  > Causal tracing by corrupting and restoring activations localizes factual recall to mid-layer MLPs, enabling rank-one edits.

- **Towards Automated Circuit Discovery for Language Models (ACDC)**  
  *Arthur Conmy, Augustine N. Mavor-Parker, Aengus Lynch et al. (NeurIPS 2023)* &bull; [[arXiv:2304.14997](https://arxiv.org/abs/2304.14997)]  
  > Automates manual circuit finding by pruning non-essential edges via activation patching against a KL-divergence threshold.

*Exercise: reproduce the IOI circuit from Part 2 with patching before reading ACDC.*

---

### Part 4: Dictionary Learning & Sparse Autoencoders

*If neurons are polysemantic, can we recover the true features?*

- **An Intuitive Explanation of Sparse Autoencoders for LLM Interpretability**  
  *Adam Karvonen (2024)* &bull; [[Blog](https://adamkarvonen.github.io/machine_learning/2024/06/11/sae-intuitions.html)]  
  > Read first; the cleanest on-ramp.

- **Sparse Autoencoders Find Highly Interpretable Features in Language Models**  
  *Hoagy Cunningham, Aidan Ewart, Logan Riggs, Robert Huben, Lee Sharkey (ICLR 2024)* &bull; [[arXiv:2309.08600](https://arxiv.org/abs/2309.08600)]  
  > $L_1$-regularized SAEs on residual streams resolve polysemantic neurons into more monosemantic, steerable features.

- ★ **Towards Monosemanticity: Decomposing Language Models with Dictionary Learning**  
  *Trenton Bricken et al. (Anthropic, 2023)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2023/monosemantic-features/index.html)]  
  > On a one-layer transformer, SAE features are more interpretable than neurons and causally active.

- ★ **Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet**  
  *Adly Templeton et al. (Anthropic, 2024)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html)]  
  > Scales to a production model, extracting abstract features (deception, sycophancy, code vulnerabilities) that steer behavior.

- **Comments on Anthropic's Scaling Monosemanticity**  
  *LessWrong* &bull; [[Post](https://www.lesswrong.com/posts/zzmhsKx5dBpChKhry/comments-on-anthropic-s-scaling-monosemanticity)]  
  > Critical reading to pair with the paper.

#### Improving & evaluating SAEs

- **Scaling and Evaluating Sparse Autoencoders**  
  *Leo Gao, Tom Dupré la Tour, Henk Tillman, Gabriel Goh et al. (OpenAI, 2024)* &bull; [[arXiv:2406.04093](https://arxiv.org/abs/2406.04093)]  
  > Scaling laws and evaluation methodology, including reconstruction-vs-sparsity trade-offs.
- **Improving Dictionary Learning with Gated Sparse Autoencoders**  
  *Senthooran Rajamanoharan, Arthur Conmy, Lewis Smith, Neel Nanda et al. (Google DeepMind, 2024)* &bull; [[arXiv:2404.16014](https://arxiv.org/abs/2404.16014)]  
  > Separates support detection from magnitude estimation to reduce $L_1$ feature shrinkage.
- **Jumping Ahead: Improving Reconstruction Fidelity with JumpReLU Sparse Autoencoders**  
  *Senthooran Rajamanoharan, Tom Lieberum, Nicolas Sonnerat, Neel Nanda et al. (Google DeepMind, 2024)* &bull; [[arXiv:2407.14435](https://arxiv.org/abs/2407.14435)]  
  > Discontinuous JumpReLU activations improve the reconstruction/$L_0$ Pareto frontier.

#### Do SAEs actually find the ground truth? (Othello as a testbed)

- **Evaluating Sparse Autoencoders with Board Game Models**  
  *Adam Karvonen et al. (2024)* &bull; [[LessWrong](https://www.lesswrong.com/posts/EWhA4pyfrbdSkCd4G/evaluating-sparse-autoencoders-with-board-game-models)]
- **Research Report: Sparse Autoencoders find only 9/180 board state features in OthelloGPT**  
  *Robert_AIZI (2024)* &bull; [[LessWrong](https://www.lesswrong.com/posts/BduCMgmjJnCtc7jKc)]
- **Dictionary Learning Improves Patch-Free Circuit Discovery in Mechanistic Interpretability: A Case Study on Othello-GPT**  
  *Zhengfu He et al. (2024)* &bull; [[arXiv:2402.12201](https://arxiv.org/abs/2402.12201)]

---

### Part 5: Circuit Tracing at Frontier Scale

*Features plus circuits: explaining what a large model does on a specific prompt.*

- **Sparse Crosscoders for Cross-Layer Features and Model Diffing**  
  *Jack Lindsey et al. (Anthropic, 2024)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2024/crosscoders/index.html)]  
  > Features shared across layers and models; the basis for cross-layer transcoders and model diffing.

- ★ **Circuit Tracing: Revealing Computational Graphs in Language Models**  
  *Emmanuel Ameisen et al. (Anthropic, 2025)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2025/attribution-graphs/methods.html)]  
  > The methods paper for attribution graphs.

- ★ **On the Biology of a Large Language Model**  
  *Jack Lindsey et al. (Anthropic, 2025)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)]  
  > Attribution graphs applied to case studies in a production model.

- **Natural Language Autoencoders Produce Unsupervised Explanations of LLM Activations**  
  *Fraser-Taliente et al. (Anthropic, 2026)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2026/nla/index.html)]

---

### Part 6: Representation Geometry

*Where do concepts live in activation space, and when does a single direction fail?*

- ★ **The Geometry of Truth: Emergent Linear Structure in Large Language Model Representations of True/False Datasets**  
  *Samuel Marks, Max Tegmark (2023)* &bull; [[arXiv:2310.06824](https://arxiv.org/abs/2310.06824)]  
  > Truth judgments project onto low-dimensional linear structure across model scales.

- **The Geometries of Truth Are Orthogonal Across Tasks**  
  *Waiss Azizian, Michael Kirchhof, Eugene Ndiaye et al. (2025)* &bull; [[arXiv:2506.08572](https://arxiv.org/abs/2506.08572)]  
  > Truth probes often fail to transfer because task-specific truth subspaces are mutually orthogonal.

- **The Geometry of Categorical and Hierarchical Concepts in Large Language Models**  
  *Kiho Park, Yo Joong Choe, Yibo Jiang, Victor Veitch (2024)* &bull; [[arXiv:2406.01506](https://arxiv.org/abs/2406.01506)]  
  > Hierarchical ontologies embed as simplices and cones, not flat lines.

- **The Geometry of Refusal in Large Language Models: Concept Cones and Representational Independence**  
  *Tom Wollschläger, Jannes Elstner, Simon Geisler et al. (2025)* &bull; [[arXiv:2502.17420](https://arxiv.org/abs/2502.17420)]  
  > Refusal exhibits convex-cone geometry rather than a single direction. Read after Part 7's refusal paper.

---

### Part 7: Steering, Erasure & Safety Applications

*Using what we know to read and control model behavior.*

- ★ **Steering Language Models With Activation Engineering**  
  *Alexander Matt Turner, Lisa Thiergart, David Udell et al. (2023)* &bull; [[arXiv:2308.10248](https://arxiv.org/abs/2308.10248)]  
  > Activation Addition: add concept-difference vectors to hidden states, with no weight optimization.

- **Representation Engineering: A Top-Down Approach to AI Transparency**  
  *Andy Zou, Long Phan, Sarah Chen et al. (Center for AI Safety, 2023)* &bull; [[arXiv:2310.01405](https://arxiv.org/abs/2310.01405)]  
  > Top-down reading and steering vectors for honesty, hallucination, and morality.

- ★ **Refusal in Language Models Is Mediated by a Single Direction**  
  *Andy Arditi, Oscar Obeso, Aaquib Syed et al. (2024)* &bull; [[arXiv:2406.11717](https://arxiv.org/abs/2406.11717)]  
  > Refusal is bottlenecked through one linear direction, making directional ablation a baseline for removing behavior.

- **LEACE: Perfect Linear Concept Erasure in Closed Form**  
  *Nora Belrose, David Schneider-Joseph, Shauli Ravfogel et al. (NeurIPS 2023)* &bull; [[arXiv:2306.03819](https://arxiv.org/abs/2306.03819)]  
  > Optimal closed-form linear erasure with minimal distortion.

---

### Part 8: Eliciting Latent Knowledge & Internal Beliefs

*Can we read what a model believes without trusting what it says?*

- **Discovering Latent Knowledge in Language Models Without Supervision**  
  *Collin Burns, Haotian Ye, Dan Klein, Jacob Steinhardt (ICLR 2023)* &bull; [[arXiv:2212.03827](https://arxiv.org/abs/2212.03827)]  
  > Contrast Consistent Search finds truth directions using only logical consistency ($P(A) + P(\neg A) = 1$).

- **The Internal State of an LLM Knows When It's Lying**  
  *Amos Azaria, Tom Mitchell (EMNLP 2023)* &bull; [[arXiv:2304.13734](https://arxiv.org/abs/2304.13734)]  
  > Probes on hidden layers detect false outputs even when verbal confidence is high.

---

### Part 9: Frontier Reads: Model Psychology

*What do internals say about introspection and affect-like states?*

- **Emergent Introspective Awareness in Large Language Models**  
  *Jack Lindsey (Anthropic, 2025)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2025/introspection/index.html)]
- **Emotion Concepts and their Function in a Large Language Model**  
  *Sofroniew et al. (Anthropic, 2026)* &bull; [[Transformer Circuits](https://transformer-circuits.pub/2026/emotions/index.html)]

---

*Parts 0 and 4-5 incorporate material from the [Mech Interp Reading List](https://hackmd.io/@letargicus/HyWstgwlfe) by letargicus.*
