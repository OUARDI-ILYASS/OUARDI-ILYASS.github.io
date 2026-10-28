---
title: "Why Truth in Large Language Models Lives in a Cone, Not a Line"
date: 2026-09-30
toc: true
permalink: /posts/2026/09/truth-lives-in-a-cone/
tags: [Mechanistic Interpretability, Representation Geometry, LLMs, AI Safety, nnsight]
content_type: article
research: true
mathjax: true
excerpt: "Is truth a single direction in a language model's residual stream, or a small multi-dimensional cone? A short walk through my concept-cone paper: why one direction breaks for the larger models, and what a 2-D cone fixes."
---
When we probe the internal states of large language models, one of the most persistent working assumptions is the **Linear Representation Hypothesis**: high-level concepts are encoded as linear directions in the residual stream, and intervening along such a direction changes the corresponding behaviour.

Under this hypothesis, finding "truth" looks simple:
1. Collect activations on true and false statements at a chosen layer.
2. Compute the Difference-in-Means (DIM) direction, $$\boldsymbol{\theta}_{\text{DIM}} = \boldsymbol{\mu}_{+} - \boldsymbol{\mu}_{-}$$, the difference between the mean activations on true and false statements.
3. Add that direction to make a false statement read as true, or ablate it to make a true statement read as false.

Recent work on refusal (Wollschläger et al., 2025) suggests that a single direction like this may only be the one-dimensional case of a *concept cone*, a small linear subspace whose interior mediates the behaviour. My [paper](/papers/truth-cones) asks whether truth has the same structure.

---

### The test: two causal properties

I treat truth as a forced binary choice. The model sees a few-shot prompt such as "The city of Chicago is in Canada. This statement is:" and must answer "True" or "False". A candidate direction $$r$$ at layer $$l^{*}$$ *mediates truth* if it passes two tests:

1. **Sufficiency.** Adding $$r$$ to the activations of a false statement makes the model answer "True", more often as the scale grows.
2. **Necessity, surgically.** Ablating $$r$$ (projecting it out at every layer and position) makes the model answer "False" on true statements, while leaving its outputs on unrelated prompts essentially unchanged (KL divergence below 0.1, the threshold used by Arditi et al., 2024).

Two numbers measure this throughout: the **Answer Switching Rate** (ASR), the fraction of prompts whose answer flips under the intervention, and the **KL divergence** on 100 unrelated Alpaca instructions.

---

### From a direction to a cone

**Truth Direction Optimization (TDO)** starts from the DIM direction and refines it by gradient descent, with one loss term per property: a cross-entropy term for necessity, one for sufficiency, and a KL term that keeps ablation from disturbing unrelated prompts.

**Truth Cone Optimization (TCO)** extends this to an orthonormal basis $$V = [\mathbf{v}_1, \dots, \mathbf{v}_k]$$ spanning the cone

$$\mathrm{Cone}(V) = \Big\{ \textstyle\sum_{i=1}^{k} \lambda_i \mathbf{v}_i \;:\; \lambda_i \ge 0 \Big\} \setminus \{0\}$$

and asks that *every* direction in it mediates truth. Optimizing only the basis vectors is not enough: the loss can be satisfied at each $$\mathbf{v}_i$$ while the interior stays unconstrained. So at every step the loss is also computed on 16 directions sampled uniformly from inside the cone, and the basis is re-orthonormalized after each update:

```python
import torch

def sample_cone_directions(V: torch.Tensor, n: int = 16) -> torch.Tensor:
    """V: (d, k) orthonormal basis. Returns n unit directions inside Cone(V)."""
    c = torch.randn(n, V.shape[1]).abs()     # fold Gaussian mass into the positive orthant
    u = c / c.norm(dim=1, keepdim=True)      # uniform on the positive part of the unit sphere
    r = u @ V.T                              # map to the residual stream, (n, d)
    return r / r.norm(dim=1, keepdim=True)
```

I ran this on six instruction-tuned models from three families (Qwen-2.5 1.5B/7B/14B, Gemma-2 2B/9B, Llama-3.1-8B) with [`nnsight`](https://nnsight.net), on three True/False datasets (cities, animals, elements).

---

### What the results show

![Answer Switching Rate and KL divergence as a function of cone dimension k](/assets/images/papers/truth-cones.png)

1. **One direction is not enough for the larger models.** TDO improves on DIM for five of six models, but for the three larger ones (Qwen-2.5-7B, Qwen-2.5-14B, Llama-3.1-8B) a single direction fails on two axes at once: ablation flips too few answers (Qwen-2.5-7B: ASR $$= 0.020$$), and it disturbs unrelated prompts beyond the KL threshold (0.29, 0.19 and 0.28).
2. **A 2-D cone closes both gaps.** At $$k = 2$$, all six models reach a mean ASR of 1.000 in distribution over 32 directions sampled from the cone, and every model's KL drops below 0.05.
3. **The cone is not a copy of the probe.** At $$k = 4$$ every basis vector is near-orthogonal to the DIM direction ($$\lvert\cos\rvert < 0.1$$, most below 0.05), yet each is causally effective. DIM is only a starting point.
4. **More dimensions are not always better.** At $$k = 3$$, Llama-3.1-8B and Qwen-2.5-7B rise back above the KL threshold, so $$k = 2$$ looks like the safe operating point.

The joint failure is the interesting part: the same three models fail necessity and surgicality at $$k = 1$$, and both recover at $$k = 2$$. That is what you would expect if a single direction were a projection of a multi-dimensional structure, under-specifying the concept and disturbing the components it leaves out.

---

### Why it matters

If we want to use interpretability to make safety measurable, our interventions have to be both effective and precise, and that depends on having the right picture of the geometry. For the models I tested, truth looks like a small multi-dimensional linear subspace rather than a single line. Ablating one direction from a structure like that can leave the rest in place while disturbing things it should not touch.

The results come with limits: three model families, three factual domains, and weaker out-of-distribution generalization for Qwen-2.5-7B at $$k = 2$$. The details are in the paper.

---

*[Paper and abstract](/papers/truth-cones) · code in the [`truth_cones`](https://github.com/OUARDI-ILYASS/truth_cones) repository.*
