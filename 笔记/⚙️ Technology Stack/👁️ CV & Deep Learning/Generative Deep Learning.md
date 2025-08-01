### CH02 - 深度学习

> [!note] 章节目标
>
> - 了解可以使用深度学习建模的不同类型的非结构化数据。
> - 定义深度神经网络，并理解它如何用于建模复杂数据集。
> - 构建多层感知器来预测图像内容。
> - 通过使用卷积层、dropout 和批归一化层来提高模型的性能。

> [!tip] 基本定义
> 深度学习是一类机器学习算法，它使用多个堆叠的处理单元层，从未结构化数据中学习高级表示。

#### 2-1 深度学习的数据

| 数据类型 | 具体说明 |
| ---- | ---- |
| 结构化数据 | 许多机器学习算法要求其作为输入，为表格形式，按特征列排列描述观测。如用包含年龄、收入、上月网站访问量等特征的结构化表格，训练逻辑回归、随机森林或XGBoost模型，预测用户是否订阅在线服务（二元响应变量），模型学习特征交互影响响应  |
| 非结构化数据 | 指并非天然按特征列排列的数据，像图像、音频、文本等。图像有空间结构、音频/文本有时间结构、视频有时空结构，但因无特征列形式，视为非结构化|

### CH03 - 变分自动编码器

### CH08 - 扩散模型

> [!note] 章节目标    
>
> - 学习定义扩散模型的基本原理和组成部分。  
> - 了解正向过程如何向训练图像集添加噪声。  
> - 理解重参数化技巧及其重要性。  
> - 探究正向扩散调度的不同形式。  
> - 理解反向扩散过程，以及它与正向加噪过程的关联。  
> - 探究用于参数化反向扩散过程的U-Net架构。  
> - 使用Keras构建自己的去噪扩散模型（DDM），以生成花朵图像。  
> - 从模型中采样生成新的花朵图像。  
> - 探究扩散步数对图像质量的影响，并在潜在空间中对两幅图像进行插值。  

过去十年，**扩散模型** 和 **生成对抗网络（GANs）** 是图像生成领域 最具影响力、最核心的生成建模技术（二者代表了生成模型的两大技术路线：扩散模型基于 “<span style="background:rgba(252, 163, 180, 0.55)">逐步去噪</span>”，GANs 基于 “<span style="background:rgba(252, 163, 180, 0.55)">对抗博弈</span>”）。

#### 去噪扩散模型（Denoising Diffusion Models, DDM）

##### 核心思想：“从噪声到图像的逐步去噪”

- **目标**：生成一张看起来“真实”的图片，就像是从我们的训练数据集中挑选出来的一样。

- **方法**：训练一个深度学习模型。

- **模型的任务**：模型的任务不是一步到位直接生成图片，而是“去噪”(denoise)。具体来说，是把一张轻微加了噪声的图片，恢复到稍微干净一点的状态。这个“一小步”是关键。

- **生成过程**：既然模型会“去噪”，那么如果我们**从一张纯粹的、完全随机的噪声图片**（就像老式电视机没信号时的雪花点）开始，然后反复、迭代地使用这个去噪模型，每一步都去掉一点点噪声，理论上，我们最终就能“雕琢”出一张清晰、有意义的图片。

> [!note] 隐含过程
> 
> - **前向过程 (Forward Process / Noising)**: 这是“准备训练数据”的过程。我们拿到一张干净的训练图片（比如一朵花），然后人为地、逐步地对它添加噪声，一步又一步，直到它完全变成一张没有意义的噪声图。这个过程是固定的、无需学习的，就像是为我们的雕塑家提供“从半成品到原材料”的参照。
> 
> - **反向过程 (Backward Process / Denoising)**: 这就是我们真正要训练模型去学习的过程。模型需要学会如何“撤销”前向过程中的一小步加噪操作。一旦模型学会了如何走好这“一小步”，它就能从纯噪声出发，一步步反向走回来，最终生成一张清晰的图片。

DDM区别于生成对抗网络（GAN）的对抗性训练和变分自编码器（VAE）的潜在空间建模。它直接学习一个**​​确定性的去噪过程**序列​​，通常训练更稳定，生成的样本多样性和质量都非常高。

##### 数据集与预处理 (The Flowers Dataset & Preprocessing)

`Oxford 102 Flower dataset`是一个经典的数据集，包含102个不同类别的花卉，共8000多张图片。类别多样，形态各异，很适合用于图像生成任务的练习和评估。

> [!note] 下载数据集
> 
> ```bash
> bash scripts/download_kaggle_data.sh nunenuh pytorch-challange-flower-dataset
> ```

