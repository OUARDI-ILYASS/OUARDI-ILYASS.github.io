---
title: "The Multidimensional Geometry of Truth in Large Language Models: A Concept-Cone Extension of the Linear Representation Hypothesis"
authors:
  - name: Ilyass Ouardi
    me: true
affiliation: Department of Computer Science, University of Milan
venue: Preprint (draft)
year: 2026
status: Manuscript
pdf: https://github.com/OUARDI-ILYASS/truth_cones/blob/main/report.pdf
code: https://github.com/OUARDI-ILYASS/truth_cones
image: /assets/images/papers/truth-cones.png
image_caption: "$k=2$ resolves both axes simultaneously for larger models: (a) answer switching rate under ablation rises with cone dimension $k$; (b) KL divergence on unrelated prompts falls below the surgicality threshold at $k=2$."
tags: [Mechanistic Interpretability, Representation Geometry, Concept Cones, Causal Mediation]
---

The Linear Representation Hypothesis holds that high-level concepts are encoded as linear directions in a language model's residual stream. Under this hypothesis, propositional truth is modeled as one such direction: a Difference-in-Means (DIM) probe recovers it, and adding or ablating that direction can flip the model's True/False verdict. Recent work on refusal suggests this single direction may be the one-dimensional case of a multi-dimensional *concept cone*, a linear subspace whose interior mediates the behaviour. This project asks whether truth has the same structure.

I test two methods: *Truth Direction Optimization* (TDO), a gradient-based refinement of the DIM direction under a loss that encodes two causal axioms and a KL-retention term; and *Truth Cone Optimization* (TCO), which extends this to a $k$-dimensional orthonormal cone and, at every step, samples directions from *inside* the cone so the optimizer targets the interior rather than only the basis. On six instruction-tuned models from three families (Qwen-2.5 1.5/7/14B, Gemma-2 2/9B, Llama-3.1-8B), a single direction is causally sufficient for the smaller models but fails for the larger ones on two axes at once: low ablation Answer Switching Rate and raised KL divergence on unrelated prompts. A 2-D cone closes both gaps for every model. The basis vectors are near-orthogonal to the DIM probe ($\lvert\cos\rvert < 0.1$) yet each is individually causally effective. For the models I tested, this is consistent with truth occupying a small multi-dimensional linear subspace rather than a single line.
