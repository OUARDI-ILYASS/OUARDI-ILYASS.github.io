---
title: "Why Truth in Large Language Models Lives in a Cone, Not a Line"
date: 2026-09-30
toc: true
permalink: /posts/2026/09/truth-lives-in-a-cone/
tags: [Mechanistic Interpretability, Representation Geometry, LLMs, AI Safety, nnsight]
content_type: article
mathjax: true
excerpt: "The Linear Representation Hypothesis posits that high-level concepts correspond to single 1D directions in activation space. But does truth actually behave linearly when models scale up? Here is why a 2D concept cone provides a much more faithful geometric picture."
---

When we probe the internal states of Large Language Models, one of the most persistent working assumptions is the **Linear Representation Hypothesis (LRH)**: the idea that high-level semantic concepts are represented as one-dimensional linear directions in activation space.

Under this hypothesis, finding "truth" in a model like Llama or Gemma looks conceptually simple:
1. Collect activations on true vs. false statements: $(x_{\text{true}}, x_{\text{false}})$.
2. Compute the Difference-in-Means (DiM) direction:
   $$\mathbf{v}_{\text{DiM}} = \mathbb{E}[\mathbf{a}_{\text{true}}] - \mathbb{E}[\mathbf{a}_{\text{false}}]$$
3. Project an arbitrary statement's activation onto $\mathbf{v}_{\text{DiM}}$ to read off its truth value, or intervene along $\mathbf{v}_{\text{DiM}}$ to steer the model toward honesty.

It is an elegant picture. But as models scale and the questions become non-trivial, the 1D linear picture begins to fracture.

---

### The Cracks in the 1D Linear Picture

If truth were truly a single one-dimensional line in activation space, two things should hold:

1. **Causal Sufficiency:** Intervening along this direction should reliably invert truth judgments across different statement formats without collateral damage.
2. **Causal Necessity:** Ablating this direction should extinguish the model's ability to discriminate truth, reducing downstream accuracy to chance.

In practice, when you test these conditions on larger models (such as Llama-3-8B or Gemma-2-9B) using causal interchange experiments, the 1D direction struggles:
- Probing accuracy might look deceptively high ($>85\%$), but when you ablate that exact probe vector, the model often retains substantial ability to tell truth from falsehood.
- Inverting the vector or steering with it frequently induces off-target collapse—degrading unrelated reasoning capabilities or simply turning affirmative sentences into syntactic negations rather than factual updates.

Why? Because human truth-evaluations are not simply scalar values like temperature or brightness. Truth in natural language is intrinsically entangled with semantic topics, polarity (affirming vs. negating), and syntactic framing.

---

### From Lines to Cones: Targeted Cone Optimization (TCO)

Rather than forcing representations into a 1D vector $\mathbf{v} \in \mathbb{R}^d$, what if concepts inhabit a low-dimensional convex cone?

A **concept cone** $\mathcal{C}_k$ spanned by a basis $V = [\mathbf{v}_1, \dots, \mathbf{v}_k] \in \mathbb{R}^{d \times k}$ defines a subspace where membership is evaluated via conic combinations:
$$\mathcal{C}_k = \left\{ \sum_{i=1}^k \alpha_i \mathbf{v}_i \;\middle|\; \alpha_i \ge 0 \right\}$$

Following recent formulations by Wollschlager et al. (2025) and our own experiments in [truth_cones](https://github.com/OUARDI-ILYASS/truth_cones), we formulate **Targeted Cone Optimization (TCO)**. Instead of taking passive differences of empirical means, we directly optimize the cone basis $V$ end-to-end under three simultaneous causal objectives:

1. **Necessity Loss ($\mathcal{L}_{\text{nec}}$):** When the subspace $V$ is ablated from the model's residual stream at layer $\ell$, the probability of predicting the correct truth token must fall to uniform entropy.
2. **Sufficiency Loss ($\mathcal{L}_{\text{suff}}$):** When the subspace activation is patched from a true statement into a false statement, the model's output must invert to the true target.
3. **KL Retention Loss ($\mathcal{L}_{\text{KL}}$):** On unrelated benchmark tokens, the modified model's output distribution must remain minimally perturbed from the base model:
   $$\mathcal{L}_{\text{KL}} = D_{\text{KL}}\left(P_{\text{base}}(y \mid x_{\text{neutral}}) \;\parallel\; P_{\text{intervened}}(y \mid x_{\text{neutral}})\right)$$

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class ConceptCone(nn.Module):
    def __init__(self, d_model: int, k_dim: int = 2):
        super().__init__()
        # Orthonormal basis initialized randomly or via SVD of probe residual
        self.basis = nn.Parameter(torch.randn(d_model, k_dim))
        
    def project(self, activations: torch.Tensor) -> torch.Tensor:
        # Normalize columns to maintain unit basis vectors
        q, _ = torch.linalg.qr(self.basis)
        # Projection onto k-dimensional cone subspace
        return torch.matmul(activations, q) @ q.T

    def ablate(self, activations: torch.Tensor) -> torch.Tensor:
        return activations - self.project(activations)
```

---

### What the Geometry Actually Shows

When you optimize a 2D cone ($k=2$) on Llama-3 residual streams using [`nnsight`](https://nnsight.net), an unexpected geometric phenomenon emerges:

1. **Near-Orthogonality to Difference-in-Means:**  
   The optimized basis vectors $\mathbf{v}_1, \mathbf{v}_2$ are virtually orthogonal to the standard $\mathbf{v}_{\text{DiM}}$ probe ($\cos(\theta) < 0.15$). 
2. **Superior Causal Efficiency:**  
   Despite being nearly orthogonal to the direction that naive classifiers latch onto, intervening on this 2D cone achieves over **90% causal flip rate** with less than half the KL drift on unrelated factual tasks compared to 1D interventions.
3. **Disentangling Truth from Negation:**  
   One basis vector roughly corresponds to *epistemic confidence* (whether the assertion is verifiable), while the orthogonal vector captures *semantic assertion polarity*. A 1D line is forced to conflate the two; a 2D cone separates them naturally.

---

### Why This Matters for Verifiable AI Safety

In mechanistic interpretability, our goal cannot simply be discovering passive correlational probes. If we want to use interpretability for **verifiable safety**—monitoring deceptive alignment, abliterating malicious capabilities, or enforcing ethical compliance—our interventions must be surgically precise.

Intervening on a flawed geometric abstraction is the fastest way to introduce unmeasured vulnerabilities. If a model represents truth or refusal in a 2D or 3D manifold, erasing a single 1D vector leaves the rest of the manifold intact, creating a trivial bypass for adversarial jailbreaks.

By grounding our tools in the true geometry of the activation manifold, we move closer to models whose internal safety guarantees are not just empirical hopes, but mathematical guarantees.

---

*Code, datasets, and technical reports for this work are available at the [`truth_cones`](https://github.com/OUARDI-ILYASS/truth_cones) repository.*
