### Homework Review

#### 第二章 MOS器件基础

>[!note] 第一题
> 在饱和区时，推导 MOSFET 器件跨导 $g_m$ 的三种表达式，分析并画出以下三种情况的相应曲线。
> 
>    (1) $W/L$ 不变时，$g_m$ 与 $(V_{GS}-V_{TH})$ 的变化曲线；
> 
>    (2) $(V_{GS}-V_{TH})$ 不变时，$g_m$ 与 $I_D$ 的变化曲线；
> 
>    (3) $I_D$ 不变时，$g_m$ 与 $W/L$ 的变化曲线；

>
>![](image-6.png)
>
>**表达式一**：$g_m$ 与过驱动电压 $(V_{GS} - V_{TH})$ 的关系
>
>我们将饱和区电流公式直接对 $V_{GS}$ 求偏导：
>
>$$
>g_m = \frac{\partial}{\partial V_{GS}} \left[ \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})^2 \right]
>$$
>
>$$
>g_m = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} \cdot 2 \cdot (V_{GS} - V_{TH})
>$$
>
>于是得到第一个表达式：
>
>$$
>g_m = \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})
>$$
>
>这个公式表明，$g_m$ 与过驱动电压 $V_{OV} = (V_{GS} - V_{TH})$ 成正比。
>
>**表达式二**：$g_m$ 与漏极电流 $I_D$ 的关系
>
>从饱和区电流公式中，我们可以解出 $(V_{GS} - V_{TH})$：
>
>$$
>(V_{GS} - V_{TH})^2 = \frac{2I_D}{\mu_n C_{ox} \frac{W}{L}} \Rightarrow (V_{GS} - V_{TH}) = \sqrt{\frac{2I_D}{\mu_n C_{ox} \frac{W}{L}}}
>$$
>
>将这个结果代入到表达式一 $g_m = \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})$ 中：
>
>$$
>g_m = \mu_n C_{ox} \frac{W}{L} \cdot \sqrt{\frac{2I_D}{\mu_n C_{ox} \frac{W}{L}}}
>$$
>
>$$
>g_m = \sqrt{(\mu_n C_{ox} \frac{W}{L})^2 \cdot \frac{2I_D}{\mu_n C_{ox} \frac{W}{L}}}
>$$
>
>于是得到第二个表达式：
>
>$$
>g_m = \sqrt{2 \mu_n C_{ox} \frac{W}{L} I_D}
>$$
>
>这个公式表明，$g_m$ 与漏极电流 $I_D$ 的平方根成正比。
>
>**表达式三**：$g_m$ 与 $I_D$ 和 $(V_{GS} - V_{TH})$ 的关系
>
>这个表达式可以看作是前两个表达式的结合，非常简洁且有启发性。我们将表达式二 $g_m = \sqrt{2 \mu_n C_{ox} \frac{W}{L} I_D}$ 两边平方：
>
>$$
>g_m^2 = 2 \mu_n C_{ox} \frac{W}{L} I_D
>$$
>
>同时，我们将饱和区电流公式 $I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})^2$ 两边乘以 $2 \mu_n C_{ox} \frac{W}{L}$：
>
>$$
>2 \mu_n C_{ox} \frac{W}{L} I_D = \left( \mu_n C_{ox} \frac{W}{L} \right)^2 (V_{GS} - V_{TH})^2
>$$
>
>结合上面两个式子，可以得到：
>
>$$
>g_m^2 = \left[ \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH}) \right]^2
>$$
>
>这其实又回到了表达式一。为了得到第三种形式，我们采取更直接的方式。从表达式一 $g_m = \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})$ 中，我们得到 $\mu_n C_{ox} \frac{W}{L} = \frac{g_m}{V_{GS} - V_{TH}}$。将其代入饱和区电流公式：
>
>$$
>I_D = \frac{1}{2} \left( \frac{g_m}{V_{GS} - V_{TH}} \right) (V_{GS} - V_{TH})^2 = \frac{1}{2} g_m (V_{GS} - V_{TH})
>$$
>
>整理后得到第三个表达式：
>
>$$
>g_m = \frac{2 I_D}{V_{GS} - V_{TH}}
>$$

>[!note] 第二题
> 阐述 MOSFET 器件的沟道长度调制效应和体效应，并推导 MOSFET 器件在饱和区时的输出电阻 $r_o$。



#### 第三章 单级放大器



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

### Razavi 习题

>[!note] 3.29
> 在如图所示的共源共栅结构中，偏置电流为 0.5mA，输出电压摆幅为 1.9V。如果 $(W/L)_{1-4} = W/L$ 且 $\gamma = 0$，计算 $V_{b1}$，$V_{b2}$ 与 $W/L$。如果 $L = 0.5\mu m$，求此时的电压增益。

先根据电压摆幅确定偏置电压的一些关系：

$$V_{b1} - V_{TH1} < V_{out} < V_{b2} + V_{TH3} \quad V_{b2} + V_{TH3} - (V_{b1} - V_{TH1}) = 1.9$$

$$V_{b2} + 0.8 - V_{b1} + 0.7 = 1.9 \quad V_{b2} - V_{b1} = 0.4$$

利用串联电流相等，由于默认知道$\mu_p, \mu_n, C_{ox}$的数值，所以可以求解$\frac{W}{L}$：

$$0.5 \times 10^{-3} = \frac{1}{2} \mu_n C_{ox} S (V_{in} - V_{TH1})^2 = \frac{1}{2} \mu_n C_{ox} S (V_{b1} - V_x - V_{TH2})^2 = \frac{1}{2} \mu_p C_{ox} S (V_y - V_{b2} - |V_{TH3}|)^2 = \frac{1}{2} \mu_p C_{ox} S (V_{DD} - V_{b3} - |V_{TH4}|)^2$$

$$1.1 = 2 \sqrt{2 I_D} \left( \frac{1}{\sqrt{\mu_p C_{ox}}} + \frac{1}{\sqrt{\mu_n C_{ox}}} \right) \frac{1}{\sqrt{S}} \Rightarrow S = \frac{8 I_D \left( \frac{1}{\sqrt{\mu_p C_{ox}}} + \frac{1}{\sqrt{\mu_n C_{ox}}} \right)^2}{1.1^2}$$

$$S = \frac{8 \times 0.5 \times 10^{-3} \left( \frac{1}{\sqrt{1.34225 \times 10^{-4}}} + \frac{1}{\sqrt{3.835 \times 10^{-5}}} \right)^2}{1.1^2} = 202.98 \Leftrightarrow S = 203$$

电压摆幅的第二种表示方式：

$V_{DD} - V_{SDmin,4} - V_{SDmin,3} - V_{DSmin,2} - V_{DSmin,1} = 1.9$



### Knowledge summary

### 第三章 单级放大器

#### 共源极放大器

##### 电阻负载

![alt text](image-7.png)



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
> 将电路内部分散的所有噪声源，**等效地“移动”到电路的最输入端**，变成一个独立的噪声电压源和一个独立的噪声电流源。而原来的电路则被视为一个理想的、完全没有噪声的“黑盒子”。

>[!note] 输入参考噪声
>
> **输入参考噪声电压源$V_{n,in}^2$**：与输入信号串联的噪声电压源。它代表了所有那些**不依赖于信号源内阻**的内部噪声源的等效集合。无论你用什么来驱动这个电路（例如，一个理想电压源），这部分噪声都存在。
>
> **输入参考噪声电流源$I_{n,in}^2$**：与输入信号并联（或跨接）的噪声电流源。它代表了所有那些其影响**与信号源内阻相关**的内部噪声源的等效集合。这个电流源产生的噪声大小，取决于它流过了多大的阻抗（通常是你接入的信号源的内阻）。

这两个噪声源共同作用，在“无噪声电路”的输出端产生的总噪声，与原来那个“真实、有噪声的电路”在输出端产生的总噪声是**完全一样**的。

输入阻抗大→忽略$I_{n,in}^2$

>[!note]
> 在我们的理想和低频模型中，MOSFET 的**栅极是完全绝缘的**，其输入阻抗被认为是无穷大。

##### 单级放大器

![alt text](image-3.png)

分析MOSFET噪声时的一个极其重要的**等效变换技巧**。

$$\overline{V_n^2} = \overline{I_n^2}/g_m^2$$

>[!danger] 核心问题：晶体管的噪声源在哪里？
> 
> MOSFET自身最主要的噪声来源——沟道热噪声。这是由于晶体管导通时，沟道内载流子（电子或空穴）进行不规则热运动所产生的。
> 
> 在物理模型上，这个噪声最精确的表示式是**一个电流源$\overline{i_n^2}$，连接在晶体管的漏极（Drain）和源极（Source）之间**。这就是最左边第一个图所展示的情况。
>
> **模型的“痛点”：**
> 
> 这个噪声源$\overline{i_n^2}$位于电路的“中间”，它产生的噪声会同时影响漏极和源极的电压。当电路变得复杂时，直接计算这个电流源对输出电压$\overline{v_{n,out}^2}$的具体贡献会比较繁琐。
> 
> **解决方案：输入参考噪声等效**
> 
> 为了简化分析，我们希望**把这个“深埋”在电路内部的噪声源，等效地移动到电路最容易分析的地方——输入端（栅极）**。
> 
> 这就是第二个图所展示的模型。我们把内部的电流源$\overline{i_n^2}$去掉，换成一个等效的电压源$\overline{v_n^2}$，串联在栅极输入端。

>[!note] 等效定理的证明
>
>
>1. 看晶体管的输出电流：我们来比较两种模型下，晶体管产生的输出噪声电流。也就是最右边两个图所展示的。
>
>   - 在原始模型（第三个图）中，噪声源本身就是一个电流源，它就是晶体管产生的全部输出噪声电流。所以：
>
>     $$
>     \overline{i_{n,out1}^2} = \overline{i_n^2}
>     $$
>
>   - 在等效模型（第四个图）中，输入端的噪声电压$\overline{v_n^2}$会被晶体管放大。根据MOSFET最基本的跨导定义($i_{out} = g_m \cdot v_{in}$)，这个输入电压会在输出端产生一个漏极电流。所以，输出的噪声电流是：
>
>     $$
>     \overline{i_{n,out2}^2} = g_m^2 \cdot \overline{v_n^2}
>     $$
>
>2. 建立等式：为了让两个模型完全等效，它们产生的输出噪声电流必须相等：
>
>   $$
>   \overline{i_{n,out1}^2} = \overline{i_{n,out2}^2}
>   $$
>
>   因此：
>
>   $$
>   \overline{i_n^2} = g_m^2 \cdot \overline{v_n^2}
>   $$
>
>3. 得到定理：将上式进行简单的移项，就得到了PPT中的辅助定理：
>
>   $$
>   \overline{V_n^2} = \frac{\overline{I_n^2}}{g_m^2}
>   $$

我们知道，晶体管的沟道热噪声电流为$\overline{i_n^2} = 4kT\gamma g_m$。利用这个辅助定理，我们可以立刻得到它的输入参考噪声电压：

$$
\overline{v_n^2} = \frac{\overline{i_n^2}}{g_m^2} = \frac{4kT\gamma g_m}{g_m^2} = \frac{4kT\gamma}{g_m}
$$

##### 共源极放大器

![alt text](image-4.png)

(a) **电阻负载共源极放大器**的输入等效噪声

$$\overline{V_{n,in}^2} = 4kT \left( \frac{1}{g_m^2 R_D} + \frac{\gamma}{g_m} \right) + \frac{K}{C_{ox}(WL)_1} \frac{1}{f}$$

>[!note] 推导过程
>
>**第一步：识别所有噪声源**
>这个电路有两个元件产生噪声：NMOS晶体管 M1 和负载电阻 $R_D$。
>
>1. 晶体管 M1 的噪声：
>   - 沟道热噪声：模型为漏源之间的电流源 $\overline{i_{n,M1}^2} = 4kT\gamma g_{m1}$。
>   - 闪烁噪声：模型为等效到栅极的电压源 $\overline{v_{n,f1}^2} = \frac{K_N}{C_{ox}(WL)_1 f}$。
>
>2. 电阻 $R_D$ 的噪声：
>   - 热噪声：模型为与 $R_D$ 串联的电压源 $\overline{v_{n,RD}^2} = 4kTR_D$。
>
>**第二步：计算各噪声源在输出端的贡献**
>
>1. $R_D$ 的贡献：它的噪声电压源就在输出端，所以它对输出噪声的贡献就是其自身：
>
>   $$
>   S_{v,out,RD}(f) = \overline{v_{n,RD}^2} = 4kTR_D
>   $$
>
>2. M1 沟道热噪声的贡献：M1 的噪声电流 $\overline{i_{n,M1}^2}$ 流过输出电阻 $R_D$ （在忽略 $R_D$ 时），产生输出噪声电压：
>
>   $$
>   S_{v,out,M1,th}(f) = \overline{i_{n,M1}^2} \cdot R_D^2 = (4kT\gamma g_{m1}) R_D^2
>   $$
>
>3. M1 闪烁噪声的贡献：M1 的输入参考闪烁噪声电压 $\overline{v_{n,f1}^2}$ 会被电路放大。我们需要先计算电路增益。
>
>   - 电压增益 $A_v = -g_{m1}R_D$。
>   - 因此，闪烁噪声在输出端的贡献为：
>
>     $$
>     S_{v,out,M1,f}(f) = \overline{v_{n,f1}^2} \cdot A_v^2 = \left( \frac{K_N}{C_{ox}(WL)_1 f} \right) \cdot (-g_{m1}R_D)^2
>     $$
>
>
>**第三步：计算总输出噪声**
>将以上三项不相关的噪声功率相加：
>
>$$
>S_{v,out,total}(f) = S_{v,out,RD}(f) + S_{v,out,M1,th}(f) + S_{v,out,M1,f}(f)
>$$
>
>$$
>S_{v,out,total}(f) = 4kTR_D + (4kT\gamma g_{m1})R_D^2 + \left( \frac{K_N}{C_{ox}(WL)_1 f} \right) g_{m1}^2 R_D^2
>$$
>
>**第四步：折算到输入端**
>我们将总输出噪声除以增益的平方 $A_v^2 = g_{m1}^2 R_D^2$：
>
>$$
>\overline{V_{n,in}^2} = S_{v,in}(f) = \frac{S_{v,out,total}(f)}{A_v^2}
>$$
>
>$$
>\overline{V_{n,in}^2} = \frac{4kTR_D + (4kT\gamma g_{m1})R_D^2 + \left( \frac{K_N}{C_{ox}(WL)_1 f} \right) g_{m1}^2 R_D^2}{g_{m1}^2 R_D^2}
>$$
>
>现在，我们将这个分数拆成三项分别化简：
>
>$$
>\overline{V_{n,in}^2} = \frac{4kTR_D}{g_{m1}^2 R_D^2} + \frac{4kT\gamma g_{m1}R_D^2}{g_{m1}^2 R_D^2} + \frac{\left( \frac{K_N}{C_{ox}(WL)_1 f} \right) g_{m1}^2 R_D^2}{g_{m1}^2 R_D^2}
>$$
>
>化简后得到：
>
>$$
>\overline{V_{n,in}^2} = \frac{4kT}{g_{m1}^2 R_D} + \frac{4kT\gamma}{g_{m1}} + \frac{K_N}{C_{ox}(WL)_1 f}
>$$

(b) **PMOS有源负载共源极放大器**的输入有效噪声

$$\overline{V_{n,in}^2} = 4kT \left( \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{\gamma}{g_{m1}} \right) + \frac{1}{C_{ox}} \left[ \frac{K_N}{(WL)_1} + \frac{K_P g_{m2}^2}{(WL)_2 g_{m1}^2} \right] \frac{1}{f}$$

>[!note] 推导过程
>
>**第一步：识别所有噪声源**
>这个电路有两个晶体管产生噪声：NMOS 输入管 M1 和 PMOS 负载管 M2。
>
>1. 晶体管 M1 (NMOS) 的噪声：
>   - 热噪声：$\overline{i_{n,M1}^2} = 4kT\gamma g_{m1}$
>   - 闪烁噪声：$\overline{v_{n,f1}^2} = \frac{K_N}{C_{ox}(WL)_1 f}$
>
>2. 晶体管 M2 (PMOS) 的噪声：
>   - 热噪声：$\overline{i_{n,M2}^2} = 4kT\gamma g_{m2}$
>   - 闪烁噪声：$\overline{v_{n,f2}^2} = \frac{K_P}{C_{ox}(WL)_2 f}$
>
>**第二步：分别计算各噪声源的输入参考噪声**
>这次我们换一种更直接的思路：分别计算每个管子的噪声折算到输入端的结果，然后相加。
>
>1. M1 的输入参考噪声：这个最简单，M1 本身就是输入管，它的噪声可以直接用上一节的定理折算到自己的输入端。
>
>   - 热噪声贡献：$\overline{v_{n,in,M1,th}^2} = \frac{\overline{i_{n,M1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}$
>   - 闪烁噪声贡献：$\overline{v_{n,in,M1,f}^2} = \overline{v_{n,f1}^2} = \frac{K_N}{C_{ox}(WL)_1 f}$
>
>2. M2 的输入参考噪声：M2 是负载，它的噪声首先会体现在输出节点，然后我们再把它折算到整个电路的输入端 $V_{in}$。
>
>   - M2 的热噪声电流 $\overline{i_{n,M2}^2}$ 和闪烁噪声电流 $\overline{i_{n,f2,current}^2}$ 都直接注入输出节点。
>   - M2 的等效闪烁噪声电流为：$\overline{i_{n,f2,current}^2} = \overline{v_{n,f2}^2} \cdot g_{m2}^2 = \left( \frac{K_P}{C_{ox}(WL)_2 f} \right) g_{m2}^2$
>   - 所以，M2 贡献的总输出噪声电流为：
>
>     $$
>     S_{i,out,M2}(f) = \overline{i_{n,M2}^2} + \overline{i_{n,f2,current}^2} = 4kT\gamma g_{m2} + \left( \frac{K_P}{C_{ox}(WL)_2 f} \right) g_{m2}^2
>     $$
>
>**第三步：计算总输入参考噪声**
>将 M1 和 M2 的输入参考噪声贡献相加：
>
>$$
>\overline{V_{n,in}^2} = (\overline{v_{n,in,M1,th}^2} + \overline{v_{n,in,M1,f}^2}) + \overline{v_{n,in,M2}^2}
>$$
>
>$$
>\overline{V_{n,in}^2} = \left( \frac{4kT\gamma}{g_{m1}} + \frac{K_N}{C_{ox}(WL)_1 f} \right) + \left( \frac{4kT\gamma g_{m2}}{g_{m1}^2} + \frac{K_P g_{m2}^2}{C_{ox}(WL)_2 g_{m1}^2 f} \right)
>$$
>
>最后，将热噪声项和闪烁噪声项分别合并，整理成PPT中的形式，推导完成：
>
>$$
>\overline{V_{n,in}^2} = 4kT \left( \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{\gamma}{g_{m1}} \right) + \left[ \frac{K_N}{C_{ox}(WL)_1} + \frac{K_P}{C_{ox}(WL)_2} \frac{g_{m2}^2}{g_{m1}^2} \right] \frac{1}{f}
>$$

##### 共栅极（输入阻抗小，噪声电流不可忽略）

![alt text](image-5.png)

(a) **电阻负载共栅极放大器**的输入参考噪声

$$\overline{V_{n,in}^2} = 4kT \frac{\gamma g_m + 1/R_D}{(g_m + g_{mb} + \frac{1}{r_o})^2} + \frac{K g_m^2}{C_{ox}(WL)_1 (g_m + g_{mb} + \frac{1}{r_o})^2} \frac{1}{f}$$

$$\overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

>[!note] 推导过程
>
>**第一步：计算放大器的总跨导 $G_m$**
>总跨导 $G_m$ 定义为输出短路电流与输入电压之比 ($G_m = i_{out,sc}/v_{in}$)。对于包含体效应和沟道长度调制的共栅放大器，其输入电导（即总跨导）为：
>
>$$
>G_m = g_{m1} + g_{mb1} + \frac{1}{r_{o1}}
>$$
>
>这个值代表了电路将输入电压转换成输出电流的能力。
>
>**第二步：计算总输出短路噪声电流**
>
>1. M1 的热噪声：M1 的沟道热噪声电流 $\overline{i_{n,M1}^2} = 4kT\gamma g_{m1}$ 直接作为输出电流的一部分。其贡献为：
>
>   $$
>   S_{i,out,M1,th}(f) = 4kT\gamma g_{m1}
>   $$
>
>2. $R_D$ 的热噪声：$R_D$ 的热噪声电压 $\overline{v_{n,RD}^2} = 4kTR_D$ 会产生一个大小为 $v_{n,RD}/R_D$ 的噪声电流。其对输出短路电流的贡献为：
>
>   $$
>   S_{i,out,RD}(f) = \frac{\overline{v_{n,RD}^2}}{R_D^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D}
>   $$
>
>3. M1 的闪烁噪声：M1 的闪烁噪声等效为在栅极的电压源 $\overline{v_{n,f1}^2} = \frac{K_N}{C_{ox}(WL)_1 f}$。这个电压会通过 M1 的跨导 $g_{m1}$ 转换成一个输出电流。其贡献为：
>
>   $$
>   S_{i,out,M1,f}(f) = \overline{v_{n,f1}^2} \cdot g_{m1}^2 = \left( \frac{K_N}{C_{ox}(WL)_1 f} \right) g_{m1}^2
>   $$
>
>将三者相加，得到总输出短路噪声电流功率谱：
>
>$$
>S_{i,out,total}(f) = 4kT\gamma g_{m1} + \frac{4kT}{R_D} + \frac{K_N g_{m1}^2}{C_{ox}(WL)_1 f}
>$$
>
>**第三步：计算输入参考噪声电压 $\overline{V_{n,in}^2}$**
>用总输出噪声电流除以总跨导的平方：
>
>$$
>\overline{V_{n,in}^2} = \frac{S_{i,out,total}(f)}{G_m^2} = \frac{4kT\gamma g_{m1} + \frac{4kT}{R_D} + \frac{K_N g_{m1}^2}{C_{ox}(WL)_1 f}}{(g_{m1} + g_{mb1} + 1/r_{o1})^2}
>$$
>
>整理成PPT中的形式，推导完成：
>
>$$
>\overline{V_{n,in}^2} = 4kT \frac{\gamma g_{m1} + 1/R_D}{(g_{m1} + g_{mb1} + 1/r_{o1})^2} + \frac{K_N g_{m1}^2}{C_{ox}(WL)_1 (g_{m1} + g_{mb1} + 1/r_{o1})^2} \frac{1}{f}
>$$

(b) **Cascode 负载共栅极放大器**的输入参考噪声

$$\overline{V_{n,in}^2} = 4kT \frac{\gamma g_{m1} + \gamma g_{m2}}{(g_{m1} + g_{mb1} + \frac{1}{r_{o1}})^2} + \frac{1}{C_{ox}(g_{m1} + g_{mb1} + \frac{1}{r_{o1}})^2} \left[ \frac{K_N g_{m1}^2}{(WL)_1} + \frac{K_P g_{m2}^2}{(WL)_2} \right] \frac{1}{f}$$

$$\overline{I_{n,in}^2} = 4kT\gamma g_{m2} + \frac{K_P g_{m2}^2}{C_{ox}(WL)_2} \frac{1}{f}$$

>[!note] 推导过程
>
>**第一步：识别噪声源**
>噪声源为 M1 (NMOS) 和 M2 (PMOS)。
>
>**第二步：计算总输出短路噪声电流**
>与(a)类似，我们把所有噪声源贡献的输出短路电流相加。
>
>1. M1 的噪声 (NMOS)：
>   - 热噪声：$S_{i,out,M1,th}(f) = 4kT\gamma g_{m1}$
>   - 闪烁噪声：$S_{i,out,M1,f}(f) = \overline{v_{n,f1}^2} \cdot g_{m1}^2 = \left( \frac{K_N}{C_{ox}(WL)_1 f} \right) g_{m1}^2$
>
>2. M2 的噪声 (PMOS)：M2 作为负载，其噪声电流也直接注入输出节点。
>   - 热噪声：$S_{i,out,M2,th}(f) = 4kT\gamma g_{m2}$
>   - 闪烁噪声：$S_{i,out,M2,f}(f) = \overline{v_{n,f2}^2} \cdot g_{m2}^2 = \left( \frac{K_P}{C_{ox}(WL)_2 f} \right) g_{m2}^2$
>
>总输出短路噪声电流为：
>
>$$
>S_{i,out,total}(f) = (4kT\gamma g_{m1} + 4kT\gamma g_{m2}) + \left( \frac{K_N g_{m1}^2}{C_{ox}(WL)_1} + \frac{K_P g_{m2}^2}{C_{ox}(WL)_2} \right) \frac{1}{f}
>$$
>
>**第三步：计算输入参考噪声电压 $\overline{V_{n,in}^2}$**
>同样，除以总跨导 $G_m^2 = (g_{m1} + g_{mb1} + 1/r_{o1})^2$：
>
>$$
>\overline{V_{n,in}^2} = \frac{S_{i,out,total}(f)}{G_m^2} = \frac{4kT\gamma (g_{m1} + g_{m2})}{(g_{m1} + g_{mb1} + 1/r_{o1})^2} + \frac{K_N g_{m1}^2}{C_{ox}(WL)_1} + \frac{K_P g_{m2}^2}{C_{ox}(WL)_2} \frac{1}{(g_{m1} + g_{mb1} + 1/r_{o1})^2 f}
>$$
>
>**第四步：计算输入参考噪声电流 $\overline{I_{n,in}^2}$**
>PPT中给出的公式为 $\overline{I_{n,in}^2} = 4kT\gamma g_{m2} + \frac{K_P g_{m2}^2}{C_{ox}(WL)_2 f}$。

##### 源跟随器

(a) **电阻负载源极跟随器**的输入参考噪声

$$\overline{V_{n,in}^2} = 4kT \left( \frac{1}{g_m^2 R_S} + \frac{\gamma}{g_m} \right) + \frac{K}{C_{ox}(WL)_1} \frac{1}{f}$$

>[!note] 推导过程
>
>**第一步：识别噪声源及计算增益/输出阻抗**
>
>- **噪声源**：
>  1. M1 的热噪声：电流源 $\overline{i_{n,M1}^2} = 4kT\gamma g_{m1}$
>  2. M1 的闪烁噪声：输入等效电压源 $\overline{v_{n,f1}^2} = \frac{K}{C_{ox}(WL)_1 f}$
>  3. $R_S$ 的热噪声：电压源 $\overline{v_{n,RS}^2} = 4kTR_S$
>
>- **输出阻抗** $R_{out}$：$R_S$ 和 $1/g_{m1}$ 的并联
>
>  $$R_{out} = R_S \| \frac{1}{g_{m1}} = \frac{R_S}{1 + g_{m1}R_S}$$
>
>- **电压增益** $A_v$：
>
>  $$A_v = \frac{g_{m1}R_S}{1 + g_{m1}R_S}$$
>
>**第二步：计算各噪声源在输出端的贡献**
>
>1. **M1 热噪声**：
>   $$S_{v,out,M1,th}(f) = \overline{i_{n,M1}^2} \cdot R_{out}^2 = (4kT\gamma g_{m1}) \left( \frac{R_S}{1 + g_{m1}R_S} \right)^2$$
>
>2. **$R_S$ 热噪声**：
>   $$S_{v,out,RS}(f) = \overline{v_{n,RS}^2} \cdot \left( \frac{1/g_{m1}}{R_S + 1/g_{m1}} \right)^2 = (4kTR_S) \left( \frac{1}{1 + g_{m1}R_S} \right)^2$$
>
>3. **M1 闪烁噪声**：
>   $$S_{v,out,M1,f}(f) = \overline{v_{n,f1}^2} \cdot A_v^2 = \left( \frac{K}{C_{ox}(WL)_1 f} \right) \left( \frac{g_{m1}R_S}{1 + g_{m1}R_S} \right)^2$$
>
>**第三步：计算总输入参考噪声**
>
>$$\overline{V_{n,in}^2} = \frac{S_{v,out,M1,th} + S_{v,out,RS} + S_{v,out,M1,f}}{A_v^2}$$
>
>- M1 热噪声部分：$\frac{S_{v,out,M1,th}}{A_v^2} = \frac{4kT\gamma}{g_{m1}}$
>
>- $R_S$ 热噪声部分：$\frac{S_{v,out,RS}}{A_v^2} = \frac{4kT}{g_{m1}^2 R_S}$
>
>- M1 闪烁噪声部分：$\frac{S_{v,out,M1,f}}{A_v^2} = \frac{K}{C_{ox}(WL)_1 f}$
>
>最终结果：
>
>$$\overline{V_{n,in}^2} = 4kT \left( \frac{1}{g_{m1}^2 R_S} + \frac{\gamma}{g_{m1}} \right) + \frac{K}{C_{ox}(WL)_1 f}$$

(b) $\overline{V_{n,in}^2} = 4kT \left( \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{\gamma}{g_{m1}} \right) + \frac{K_N}{C_{ox}} \left[ \frac{1}{(WL)_1} + \frac{g_{m2}^2}{(WL)_2 g_{m1}^2} \right] \frac{1}{f}$

#### 第九章 运算放大器

##### 概述

**1. 增益 (Gain) → 决定闭环精度**

运放自身的开环增益 ($A_0$) 越大，我们搭建的闭环放大电路就越接近理想情况，精度也越高。

**闭环系统分析**

- 经典负反馈系统的闭环增益表达式：

  $$
  G_{cl} = \frac{V_{out}}{V_{in}} = \frac{A_0}{1 + \beta A_0}
  $$

  其中，$A_0$ 是运放的开环增益（$Op-Amp$本身不加任何反馈时的放大倍数），$\beta$ 是反馈系数，由外围的反馈网络（通常是电阻或电容网络）决定。

- 在一个理想的运放电路中，我们期望 $A_0$ 是无穷大，这样上面的公式就简化为：

  $$
  G_{cl} \approx \frac{A_0}{\beta A_0} = \frac{1}{\beta}
  $$

  这意味着<span style="font-weight:bold; color:rgb(255, 177, 10)">闭环增益完全由外部的无源器件（电阻、电容）决定，非常稳定和精确</span>。

