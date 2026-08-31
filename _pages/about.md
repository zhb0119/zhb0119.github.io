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

浙江工业大学信息工程学院智能科学与技术专业本科生，目前大三。我的研究兴趣是大模型安全，重点关注模型指纹与模型水印。

<span class='anchor' id='-yj'></span>

# 实习经历

- *2025.06 - 2026.01*，**浙江大学** [Intelligence Fusion Research Center (IFRC) 实验室](https://ifrc-zju.github.io/)，研究实习生
  - 负责大语言模型指纹技术研究，参与模型版权保护方案的设计与实现。

<span class='anchor' id='-lwzl'></span>

# 科研成果

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2026 · Under Review</div><img src='images/paper/attndiff.png' alt="AttnDiff" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [**AttnDiff: Attention-based Differential Fingerprinting for Large Language Models**](https://arxiv.org/abs/2604.05502) · 第一作者
  - 基于差分注意力动态的白盒指纹框架，在多个模型家族上实现高判别性，并对微调、剪枝和模型合并保持鲁棒性。
  - [[arXiv]](https://arxiv.org/abs/2604.05502)

<details>
<summary>Abstract</summary>

AttnDiff 通过构造受控语义冲突的提示对，提取模型内部的信息路由差异，并使用谱描述符与 CKA 相似度进行模型溯源。
</details>

</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP Findings 2026</div><img src='images/paper/memmark.png' alt="MemMark" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [**MemMark: State-Evolution Attribution Watermarking for Agent Long-Term Memory Systems**](https://arxiv.org/abs/2605.25002) · 第一作者
  - 面向长期智能体记忆系统的状态演化归因水印，在 A-Mem 与 Graphiti 后端上保持记忆效用并支持快照归属验证。
  - [[项目主页]](https://henrymao2004.github.io/MemMark/) · [[arXiv]](https://arxiv.org/abs/2605.25002)

<details>
<summary>Abstract</summary>

MemMark 将由所有者控制的信号嵌入智能体的长期记忆写入过程，在只拥有最终快照的情况下完成归属验证，并应对记忆迁移、证据删除等生命周期攻击。
</details>

</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2026 · Accepted</div><img src='images/paper/forgetmark.png' alt="ForgetMark" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [**ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models**](https://arxiv.org/abs/2601.08189) · 共同一作
  - 基于目标性遗忘的隐蔽指纹框架，使用 LoRA 适配器嵌入指纹，对模型合并与增量微调保持鲁棒性。
  - [[arXiv]](https://arxiv.org/abs/2601.08189)

<details>
<summary>Abstract</summary>

ForgetMark 通过定向遗忘将可读的键值对编码为模型指纹，并结合似然与语义证据进行归属验证。
</details>

</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Survey</div><img src='images/paper/copyright.png' alt="Copyright Protection for Large Language Models survey" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- [**Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends**](https://arxiv.org/abs/2508.11548) · 综述论文
  - 系统梳理文本水印、模型水印和模型指纹三条大模型版权保护技术路线。
  - [[项目主页]](https://xuzhenhua55.github.io/awesome-llm-copyright-protection/) · [[arXiv]](https://arxiv.org/abs/2508.11548)

<details>
<summary>Abstract</summary>

本文系统梳理文本水印、模型水印和模型指纹三条大模型版权保护技术路线，总结现有挑战与未来趋势。
</details>

</div></div>

<span class='anchor' id='-xl'></span>

# 教育背景

- *2023.09 - 2027.06*，浙江工业大学信息工程学院，智能科学与技术，本科
