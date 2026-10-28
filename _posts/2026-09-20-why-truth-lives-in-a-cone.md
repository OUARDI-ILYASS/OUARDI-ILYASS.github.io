---
title: "From Refusal Cones to Truth Cones"
date: 2026-09-30
permalink: /posts/2026/09/truth-lives-in-a-cone/
tags: [Mechanistic Interpretability, Representation Geometry, LLMs, AI Safety, nnsight]
content_type: article
research: true
mathjax: true
excerpt: "Recent work found that refusal in language models is better described by a small cone of directions than by a single one. Can the same idea be ported to truth, and what makes that harder than it sounds?"
---
A common working assumption in interpretability is the **Linear Representation Hypothesis**: a high-level concept is a single direction in a model's residual stream, and pushing along that direction changes the behaviour. Truth is a classic example. Take the mean activation on true statements minus the mean on false ones, and you get a direction that separates the two and can sometimes flip the model's verdict.

### The refusal result

[Wollschläger et al. (2025)](https://arxiv.org/abs/2502.17420) looked at refusal and found that one direction is not the whole story. Instead of computing a direction from activation means, they optimized it by gradient descent against what refusal should *do*: removing it should stop the model from refusing, and adding it should make the model refuse. Pushing this further, they found **concept cones**: small multi-dimensional regions in which every direction mediates refusal. The single direction looks like the one-dimensional case of something bigger.

### Porting it to truth

The question I am working on is whether truth has the same structure. If it does, a single truth probe would only capture a projection of the concept, which matters for anyone who wants to monitor or steer a model's honesty through its internals.

The port is not direct, and a few challenges stand out:

- **Truth is not a behaviour.** Refusal shows up in the output on its own. For truth I need a setup where the model commits to a verdict, for example a few-shot prompt that ends in "This statement is:" and forces a choice between "True" and "False".
- **Where to intervene.** Truth is assembled over several layers and token positions, so the intervention has to target the place where the judgment is actually formed, not where it is read out.
- **What counts as success.** Removing a candidate truth direction should flip true statements to "False" while leaving unrelated prompts untouched. Measuring that side effect is as important as the flip itself.
- **Copies of the probe.** A cone could simply be several noisy versions of the mean-difference probe. Checking how its directions relate to the probe is the only way to know it captures something new.
- **Generalization.** A cone fit on cities might not transfer to animals or chemical elements. If truth is one concept, it should.

I have a first draft that tries this across several model families; it is [here](/papers/truth-cones), and I will write about the results once they are more settled.
