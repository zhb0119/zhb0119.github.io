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

我是浙江工业大学信息工程学院智能科学与技术专业本科生张皓博（Haobo Zhang），专业排名 1/48，预计 2027 年毕业。目前在浙江大学从事大模型安全方向科研，关注大语言模型版权保护、模型指纹与智能体安全。

我的研究兴趣包括：大模型安全与知识产权保护、模型水印与指纹、机器学习、计算机视觉、机器人控制。

简历：<a href="/files/haobo-zhang-resume.pdf">下载 PDF</a> · <a href="https://github.com/zhb0119">GitHub</a>

<span class='anchor' id='-xl'></span>

# 教育背景

- *2023.09 - 2027.06*，浙江工业大学信息工程学院，智能科学与技术，本科
  - GPA 4.0/5.0，专业排名 1/48；CET-6 514，CET-4 539。
  - 核心课程：最优化方法（96）、数据结构（96）、人工智能原理（95）、机器学习（87）、图像处理与视频分析 A（98）。

<span class='anchor' id='-yj'></span>

# 研究经历

- *2025.06 - 2026.01*，浙江大学科研助理，大模型安全方向
  - 负责大语言模型指纹技术研究，参与模型版权保护方案的设计与实现。

<span class='anchor' id='-lwzl'></span>

# 科研成果

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2026 · under review</div><img src='images/attndiff.png' alt="AttnDiff" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- **AttnDiff: Attention-based Differential Fingerprinting for Large Language Models** · 第一作者
  - 基于差分注意力动态的白盒指纹框架，在多个模型家族上实现高判别性，并对微调、剪枝和模型合并保持鲁棒性。
  - [[arXiv]](https://arxiv.org/abs/2604.05502)

</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2026 · under review</div><img src='images/memmark.png' alt="MemMark" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- **MemMark: State-Evolution Attribution Watermarking for Long-Term Agent Memory Systems** · 第一作者
  - 面向长期智能体记忆系统的状态演化归因水印，在 A-Mem 与 Graphiti 后端上保持记忆效用并恢复 40-bit payload。
  - [[arXiv]](https://arxiv.org/abs/2605.25002)

</div></div>

- **ForgetMark: Stealthy Fingerprint Embedding via Targeted Unlearning in Language Models** · ICASSP 2026，第二作者
  - 基于目标性遗忘的隐蔽指纹框架，使用 LoRA 适配器嵌入指纹，实现 100% 验证成功率。
  - [[arXiv]](https://arxiv.org/abs/2601.08189)
- **Copyright Protection for Large Language Models: A Survey of Methods, Challenges, and Trends** · 综述论文
  - 系统梳理文本水印、模型水印和模型指纹三条技术路线。
  - [[arXiv]](https://arxiv.org/abs/2508.11548) · [[开源资源]](https://github.com/Xuzhenhua55/awesome-llm-copyright-protection)

<span class='anchor' id='-ryjx'></span>

# 荣誉奖项

- *2025* 全国大学生智能汽车竞赛，地瓜机器人智慧医疗组，全国一等奖
- *2025* TI 杯中国大学生电子设计竞赛 E 题，全国二等奖
- *2024* 中国机器人大赛暨 RoboCup 机器人世界杯中国赛，全国一等奖
- 省政府奖学金 ×2；校级优秀学生一等奖学金 ×2；学习一等奖学金 ×2

<span class='anchor' id='-xmjl'></span>

# 项目经历

<div class='paper-box'><div class='paper-box-image'><div><img src='images/smartcar.png' alt="智能车项目" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- **国家级大创项目：乒乓颠球机器人**
  - 通过视觉实时捕捉球轨迹，估计位置、速度与旋转，驱动执行机构实现连续稳定颠球。

</div></div>

- **软件著作：基于二维激光雷达的智能车控制系统**
  - 采用双控制器架构，集成 DMA、卡尔曼滤波与 PID，实现高效解算、精准避障与稳定控制。
- **专利：基于领域特异性偏见特征指纹的大语言模型知识产权保护方法及装置**
  - 面向闭源模型的非侵入式黑盒指纹方法，对微调、剪枝和扰动具有鲁棒性。

<span class='anchor' id='-xshy'></span>

# 技术栈

Python · PyTorch · C/C++ · STM32 · YOLOv5 · 计算机视觉 · 机器人控制
