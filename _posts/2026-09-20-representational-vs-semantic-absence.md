---
title: "Representational Absence vs. Semantic Absence"
date: 2026-09-30
permalink: /posts/2026/09/representational-vs-semantic-absence/
tags: [Mechanistic Interpretability, Philosophy of AI, Representation Geometry, Concept Erasure, AI Safety]
content_type: article
research: true
mathjax: true
excerpt: "Concept erasure makes a concept unrecoverable from a model's activations. Does that make the model treat it like a concept it has never known? The question behind my thesis."
---
Concept erasure edits a language model's internal representations so that a chosen concept, such as a protected attribute or a piece of hazardous knowledge, can no longer be recovered from them, while everything else is preserved. Methods are usually judged by two numbers: how well the concept is removed, measured with probes or behaviour, and how much else is damaged, measured with task accuracy or perplexity.

Neither number says **where the edited activations end up**. An erasure operator maps each activation to a new one, and the result may lie where the model naturally operates, or in regions it never visits on real inputs. That is the starting point of my thesis.

### Two notions of absence

To reason about what erasure produces, I find it useful to separate two kinds of absence.

- **Representational absence** is a property of a set of activations: the concept cannot be statistically recovered from them. This is what the erasure literature calls success, and the erasure operator produces it, often by construction.
- **Semantic absence** is how a model represents a concept it genuinely has no knowledge of, such as an invented entity or an event after its training cut-off. These inputs exist, so the model has its own natural activations for them.

Erasure aims to make a model behave as if it no longer knows a concept, and semantic absence describes what not knowing a concept actually looks like inside the model. That makes it a natural reference point.

### The questions

The distinction raises two questions:

1. **Correlation.** Do the model's natural activations for things it has never known already show representational absence, with nothing about the concept recoverable from them?
2. **Causation.** Once erasure makes a concept unrecoverable, does the model represent and treat it the way it treats a concept it has never known?

Erasure produces the first kind of absence by design. Whether it also produces the second is open.

### How I plan to look

The object of study is the set of edited activations over a dataset, compared with the activations the model produces on natural inputs, from three angles: **behavioural** (are the outputs fluent and free of the concept, or degenerate?), **semantic** (what can still be decoded from the edited activations?) and **geometric** (do they stay within the natural distribution?).

A first hint that the answer depends on the method comes from Rocchetti et al. (2026): on refusal, nullspace projection leaves activations between the harmful and harmless clusters, while counterfactual flipping moves them into the opposite cluster. Reproducing that is where the thesis starts.

The work is at the proposal stage, and I will write more as results come in.
