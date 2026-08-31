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

<div class="lang-content lang-zh" data-lang-content="zh" markdown="1">
<div class="intro-panel">
<p class="intro-kicker">本科生研究者 · 杭州，中国</p>
<h1>你好，我是张皓博 <span>/ Haobo Zhang</span></h1>
<p class="intro-summary">浙江工业大学信息工程学院智能科学与技术专业本科生，目前大三。研究兴趣为大模型安全，重点关注模型指纹与模型水印。</p>
</div>

<p>我关注如何让大模型具备可验证、可追溯的身份，并探索模型指纹与水印在模型版权保护中的实际应用。</p>

<p class="quick-links"><a class="quick-link quick-link-primary" href="https://github.com/zhb0119">GitHub <span aria-hidden="true">↗</span></a></p>
</div>

<div class="lang-content lang-en" data-lang-content="en" hidden markdown="1">
<div class="intro-panel">
<p class="intro-kicker">UNDERGRADUATE RESEARCHER · HANGZHOU, CHINA</p>
<h1>Hello, I am Haobo Zhang <span>/ 张皓博</span></h1>
<p class="intro-summary">I am a third-year undergraduate student in Intelligent Science and Technology at Zhejiang University of Technology. My research focuses on LLM security, especially model fingerprinting and model watermarking.</p>
</div>

<p>I study how large language models can have verifiable and traceable identities, with an emphasis on practical fingerprinting and watermarking for model copyright protection.</p>

<p class="quick-links"><a class="quick-link quick-link-primary" href="https://github.com/zhb0119">GitHub <span aria-hidden="true">↗</span></a></p>
</div>

<span class='anchor' id='internship'></span>

<div class="lang-content lang-zh" data-lang-content="zh" markdown="1">
# 实习经历

- *2025.06 - 2026.01* · **浙江大学** · [Intelligence Fusion Research Center (IFRC) 实验室](https://ifrc-zju.github.io/) · 研究实习生
  - 负责大语言模型指纹技术研究，参与模型版权保护方案的设计与实现。
</div>

<div class="lang-content lang-en" data-lang-content="en" hidden markdown="1">
# Internship Experience

- *2025.06 - 2026.01* · **Zhejiang University** · [Intelligence Fusion Research Center (IFRC) Lab](https://ifrc-zju.github.io/) · Research Intern
  - Researched LLM fingerprinting and contributed to the design and implementation of model copyright protection methods.
</div>

<span class='anchor' id='publications'></span>

<div class="lang-content lang-zh" data-lang-content="zh" markdown="1">
# 科研成果

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">NeurIPS 2026 · 在审</div><img src='images/paper/attndiff.png' alt="AttnDiff" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2604.05502">AttnDiff: Attention-based Differential Fingerprinting for Large Language Models</a>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Zhenhua Xu, Junxian Li, Shangfeng Sheng, Dezhang Kong, Meng Han.</p>
<p class="paper-venue"><em>NeurIPS 2026</em> · 在审</p>
<button class="abstract-toggle" type="button" aria-expanded="false">摘要 <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>AttnDiff 通过构造带有受控语义冲突的提示对，提取模型内部的信息路由差异，并使用紧凑的谱描述符与 CKA 相似度进行模型溯源。在微调、剪枝、压缩和模型合并等场景下，该方法能够区分相关模型与无关模型。</div>
</div></div>

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">EMNLP Findings 2026</div><img src='images/paper/memmark.png' alt="MemMark" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2605.25002">MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems</a>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Xutao Mao, Guangyuan Dong, Ziwei Li, Xuanbo Su, Kaijie Chen, Jing Yang, Zheng Lin.</p>
<p class="paper-venue"><em>Findings of ACL: EMNLP 2026</em></p>
<button class="abstract-toggle" type="button" aria-expanded="false">摘要 <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>MemMark 将由所有者控制的信号嵌入智能体的长期记忆写入过程，在只拥有最终快照的情况下完成归属验证。该方法在保持记忆效用的同时，能够应对证据删除、快照迁移和多种记忆生命周期攻击。</div>
</div></div>

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ICASSP 2026 · 已录用</div><img src='images/paper/forgetmark.png' alt="ForgetMark" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2601.08189">ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models</a>
<p class="paper-authors">Zhenhua Xu<sup>*</sup>, <strong>Haobo Zhang<sup>*</sup></strong>, Zhebo Wang, Qichen Liu, Haitao Xu, Wenpeng Xing, Meng Han.</p>
<p class="paper-venue"><em>ICASSP 2026</em> · 已录用</p>
<p class="author-note"><sup>*</sup> 共同一作。</p>
<button class="abstract-toggle" type="button" aria-expanded="false">摘要 <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>ForgetMark 通过定向遗忘将可读的键值对编码为模型指纹，并使用轻量 LoRA 适配器抑制原始答案、保留通用能力。该方法结合似然与语义证据进行归属验证，对模型合并和增量微调具有较好的隐蔽性与鲁棒性。</div>
</div></div>

<div class='paper-box paper-box-no-image'>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2508.11548">Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends</a>
<p class="paper-authors">Zhenhua Xu, Xubin Yue, Zhebo Wang, <strong>Haobo Zhang</strong>, Qichen Liu, Xixiang Zhao, Jingxuan Zhang, Wenjun Zeng, Wengpeng Xing, Dezhang Kong, Changting Lin, Meng Han.</p>
<p class="paper-venue"><em>综述论文</em></p>
<p>系统梳理文本水印、模型水印和模型指纹三条大模型版权保护技术路线。</p>
<p><a href="https://xuzhenhua55.github.io/awesome-llm-copyright-protection/">项目主页 / 开源资源</a> · <a href="https://arxiv.org/abs/2508.11548">arXiv</a></p>
</div></div>
</div>

<div class="lang-content lang-en" data-lang-content="en" hidden markdown="1">
# Selected Publications

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">NeurIPS 2026 · Under Review</div><img src='images/paper/attndiff.png' alt="AttnDiff" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2604.05502">AttnDiff: Attention-based Differential Fingerprinting for Large Language Models</a>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Zhenhua Xu, Junxian Li, Shangfeng Sheng, Dezhang Kong, Meng Han.</p>
<p class="paper-venue"><em>Thirty-Ninth Conference on Neural Information Processing Systems (NeurIPS), 2026</em> · Under Review</p>
<button class="abstract-toggle" type="button" aria-expanded="false">Abstract <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>AttnDiff extracts differential attention patterns from minimally edited prompt pairs that induce controlled semantic conflicts. Compact spectral descriptors and CKA comparisons enable data-efficient provenance verification across fine-tuning, pruning, compression, and model merging.</div>
</div></div>

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">EMNLP Findings 2026</div><img src='images/paper/memmark.png' alt="MemMark" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2605.25002">MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems</a>
<p class="paper-authors"><strong>Haobo Zhang</strong>, Xutao Mao, Guangyuan Dong, Ziwei Li, Xuanbo Su, Kaijie Chen, Jing Yang, Zheng Lin.</p>
<p class="paper-venue"><em>Findings of the Association for Computational Linguistics: EMNLP, 2026</em></p>
<button class="abstract-toggle" type="button" aria-expanded="false">Abstract <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>MemMark embeds an owner-controlled signal into latent memory-write decisions and verifies provenance from final snapshots alone. It preserves memory utility while recovering payloads under migration and lifecycle attacks, with wrong-key verification remaining near chance.</div>
</div></div>

<div class='paper-box'>
<div class='paper-box-image'><div><div class="badge">ICASSP 2026 · Accepted</div><img src='images/paper/forgetmark.png' alt="ForgetMark" width="100%"></div></div>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2601.08189">ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models</a>
<p class="paper-authors">Zhenhua Xu<sup>*</sup>, <strong>Haobo Zhang<sup>*</sup></strong>, Zhebo Wang, Qichen Liu, Haitao Xu, Wenpeng Xing, Meng Han.</p>
<p class="paper-venue"><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2026</em> · Accepted</p>
<p class="author-note"><sup>*</sup> Equal contribution.</p>
<button class="abstract-toggle" type="button" aria-expanded="false">Abstract <span aria-hidden="true">▾</span></button>
<div class="paper-abstract" hidden>ForgetMark encodes provenance through targeted unlearning of a compact, human-readable key-value set. Lightweight LoRA adapters preserve general capabilities while likelihood and semantic evidence provide robust ownership verification under model merging and incremental fine-tuning.</div>
</div></div>

<div class='paper-box paper-box-no-image'>
<div class='paper-box-text'>
<a class="paper-title" href="https://arxiv.org/abs/2508.11548">Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends</a>
<p class="paper-authors">Zhenhua Xu, Xubin Yue, Zhebo Wang, <strong>Haobo Zhang</strong>, Qichen Liu, Xixiang Zhao, Jingxuan Zhang, Wenjun Zeng, Wengpeng Xing, Dezhang Kong, Changting Lin, Meng Han.</p>
<p class="paper-venue"><em>Survey</em></p>
<p>We organize text watermarking, model watermarking, and model fingerprinting into a unified view of LLM copyright protection.</p>
<p><a href="https://xuzhenhua55.github.io/awesome-llm-copyright-protection/">Project homepage / Open-source resources</a> · <a href="https://arxiv.org/abs/2508.11548">arXiv</a></p>
</div></div>
</div>

<span class='anchor' id='education'></span>

<div class="lang-content lang-zh" data-lang-content="zh" markdown="1">
# 教育背景

- *2023.09 - 2027.06* · **浙江工业大学** · 信息工程学院
  - 智能科学与技术 / **工学学士**
</div>

<div class="lang-content lang-en" data-lang-content="en" hidden markdown="1">
# Education

- *2023.09 - 2027.06* · **Zhejiang University of Technology** · College of Information Engineering
  - **B.Eng. in Intelligent Science and Technology**
</div>

<script>
(function () {
  var storageKey = 'haobo-homepage-language';
  var defaultLanguage = 'zh';

  function setLanguage(language) {
    var isEnglish = language === 'en';
    document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
    document.querySelectorAll('[data-lang-content]').forEach(function (content) {
      content.hidden = content.getAttribute('data-lang-content') !== language;
    });
    document.querySelectorAll('[data-lang-option]').forEach(function (option) {
      var active = option.getAttribute('data-lang-option') === language;
      option.classList.toggle('is-active', active);
      option.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-nav-zh]').forEach(function (link) {
      link.textContent = isEnglish ? link.getAttribute('data-nav-en') : link.getAttribute('data-nav-zh');
    });
    var switcher = document.querySelector('[data-language-switcher]');
    if (switcher) {
      switcher.setAttribute('aria-label', isEnglish ? 'Switch to Chinese' : '切换到英文');
    }
    try { window.localStorage.setItem(storageKey, language); } catch (error) { /* storage may be unavailable */ }
  }

  document.querySelectorAll('[data-lang-option]').forEach(function (option) {
    option.addEventListener('click', function () {
      setLanguage(option.getAttribute('data-lang-option'));
    });
  });

  var savedLanguage = defaultLanguage;
  try {
    var storedLanguage = window.localStorage.getItem(storageKey);
    if (storedLanguage === 'en' || storedLanguage === 'zh') savedLanguage = storedLanguage;
  } catch (error) { /* storage may be unavailable */ }
  setLanguage(savedLanguage);

  document.querySelectorAll('.abstract-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      var abstract = button.nextElementSibling;
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      abstract.hidden = expanded;
      button.querySelector('span').textContent = expanded ? '▾' : '▴';
    });
  });
}());
</script>
