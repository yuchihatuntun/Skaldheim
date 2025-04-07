# 倒易点阵范例
### 为什么引入倒格矢的概念？
倒格子本身也是一个布拉维点阵，倒格子的倒格子就是原始晶格。

>[!note]+ <span style="color:rgb(44, 80, 165)">证明倒格子的倒易晶格是正格子</span>
从它的定义，我们知道布拉维点阵的矢量必须在矢量加法和减法下闭合。因此，如果我们有下式就足够了
$$e^{i \mathbf{G}_1 \cdot \mathbf{R}} = 1$$
以及
$$e^{i \mathbf{G}_2 \cdot \mathbf{R}} = 1$$
和与差$\mathbf{G}_1 \pm \mathbf{G}_2$ 同样满足。
>$$
\begin{align*}
e^{i(\mathbf{G}_1 + \mathbf{G}_2) \cdot \mathbf{R}} &= e^{i \mathbf{G}_1 \cdot \mathbf{R}} \cdot e^{i \mathbf{G}_2 \cdot \mathbf{R}} = 1 \cdot 1 = 1 \\
e^{i(\mathbf{G}_1 - \mathbf{G}_2) \cdot \mathbf{R}} &= e^{i \mathbf{G}_1 \cdot \mathbf{R}} / e^{i \mathbf{G}_2 \cdot \mathbf{R}} = 1
\end{align*}$$
>因此，我们已经给出了在矢量加法和减法下闭合的倒易点阵。此外，我们知道一个倒格子矢量$\mathbf{G}$可以表示为初始向量的线性组合。
>$$
\mathbf{G} = k_1 \mathbf{b}_1 + k_2 \mathbf{b}_2 + k_3 \mathbf{b}_3
>$$
>从前面的$\mathbf{b}_1$的定义，我们可以得到：
>$$
\mathbf{b}_i \cdot \mathbf{a}_j = 2\pi \delta_{i j}$$
>其中$\delta_{i j}$是克罗内克$\delta$函数. $\mathbf{R}$是正格子中的向量，我们可以将其表示为它的初始向量的线性组合。
>$$
\mathbf{R} = n_1 \mathbf{a}_1 + n_2 \mathbf{a}_2 + n_3 \mathbf{a}_3$$
>从这里我们可以得到：
>$$
\mathbf{G} \cdot \mathbf{R} = 2\pi (k_1 n_1 + k_2 n_2 + k_3 n_3)$$
>从倒格子的定义可知 $\mathbf{G}$ 必须满足下式。
>$$
e^{i \mathbf{G} \cdot \mathbf{R}} = 1$$
>为了满足这一点，我们必须有 $\mathbf{G} \cdot \mathbf{R}$ 等于 $2\pi$ 的整数倍，$n_i \in \mathbb{Z}$、$k_i \in \mathbb{Z}$。因此，倒格子也是布拉菲格子。此外，如果矢量 $\mathbf{G}$ 构成倒易点阵，很显然对于任意的 $\mathbf{K}$ 满足方程：
>$$
e^{i \mathbf{K} \cdot \mathbf{G}} = 1$$
>是倒格子的倒格矢。根据 $\mathbf{G}$ 的定义，当 $\mathbf{K}$ 是正格矢 $\mathbf{R}$，我们有同样的关系式。
>$$
e^{i \mathbf{R} \cdot \mathbf{G}} = 1$$
>因此，我们可以得出结论：倒格子的倒格子是原始的正格子。

晶体具有<span style="font-weight:bold; color:rgb(44, 80, 165)">空间平移对称性</span>，位置坐标 $\vec{r}$ 是冗余的。例如，若 $\vec{r}$ 处存在原子，则平移晶格矢量 $\vec{R}$ 后的位置 $\vec{r} + \vec{R}$ 必然存在相同原子。这种周期性导致实空间信息无限重复。
$$n(\vec{r} + \vec{R}) = n(\vec{r}), \quad \forall \vec{R}\tag{1}$$
这意味着描述 $\vec{r}$ 与 $\vec{r} + \vec{R}$ 是冗余的。

对于这种具有一定周期性的系统，傅里叶变换可以去掉冗余的信息。倒格矢就是晶格空间位置函数傅里叶变换的结果。

三维周期函数的傅里叶级数中，只出现倒格矢的项。

$$
n(\vec{r}) = \sum_{\vec{G}} n_{\vec{G}} e^{i \vec{G} \cdot \vec{r}}\tag{2}
$$
其中，$\vec{G}$ 是满足 $e^{i \vec{G} \cdot \vec{R}} = 1$ 的倒格矢，非 $\vec{G}$ 项的系数 $n_{\vec{G}}$ 为零，冗余位置信息被自动过滤。
##### 傅里叶展开与正交基的选择
将 $n(\vec{r})$ 展开为<span style="font-weight:bold; color:rgb(236, 95, 98)">平面波（正交基）的叠加</span>：  
$$n(\vec{r}) = \sum_{\vec{q}} n_{\vec{q}} e^{i \vec{q} \cdot \vec{r}}\tag{3}$$  
其中 $\vec{q}$ 为任意波矢，$n_{\vec{q}}$ 是傅里叶系数。  
然而，==周期性条件会限制允许的波矢 $\vec{q}$。==
##### 冗余项的消除机制
###### 傅里叶系数的计算
系数 $n_{\vec{q}}$ 由正交性条件确定：  
$$n_{\vec{q}} = \frac{1}{V} \int_{\text{原胞}} n(\vec{r}) e^{-i \vec{q} \cdot \vec{r}} d^3r.\tag{4}$$
由于 $n(\vec{r})$ 的周期性（也就是说式$(3)$乘与不乘$e^{i \vec{q} \cdot \vec{R}}$都一样），系数（积分结果）需满足：  
$$n_{\vec{q}} e^{i \vec{q} \cdot \vec{R}} = n_{\vec{q}} \quad \Rightarrow \quad e^{i \vec{q} \cdot \vec{R}} = 1.\tag{5}$$
###### 倒格矢的定义与约束
仅当 $\vec{q} = \vec{G}$（倒格矢）时，对所有晶格矢量 $\vec{R}$ 有：  
$$\vec{G} \cdot \vec{R} = 2\pi k \quad (k \in \mathbb{Z}).$$
即
$$e^{i \vec{q} \cdot \vec{R}} = 1$$
非倒格矢的波矢 $\vec{q} \neq \vec{G}$ 会导致指数项 $e^{i \vec{q} \cdot \vec{R}} \neq 1$，从而破坏周期性条件。  
###### 非倒格矢项的消失
以**一维晶格**为例（晶格常数为 $a$）：  

- 实空间周期性：$n(x + na) = n(x)$，$n \in \mathbb{Z}$。  
- 倒格矢：$G = \frac{2\pi m}{a}$，$m \in \mathbb{Z}$。  

若选择 $\vec{q} = G + \Delta q$（$\Delta q \neq 0$）（即强行制造一个非倒格矢项），则系数计算为：  
$$
n_q = \frac{1}{a} \int_0^a n(x) e^{-i (G + \Delta q) x} dx.
$$
由于 $n(x)$ 的周期性，积分可改写为：  
$$
n_q = \frac{1}{a} \sum_{n} e^{-i \Delta q \cdot na} \int_0^a n(x) e^{-i G x} dx.
$$
当 $\Delta q \neq 0$ 时，$\sum_n e^{-i \Delta q \cdot na}$ 是无限个相位不同的指数项之和，导致==整体相消==，**结果为 $n_q = 0$**

##### 具体实例演示（一维晶体）
假设一维晶体原胞内电子密度为 $n(x) = \cos\left(\frac{2\pi x}{a}\right)$，其傅里叶展开为：  
$$
n(x) = \frac{1}{2} e^{i \frac{2\pi}{a} x} + \frac{1}{2} e^{-i \frac{2\pi}{a} x}.
$$
对应的倒格矢为 $G = \pm \frac{2\pi}{a}$，非倒格矢项（如 $q = \frac{\pi}{a}$）的系数为：  
$$
n_q = \frac{1}{a} \int_0^a \cos\left(\frac{2\pi x}{a}\right) e^{-i \frac{\pi}{a} x} dx = 0.
$$
**非倒格矢项 $q = \frac{\pi}{a}$ 的系数为零，冗余信息被彻底消除**。

<span style="font-weight:bold; color:rgb(238, 135, 135)">晶格振动及晶体中电子的运动都是在倒空间中的描述。</span> 

# 倒易点阵范例
### 简单立方点阵
![[Pasted image 20250228174047.png]]
- 仍是一个简立方点阵，点阵常数为$2\pi/a$
- 第一布里渊区是个以原点为体心，边长为$2\pi/a$的立方体。
### 体心立方点阵




# 半导体能带理论
原子中的电子运动服从量子力学，处于一系列特定的运动状态——量子态，要完全描述原子中一个电子的状态，需要四个量子数：

$n$——<span style="font-weight:bold; color:rgb(238, 135, 135)">主量子数</span>，表征量子态具有的能量大小，$n=1,2,3..$

$l$——<span style="font-weight:bold; color:rgb(238, 135, 135)">角量子数</span>，表征电子运动的角动量大小，$l=0,1,2...(n-1)$

$m$——<span style="font-weight:bold; color:rgb(238, 135, 135)">磁量子数</span>，决定轨道角动量在空间的方位，$m=0, \pm 1, \pm 2...\pm l$

$m_s$——<span style="font-weight:bold; color:rgb(238, 135, 135)">自旋量子数</span>，决定自旋角动量在空间的方位，$m_s = \pm 1/2$

|       | 主量子数 | 角量子数  | 磁量子数            | 简并度 | 不计自旋的状态数 | 计入自旋的状态数 |
| ----- | ---- | ----- | --------------- | --- | -------- | -------- |
| $s$能级 | $n$  | $l=0$ | $m=0$           | 1   | 1        | 2        |
| $p$能级 | $n$  | $l=1$ | $m=0,1,-1$      | 3   | 3        | 6        |
| $d$能级 | $n$  | $l=2$ | $m=0,1,-1,2,-2$ | 5   | 5        | 10       |
距离很远时，相互作用忽略不计，原子中电子状态与孤立原子相同

在孤立原子中，电子处于特定的原子轨道（如$s、p、d$轨道），每个轨道对应确定的能级。例如，氢原子的电子能级由主量子数$n$决定，能量为：  
$$ E_n = -\frac{13.6 \, \text{eV}}{n^2}. $$  
此时，同一能级的轨道（如 $2p_x, 2p_y, 2p_z$）**简并**（能量相同）。

原子逐渐靠近时，外层轨道发生<span style="font-weight:bold; color:rgb(236, 95, 98)">电子的共有化运动</span> 

当两个相同原子逐渐靠近时，它们的原子轨道开始重叠，电子波函数相互作用。以最简单的双原子分子（如 $\text{H}_2$ ）为例：

<span style="font-weight:bold; color:rgb(44, 80, 165)">成键与反键轨道</span>

- **成键轨道（Bonding Orbital）**：两个原子轨道相位相同，叠加增强，电子云集中在两核之间，能量**降低**。  
- **反键轨道（Anti-bonding Orbital）**：相位相反，叠加减弱，电子云远离核间区域，能量**升高**。  

**能级分裂示意**：  

孤立原子能级 E₀  ,成键轨道 E₀ - ΔE  ,反键轨道 E₀ + ΔE  

（$\Delta E$ 为相互作用导致的能量变化）

<span style="font-weight:bold; color:rgb(44, 80, 165)">量子力学解释 </span>

通过<span style="font-weight:bold; color:rgb(238, 135, 135)">线性组合原子轨道（LCAO）模型</span>，分子轨道波函数为：  
$$ \psi_{\text{bonding}} = \frac{1}{\sqrt{2}} (\phi_A + \phi_B), \quad \psi_{\text{anti-bonding}} = \frac{1}{\sqrt{2}} (\phi_A - \phi_B), $$
对应的能量差由重叠积分 $S$ 和库仑积分 $H_{AB}$ 决定。

### **3. 多原子系统（晶体）中的能带形成**
当大量原子周期性排列形成晶体时，每个原子的能级与邻近原子相互作用，导致能级分裂为密集分布的能带。

<span style="font-weight:bold; color:rgb(44, 80, 165)">紧束缚近似（Tight-Binding Model）</span>

假设电子主要局域在原子附近，波函数为原子轨道的线性组合：  
$$ \psi(\vec{r}) = \sum_{\vec{R}} e^{i \vec{k} \cdot \vec{R}} \phi(\vec{r} - \vec{R}), $$  其中 \( \vec{R} \) 为晶格矢量，\( \vec{k} \) 为波矢。能带能量为：  
$$ E(\vec{k}) = E_0 - 2t \sum_{\text{近邻}} \cos(\vec{k} \cdot \vec{a}), $$  
- \( E_0 \)：孤立原子能级  
- \( t \)：相邻原子轨道间的跃迁积分，决定能带宽度。

#### **(2) 能级分裂为能带的物理机制**  
- **泡利不相容原理**：每个量子态最多容纳两个电子（自旋相反），迫使能级分裂以容纳更多电子。  
- **周期性势场**：晶体中周期性排列的原子势场使电子波函数形成布洛赫波，动量 \( \vec{k} \) 在倒空间（布里渊区）中连续取值，导致能级扩展为连续（或准连续）的能带。

---

### **4. 实验现象与应用**
#### **(1) 光谱学中的谱线分裂**  
- **晶体场分裂**：过渡金属离子在晶体场中，d轨道能级分裂（如八面体场中分裂为 \( t_{2g} \) 和 \( e_g \)），导致吸收光谱出现特定颜色的谱线（如蓝宝石的蓝色来自 \( \text{Ti}^{3+} \) 的d-d跃迁）。  
- **斯塔克效应**：外加电场导致原子能级分裂。

#### **(2) 半导体与导体**  
- 能带分裂后，填满电子的**价带**与空的**导带**之间的带隙决定材料导电性：  
  - 导体：价带与导带重叠（如金属）。  
  - 半导体/绝缘体：带隙存在（如硅带隙约1.1 eV）。



