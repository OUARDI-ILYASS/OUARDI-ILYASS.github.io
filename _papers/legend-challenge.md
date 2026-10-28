---
title: "The Legend Challenge: Embedding Ethical Compliance into LLMs through Champion Narratives in the Gender Equality Domain"
authors:
  - name: Fatmir Bylyshi
    equal: true
  - name: Hicham El-Khazri
    equal: true
  - name: Ilyass Ouardi
    equal: true
    me: true
equal_note: Equal contribution.
affiliation: SESAR Lab, Department of Computer Science, University of Milan
venue: Preprint (draft)
year: 2026
status: Manuscript
pdf: https://github.com/OUARDI-ILYASS/SOASEC-project/blob/main/paper/paper_exp.pdf
code: https://github.com/OUARDI-ILYASS/SOASEC-project
image: /assets/images/papers/legend-challenge.png
image_caption: "The two fine-tuning regimes teach complementary competences: tuned-regulation leads on the aggregate score, tuned-legends is strongest on GE-NEXT and GE-NLI."
tags: [LLM Fine-tuning, AI Ethics, Benchmarks, Interpretability]
---

Sargsyan et al. (2025) proposed that fine-tuning large language models on *legends* (synthetic narrative exemplars of compliant behaviour) may embed regulatory ethics more effectively than fine-tuning on the underlying regulatory text, but provided neither an empirical verification nor a measurement instrument. We provide both. We compare legend-based fine-tuning with regulation-text-based fine-tuning on a single regulation (the EU Gender Equality Strategy 2020–2025) and a single backbone (`gpt-4o-2024-08-06`), holding the system prompt, the training format and the JSONL line count constant, so that corpus content is the only experimental variable. To make the comparison measurable we introduce **GenderEqGLUE**, a five-task benchmark: GE-CLS, GE-NLI, GE-QA, GE-WSC and GE-NEXT, adapted one-to-one from the GLUE and SuperGLUE templates.

To examine *how* each model arrives at its predictions we conduct an interpretability analysis based on the log-probabilities exposed by the OpenAI API for the fine-tuned models, measuring via **structured occlusion** how much each model depends on the scenario and on the regulatory clause over a stratified sample of 60 GE-NLI items. The analysis shows that both fine-tuned variants sharply reduce their dependence on explicit context relative to the unadapted model, and that `tuned-legends` depends on the regulatory clause almost three times more than `tuned-regulation` ($p = 0.0001$), with the divergence concentrated on the decidable labels and absent on `neutral`. On the aggregate GenderEqGLUE Score, `tuned-regulation` leads with 0.938, `tuned-legends` follows with 0.926 and `base` comes last with 0.904; per-task wins split 3–3 between the two fine-tuning regimes (`base` wins none). `tuned-legends` is the strongest model on the task that is central to the hypothesis, compliant-action selection, GE-NEXT. The two regimes therefore teach **complementary competences**: legends teach compliance recognition and compliant-action selection; the regulatory text teaches ontology recognition and factual recall of short text spans. The deployment choice should be driven by the application's dominant risk profile.
