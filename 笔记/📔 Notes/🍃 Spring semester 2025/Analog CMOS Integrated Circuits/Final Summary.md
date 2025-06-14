### Homework Review

#### 第五章 电流镜与偏置技术

>[!note] 5.1
> 在图 5.2 中，假设 $(W/L)_1=50/0.5, \lambda=0, I_{out}=0.5mA$，且 $M_1$ 处在饱和区。
> (a) 确定 $R_2/R_1$。
> (b) 计算 $I_{out}$ 对 $V_{DD}$ 变化的灵敏度，定义为 $\frac{\partial I_{out}}{\partial V_{DD}}$ 且用 $I_{out}$ 归一化。
> (c) 如果 $V_{th}$ 变化了 50mV，$I_{out}$ 将变化多少？
> (d) 如果 $\mu_n$ 对温度的依赖性表述为 $\mu_n \propto T^{-3/2}$，但 $V_{th}$ 与温度无关，如果 T 从 300°K 变化到 370°K，$I_{out}$ 将变化多少？
> (e) 在 $V_{DD}$ 变化 10%，$V_{th}$ 变化 50mV，T 从 300°K 变化到 370°K 这三种情况下，最坏情况下 $I_{out}$ 将变化多少？

![alt text](image.png)

> 解：
>
> $\frac{W}{L}=\frac{50}{0.5}$，$\lambda=0$，$I=0.5mA$，$K_p=\mu C_{ox}=137\times10^{-4}\frac{A}{V^2}$，$L_D=90nm$
>
> (a) $R_2/R_1$ $V_{GS1}=V_{DD}\frac{R_2}{R_1+R_2}=\sqrt{\frac{2I}{K_p\frac{W}{L}}+V_{th}}$，$L'=L-2L_D$
>
> 使 $R_x=R_2/R_1$，$R_x=\frac{\sqrt{\frac{2I}{K_pW/L'}+V_{th}}}{V_{DD}-\left(\sqrt{\frac{2I'}{K_pW/L'}+V_{th}}\right)}=0.4386$
>
> (b) $I_0=\frac{1}{2}\mu C_{ox}\frac{W}{L'}\left(V_{DD}\frac{R_x}{1+R_x}-V_{th}\right)^2$
>
> $\left(\frac{\partial I_0}{\partial V_{DD}}\right)_{I_0}=\frac{\mu C_{ox}\frac{W}{L}\left(V_{DD}\frac{R_x}{1+R_x}-V_{th}\right)\frac{R_x}{1+R_x}}{\frac{1}{2}\mu C_{ox}\frac{W}{L}\left(V_{DD}\frac{R_x}{1+R_x}-V_{th}\right)^2}=\frac{2}{V_{DD}-V_{th}\left(1+\frac{1}{R_x}\right)}=2.84$
>
> (c) $\frac{\partial I_0}{\partial V_{th}}=-\mu C_{ox}\frac{W}{L}\left(V_{DD}\frac{R_x}{1+R_x}-V_{th}\right)$，$\Delta I_0=-\mu C_{ox}\frac{W}{L}\left(V_{DD}\frac{R_x}{1+R_x}-V_{th}\right)\Delta V_{th}=-233\mu A$，
>
> $\Delta I_0=I_0(V_{th}=0.75)-I_0(V_{th}=0.7)=-205\mu A$
>
> (d) $\frac{\partial I_0}{\partial T}=-\frac{3}{2}\left(\frac{T}{T_0}\right)^{-3/2}\cdot\frac{1}{T}\cdot I_0'$，$T=T_0+\Delta T$，$\Delta I_0=-\frac{3}{2}\left(\frac{T}{T_0}\right)^{-3/2}\cdot\frac{1}{T}\cdot I_0\Delta T=-103\mu A$
>
> $\Delta I_0=I_1(T=370K)-I_0(T=300K)=-135\mu A$
>
> (e) $\Delta I_{worstcase}=I_{worstcase}-I_0$，
>
> $I_{worstcase}=\frac{1}{2}\mu_0\left(\frac{T_0+\Delta T}{T_0}\right)^{-3/2}\left(\left(V_{DD}-\Delta V_{DD}\right)\frac{R_x}{1+R_x}-\left(V_{th}+\Delta V_{th}\right)\right)=43\mu A$，$\Delta I_{worstcase}=-457\mu A$

>[!note] 5.2
> 考虑图 5.6 的电路。假设 $I_{REF}$ 是理想的，当 $V_{DD}$ 从 0 变化到 3V 时，画出 $I_{out}\sim V_{DD}$ 的草图。

### Knowledge summary

#### 第七章 噪声

##### 噪声的统计特性

噪声瞬态不可预测，但平均功率固定：

平均功率：$P_{av}$(V$^2$)，均方根：$\sqrt{P_{av}}(V)$

$$
P_{av} = \lim_{T \to \infty} \frac{1}{T} \int_{-T/2}^{+T/2} x^2(t)dt
$$

**(a) 频谱/功率谱密度 (PSD)**

- 表示：$S_x(f)$ 
- 单位：V$^2$/Hz
- 含义：$S_x(f)$ 表示频率 $f$ 附近 1Hz 带宽内 $x(t)$ 具有的平均功率
- 特性：线下面积为功率 $P$

**(b) 白噪声**

- 特点：在所关心的频带内呈平坦分布

**(c) 系统传输**

- 当 $S_x(f)$ 加在传输函数 $H(s=2\pi jf)$ 的线性时不变系统上：
    $$S_Y(f) = S_x(f)|H(f)|^2$$

##### <span style="font-weight:bold; color:rgb(255, 177, 10)">电路中的噪声表示</span>

![alt text](image-1.png)

>[!note] 输入参考噪声模型
> 将电路内部分散的所有噪声源，<span style="font-weight:bold; color:rgba(10, 116, 255, 0.55)">等效地“移动”到电路的最输入端</span>，变成一个独立的噪声电压源和一个独立的噪声电流源。而原来的电路则被视为一个理想的、完全没有噪声的“黑盒子”。

>[!note] 输入参考噪声：电压源$V_{n,in}^2$ + 电流源$I_{n,in}^2$
>
> **输入参考噪声电压源**：与输入信号串联的噪声电压源。它代表了所有那些<span style="font-weight:bold; color:rgba(10, 116, 255, 0.55)">不依赖于信号源内阻</span>的内部噪声源的等效集合。无论你用什么来驱动这个电路（例如，一个理想电压源），这部分噪声都存在。
>
> **输入参考噪声电流源**：与输入信号并联（或跨接）的噪声电流源。它代表了所有那些其影响<span style="font-weight:bold; color:rgba(10, 116, 255, 0.55)">与信号源内阻相关</span>的内部噪声源的等效集合。这个电流源产生的噪声大小，取决于它流过了多大的阻抗（通常是你接入的信号源的内阻）。

这两个噪声源共同作用，在“无噪声电路”的输出端产生的总噪声，与原来那个“真实、有噪声的电路”在输出端产生的总噪声是**完全一样**的。

输入阻抗大→忽略$I_{n,in}^2$

>[!note]
> 在我们的理想和低频模型中，MOSFET 的<span style="font-weight:bold; color:rgba(10, 116, 255, 0.55)">栅极是完全绝缘的</span>，其输入阻抗被认为是无穷大。

##### 单级放大器

![alt text](image-3.png)

分析MOSFET噪声时的一个极其重要的**等效变换技巧**。

$$\overline{V_n^2} = \overline{I_n^2}/g_m^2$$

>[!error] 核心问题：晶体管的噪声源在哪里？
> 
> MOSFET自身最主要的噪声来源——沟道热噪声。这是由于晶体管导通时，沟道内载流子（电子或空穴）进行不规则热运动所产生的。
> 
> 在物理模型上，这个噪声最精确的表示式是<span style="font-weight:bold; color:rgba(10, 116, 255, 0.55)">一个电流源$\overline{i_n^2}$，连接在晶体管的漏极（Drain）和源极（Source）之间</span>。这就是最左边第一个图所展示的情况。
>
> **模型的“痛点”：**
> 
> 这个噪声源$\overline{i_n^2}$位于电路的“中间”，它产生的噪声会同时影响漏极和源极的电压。当电路变得复杂时，直接计算这个电流源对输出电压$\overline{v_{n,out}^2}$的具体贡献会比较繁琐。


>[!note] 等效定理的证明
> 