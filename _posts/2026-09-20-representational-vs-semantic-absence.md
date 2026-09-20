---
title: "Representational Absence vs. Semantic Absence"
date: 2026-09-30
toc: true
permalink: /posts/2026/09/representational-vs-semantic-absence/
tags: [Mechanistic Interpretability, Philosophy of AI, Representation Geometry, Concept Erasure, AI Safety]
content_type: article
mathjax: true
excerpt: "If a linear probe cannot decode a concept from an LLM's activations, is that concept genuinely absent from the model? Here is why statistical unrecoverability does not imply semantic absence—and why confusing the two undermines AI safety."
---

In the contemporary literature on mechanistic interpretability and AI safety, a familiar narrative has taken hold: 

1. You identify an undesirable concept in a language model—be it gender bias, toxic sentiment, a refusal mechanism, or dangerous dual-use chemical knowledge.
2. You fit a linear probe (e.g., logistic regression or Difference-in-Means) to the intermediate residual stream activations.
3. You design an intervention operator (such as Iterative Nullspace Projection [INLP] or LEACE) to project the activations onto the orthogonal complement of the probe direction.
4. You verify that post-intervention probe accuracy drops to chance ($50\%$).
5. You declare: *"The concept has been successfully erased."*

It is an intellectually satisfying story backed by closed-form linear algebra. But philosophically and mechanically, it rests on a foundational conflation: **it treats the blindness of an external probe as proof of the internal absence of a concept.**

When a linear probe cannot decode information from an activation vector, does the model truly not know it? Or did we merely blindfold our own diagnostic instrument?

---

### The Two Levels: Semantic vs. Representational Absence

To understand why this distinction matters, we must separate two fundamentally different ontological domains:

```
┌────────────────────────────────────────────────────────┐
│                   SEMANTIC ABSENCE                     │
│   A property of the input text x ∈ X (external world)  │
│   The concept does not apply, or has no value.         │
└───────────────────────────┬────────────────────────────┘
                            │
                   Is it causal of? (≠)
                            │
┌───────────────────────────▼────────────────────────────┐
│               REPRESENTATIONAL ABSENCE                 │
│   A property of an activation distribution p(z | x)    │
│   The concept is not recoverable by a family of probes │
└────────────────────────────────────────────────────────┘
```

1. **Semantic Absence (The Property of Input & World):**
   Semantic absence is fixed by annotation and the structure of reality. An input $x$ lacks a concept $C$ when:
   - **The concept does not apply (Category Error):** In *"The granite rock rolled down the hillside"*, the concept of *grammatical or biological gender* simply does not arise. It is structurally non-applicable.
   - **The concept is underdetermined:** In *"The surgeon performed the operation"*, the person has a gender in the real world, but the text omits it. The value exists in principle, but is uninstantiated in the text.
   - **The concept is marked-neutral:** In *"The movie was neither good nor bad; it was mediocre"*, sentiment applies and takes a positively evaluated zero-point or balanced third value.

2. **Representational Absence (The Property of Hidden States):**
   Representational absence is a formal condition defined over an activation distribution $p(\mathbf{z} \mid x)$ within the vector space $\mathbb{R}^d$. We say a concept $C$ is representationally absent with respect to a hypothesis class of decoders $\mathcal{H}$ if:
   $$\forall h \in \mathcal{H}, \quad I(h(\mathbf{z}); C) = 0$$
   In practice, $\mathcal{H}$ is almost universally restricted to the family of **linear classifiers** $\mathcal{H}_{\text{linear}} = \{ \mathbf{w}^T \mathbf{z} + b \}$.

The fatal flaw of modern concept erasure is treating these two levels as interchangeable: assuming that enforcing representational absence under $\mathcal{H}_{\text{linear}}$ automatically induces counterfactual semantic absence inside the model.

---

### Three Ways a Blinded Probe Leaves the Concept Alive

Why does linear unrecoverability fail to guarantee semantic absence? Inside a modern transformer, information can remain causally active through mechanisms that easily evade linear probes:

#### 1. Non-Linear Submanifolds and Curved Manifolds
The Linear Representation Hypothesis (LRH) claims that abstract concepts correspond to 1D linear directions. But residual stream activations live on high-dimensional curved manifolds. 

If a concept is encoded along a quadratic or higher-order manifold (or within a multi-dimensional cone, as shown in recent work on refusal and truth geometry), projecting an activation $\mathbf{z}$ onto the nullspace of a linear vector $\mathbf{v}$ sets $\mathbf{v}^T \mathbf{z} = 0$. However, subsequent transformer components—especially non-linear MLP blocks equipped with SwiGLU or GeLU activations—routinely compute cross-feature interactions:
$$\text{MLP}(\mathbf{z}) = \left( \sigma(\mathbf{z} \mathbf{W}_{\text{gate}}) \odot \mathbf{z} \mathbf{W}_{\text{up}} \right) \mathbf{W}_{\text{down}}$$
These non-linear multiplicative interactions can readily reconstruct the "erased" concept from non-orthogonal, non-zero coordinates that the linear probe discarded as noise.

#### 2. Superposition and Incoherent Dictionaries
As Elhage et al. (2022) established in *Toy Models of Superposition*, neural networks exploit almost-orthogonal high-dimensional geometry to pack millions of sparse features into a few thousand dimensions. 

When a model represents features in superposition, concept $C$ does not have an exclusive vector $\mathbf{v}_C$. Instead, it is embedded as an element of an overcomplete dictionary:
$$\mathbf{z} = \sum_{i=1}^{M} f_i \mathbf{d}_i, \quad M \gg d$$
If you project out the empirical mean difference vector between positive and negative instances, you carve out a 1D slice of the space. But because the features $\{\mathbf{d}_i\}$ are only *nearly* orthogonal, the remaining coordinates in the residual stream still contain non-zero projections of $C$ that downstream attention heads with specialized Query-Key projections can attend to.

#### 3. Downstream Reactivation & Cross-Layer Trajectories
The residual stream is an additive accumulator:
$$\mathbf{z}_{l+1} = \mathbf{z}_l + \text{Attn}_l(\mathbf{z}_l) + \text{MLP}_l(\mathbf{z}_l)$$
Erasing a concept at layer $l^*$ guarantees that $\mathbf{z}_{l^*}$ cannot linearly predict $C$. But the transformer has not forgotten the context tokens present in the prompt. At layer $l^* + 1$, attention heads attend back to earlier token representations and context embeddings that were never touched by the intervention. 

Unless the concept is excised from the model's global parametric memory (its weights $\mathbf{W}$), the downstream layers will simply reconstruct the concept downstream. The probe at layer $l^*$ is blind; the model at layer $L$ continues generating as if nothing happened.

---

### The Three Desiderata of Concept Erasure

If linear unrecoverability is insufficient, how should we evaluate whether a concept is truly absent? In my research notes, I formulate **Three Desiderata of Concept Erasure**:

| Desideratum | Formal Meaning | Current Status |
| :--- | :--- | :--- |
| **1. Guardedness** | The target concept $C$ is not decodable by an adversary: $\mathcal{P}(\tilde{\mathbf{z}}) \approx \text{chance}$. | **Achieved by construction** by INLP and LEACE. |
| **2. Plausibility** | The edited activation $\tilde{\mathbf{z}}$ lies on the support of the natural activation manifold $\mathcal{M}$. | **Violated:** Interventions frequently kick vectors into out-of-distribution voids. |
| **3. Counterfactual Neutrality** | $\tilde{\mathbf{z}}$ matches the distribution the model *would have produced* had the input been genuinely, semantically neutral. | **Almost never measured.** |

Most published techniques maximize **Guardedness** while completely ignoring **Plausibility** and **Counterfactual Neutrality**. 

When you project an activation onto the nullspace of a direction, you move along a straight Euclidean line. But the natural activation manifold $\mathcal{M}$ is curved. The post-intervention vector $\tilde{\mathbf{z}}$ often lands in a non-physical region of activation space—a point that no natural English text could ever elicit. 

The result is not an unbiased model, but a damaged model: a model that displays bizarre behavioral compensations, stuttering, or an inability to process related, benign concepts.

---

### What Can We Say About Absence Inside the Model?

If absence is not a zero coordinate in Euclidean space, what can we say about it inside the model?

1. **Absence is a Submanifold, Not a Point:**
   There is no single "zero vector" for a concept. In a transformer with layer norms and massive activation outliers, the origin $\mathbf{0}$ is an un-natural singularity. Representational absence corresponds to an extended, invariant submanifold where variations in the input concept produce zero gradient on downstream task heads.
2. **Absence Must Be Defined Causally, Not Information-Theoretically:**
   A feature that can be decoded by an external observer is an artifact of correlation until proven otherwise. A concept is only absent in the model when its ablation causes **zero causal mediation** to the output logits:
   $$\mathbb{E}_{x} \left[ D_{\text{KL}}\left( P(\cdot \mid x) \,\|\, P(\cdot \mid \text{do}(\text{erase}(C, x))) \right) \right] = 0 \quad \forall x \notin \text{domain}(C)$$
3. **Absence Must Not Mean Opposite:**
   Zeroing a coordinate ($x \mapsto x - \langle x, v \rangle v$) and reflecting it ($x \mapsto x - 2\langle x, v \rangle v$) are fundamentally different operators. Yet empirical evaluations reveal that many "abliterated" or "erased" models do not become neutral—they invert their bias, treating the target concept with pathological aversion rather than natural indifference.

---

### The Epistemological Warning for AI Safety

Confusing representational absence with semantic absence is not merely an academic footnote; it is a critical vulnerability in AI safety and governance.

If an AI lab claims: *"We have erased chemical weapon synthesis knowledge from Model X using linear concept erasure, because our evaluation probe achieves 0% accuracy on toxic knowledge retrieval,"* they have tested for **Guardedness against a linear probe**. 

They have not tested whether an adversarial jailbreak suffix can steer activations back into the non-linear manifold where the knowledge is preserved. Nor have they tested whether the model still implicitly reasons about precursors and synthesis pathways through orthogonal linguistic proxies.

**Absence is not the lack of a signal on an oscilloscope. Absence is an active computational invariance.** Until our interpretability tools verify that a model's internal causal mechanics—and not just our external probes—are invariant to a concept, we must treat any claim of "concept erasure" with deep scientific skepticism.
