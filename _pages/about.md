---
permalink: /
title: ""
excerpt: ""
author_profile: false
lang: en
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about"></span>

<section class="academic-profile" aria-labelledby="intro-title">
  <div class="academic-profile__portrait">
    <img src="/images/me/cat.jpg" alt="Haobo Zhang" width="220" height="220">
  </div>
  <div class="academic-profile__content">
    <p class="academic-profile__eyebrow">Hangzhou, China</p>
    <h1 id="intro-title">Haobo Zhang <span lang="zh-CN">张皓博</span></h1>
    <p class="academic-profile__affiliation"><i class="fas fa-university" aria-hidden="true"></i> Zhejiang University of Technology</p>
    <p class="academic-profile__intro">I am an undergraduate student majoring in Intelligent Science and Technology. My current work explores model fingerprinting, watermarking, and alignment, while my broader interests continue to evolve with new questions in artificial intelligence.</p>
    <p class="academic-profile__note">I enjoy turning research ideas into practical systems and welcome discussions and collaboration.</p>
    <ul class="research-tags" aria-label="Research interests">
      <li>Model fingerprinting</li>
      <li>Watermarking</li>
      <li>Trustworthy AI</li>
    </ul>
    <nav class="academic-profile__links" aria-label="Profile links">
      <a href="mailto:zhanghaobo@zjut.edu.cn"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
      <a href="https://scholar.google.com/citations?view_op=list_works&amp;hl=zh-CN&amp;user=sY6udPcAAAAJ"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>
      <a href="https://github.com/zhb0119"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
    </nav>
  </div>
</section>

<span class="anchor" id="news"></span>

<h2 class="section-heading section-heading--news"><i class="fas fa-fire section-icon section-icon--news" aria-hidden="true"></i> News</h2>

<ul class="news-list" aria-label="Recent news">
  <li class="news-item">
    <span class="news-flame" aria-hidden="true"><i class="fas fa-fire"></i></span>
    <time datetime="2026-09">Sep 2026</time>
    <span class="news-copy"><strong class="news-status">Accepted</strong> <a class="news-paper" href="https://arxiv.org/abs/2604.05502">AttnDiff</a> to <strong class="news-venue">NeurIPS 2026</strong>.</span>
  </li>
  <li class="news-item">
    <span class="news-flame" aria-hidden="true"><i class="fas fa-fire"></i></span>
    <time datetime="2026-08">Aug 2026</time>
    <span class="news-copy"><strong class="news-status">Accepted</strong> <a class="news-paper" href="https://arxiv.org/abs/2605.25002">MemMark</a> to <strong class="news-venue">Findings of ACL: EMNLP 2026</strong>.</span>
  </li>
  <li class="news-item">
    <span class="news-flame" aria-hidden="true"><i class="fas fa-fire"></i></span>
    <time datetime="2026-01">Jan 2026</time>
    <span class="news-copy"><strong class="news-status">Accepted</strong> <a class="news-paper" href="https://arxiv.org/abs/2601.08189">ForgetMark</a> to <strong class="news-venue">ICASSP 2026</strong>.</span>
  </li>
</ul>

<span class="anchor" id="experience"></span>

<h2 class="section-heading section-heading--internship"><i class="fas fa-briefcase section-icon section-icon--internship" aria-hidden="true"></i> Internship Experience</h2>

<article class="experience-entry">
  <div class="experience-logo experience-logo--joint experience-logo--collaboration" aria-label="Zhejiang University and GenTel">
    <span class="joint-logo-slot joint-logo-slot--zju"><img src="/images/logos/zju.png" alt="Zhejiang University logo" loading="lazy"></span>
    <span class="joint-logo-divider" aria-hidden="true"></span>
    <a class="joint-logo-slot joint-logo-slot--gentel" href="https://www.gentel.com/en/home" aria-label="Visit the GenTel website"><img src="/images/logos/gentel.png" alt="GenTel logo" loading="lazy"></a>
  </div>
  <div class="experience-content">
    <div class="experience-heading">
      <h3>Zhejiang University &amp; <a href="https://www.gentel.com/en/home">GenTel</a></h3>
      <span><time datetime="2025-06">Jun 2025</time> - <time datetime="2026-01">Jan 2026</time></span>
    </div>
    <p class="experience-role"><a href="https://ifrc-zju.github.io/">Intelligence Fusion Research Center (IFRC) Lab</a> - Research Intern</p>
    <p class="experience-description">Researched LLM fingerprinting and contributed to the design and implementation of model copyright protection methods.</p>
  </div>
</article>

<span class="anchor" id="publications"></span>

<h2 class="section-heading section-heading--publications"><i class="fas fa-book-open section-icon section-icon--publications" aria-hidden="true"></i> Selected Publications</h2>

<article class="paper-box paper-box--accepted"><div class="paper-box-image"><div class="paper-media"><div class="badge badge--accepted">NeurIPS 2026 - Accepted</div><img src="images/paper/attndiff.png" alt="AttnDiff method overview"></div></div>
<div class="paper-box-text">
<h3 class="paper-title"><a href="https://arxiv.org/abs/2604.05502">AttnDiff: Attention-based Differential Fingerprinting for Large Language Models</a></h3>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Zhenhua Xu, Junxian Li, Shangfeng Sheng, Dezhang Kong, Meng Han.</p>
<p class="paper-venue"><em>Conference on Neural Information Processing Systems (NeurIPS), 2026.</em></p>
<div class="paper-controls"><p class="paper-links"><a href="https://arxiv.org/abs/2604.05502">arXiv <i class="fas fa-external-link-alt" aria-hidden="true"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Protecting the intellectual property of open-weight large language models (LLMs) requires verifying whether a suspect model is derived from a victim model despite common laundering operations such as fine-tuning (including PPO/DPO), pruning/compression, and model merging. We propose AttnDiff, a data-efficient white-box framework that extracts fingerprints from models via intrinsic information-routing behavior. AttnDiff probes minimally edited prompt pairs that induce controlled semantic conflicts, captures differential attention patterns, summarizes them with compact spectral descriptors, and compares models using CKA. Across Llama-2/3 and Qwen2.5 (3B-14B) and additional open-source families, it yields high similarity for related derivatives while separating unrelated model families (e.g., $>0.98$ vs. $&lt;0.22$ with $M=60$ probes). With 5-60 multi-domain probes, it supports practical provenance verification and accountability.</p></details></div>
</div></article>

<article class="paper-box paper-box--accepted"><div class="paper-box-image"><div class="paper-media"><div class="badge badge--accepted">EMNLP 2026 - Accepted</div><img src="images/paper/memmark.png" alt="MemMark method overview"></div></div>
<div class="paper-box-text">
<h3 class="paper-title"><a href="https://arxiv.org/abs/2605.25002">MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems</a></h3>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Xutao Mao, Guangyuan Dong, Ziwei Li, Xuanbo Su, Kaijie Chen, Jing Yang, Zheng Lin.</p>
<p class="paper-venue"><em>Findings of the Association for Computational Linguistics: EMNLP, 2026.</em></p>
<div class="paper-controls"><p class="paper-links"><a href="https://henrymao2004.github.io/MemMark/">Project <i class="fas fa-external-link-alt" aria-hidden="true"></i></a><a href="https://arxiv.org/abs/2605.25002">arXiv <i class="fas fa-external-link-alt" aria-hidden="true"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Memory-backed agents need provenance that can survive leaked or migrated snapshots, where logs, visible outputs, and trusted metadata may be absent. We propose MemMark, a state-evolution attribution watermark that embeds an owner-controlled signal into latent memory-write decisions. At each internal LLM call, MemMark samples among admissible candidates using keyed, distribution-preserving selection, and records cryptographic commitments with signed session anchors and reveal evidence. This makes attribution depend on reproducible backend behavior rather than mutable provenance fields. Across A-Mem and Graphiti on LoCoMo, with three LLM backbones, MemMark preserves memory utility: Overall F1 retains 99.6% of the unwatermarked baseline, while BLEU-1 changes by +0.2%. It also provides usable carrier capacity, with 1.16, 1.14, and 1.26 bits of mean entropy for update-target, link-target, and semantic-realization decisions. In the snapshot-only R3 setting, MemMark recovers the full 40-bit payload from final snapshots, while wrong-key verification remains near chance. Under nine memory-lifecycle attacks, verification distinguishes tampering, evidence deletion, and partial payload recovery. These results show that robust snapshot-only attribution is feasible for long-term agent memory without surviving traces, trusted metadata, or utility-degrading.</p></details></div>
</div></article>

<article class="paper-box paper-box--accepted"><div class="paper-box-image"><div class="paper-media"><div class="badge badge--accepted">ICASSP 2026 - Accepted</div><img src="images/paper/forgetmark.png" alt="ForgetMark method overview"></div></div>
<div class="paper-box-text">
<h3 class="paper-title"><a href="https://arxiv.org/abs/2601.08189">ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models</a></h3>
<p class="paper-authors">Zhenhua Xu<sup>*</sup>, <strong>Haobo Zhang<sup>*</sup></strong>, Zhebo Wang, Qichen Liu, Haitao Xu, Wenpeng Xing, Meng Han.</p>
<p class="paper-venue"><em>IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2026.</em></p>
<p class="paper-contribution"><sup>*</sup> Equal contribution.</p>
<div class="paper-controls"><p class="paper-links"><a href="https://arxiv.org/abs/2601.08189">arXiv <i class="fas fa-external-link-alt" aria-hidden="true"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Existing invasive (backdoor) fingerprints suffer from high-perplexity triggers that are easily filtered, fixed response patterns exposed by heuristic detectors, and spurious activations on benign inputs. We introduce ForgetMark, a stealthy fingerprinting framework that encodes provenance via targeted unlearning. It builds a compact, human-readable key-value set with an assistant model and predictive-entropy ranking, then trains lightweight LoRA adapters to suppress the original values on their keys while preserving general capabilities. Ownership is verified under black/gray-box access by aggregating likelihood and semantic evidence into a fingerprint success rate. By relying on probabilistic forgetting traces rather than fixed trigger-response patterns, ForgetMark avoids high-perplexity triggers, reduces detectability, and lowers false triggers. Across diverse architectures and settings, it achieves 100% ownership verification on fingerprinted models while maintaining standard performance, surpasses backdoor baselines in stealthiness and robustness to model merging, and remains effective under moderate incremental fine-tuning. Our code and data are available at <a href="https://github.com/Xuzhenhua55/ForgetMark">https://github.com/Xuzhenhua55/ForgetMark</a>.</p></details></div>
</div></article>

<article class="paper-box paper-box--survey"><div class="paper-box-image"><div class="paper-media"><div class="badge badge--preprint">Survey 2025</div><img src="images/paper/copyright.png" alt="LLM copyright protection survey taxonomy"></div></div>
<div class="paper-box-text">
<h3 class="paper-title"><a href="https://arxiv.org/abs/2508.11548">Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends</a></h3>
<p class="paper-authors">Zhenhua Xu, Xubin Yue, Zhebo Wang, <strong>Haobo Zhang</strong>, Qichen Liu, Xixiang Zhao, Jingxuan Zhang, Wenjun Zeng, Wengpeng Xing, Dezhang Kong, Changting Lin, Meng Han.</p>
<p class="paper-venue"><em>arXiv preprint, 2025.</em></p>
<div class="paper-controls"><p class="paper-links"><a href="https://xuzhenhua55.github.io/awesome-llm-copyright-protection/">Project <i class="fas fa-external-link-alt" aria-hidden="true"></i></a><a href="https://arxiv.org/abs/2508.11548">arXiv <i class="fas fa-external-link-alt" aria-hidden="true"></i></a></p>
<details class="paper-abstract"><summary>Abstract</summary><p>Copyright protection for large language models is of critical importance, given their substantial development costs, proprietary value, and potential for misuse. Existing surveys have predominantly focused on techniques for tracing LLM-generated content - namely, text watermarking - while a systematic exploration of methods for protecting the models themselves (i.e., model watermarking and model fingerprinting) remains absent. Moreover, the relationships and distinctions among text watermarking, model watermarking, and model fingerprinting have not been comprehensively clarified. This work presents a comprehensive survey of the current state of LLM copyright protection technologies, with a focus on model fingerprinting, covering the following aspects: (1) clarifying the conceptual connection from text watermarking to model watermarking and fingerprinting, and adopting a unified terminology that incorporates model watermarking into the broader fingerprinting framework; (2) providing an overview and comparison of diverse text watermarking techniques, highlighting cases where such methods can function as model fingerprinting; (3) systematically categorizing and comparing existing model fingerprinting approaches for LLM copyright protection; (4) presenting, for the first time, techniques for fingerprint transfer and fingerprint removal; (5) summarizing evaluation metrics for model fingerprints, including effectiveness, harmlessness, robustness, stealthiness, and reliability; and (6) discussing open challenges and future research directions. This survey aims to offer researchers a thorough understanding of both text watermarking and model fingerprinting technologies in the era of LLMs, thereby fostering further advances in protecting their intellectual property.</p></details></div>
</div></article>

<span class="anchor" id="education"></span>

<h2 class="section-heading section-heading--education"><i class="fas fa-graduation-cap section-icon section-icon--education" aria-hidden="true"></i> Education</h2>

<article class="experience-entry">
  <div class="experience-logo experience-logo--education experience-logo--ruc"><img src="/images/logos/ruc.png" alt="Renmin University of China logo" loading="lazy"></div>
  <div class="experience-content">
    <div class="experience-heading">
      <h3>Renmin University of China</h3>
      <span>Starting <time datetime="2027-09">Sep 2027</time></span>
    </div>
    <p class="experience-role">Incoming Ph.D. Student in Computer Science and Technology</p>
  </div>
</article>

<article class="experience-entry">
  <div class="experience-logo experience-logo--education experience-logo--zjut"><img src="/images/logos/zjut.png" alt="Zhejiang University of Technology logo" loading="lazy"></div>
  <div class="experience-content">
    <div class="experience-heading">
      <h3>Zhejiang University of Technology</h3>
      <span><time datetime="2023-09">Sep 2023</time> - <time datetime="2027-06">Jun 2027</time></span>
    </div>
    <p class="experience-role">B.Eng. in Intelligent Science and Technology</p>
    <p class="experience-description">College of Information Engineering</p>
    <details class="education-details">
      <summary>Selected honors</summary>
      <div class="education-details-content">
        <div class="honors-grid">
          <section class="honor-group">
            <h4>Academic</h4>
            <ul>
              <li>GPA <strong class="honor-highlight">4.0/5.0</strong>; ranked <strong class="honor-highlight">1st/48 (top 2%)</strong>.</li>
              <li>CET-6 514; CET-4 539.</li>
            </ul>
          </section>
          <section class="honor-group">
            <h4>Scholarships</h4>
            <ul>
              <li><strong class="honor-award">Provincial Government Scholarship</strong> &times;2 (top 10%).</li>
              <li>University Outstanding Student First-Class Scholarship &times;2; Learning First-Class Scholarship &times;2 (top 3%).</li>
              <li>Outstanding Communist Youth League Member.</li>
            </ul>
          </section>
          <section class="honor-group">
            <h4>Leadership</h4>
            <ul>
              <li>Secretary-General, Information Innovation and Entrepreneurship Center.</li>
              <li>Head, Practice Training Department; Study Committee Member, Intelligent Science and Technology 2301.</li>
            </ul>
          </section>
          <section class="honor-group honor-group--wide">
            <h4>Competitions &amp; projects</h4>
            <ul>
              <li><strong class="honor-award">National First Prize</strong>, <a class="honor-link" href="http://smartcarrace.com/">National Undergraduate Smart Car Competition</a> (<a class="honor-link" href="https://www.d-robotics.cc/">D-Robotics</a> Smart Healthcare Track).</li>
              <li><strong class="honor-award">National Second Prize</strong>, <a class="honor-link" href="http://nuedc.xjtu.edu.cn/">TI Cup National Undergraduate Electronic Design Competition</a> (Problem E).</li>
              <li><strong class="honor-award">National First Prize</strong>, <a class="honor-link" href="https://www.cnrobo.com/">China Robot Competition &amp; RoboCup China</a>.</li>
            </ul>
            <div class="competition-gallery" aria-label="Competition project photos">
              <figure class="competition-card">
                <a href="/images/competition/image%20copy.png"><img src="/images/competition/image%20copy.png" alt="Smart healthcare autonomous vehicle prototype" loading="lazy" decoding="async"></a>
              </figure>
              <figure class="competition-card">
                <a href="/images/competition/image.png"><img src="/images/competition/image.png" alt="Autonomous vehicle navigating a competition track" loading="lazy" decoding="async"></a>
              </figure>
              <figure class="competition-card">
                <a href="/images/competition/%E8%B4%9F%E5%8E%8B%E6%B6%B5%E9%81%93.jpg"><img src="/images/competition/%E8%B4%9F%E5%8E%8B%E6%B6%B5%E9%81%93.jpg" alt="Negative-pressure duct robot prototype" loading="lazy" decoding="async"></a>
              </figure>
              <figure class="competition-card">
                <a href="/images/competition/%E8%B4%9F%E5%8E%8B%E9%A3%8E%E6%89%87.jpg"><img src="/images/competition/%E8%B4%9F%E5%8E%8B%E9%A3%8E%E6%89%87.jpg" alt="Negative-pressure fan robot chassis" loading="lazy" decoding="async"></a>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </details>
  </div>
</article>
