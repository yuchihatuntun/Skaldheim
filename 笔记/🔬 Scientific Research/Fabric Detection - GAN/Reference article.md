### GAN网络

针对布匹瑕疵识别等工业质检应用，其核心挑战在于异常样本（瑕疵）的**稀疏性、多样性与不可预知性**。传统的监督学习方法因缺乏足够多、覆盖全部瑕疵类型的标注数据而受限。因此，采用非监督学习，特别是基于GAN的异常检测（Anomaly Detection）框架，是一种更为先进和有效的数据驱动策略。


### 关于布匹瑕疵检测的GAN或者扩散模型

#### Multistage GAN for Fabric Defect Detection（用于织物缺陷检测的多阶段生成对抗网络）

| 属性 | 内容 |
|------|------|
| 领域 | 计算机视觉 (Computer Vision)<br>工业质检 (Industrial Quality Inspection)<br>深度学习 (Deep Learning)<br>织物缺陷检测 (Fabric Defect Detection) |
| 期刊/会议 | IEEE TRANSACTIONS ON IMAGE PROCESSING (TIP), VOL. 29 |
| 发表年份 | 2020 |

论文没有选择像YOLO或Faster-RCNN这类在物体周围画框的“目标检测”网络，因为布料上的瑕疵形状、大小极不规则，用框很难框好 。他们选择了一个语义分割网络，即DeepLab V3 （我们则为RT-DETR识别）。

>[!note] 语义分割网络
> 语义分割网络（Semantic Segmentation Network）是计算机视觉中的一类深度学习模型，用于**实现​​像素级分类**​​，即对图像中的​​每个像素​​分配一个类别标签（如“人”“车”“天空”等），从而将图像划分为具有语义意义的区域。与目标检测（框出物体）和实例分割（区分同类物体的不同个体）不同，语义分割不区分同一类别的不同实例，仅关注像素的语义归属。

论文最创新的部分。他们不满足于仅仅检测已知的瑕疵，而是要**让模型能适应全新的布料**，旨在合成更多具有不同纹理（即背景）的有缺陷样本。因此，这些合成的有缺陷样本可被视为检测模型的额外训练样本，以进一步提高其性能。

![alt text](image-1.png)

具体来说，就是用一个GAN来“伪造”带有瑕疵的新布料图片，然后把这些伪造的图片喂给第一部分的检测网络，对其进行**微调 (Fine-tuning)**，让它获得识别新布料上瑕疵的能力 。

论文的三阶段实现逻辑：

1. **条件生成网络**：训练cGAN学习缺陷与织物纹理的条件关系，基于新纹理生成匹配的缺陷模式
2. **缺陷融合网络**：将生成的缺陷自然融合到目标织物背景中，确保视觉真实性
3. **模型微调**：使用合成的缺陷样本对预训练分割模型进行适应性训练，提升新织物缺陷检测能力

##### GAN网络的基本训练原理

GAN（生成对抗网络）的训练过程是一个经典的**零和博弈**（Zero-sum Game），涉及两个神经网络的对抗学习：

###### 核心组件

**生成器 G (Generator)**：
- 输入：随机噪声向量 $z \sim p_z(z)$（通常为高斯分布）
- 输出：生成的假图像 $G(z)$
- 目标：生成尽可能逼真的图像来"欺骗"判别器

**判别器 D (Discriminator)**：
- 输入：真实图像 $x \sim p_{data}(x)$ 或生成图像 $G(z)$
- 输出：输入图像为真实图像的概率 $D(x) \in [0,1]$
- 目标：准确区分真实图像和生成图像

###### 损失函数详细分析

**判别器的目标函数**：
判别器D希望最大化其分类准确性，具体表现为：
- 对于真实图像 $x$：希望 $D(x) \rightarrow 1$，即 $\log D(x) \rightarrow 0$
- 对于生成图像 $G(z)$：希望 $D(G(z)) \rightarrow 0$，即 $\log(1-D(G(z))) \rightarrow 0$

因此判别器要**最大化**：
$$L_D = \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$$

**生成器的目标函数**：
生成器G希望"欺骗"判别器，使其将生成图像误判为真实图像：
- 希望 $D(G(z)) \rightarrow 1$，即 $\log(1-D(G(z))) \rightarrow -\infty$

因此生成器要**最小化**：
$$L_G = \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$$

###### 完整的Min-Max博弈

将两个目标结合，形成经典的Min-Max优化问题：
$$\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1 - D(G(z)))]$$

这意味着：
- **外层最小化**：生成器G试图最小化目标函数
- **内层最大化**：判别器D试图最大化目标函数

###### PyTorch实现示例

```python
import torch
import torch.nn as nn
import torch.optim as optim

# 定义损失函数
criterion = nn.BCELoss()  # Binary Cross Entropy Loss

# 优化器
optimizer_D = optim.Adam(discriminator.parameters(), lr=0.0002, betas=(0.5, 0.999))
optimizer_G = optim.Adam(generator.parameters(), lr=0.0002, betas=(0.5, 0.999))

# 训练循环
for epoch in range(num_epochs):
    for i, (real_images, _) in enumerate(dataloader):
        batch_size = real_images.size(0)
        
        # 创建标签
        real_labels = torch.ones(batch_size, 1)   # 真实图像标签 = 1
        fake_labels = torch.zeros(batch_size, 1)  # 生成图像标签 = 0
        
        # ============= 训练判别器 =============
        optimizer_D.zero_grad()
        
        # 计算真实图像的损失: log(D(x))
        outputs_real = discriminator(real_images)
        d_loss_real = criterion(outputs_real, real_labels)
        
        # 生成假图像
        noise = torch.randn(batch_size, latent_dim)
        fake_images = generator(noise)
        
        # 计算生成图像的损失: log(1-D(G(z)))
        outputs_fake = discriminator(fake_images.detach())  # detach()防止梯度传播到G
        d_loss_fake = criterion(outputs_fake, fake_labels)
        
        # 判别器总损失
        d_loss = d_loss_real + d_loss_fake
        d_loss.backward()
        optimizer_D.step()
        
        # ============= 训练生成器 =============
        optimizer_G.zero_grad()
        
        # 生成器希望判别器将假图像判定为真
        outputs_fake = discriminator(fake_images)
        g_loss = criterion(outputs_fake, real_labels)  # 注意这里用real_labels!
        
        g_loss.backward()
        optimizer_G.step()
```

##### 多阶段GAN

###### 阶段一：基于cGAN的纹理条件化瑕疵生成

![alt text](image.png)

该阶段的核心目标是学习一个条件概率分布 (conditional probability distribution) $p(\text{defect}|\text{texture})$。换言之，我们不寻求生成任意的、随机的瑕疵，而是期望根据输入的一个具体布料纹理（texture），**生成一个在视觉上与该纹理相匹配的瑕疵（defect）**。为此，系统采用了一个条件生成对抗网络 (Conditional GAN, **cGAN**)。

1. **纹理风格的数学表征 (Mathematical Representation of Texture Style)**：

- **特征提取器 (Feature Extractor)**：使用一个在大型图像数据集（如ImageNet）上预训练好 (pre-trained) 的VGG网络作为固定的、非学习的特征提取器，记为 $\phi$。对于一个输入的无瑕疵布料块图像 $\varnothing$，VGG网络会输出一系列中间层的**特征图 (Feature Maps)**。

- **格拉姆矩阵 (Gram Matrix)**：格拉姆矩阵被用来捕捉特征图中的二阶统计量，从而有效地表征纹理风格。其计算过程如下：

    1. 从特征提取器$\phi$ 中选取第 $j$ 层的激活输出 $\phi_j(x)$，其维度为 $C_j \times H_j \times W_j$，其中 $C$ 是通道数，$H$ 和 $W$ 分别是特征图的高度和宽度。

    2. 将该特征图$\phi_j(x)$ 重塑 (reshape) 为一个二维矩阵 $\psi$，其维度为 $C_j \times (H_j W_j)$。

    3. 该特征图的格拉姆矩阵$G^{\phi}(x)$ 定义为其与自身转置的点积，并进行归一化：

    $$
    G^{\phi}(x) = \frac{\psi \psi^T}{C_j H_j W_j}
    $$

    最终得到的$G^{\phi}(x)$ 是一个 $C_j \times C_j$ 的矩阵。该**矩阵的每一个元素 $(m, n)$ 表示第 $m$ 个特征通道与第 $n$ 个特征通道之间的相关性 (correlation)**。这种相关性信息捕捉了纹理的内在结构，而忽略了特征在空间中的具体位置，因此是表征“风格”的理想选择。这个 $G^{\phi}(x)$ 矩阵就被用作后续cGAN的**条件信号** (conditional signal)。

2. **条件GAN (cGAN) 的对抗性训练**

- **生成器 (Generator, $G$)**：其输入不再仅仅是一个从先验噪声分布 $p_z$ 中采样的潜在向量 $z$，同时还接收上述计算得到的条件信号——格拉姆矩阵 $G^{\phi}$。其目标是学习一个映射 $G: (z, G^{\phi}) \rightarrow x'$，生成一个伪瑕疵图像 $x'$。

- **判别器 (Discriminator, $D_s$)**：其输入是一个数据对 (图像，条件)。它需要判断这个数据对是真实的（即一个从真实数据集中采样的瑕疵图像及其对应的风格矩阵），还是伪造的（即由G生成的瑕疵图像和其所依据的风格矩阵）。

- **目标函数 (Objective Function)**：整个对抗训练过程的目标函数定义为如下的条件对抗损失 (conditional adversarial loss)：

$$
\min_G \max_{D_s} \mathcal{L}(D_s, G) = \mathbb{E}_{x \sim p_{data}}[\log D_s(x, G^{\phi})] + \mathbb{E}_{z \sim p_z}[\log(1 - D_s(G(z), G^{\phi}))]
$$

通过这个对抗过程，生成器 $G$ 被迫学习如何根据输入的风格矩阵 $G^{\phi}$ 来生成一个在判别器 $D_s$ 看来与该风格高度匹配的、无法分辨真伪的瑕疵图像。最终，训练好的生成器便掌握了根据任意新型布料纹理生成合理瑕疵的能力。

