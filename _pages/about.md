---
permalink: /
title: ""
excerpt: "Haobo Zhang — exploring model fingerprinting, watermarking, and trustworthy AI at Zhejiang University of Technology."
author_profile: false
lang: en
redirect_from:
  - /about/
  - /about.html
---

<section aria-labelledby="intro-title" class="hero" id="about">
<div class="hero-copy">
<p class="eyebrow hero-eyebrow"><span aria-hidden="true" class="status-dot"></span> Intelligent Science &amp; Technology</p>
<h1 id="intro-title">Haobo Zhang<span class="hero-name-cn" lang="zh-CN">张皓博</span></h1>
<p class="hero-affiliation">Undergraduate at <span>Zhejiang University of Technology</span></p>
<p class="academic-profile__intro">I am an undergraduate student majoring in Intelligent Science and Technology. My current work explores model fingerprinting, watermarking, and alignment, while my broader interests continue to evolve with new questions in artificial intelligence.</p>
<p class="academic-profile__note">I enjoy turning research ideas into practical systems and welcome discussions and collaboration.</p>
<nav aria-label="Profile links" class="academic-profile__links">
<a href="mailto:zhanghaobo@zjut.edu.cn"><i aria-hidden="true" class="fas fa-envelope"></i> Email</a>
<a href="https://scholar.google.com/citations?view_op=list_works&amp;hl=zh-CN&amp;user=sY6udPcAAAAJ" rel="noopener noreferrer" target="_blank"><i aria-hidden="true" class="ai ai-google-scholar"></i> Google Scholar</a>
<a href="https://github.com/zhb0119" rel="noopener noreferrer" target="_blank"><i aria-hidden="true" class="fab fa-github"></i> GitHub</a>
</nav>
</div>
<figure class="hero-portrait">
<div class="portrait-mat">
<img alt="Haobo Zhang’s profile picture: a sleeping cat" fetchpriority="high" height="696" src="{{ '/images/me/cat.jpg' | relative_url }}" width="696"/>
</div>
<figcaption><span class="portrait-location"><i aria-hidden="true" class="fas fa-map-marker-alt"></i> Hangzhou, China</span><span aria-hidden="true" class="portrait-signature">h.z.</span></figcaption>
</figure>
<div class="research-strip"><span class="eyebrow">Research interests</span><ul aria-label="Research interests" class="research-tags">
<li>Model fingerprinting</li>
<li>Watermarking</li>
<li>Trustworthy AI</li>
</ul></div>
</section>
<section aria-labelledby="news-title" class="editorial-section section-news" id="news">
<div class="section-header"><span aria-hidden="true" class="section-index">01</span><h2 class="section-title" id="news-title">News</h2></div>
<div class="section-body">
<ul aria-label="Recent news" class="news-list">
<li class="news-item news-item--neurips">
<time datetime="2026-09">Sep 2026</time>
<span class="news-copy"><strong class="news-status">Accepted</strong> <a class="news-paper" href="https://arxiv.org/abs/2604.05502" rel="noopener noreferrer" target="_blank">AttnDiff</a> to <strong class="news-venue">NeurIPS 2026</strong>.</span>
</li>
<li class="news-item news-item--emnlp">
<time datetime="2026-08">Aug 2026</time>
<span class="news-copy"><strong class="news-status">Accepted</strong> <a class="news-paper" href="https://arxiv.org/abs/2605.25002" rel="noopener noreferrer" target="_blank">MemMark</a> to <strong class="news-venue">Findings of ACL: EMNLP 2026</strong>.</span>
</li>
<li class="news-item news-item--icassp">
<time datetime="2026-01">Jan 2026</time>
<span class="news-copy"><strong class="news-status">Accepted</strong> <a class="news-paper" href="https://arxiv.org/abs/2601.08189" rel="noopener noreferrer" target="_blank">ForgetMark</a> to <strong class="news-venue">ICASSP 2026</strong>.</span>
</li>
</ul>
</div>
</section>
<section aria-labelledby="publications-title" class="editorial-section section-publications" id="publications">
<div class="section-header"><span aria-hidden="true" class="section-index">02</span><h2 class="section-title" id="publications-title">Selected publications<span aria-label="4 publications" class="publication-count">04</span></h2><p class="section-aside">2025 — 2026</p></div>
<div class="section-body">
<article class="paper-box paper-box--accepted paper-box--neurips"><div class="paper-box-image"><button aria-controls="figure-dialog" aria-haspopup="dialog" aria-label="Enlarge figure: AttnDiff" class="paper-media figure-trigger" data-figure-title="AttnDiff: Attention-based Differential Fingerprinting for Large Language Models" type="button"><img alt="AttnDiff method overview" decoding="async" height="710" loading="lazy" src="{{ '/images/paper/attndiff.png' | relative_url }}" width="1224"/><span aria-hidden="true" class="figure-expand"><i class="fas fa-expand"></i></span></button><p class="figure-caption"><span>01</span> Model fingerprinting</p></div>
<div class="paper-box-text">
<div class="badge badge--accepted"><span class="badge__venue">NeurIPS 2026</span><span class="badge__separator"> / </span><span class="badge__status"><i aria-hidden="true" class="fas fa-check"></i> Accepted</span></div>
<h3 class="paper-title"><a href="https://arxiv.org/abs/2604.05502" rel="noopener noreferrer" target="_blank">AttnDiff: Attention-based Differential Fingerprinting for Large Language Models</a></h3>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Zhenhua Xu, Junxian Li, Shangfeng Sheng, Dezhang Kong, Meng Han.</p>
<p class="paper-venue"><em>Conference on Neural Information Processing Systems (NeurIPS), 2026.</em></p>
<div class="paper-controls"><p class="paper-links"><a href="https://arxiv.org/abs/2604.05502" rel="noopener noreferrer" target="_blank">arXiv <i aria-hidden="true" class="fas fa-external-link-alt"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Protecting the intellectual property of open-weight large language models (LLMs) requires verifying whether a suspect model is derived from a victim model despite common laundering operations such as fine-tuning (including PPO/DPO), pruning/compression, and model merging. We propose AttnDiff, a data-efficient white-box framework that extracts fingerprints from models via intrinsic information-routing behavior. AttnDiff probes minimally edited prompt pairs that induce controlled semantic conflicts, captures differential attention patterns, summarizes them with compact spectral descriptors, and compares models using CKA. Across Llama-2/3 and Qwen2.5 (3B-14B) and additional open-source families, it yields high similarity for related derivatives while separating unrelated model families (e.g., &gt;0.98 vs. &lt;0.22 with <i>M</i> = 60 probes). With 5-60 multi-domain probes, it supports practical provenance verification and accountability.</p></details></div>
</div></article>
<article class="paper-box paper-box--accepted paper-box--emnlp"><div class="paper-box-image"><button aria-controls="figure-dialog" aria-haspopup="dialog" aria-label="Enlarge figure: MemMark" class="paper-media figure-trigger" data-figure-title="MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems" type="button"><img alt="MemMark method overview" decoding="async" height="744" loading="lazy" src="{{ '/images/paper/memmark.png' | relative_url }}" width="1121"/><span aria-hidden="true" class="figure-expand"><i class="fas fa-expand"></i></span></button><p class="figure-caption"><span>02</span> Agent memory watermarking</p></div>
<div class="paper-box-text">
<div class="badge badge--accepted"><span class="badge__venue">EMNLP 2026</span><span class="badge__separator"> / </span><span class="badge__status"><i aria-hidden="true" class="fas fa-check"></i> Accepted</span></div>
<h3 class="paper-title"><a href="https://arxiv.org/abs/2605.25002" rel="noopener noreferrer" target="_blank">MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems</a></h3>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Xutao Mao, Guangyuan Dong, Ziwei Li, Xuanbo Su, Kaijie Chen, Jing Yang, Zheng Lin.</p>
<p class="paper-venue"><em>Findings of the Association for Computational Linguistics: EMNLP, 2026.</em></p>
<div class="paper-controls"><p class="paper-links"><a href="https://henrymao2004.github.io/MemMark/" rel="noopener noreferrer" target="_blank">Project <i aria-hidden="true" class="fas fa-external-link-alt"></i></a><a href="https://arxiv.org/abs/2605.25002" rel="noopener noreferrer" target="_blank">arXiv <i aria-hidden="true" class="fas fa-external-link-alt"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Memory-backed agents need provenance that can survive leaked or migrated snapshots, where logs, visible outputs, and trusted metadata may be absent. We propose MemMark, a state-evolution attribution watermark that embeds an owner-controlled signal into latent memory-write decisions. At each internal LLM call, MemMark samples among admissible candidates using keyed, distribution-preserving selection, and records cryptographic commitments with signed session anchors and reveal evidence. This makes attribution depend on reproducible backend behavior rather than mutable provenance fields. Across A-Mem and Graphiti on LoCoMo, with three LLM backbones, MemMark preserves memory utility: Overall F1 retains 99.6% of the unwatermarked baseline, while BLEU-1 changes by +0.2%. It also provides usable carrier capacity, with 1.16, 1.14, and 1.26 bits of mean entropy for update-target, link-target, and semantic-realization decisions. In the snapshot-only R3 setting, MemMark recovers the full 40-bit payload from final snapshots, while wrong-key verification remains near chance. Under nine memory-lifecycle attacks, verification distinguishes tampering, evidence deletion, and partial payload recovery. These results show that robust snapshot-only attribution is feasible for long-term agent memory without surviving traces, trusted metadata, or utility-degrading.</p></details></div>
</div></article>
<article class="paper-box paper-box--accepted paper-box--icassp"><div class="paper-box-image"><button aria-controls="figure-dialog" aria-haspopup="dialog" aria-label="Enlarge figure: ForgetMark" class="paper-media figure-trigger" data-figure-title="ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models" type="button"><img alt="ForgetMark method overview" decoding="async" height="644" loading="lazy" src="{{ '/images/paper/forgetmark.png' | relative_url }}" width="924"/><span aria-hidden="true" class="figure-expand"><i class="fas fa-expand"></i></span></button><p class="figure-caption"><span>03</span> Fingerprint embedding</p></div>
<div class="paper-box-text">
<div class="badge badge--accepted"><span class="badge__venue">ICASSP 2026</span><span class="badge__separator"> / </span><span class="badge__status"><i aria-hidden="true" class="fas fa-check"></i> Accepted</span></div>
<h3 class="paper-title"><a href="https://arxiv.org/abs/2601.08189" rel="noopener noreferrer" target="_blank">ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models</a></h3>
<p class="paper-authors">Zhenhua Xu<sup>*</sup>, <strong>Haobo Zhang<sup>*</sup></strong>, Zhebo Wang, Qichen Liu, Haitao Xu, Wenpeng Xing, Meng Han.</p>
<p class="paper-venue"><em>IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2026.</em></p>
<p class="paper-contribution"><sup>*</sup> Equal contribution.</p>
<div class="paper-controls"><p class="paper-links"><a href="https://arxiv.org/abs/2601.08189" rel="noopener noreferrer" target="_blank">arXiv <i aria-hidden="true" class="fas fa-external-link-alt"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Existing invasive (backdoor) fingerprints suffer from high-perplexity triggers that are easily filtered, fixed response patterns exposed by heuristic detectors, and spurious activations on benign inputs. We introduce ForgetMark, a stealthy fingerprinting framework that encodes provenance via targeted unlearning. It builds a compact, human-readable key-value set with an assistant model and predictive-entropy ranking, then trains lightweight LoRA adapters to suppress the original values on their keys while preserving general capabilities. Ownership is verified under black/gray-box access by aggregating likelihood and semantic evidence into a fingerprint success rate. By relying on probabilistic forgetting traces rather than fixed trigger-response patterns, ForgetMark avoids high-perplexity triggers, reduces detectability, and lowers false triggers. Across diverse architectures and settings, it achieves 100% ownership verification on fingerprinted models while maintaining standard performance, surpasses backdoor baselines in stealthiness and robustness to model merging, and remains effective under moderate incremental fine-tuning. Our code and data are available at <a href="https://github.com/Xuzhenhua55/ForgetMark" rel="noopener noreferrer" target="_blank">https://github.com/Xuzhenhua55/ForgetMark</a>.</p></details></div>
</div></article>
<article class="paper-box paper-box--survey"><div class="paper-box-image"><button aria-controls="figure-dialog" aria-haspopup="dialog" aria-label="Enlarge figure: Copyright Protection for Large Language Models" class="paper-media figure-trigger" data-figure-title="Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends" type="button"><img alt="LLM copyright protection survey taxonomy" decoding="async" height="769" loading="lazy" src="{{ '/images/paper/copyright.png' | relative_url }}" width="1280"/><span aria-hidden="true" class="figure-expand"><i class="fas fa-expand"></i></span></button><p class="figure-caption"><span>04</span> LLM copyright protection</p></div>
<div class="paper-box-text">
<div class="badge badge--preprint"><span class="badge__venue">Survey 2025</span></div>
<h3 class="paper-title"><a href="https://arxiv.org/abs/2508.11548" rel="noopener noreferrer" target="_blank">Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends</a></h3>
<p class="paper-authors">Zhenhua Xu, Xubin Yue, Zhebo Wang, <strong>Haobo Zhang</strong>, Qichen Liu, Xixiang Zhao, Jingxuan Zhang, Wenjun Zeng, Wengpeng Xing, Dezhang Kong, Changting Lin, Meng Han.</p>
<p class="paper-venue"><em>arXiv preprint, 2025.</em></p>
<div class="paper-controls"><p class="paper-links"><a href="https://xuzhenhua55.github.io/awesome-llm-copyright-protection/" rel="noopener noreferrer" target="_blank">Project <i aria-hidden="true" class="fas fa-external-link-alt"></i></a><a href="https://arxiv.org/abs/2508.11548" rel="noopener noreferrer" target="_blank">arXiv <i aria-hidden="true" class="fas fa-external-link-alt"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Copyright protection for large language models is of critical importance, given their substantial development costs, proprietary value, and potential for misuse. Existing surveys have predominantly focused on techniques for tracing LLM-generated content - namely, text watermarking - while a systematic exploration of methods for protecting the models themselves (i.e., model watermarking and model fingerprinting) remains absent. Moreover, the relationships and distinctions among text watermarking, model watermarking, and model fingerprinting have not been comprehensively clarified. This work presents a comprehensive survey of the current state of LLM copyright protection technologies, with a focus on model fingerprinting, covering the following aspects: (1) clarifying the conceptual connection from text watermarking to model watermarking and fingerprinting, and adopting a unified terminology that incorporates model watermarking into the broader fingerprinting framework; (2) providing an overview and comparison of diverse text watermarking techniques, highlighting cases where such methods can function as model fingerprinting; (3) systematically categorizing and comparing existing model fingerprinting approaches for LLM copyright protection; (4) presenting, for the first time, techniques for fingerprint transfer and fingerprint removal; (5) summarizing evaluation metrics for model fingerprints, including effectiveness, harmlessness, robustness, stealthiness, and reliability; and (6) discussing open challenges and future research directions. This survey aims to offer researchers a thorough understanding of both text watermarking and model fingerprinting technologies in the era of LLMs, thereby fostering further advances in protecting their intellectual property.</p></details></div>
</div></article>
</div>
</section>
<section aria-labelledby="experience-title" class="editorial-section section-experience" id="experience">
<div class="section-header"><span aria-hidden="true" class="section-index">03</span><h2 class="section-title" id="experience-title">Internship experience</h2></div>
<div class="section-body">
<article class="experience-entry">
<div aria-label="Zhejiang University and GenTel" class="experience-logo experience-logo--joint experience-logo--collaboration">
<span class="joint-logo-slot joint-logo-slot--zju"><img alt="Zhejiang University logo" decoding="async" height="299" loading="lazy" src="{{ '/images/logos/zju-trimmed.png' | relative_url }}" width="952"/></span>
<span aria-hidden="true" class="joint-logo-divider"></span>
<a aria-label="Visit the GenTel website" class="joint-logo-slot joint-logo-slot--gentel" href="https://www.gentel.com/en/home" rel="noopener noreferrer" target="_blank"><img alt="GenTel logo" decoding="async" height="410" loading="lazy" src="{{ '/images/logos/gentel-trimmed.png' | relative_url }}" width="394"/></a>
</div>
<div class="experience-content">
<div class="experience-heading">
<h3>Zhejiang University &amp; <a href="https://www.gentel.com/en/home" rel="noopener noreferrer" target="_blank">GenTel</a></h3>
<span><time datetime="2025-06">Jun 2025</time> - <time datetime="2026-01">Jan 2026</time></span>
</div>
<p class="experience-role"><a href="https://ifrc-zju.github.io/" rel="noopener noreferrer" target="_blank">Intelligence Fusion Research Center (IFRC) Lab</a> - Research Intern</p>
<p class="experience-description">Researched LLM fingerprinting and contributed to the design and implementation of model copyright protection methods.</p>
</div>
</article>
</div>
</section>
<section aria-labelledby="education-title" class="editorial-section section-education" id="education">
<div class="section-header"><span aria-hidden="true" class="section-index">04</span><h2 class="section-title" id="education-title">Education</h2></div>
<div class="section-body">
<article class="experience-entry">
<div class="experience-logo experience-logo--education experience-logo--ruc"><img alt="Renmin University of China logo" decoding="async" height="251" loading="lazy" src="{{ '/images/logos/ruc-trimmed.png' | relative_url }}" width="368"/></div>
<div class="experience-content">
<div class="experience-heading">
<h3>Renmin University of China</h3>
<span>Starting <time datetime="2027-09">Sep 2027</time></span>
</div>
<p class="experience-role">Incoming Ph.D. Student in Computer Science and Technology</p>
</div>
</article>
<article class="experience-entry">
<div class="experience-logo experience-logo--education experience-logo--zjut"><img alt="Zhejiang University of Technology logo" decoding="async" height="676" loading="lazy" src="{{ '/images/logos/zjut-trimmed.png' | relative_url }}" width="924"/></div>
<div class="experience-content">
<div class="experience-heading">
<h3>Zhejiang University of Technology</h3>
<span><time datetime="2023-09">Sep 2023</time> - <time datetime="2027-06">Jun 2027</time></span>
</div>
<p class="experience-role">B.Eng. in Intelligent Science and Technology</p>
<p class="experience-description">College of Information Engineering</p>
</div>
</article>
</div>
</section>
<section aria-labelledby="awards-title" class="editorial-section section-awards" id="awards">
<div class="section-header"><span aria-hidden="true" class="section-index">05</span><h2 class="section-title" id="awards-title">Awards</h2></div>
<div class="awards-grid">
<article class="award-card">
<div class="award-card__image">
<img alt="National Undergraduate Smart Car Competition logo" decoding="async" height="1024" loading="lazy" src="{{ '/images/awards/smartcar.png' | relative_url }}" width="1024"/>
</div>
<div class="award-card__content">
<p class="award-card__prize">National First Prize</p>
<h3 class="award-card__title"><a href="http://smartcarrace.com/" rel="noopener noreferrer" target="_blank">National Undergraduate Smart Car Competition</a></h3>
<p class="award-card__detail"><a href="https://www.d-robotics.cc/" rel="noopener noreferrer" target="_blank">D-Robotics</a> · Smart Healthcare Track</p>
</div>
</article>
<article class="award-card">
<div class="award-card__image">
<img alt="National Undergraduate Electronic Design Contest logo" decoding="async" height="552" loading="lazy" src="{{ '/images/awards/it-trimmed.png' | relative_url }}" width="884"/>
</div>
<div class="award-card__content">
<p class="award-card__prize award-card__prize--silver">National Second Prize</p>
<h3 class="award-card__title"><a href="http://nuedc.xjtu.edu.cn/" rel="noopener noreferrer" target="_blank">TI Cup National Undergraduate Electronic Design Competition</a></h3>
<p class="award-card__detail">Problem E</p>
</div>
</article>
<article class="award-card">
<div class="award-card__image">
<img alt="RoboCup logo" decoding="async" height="272" loading="lazy" src="{{ '/images/awards/robocup.png' | relative_url }}" width="474"/>
</div>
<div class="award-card__content">
<p class="award-card__prize">National First Prize</p>
<h3 class="award-card__title"><a href="https://www.cnrobo.com/" rel="noopener noreferrer" target="_blank">China Robot Competition &amp; RoboCup China</a></h3>
</div>
</article>
</div>
</section>

<dialog class="figure-dialog" id="figure-dialog" aria-labelledby="figure-dialog-title">
  <div class="figure-dialog-header"><h2 id="figure-dialog-title">Research figure</h2><button class="figure-dialog-close" type="button" aria-label="Close enlarged figure" autofocus><span aria-hidden="true">×</span></button></div>
  <div class="figure-dialog-body"></div>
</dialog>
