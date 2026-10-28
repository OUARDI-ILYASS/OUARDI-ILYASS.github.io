---
title: "What Does a Heart Sound Classifier Actually Learn? A Controlled Comparison of Cepstral, Spectral and Wavelet-Packet Representations with Cardiac-Cycle-Aligned Explanations"
authors:
  - name: Ilyass Ouardi
    me: true
affiliation: Department of Computer Science, University of Milan
venue: Preprint (draft)
year: 2026
status: Manuscript
pdf: https://github.com/OUARDI-ILYASS/apr-heart-sounds/blob/main/report.pdf
code: https://github.com/OUARDI-ILYASS/apr-heart-sounds
image: /assets/images/papers/heart-sounds.png
image_caption: "Grad-CAM on a correctly detected abnormal recording, aligned to the cardiac cycle (S1, systole, S2, diastole): waveform, log-Mel spectrogram with attribution contours, and attribution over time against a uniform baseline."
tags: [Audio Pattern Recognition, Shortcut Learning, Explainability, PhysioNet/CinC 2016]
---

Automatic screening of phonocardiogram (PCG) recordings could extend cardiac auscultation to settings without expert cardiology, but on the PhysioNet/CinC 2016 corpus a high aggregate score is easy to obtain and hard to trust, because the recording site is itself strongly predictive of the diagnosis. This project compares three feature representations (MFCC, log-Mel spectrogram, perceptual wavelet packet) and three classifiers (SVM, random forest, small CNN) under one recording-level protocol, and pairs each performance claim with a diagnostic that could refute it: unsupervised $k$-means structure, a per-site breakdown, and a falsifiable test of whether attributions concentrate in systole.

The best model reaches a modified accuracy of 0.866, comparable to published entries, but $k$-means recovers the acquisition site far better than the diagnosis, and per-site modified accuracy ranges from 0.99 down to 0.48. A direct test confirms the mechanism: the recording site is recoverable from the same features at 0.65 balanced accuracy (versus 0.17 chance), and diagnostic performance falls from 0.84 to 0.46, essentially chance, under leave-one-site-out evaluation, though a weak signal survives once site is held fixed. Attribution is only weakly systole-enriched, and no more so for correct than for incorrect predictions. We conclude that the aggregate metric substantially overstates what the models have learned.
