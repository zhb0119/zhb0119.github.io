---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

<div class="intro-panel">
<p class="intro-kicker">UNDERGRADUATE RESEARCHER · HANGZHOU, CHINA</p>
<h1>你好，我是张皓博 <span>/ Haobo Zhang</span></h1>
<p class="intro-summary">浙江工业大学信息工程学院智能科学与技术专业本科生，专业排名 1/48，预计 2027 年毕业。目前在浙江大学担任科研助理，研究大模型安全与知识产权保护。</p>
</div>

I am an undergraduate student majoring in Intelligent Science and Technology at Zhejiang University of Technology. My research interests include **LLM security, model fingerprinting and watermarking, AI copyright protection, computer vision, and robot control**.

<p class="quick-links"><a class="quick-link quick-link-primary" href="/files/haobo-zhang-resume.pdf">简历 / Download CV <span aria-hidden="true">↗</span></a><a class="quick-link" href="https://github.com/zhb0119">GitHub <span aria-hidden="true">↗</span></a></p>

<span class='anchor' id='-xl'></span>

# 教育背景 / Education

- *2023.09 - 2027.06* · **浙江工业大学 Zhejiang University of Technology**, College of Information Engineering
  - 智能科学与技术 / **B.Eng. in Intelligent Science and Technology**
  - GPA 4.0/5.0; major rank **1/48**; CET-6 514, CET-4 539.
  - 核心课程 / Selected coursework: Optimization Methods (96), Data Structures (96), Principles of Artificial Intelligence (95), Machine Learning (87), Image Processing and Video Analysis (98).

<span class='anchor' id='-yj'></span>

# 研究经历 / Research Experience

- *2025.06 - 2026.01* · **浙江大学 Zhejiang University**, Research Assistant, LLM Security
  - 负责大语言模型指纹技术研究，参与模型版权保护方案设计与实现。
  - Researched LLM fingerprinting and contributed to the design and implementation of model copyright protection methods.

<span class='anchor' id='-lwzl'></span>

# 科研成果 / Selected Publications

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">NeurIPS 2026 · Under Review</div><img src='images/paper/attndiff.png' alt="AttnDiff" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2604.05502">AttnDiff: Attention-based Differential Fingerprinting for Large Language Models</a>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Zhenhua Xu, Junxian Li, Shangfeng Sheng, Dezhang Kong, Meng Han.</p>
<p class="paper-venue"><em>Thirty-Ninth Conference on Neural Information Processing Systems (NeurIPS), 2026</em> · Under Review</p>
<button class="abstract-toggle" type="button" aria-expanded="false">Abstract <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>Protecting the intellectual property of open-weight large language models requires verifying whether a suspect model is derived from a victim model despite fine-tuning, pruning/compression, and model merging. We propose AttnDiff, a data-efficient white-box framework that extracts fingerprints from intrinsic information-routing behavior. AttnDiff probes minimally edited prompt pairs that induce controlled semantic conflicts, captures differential attention patterns, summarizes them with compact spectral descriptors, and compares models using CKA. Across Llama-2/3, Qwen2.5, and additional open-source families, it yields high similarity for related derivatives while separating unrelated model families, supporting practical provenance verification and accountability.</div>
</div></div>

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">EMNLP Findings 2026</div><img src='images/paper/memmark.png' alt="MemMark" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2605.25002">MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems</a>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Xutao Mao, Guangyuan Dong, Ziwei Li, Xuanbo Su, Kaijie Chen, Jing Yang, Zheng Lin.</p>
<p class="paper-venue"><em>Findings of the Association for Computational Linguistics: EMNLP, 2026</em></p>
<button class="abstract-toggle" type="button" aria-expanded="false">Abstract <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>Memory-backed agents need provenance that can survive leaked or migrated snapshots, where logs, visible outputs, and trusted metadata may be absent. We propose MemMark, a state-evolution attribution watermark that embeds an owner-controlled signal into latent memory-write decisions. Across A-Mem and Graphiti on LoCoMo, MemMark preserves memory utility while providing usable carrier capacity. In the snapshot-only setting, it recovers the full 40-bit payload from final snapshots, while wrong-key verification remains near chance. Under nine memory-lifecycle attacks, verification distinguishes tampering, evidence deletion, and partial payload recovery.</div>
</div></div>

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ICASSP 2026</div><img src='images/paper/forgetmark.png' alt="ForgetMark" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2601.08189">ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models</a>
<p class="paper-authors">Zhenhua Xu<sup>*</sup>, <strong>Haobo Zhang<sup>*</sup></strong>, Zhebo Wang, Qichen Liu, Haitao Xu, Wenpeng Xing, Meng Han.</p>
<p class="paper-venue"><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2026</em> · Accepted</p>
<p class="author-note"><sup>*</sup> Equal contribution.</p>
<button class="abstract-toggle" type="button" aria-expanded="false">Abstract <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>Existing invasive fingerprints suffer from high-perplexity triggers, fixed response patterns, and spurious activations on benign inputs. ForgetMark encodes provenance via targeted unlearning: it builds a compact human-readable key-value set with predictive-entropy ranking, then trains lightweight LoRA adapters to suppress the original values while preserving general capabilities. Ownership is verified by aggregating likelihood and semantic evidence. Across diverse architectures, it achieves 100% ownership verification while maintaining standard performance, surpasses backdoor baselines in stealthiness and robustness to model merging, and remains effective under moderate incremental fine-tuning.</div>
</div></div>

<div class='paper-box paper-box-no-image'>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2508.11548">Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends</a>
<p class="paper-authors">Zhenhua Xu, Xubin Yue, Zhebo Wang, <strong>Haobo Zhang</strong>, Qichen Liu, Xixiang Zhao, Jingxuan Zhang, Wenjun Zeng, Wengpeng Xing, Dezhang Kong, Changting Lin, Meng Han.</p>
<p class="paper-venue"><em>Survey</em></p>
<p>系统梳理文本水印、模型水印和模型指纹三条技术路线。<br>We organize major approaches, challenges, and trends in LLM copyright protection.</p>
<p><a href="https://xuzhenhua55.github.io/awesome-llm-copyright-protection/">Project homepage / Open-source resource collection</a> · <a href="https://arxiv.org/abs/2508.11548">arXiv</a></p>
</div></div>

<span class='anchor' id='-xmjl'></span>

# 项目经历 / Projects

- **国家级大创项目 / National Innovation Project: 乒乓颠球机器人 Table-Tennis Ball-Juggling Robot**
  - 通过视觉实时捕捉球轨迹，估计位置、速度与旋转，驱动执行机构实现连续稳定颠球。
  - Developed a vision-based control system for real-time trajectory tracking and stable ball juggling.
- **软件著作 / Software Copyright: 基于二维激光雷达的智能车控制系统**
  - 双控制器架构，集成 DMA、卡尔曼滤波与 PID，实现高效解算、精准避障与稳定控制。
- **专利 / Patent: 基于领域特异性偏见特征指纹的大语言模型知识产权保护方法及装置**
  - 面向闭源模型的非侵入式黑盒指纹方法，对微调、剪枝和扰动具有鲁棒性。

<span class='anchor' id='-jsz'></span>

# 技术栈 / Technical Skills

Python · PyTorch · C/C++ · STM32 · YOLOv5 · Computer Vision · Robot Control

<script>
document.querySelectorAll('.abstract-toggle').forEach(function (button) {
  button.addEventListener('click', function () {
    var abstract = button.nextElementSibling;
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    abstract.hidden = expanded;
    button.querySelector('span').textContent = expanded ? '▾' : '▴';
  });
});
</script>
