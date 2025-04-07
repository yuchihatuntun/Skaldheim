# 1.1 The Importance of Analog Circuits
Why do we still have an interest in analog circuits? Is analog design too old-fashioned and outdated?

Interestingly, these questions have appeared approximately every five years over the past fifty years. However, most of those asking them either lack understanding of analog design or are unwilling to face the challenges. In this section, we will recognize that designing analog circuits remains essential, valuable, and challenging, and will continue to do so for decades to come.

### 1.1.1 信号与检测与处理
许多电子系统实现两个主要功能——==检测（接收）信号、处理信号并从中提取信息==。你的手机接收到射频（RF）信号，处理之后提供语音或数据信息。同样地，你的数码相机检测某物体各部分发出的光强，并将结果进行处理以获取图像。

我们凭直觉知道，人们更愿意在数字域中进行复杂的信号处理。事实上，我们可能想知道，能否==把信号直接数字化，以避免任何模拟域的处理==。天线接收到的射频信号由模数转换器（ADC）数字化，然后，完全在数字域中处理。
![[Pasted image 20250223112325.png|429]]

答案是否定的。<span style="font-weight:bold; color:rgb(234, 69, 73)">能够使微弱射频信号数字化的</span>$ADC^{①}$，<span style="font-weight:bold; color:rgb(234, 69, 73)">其功耗远大于现代手机接收器</span>。此外，即使我们真的考虑这种方案，也只有模拟设计师有能力研发这样的ADC。此示例要说明的关键点是，检测的接口仍然要求高性能模拟电路的设计。

检测难题的另一个有趣的例子来源于对脑信号的研究。大脑神经的每次活动将产生一个幅度为几毫伏、持续时间为几百微秒的电脉冲。神经记录系统可以采用几十个“探针”(电极)监控大脑的活动，每个探针检测一系列电脉冲。==每个探针所产生的信号必须放大、数字化和无线传输，以方便患者自由移动==。

在这种环境中，检测、处理和传输的电路必需是低功耗的，这是由于以下两个原因：

1. 要允许小容量电池持续数天或数周使用；

2. 要尽量减少芯片温度的上升，以防止损坏患者的身体组织。在所示的这些功能中，模拟电路(放大器、ADC和RF发射器)会消耗大部分功率。
![[Pasted image 20250223113627.png|500]]

**设计高性能微弱信号ADC的挑战：**

- **噪声与精度问题**：微弱信号通常幅度很小，容==易被噪声干扰==。ADC需要在极低的噪声水平下保持高精度，这对电路设计和制造工艺提出了极高要求。
  
- **动态范围限制**：微弱信号的动态范围通常很小，而ADC需要同时处理从微弱信号到较强信号的宽动态范围，这对电路设计是一个重大挑战。
  
- **采样率与分辨率平衡**：高性能ADC需要高采样率和高的位数（分辨率）来精确捕捉微弱信号，但这往往会增加电路的复杂性和功耗。
  
- **制造工艺的限制**：当前半导体工艺在处理超低噪声和高精度电路时仍面临物理和工艺上的限制，例如热噪声、1/f噪声等。
  
- **功耗与性能的 tradeoff**：虽然功耗过高可能是一个问题，但更核心的是如何在低功耗下实现高性能。降低功耗可能会牺牲速度或精度，而提高性能又可能导致功耗增加。

Chapter Two - Basics of MOS Devices