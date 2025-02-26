---
UID: 
tags:
  - "#半导体物理"
  - 课程笔记
  - 刘恩科
创建时间: 2025-02-09T14:20:00
修改时间: 2025-02-24T19:07:00
课程名称: 半导体物理
章节: 第一章 半导体中的电子状态
重要程度: ⭐⭐⭐⭐考点
掌握程度: 🟡学习中
考试相关: true
实验相关: false
参考教材: 半导体物理学第七版 (刘恩科)
前置知识: 固体物理、量子力学、统计物理
---
### 课程概览
固体物理主要研究晶体和晶体中的电子。在本世纪初期，随着 X 射线衍射的发现以及对晶体性质一系列简明 而成功的计算和预测的公布，固体物理的研究作为原子物理的一个扩充领域，开始发展起来。
![[笔记/pic/Physics_Semiconductor_Flowchart_QuantumMechanics_To_IntegratedCircuits_20231015.png]]
**课程特点**：内容广，概念多，承上启下。

**基本掌握内容**：物理概念，物理图像，物理模型。 基本公式的推导与应用。
##### 成绩评定方式

| 项目   | 比重  | 考核时间       |
| ---- | --- | ---------- |
| 考勤   | 10% | 每节课        |
| 平时作业 | 10% | 不定时        |
| 期中考试 | 20% | 第九周（4月21日） |
| 期末考试 | 60% | 期末周        |
### 物质认知
##### 晶体与非晶体
**晶体和非晶体的区别**：组成它们的微粒是否是按照规则排列的

![[笔记/pic/MaterialStructure_Composite_AtomicArrangement_20231015.png]]
- **非晶体**：组成非晶体的微粒的排列是不规则的，指结构无序或者近程有序而长程无序的物质。

- **晶体**：组成它们的原子（也可能是分子或者是离子），是按照一定规则排列的，具有空间上的周期性，
	- <span style="font-weight:bold; color:rgb(231, 98, 84)">单晶体</span>：整块材料中原子都是规则的周期性排列的，一种结构贯穿了整体。
	- **多晶体**：由大量微小单晶体（晶粒）随机堆砌而成的整块材料。
##### 半导体
<span style="font-weight:bold; color:rgb(238, 135, 135)">半导体材料（semiconductor material）</span>是一类具有半导体性能导电能力介于导体与绝缘体之间 、可用来制作半导体器件和集成电路的电子材料 。

半导体的关键是<span style="font-weight:bold; color:rgb(247, 170, 88)">可变性</span>：能在绝缘体与导体之间转化。
###### 本征半导体
本征半导体是理想的单晶，没有杂质与缺陷。
###### 非本征半导体
即杂质半导体，含有杂质，缺陷的在周期性晶格。

##### 晶体的微观结构
理想单晶是由全同的结构单元在空间无限重复而构成的。

**结构单元组成**：
- 单个原子（铜、铁等简单晶体）
- 多个原子或分子（$NaCd_2$；蛋白质晶体的结构单元往往由上万个原子或分子组成。

周期性重复结构单元抽象成一个几何点来表示，几何点的集合称之为<span style="font-weight:bold; color:rgb(238, 135, 135)">晶体点阵</span>，又称布拉菲点阵（Bravais lattice），简称晶格（忽略具体结构单元内容而集中反映周期重复方式），晶体结构用点阵来描述。

具体结构单元内容（<span style="font-weight:bold; color:rgb(247, 170, 88)">每个阵点上的一群原子</span>），称为<span style="font-weight:bold; color:rgb(238, 135, 135)">基元</span>。

###### 基本关系
$$点阵+基元=晶体结构$$
![[笔记/pic/MaterialStructure_FormationProcess_Basis_Lattice_Crystal_20231015.png]]
**简单晶格（布拉菲格子）**：基元只有一个原子的晶体。

**复式晶格**：基元由两个或两个以上的原子构成晶体（两套或多套布拉菲格子构成）

1. 每个阵点上附加一个基元，就构成晶体结构；
2. 每个基元的组成、位形和取向都是相同的；
3. <span style="font-weight:bold; color:rgb(247, 170, 88)">相对一个阵点，将基元放在何处是无关紧要的</span>。（想象一个棋盘（布拉菲点阵），每个格子中心是一个阵点（lattice point）。假设每个格子里放一个棋子（基元，比如一个原子）。无论你把棋子放在格子中心的左、上、右还是下，只要棋子的相对位置在每个格子里保持一致，整个棋盘的模式不会变——它仍然是同一个棋盘，规则和外观没变。这就是平移不变性的体现。）
###### 严格的数学定义
给定三个基本平移矢量 $\vec{a}$, $\vec{b}$, $\vec{c}$

$$
\vec{r}' = \vec{r} + u\vec{a} + v\vec{b} + w\vec{c}
$$
($u, v, w$ 是整数)

**结果**：从任意一个点 $\vec{r}$ 去观察几何点排列时，同从 $\vec{r}'$ 点去观察所看到的几何点排列在各方面都是一样的。

- 点阵的定义：让 $u, v, w$ 取所有整数值，由上述方程所确定的一族点 $\vec{r}$ 就定义了一个点阵。
  - 点阵就是点在空间中周期性的规则排列。
  - <span style="font-weight:bold; color:rgb(247, 170, 88)">点阵是一种数学上的抽象</span>，只有当基元以同样方式安置于每个阵点上，才能形成晶体结构。

<span style="font-weight:bold; color:rgb(238, 135, 135)">初基平移矢量</span>(简称<span style="font-weight:bold; color:rgb(238, 135, 135)">基矢</span>)的定义：若有任意两个点$r$和$r'$，通过适当选择整数$u，v，w$，它们始终满足点阵的定义方程，而且从这两个点所观察到的原子排列是一样的，那么这个点阵的平移矢量$a, b, c$就称为初基的。

- 定义确保了没有比这组初基平移矢量所构成的体积更小的晶胞存在于这个点阵中。

- 常用初基平移矢量来定义晶轴，但如果非初基晶轴更简单些，则采用非初基晶轴。

- 晶轴$a, b, c$构成一个平行六面体的三个邻边，<span style="font-weight:bold; color:rgb(247, 170, 88)">如果只在平行六面体的角隅上有阵点，那么它就是个初基平行六面体。</span>
	**最小性**：元胞是点阵中最小的重复单元，其体积 $V = |\vec{a} \cdot (\vec{b} \times \vec{c})|$ 是点阵中所有可能晶胞体积的最小值。如果平行六面体的角隅只有 1 个阵点，它<span style="font-weight:bold; color:rgb(247, 170, 88)">保证了这个单元不包含多余的阵点</span>，从而是初基（原始）单元。

	**周期性**：只有角隅有阵点的平行六面体，通过平移操作能生成整个点阵，且保持点阵的离散性和均匀性。这符合点阵的定义：每个单元重复后，阵点的分布保持一致。

	**与之前的证明一致**：在之前的严格数学证明中，我们已经证明了初基平移矢量 $\vec{a}, \vec{b}, \vec{c}$ 生成的元胞体积是最小的，且任何其他基矢量生成的晶胞体积不能小于此体积。因此，如果平行六面体只在角隅有阵点，它必然是初基平行六面体。

>[!note] <span style="font-weight:bold; color:rgb(44, 80, 165)">证明【没有比这组初基平移矢量所构成的体积更小的晶胞存在于这个点阵中】</span>：
>一个点阵 $\Lambda$ 是由一组基矢量 $\vec{a}, \vec{b}, \vec{c}$ 线性生成的所有点构成的集合：
>$$
\Lambda = \{ u\vec{a} + v\vec{b} + w\vec{c} \mid u, v, w \in \mathbb{Z} \}$$
>任何另一组基矢量 $\vec{a}', \vec{b}', \vec{c}'$，如果也能生成相同的点阵 $\Lambda$，那么它们之间存在一个整数矩阵 $M$（属于 $GL(3, \mathbb{Z})$，即 $3×3$ 整数矩阵，其行列式为 $\pm 1$），使得：
>$$\begin{pmatrix}\vec{a}' \\\vec{b}' \\\vec{c}'\end{pmatrix}=\begin{pmatrix}m_{11} & m_{12} & m_{13} \\m_{21} & m_{22} & m_{23} \\m_{31} & m_{32} & m_{33}\end{pmatrix}\begin{pmatrix}\vec{a} \\\vec{b} \\\vec{c}\end{pmatrix}$$
>其中 $m_{ij} \in \mathbb{Z}$，且矩阵 $M$ 的行列式 $\det(M) = \pm 1$（因为 $M$ 必须是可逆的，且保持点阵的整数性质）。
>
>新基矢量 $\vec{a}', \vec{b}', \vec{c}'$ 所围成的平行六面体体积$V′$是：
>$$V' = |\vec{a}' \cdot (\vec{b}' \times \vec{c}')|$$
>
>代入之前的线性变换：
>$$V' = |(m_{11}\vec{a} + m_{12}\vec{b} + m_{13}\vec{c}) \cdot ((m_{21}\vec{a} + m_{22}\vec{b} + m_{23}\vec{c}) \times (m_{31}\vec{a} + m_{32}\vec{b} + m_{33}\vec{c}))|$$
>通过向量代数和行列式性质，平行六面体的体积可以用基矢量的行列式表示：
>$$V' = |\det(M)| \cdot |\vec{a} \cdot (\vec{b} \times \vec{c})|$$
>因为$M \in GL(3, \mathbb{Z})$ ，其行列式$\det(M) = \pm 1$，所以：
>$$|\det(M)| = 1$$
>
>因此：
>$$V' = 1 \cdot V = V$$
>$$V' = |-1| \cdot V = V$$
>这表明，任何一组能够生成相同点阵的基矢量所围成的平行六面体体积 $V'$ 等于原始基矢量 $\vec{a}, \vec{b}, \vec{c}$ 所围成的体积 $V$。
>
>如果存在另一组基矢量 $\vec{a}', \vec{b}', \vec{c}'$ 使得 $V' < V$，那么 $V'$ 必须是 $V$ 的整数分数（因为点阵的点是离散的，必须保持整数线性组合的性质）。然而，<span style="font-weight:bold; color:rgb(236, 95, 98)">根据上述证明，任何等价的基矢量变换的行列式只能是 $\pm 1$，因此 $V'$ 不能小于 $V$。</span>
>
>更进一步，任何体积小于 $V$ 的平行六面体都无法包含足够的点来生成整个点阵，因为点阵的离散性和周期性要求基矢量必须覆盖所有阵点，而更小的体积无法满足这一条件。

**点阵平移操作**：晶体通过晶体平移矢量T进行平行于自身的位移，晶体中任意两个等效格点都可以通过这种平移矢量连接起来。<span style="color:rgb(236, 95, 98)"></span>
$$
\vec{T} = u\vec{a} + v\vec{b} + w\vec{c}
$$

![[笔记/pic/Pasted image 20250224203233.png]]
布喇非点阵中使用的晶胞，不一定总是初基晶胞，比如：面心立方晶体的初基晶胞是一个**菱面体**，$a_1, a_2, a_3$的轴间夹角为60度。
![[笔记/pic/Pasted image 20250224233641.png]]
>[!note] <span style="font-weight:bold; color:rgb(44, 80, 165)">元胞与晶胞的区别</span>
 ><span style="font-weight:bold; color:rgb(238, 135, 135)">一、形态不同</span>
 >1. **元胞（固体物理学元胞）**：在晶格取一个格点为顶点，以三个不共面的方向上的基矢为边长形成的平行六面体作为重复单元。这个平行六面体沿三个不同的方向进行周期性平移，就可以充满整个晶格形成晶体，这个平行六面体即为元胞。
 >2. **晶胞**：其形状、大小与空间格子的平行六面体单位相同，保留了整个晶格的所有特征。
 >
 ><span style="font-weight:bold; color:rgb(238, 135, 135)">二、结点不同</span>
 >1. **元胞**：<span style="font-weight:bold; color:rgb(247, 170, 88)">结点在元胞的顶角上（只含有一个阵点）</span>。
 >2. **晶胞**：结点可以在顶角上，还可以在体心或者面心上（含有一或多个阵点）。
 >
 ><span style="font-weight:bold; color:rgb(238, 135, 135)">三、重复单元不同</span>
 >1. **元胞**：<span style="font-weight:bold; color:rgb(247, 170, 88)">元胞是体积的最小重复单元，它反映的是晶格的周期性</span>，元胞的选取不是唯一的，但是它们的体积都是相等的。
 >2. **晶胞**：为了同时反映晶体的对称性，<span style="font-weight:bold; color:rgb(247, 170, 88)">结晶学上所取的重复单元，体积不一定最小</span>。
###### 常见半导体晶体结构
![[笔记/pic/CrystalStructures_NaCl_CeCl_Diamond_CubicZincSulfide_20231015.png]]









### 倒格子与倒空间
##### 数学定义
晶体性质的周期性：
$$
\vec{T} = u\vec{a} + v\vec{b} + w\vec{c}
$$
- 在晶体平移操作下作用下，晶体的任何物理性质都不变
- 电荷浓度、电子数密度、质量密度和磁矩密度在$T$作用下不变（各种密度）

电子数密度 $n(\vec{r})$ 是 $\vec{r}$ 的周期性函数，存在
$$
n(\vec{r} + \vec{T}) = n(\vec{r})
$$
晶体的大部分性质都可以同电子密度的傅立叶分量联系起来：

- 将周期为$a$的一维周期函数$n(x)$做傅里叶变换
- 将$n(x)$展开为含有余弦和正弦的傅立叶级数
$$
n(x) = n_0 + \sum_{p>0} \left[ C_p \cos\left(\frac{2\pi p x}{a}\right) + S_p \sin\left(\frac{2\pi p x}{a}\right) \right]
$$
- p是正整数；$C_p$、$S_p$是实常数，称为展开式的傅立叶系数

- 幅角中的 $2\pi/a$ 保证 $n(x)$ 具有周期$a$，即 $n(x+a) = n(x)$

- $2\pi p/a$ 被称为<span style="font-weight:bold; color:rgb(247, 170, 88)">晶体的倒易点阵中或傅立叶空间中的一个点</span> 

$$
n(x) = n_0 + \sum_p \left[ C_p \cos\left(\frac{2\pi p x}{a}\right) + S_p \sin\left(\frac{2\pi p x}{a}\right) \right]\longrightarrow n(x) = \sum_p n_p e^{i 2\pi p x / a}
$$

一维扩展为三维：
$$n(x) = \sum_p n_p e^{i2\pi px/a} \longrightarrow n(\vec{r}) = \sum_{\vec{G}} n_{\vec{G}} e^{i\vec{G}\cdot\vec{r}}$$
则需寻求一组矢量G，满足 $n(\vec{r} + \vec{T}) = n(\vec{r})$

##### 倒格子的轴矢及其性质
<span style="font-weight:bold; color:rgb(238, 135, 135)">倒易点阵的轴矢</span>：
$$\vec{A} = 2\pi \frac{\vec{b} \times \vec{c}}{\vec{a} \cdot \vec{b} \times \vec{c}}$$
$$\vec{B} = 2\pi \frac{\vec{c} \times \vec{a}}{\vec{a} \cdot \vec{b} \times \vec{c}}$$
$$\vec{C} = 2\pi \frac{\vec{a} \times \vec{b}}{\vec{a} \cdot \vec{b} \times \vec{c}}$$
倒易基矢量与直接基矢量满足正交关系：
$$\vec{A} \cdot \vec{a} = 2\pi, \quad \vec{A} \cdot \vec{b} = 0, \quad \vec{A} \cdot \vec{c} = 0$$
$$\vec{B} \cdot \vec{a} = 0, \quad \vec{B} \cdot \vec{b} = 2\pi, \quad \vec{B} \cdot \vec{c} = 0$$
$$\vec{C} \cdot \vec{a} = 0, \quad \vec{C} \cdot \vec{b} = 0, \quad \vec{C} \cdot \vec{c} = 2\pi$$
>[!note] <span style="font-weight:bold; color:rgb(44, 80, 165)">证明【倒易基矢量与直接基矢量满足正交关系】：</span>
>验证 $\vec{a}^* \cdot \vec{a} = 2\pi$：
>$$
\vec{a}^* \cdot \vec{a} = \left(\frac{2\pi(\vec{b} \times \vec{c})}{V}\right) \cdot \vec{a} = \frac{2\pi(\vec{b} \times \vec{c}) \cdot \vec{a}}{V}$$
>因为 $(\vec{b} \times \vec{c}) \cdot \vec{a} = \vec{a} \cdot (\vec{b} \times \vec{c}) = V$ （标量三重积的性质）：
>$$
\vec{a}^* \cdot \vec{a} = \frac{2\pi V}{V} = 2\pi$$
>验证 $\vec{a}^* \cdot \vec{b} = 0$：
>$$
\vec{a}^* \cdot \vec{b} = \left(\frac{2\pi(\vec{b} \times \vec{c})}{V}\right) \cdot \vec{b} = \frac{2\pi(\vec{b} \times \vec{c}) \cdot \vec{b}}{V}$$
>因为 $\vec{b} \times \vec{c}$ 与 $\vec{b}$ 正交（交叉积垂直于 $\vec{b}$）：
>$$
(\vec{b} \times \vec{c}) \cdot \vec{b} = 0$$
>因此：
>$$
\vec{a}^* \cdot \vec{b} = 0$$
>验证 $\vec{a}^* \cdot \vec{c} = 0$：类似地：
>$$
\vec{a}^* \cdot \vec{c} = \frac{2\pi(\vec{b} \times \vec{c}) \cdot \vec{c}}{V}$$
>因为 $(\vec{b} \times \vec{c}) \cdot \vec{c} = 0$：
>$$
\vec{a}^* \cdot \vec{c} = 0$$

###### 倒易轴矢的性质
- 若$a$，$b$，$c$为初基的，则$A$，$B$，$C$就是倒易点阵的初基矢量

- $A$,$B$,$C$每个矢量与晶体点阵的两个轴矢正交（相互正交）

- 对于一个给定晶体点阵的一组任意设定的初基矢量$a$，$b$，$c$，都能导出同样的一组倒易点阵

每个晶体结构都有两个点阵同它联系着，一个是晶体点阵，一个是对应的倒易点阵
- <span style="font-weight:bold; color:rgb(247, 170, 88)">晶体的衍射图样是晶体的倒易点阵的映象</span>

- 晶体点阵中的矢量具有$length$的量纲，倒易点阵中的矢量具有$length^{-1}$的量纲

###### 倒易空间与晶格的关系
从数学观点看，<span style="font-weight:bold; color:rgb(247, 170, 88)">倒格子是原来晶格的傅里叶变化，傅里叶变化将通常的坐标空间变成了波矢空间</span>，对应于坐标空间中的晶格变换为波矢空间的倒格子。

正格子和倒格子都属于<span style="font-weight:bold; color:rgb(231, 98, 84)">布拉菲点阵</span>，正格子和倒格子在对称性方面相互关联[^1]。
##### 维格纳一赛茨初基晶胞
![[笔记/pic/SolidStatePhysics_WS_PrimitiveCell_RealSpace_ReciprocalSpace_20231015.png]]
<span style="font-weight:bold; color:rgb(231, 98, 84)">Wigner-Seitz primitive cell</span>（维格纳—赛茨初基晶胞）-- 初基晶胞的另一种选择方式(既仅包含一个原子，又体现出晶体的对称特性)

**分割方法：**
- 把某个阵点同所有与它相邻的阵点用直线连接起来
- 在连线的中点处，作垂线和垂面
- 以这种方式围成的最小体积就是维-赛初基晶胞（维-赛元胞）


[^1]: 想象你有一个无限大的正方形瓷砖地板（正格子），每块瓷砖大小和形状都一样（周期性）。你用光照射这个地板，会看到地板上反射的光点形成一个规则的图案（倒格子），这个光点图案也有类似的对称性（比如正方形或六边形），但是在一个“波的视角”中。你会发现，地板的规则（正格子的对称性）直接决定了光点的规则（倒格子的对称性），它们是“镜像”关系，都属于同一个“规则点阵家族”（布拉菲点阵）。
