---
tags:
  - "#半导体物理"
  - 预习笔记
  - 刘恩科
  - 第一章
创建时间: 2025-02-09T14:20:00
修改时间: 2025-02-26T19:52:00
课程名称: Semiconductor Physics
章节: Chapter 1 - Electronic States in Semiconductors
重要程度: ⭐⭐⭐⭐
掌握程度: 🔴Class Dismissed
考试相关: true
实验相关: false
参考教材: Semiconductor Physics, Eighth Edition (Liu Enke)
前置知识: Solid state physics, quantum mechanics, statistical physics
---
This chapter will briefly introduce the electronic states and their laws of motion in semiconductor single crystal materials.

半导体单晶材料和其他固态晶体一样，是由大量原子周期性重复排列而成的，而每个原子又包含原子核和许多电子。<span style="font-weight:bold; color:rgb(236, 95, 98)">如果能够写出半导体中所有相互作用着的原子核和电子系统的薛定谔方程，并求出其解，便可以了解半导体的许多物理性质</span>。但是，这是一个非常复杂的多体问题，不可能求出其严格解，==只能用近似的处理方法——单电子近似来研究固态晶体中电子的能量状态==。

所谓<span style="font-weight:bold; color:rgb(238, 135, 135)">单电子近似</span>，即假设每个电子在周期性排列且固定不动的原子核势场及其他电子的平均势场中运动。该势场是具有与晶格同周期的周期性势场。用单电子近似来研究晶体中电子状态的理论称为<span style="font-weight:bold; color:rgb(238, 135, 135)">能带论</span>。

# 1.1 半导体的晶格结构及其结合性质

### 1.1.1 金刚石型结构和共价键

# 1.2 半导体中的电子状态与能带
制造半导体器件所用的材料大多是单晶体。单晶体是由靠得很紧密的原子周期性重复排列而成的，相邻原子间距只有零点几纳米。因此，<span style="font-weight:bold; color:rgb(247, 170, 88)">半导体中的电子状态肯定和原子中的不同，特别是外层电子会有显著的变化</span>。但是，晶体是由分立的原子凝聚而成的，两者的电子状态又必定存在着某种联系。下面以原子结合成晶体的过程定性地说明半导体中的电子状态。

原子中的电子在原子核的势场和其他电子的作用下，分列在不同的能级上，形成所谓的电子壳层，不同支壳层的电子分别用$1s; 2s, 2p; 3s, 3p, 3d; 4s$等符号表示，每一支壳层对应于确定的能量。当原子相互接近形成晶体时，不同原子的内外各电子壳层之间就有了一定程度的交叠，相邻原子最外壳层交叠最多，内壳层交叠较少。原子组成晶体后，由于电子壳层交叠，电子不再完全局限在某一个原子上，可以由一个原子转移到相邻的原子上去，因而，电子将可以在整个晶体中运动，这种运动称为电子的共有化运动。但必须注意，因为各原子中相似壳层上的电子才有相同的能量，电子只能在相似壳层间转移。因此，共有化运动的产生是因为不同原子的相似壳层间的交叠，如$2p$支壳层的交叠、$3s$支壳层的交叠，如图1-5所示。也可以说，结合成晶体后，每个原子能引起“与之相应”的共有化运动，例如，$3s$能级引起“$3s$”的共有化运动，$2p$能级引起“$2p$”的共有化运动，等等。由于内外壳层的交叠程度很不相同，因此只有最外层



# The Mechanism of Electrical Conduction in Intrinsic Semiconductors – Holes

Based on the discussion above, electrons can undergo collectivized movement within a crystal. However, <span style="font-weight:bold; color:rgb(236, 95, 98)">whether these electrons can conduct electricity still requires consideration of the electron filling of the energy bands</span>; one cannot simply look at the movement of individual electrons.

Research has found that if all states within an energy band are filled by electrons, then there is no current in the crystal, even with an applied electric field – in other words, ==a fully occupied band does not conduct electricity.== Only energy bands that contain electrons but are not completely full exhibit conductivity; it is only the electrons in <span style="font-weight:bold; color:rgb(236, 95, 98)">partially filled bands that can carry current</span>.

At a temperature of absolute zero, the valence band of a pure semiconductor is filled with valence electrons, and the conduction band is empty. At a certain temperature, a small number of electrons are excited from near the top of the valence band to near the bottom of the conduction band. Under the action of an external electric field, the electrons in the conduction band participate in conduction. Because these electrons are located near the bottom of the conduction band, their effective mass is positive.[^1]。

At the same time, the energy bands, lacking some electrons, also exhibit a state of deficiency, causing the band electrons to display conductive properties. This conductive action is commonly described as <span style="font-weight:bold; color:rgb(236, 95, 98)">hole conduction</span>.

![[Pasted image 20250314022315.png|219]]<center>Figure 15: Silicon Covalent Bond Structural Diagram</center>

Once some electrons are excited from the valence band to near the top of the energy bands, leaving behind holes in the valence band. If an electron is excited from the valence band to the conduction band, a hole appears at the top of the valence band, which is equivalent to a missing electron in a covalent bond, creating a vacant position and a conduction electron in the crystal lattice.

首先，可以认为这个空状态带有正电荷。这是因为半导体由大量带正电的原子核和带负电的电子组成，这些正、负电荷数量相等，整个半导体是电中性的，而且价键完整的原子附近也呈电中性。但是，空状态所在处由于失去了一个价键上的电子，因而破坏了局部电中性，出现了一个未被抵消的正电荷，这个正电荷为空状态所具有，它带的电荷是 +$q$，如图 1-15 所示。

再从图 1-16 所示的布里渊区的 $E$ 与 $k$ 的关系来看，设空状态出现在能带顶部 $A$ 点。由于 $k$ 状态在布里渊区内均匀分布，这时除 $A$ 点外，所有 $k$ 状态均被电子占据。图 1-16 示意性


# <font color="#000000">Cyclotron resonance</font>

Different semiconductor materials possess different band structures, and these are often <span style="background:rgba(215, 135, 150, 0.55)">anisotropic</span> – that is, <span style="background:rgba(215, 135, 150, 0.55)">the relationship between</span> $E(k)$ <span style="background:rgba(215, 135, 150, 0.55)">and</span> $k$ <span style="background:rgba(215, 135, 150, 0.55)">varies along different wavevector directions</span>.

We use a combination of theory and experiment to determine the energy states of electrons in semiconductors.

For most semiconductors, <span style="background:rgba(145, 156, 255, 0.55)">the electrons near the bottom of the conduction band and the holes near the top of the valence band</span> are often responsible, so the energy band structures near the bottom of the conduction band and the top of the valence band are mainly introduced.

### $k$ <font color="#000000">space isothermal surface</font>

To understand the band structure, it is necessary to establish a functional relationship between $E(k)$ and $k$. If we <span style="background:rgba(215, 135, 150, 0.55)">assume that the band extremum in one dimension occurs at the wave vector</span> $k=0$, then near the bottom of the conduction band：

$$
E(k) - E(0) = \frac{\hbar^2 k^2}{2 m_n^*} \tag{1-39}
$$

Near the top of the valence band:

$$
E(k) - E(0) = -\frac{\hbar^2 k^2}{2 m_p^*} \tag{1-40}
$$

$E(0)$ represents the bottom energy of the conduction band and the top energy of the valence band, respectively. Knowing $m_n^*$ and $m_p^*$ allows one to understand the band structure near the extremum.

For real three-dimensional crystals, a $k$ space is constructed with $k_x, k_y, k_z$ as coordinate axes; any vector in $k$ space represents a wave vector $k$, where

$$
k^2 = k_x^2 + k_y^2 + k_z^2 \tag{1-41}
$$
We assume that the conduction band minimum is located at wave vector $k=0$, with an energy value of $E(0)$, near the conduction band bottom:

$$
E(k) - E(0) = \frac{\hbar^2}{2 m_n^*} (k_x^2 + k_y^2 + k_z^2) \tag{1-42}
$$

<span style="background:rgba(215, 135, 150, 0.55)">When</span> $E(k)$ <span style="background:rgba(215, 135, 150, 0.55)">is a fixed value, corresponding to many sets of different</span> $(k_x, k_y, k_z)$, <span style="background:rgba(215, 135, 150, 0.55)">these different sets of</span> $(k_x, k_y, k_z)$ <span style="background:rgba(215, 135, 150, 0.55)">are linked together to form a closed surface.</span> The values on this surface are all equal, and this surface is called an <span style="font-weight:bold; color:rgb(202, 83, 85)">isothermal surface</span>, often abbreviated as an equiphase surface.

It is evident that the equipotential surface represented by $equations (1-42)$ is a series of spheres with radii of $\sqrt{(2 m_n^* / \hbar^2) [E(k) - E(0)]}$.

However, crystals exhibit <span style="background:rgba(145, 156, 255, 0.55)">anisotropic properties</span>, meaning the relationship between $E(k)$ and $k$ is not necessarily the same along different wave vector $k$ directions. This reflects that the <span style="background:rgba(145, 156, 255, 0.55)">effective mass</span> of the electrons is not necessarily the same along different $k$ directions, and that band extrema are not necessarily located at the wave vector $k=0$.

Let the band bottom be located at $k_0$ with energy $E(k_0)$. In the crystal, choose appropriate coordinate axes $k_x, k_y, k_z$, and let $m_x^*, m_y^*, m_z^*$ represent the effective masses of the band bottom electrons along the three axes $k_x, k_y, k_z$, respectively. Expanding using a $Taylor\ series$ near the extremum $k_0$ and <span style="background:rgba(215, 135, 150, 0.55)">neglecting higher-order terms</span>, we obtain:

$$
E(k) = E(k_0) + \frac{\hbar^2}{2} \left[ \frac{(k_x - k_{0x})^2}{m_x^*} + \frac{(k_y - k_{0y})^2}{m_y^*} + \frac{(k_z - k_{0z})^2}{m_z^*} \right] \tag{1-43}
$$

$$
\frac{1}{m_x^*} = \frac{1}{\hbar^2} \left( \frac{\partial^2 E}{\partial k_x^2} \right)_{k_0}
$$
$$
\frac{1}{m_y^*} = \frac{1}{\hbar^2} \left( \frac{\partial^2 E}{\partial k_y^2} \right)_{k_0} \tag{1-44}
$$
$$
\frac{1}{m_z^*} = \frac{1}{\hbar^2} \left( \frac{\partial^2 E}{\partial k_z^2} \right)_{k_0}
$$

$Equations (1-43)$ can also be written in the following form:

$$
\frac{(k_x - k_{0x})^2}{\frac{2 m_x^* (E - E_c)}{\hbar^2}} + \frac{(k_y - k_{0y})^2}{\frac{2 m_y^* (E - E_c)}{\hbar^2}} + \frac{(k_z - k_{0z})^2}{\frac{2 m_z^* (E - E_c)}{\hbar^2}} = 1 \tag{1-45}
$$
In this equation, $E_c$ represents $E(k_0)$. $Equation (1-45)$ is an <span style="background:rgba(145, 156, 255, 0.55)">ellipsoid equation</span>. In this case, the equipotential surfaces are a series of ellipsoids surrounding $k_0$.

### <font color="#000000">cyclotron resonance</font>

Place a semiconductor sample in a <span style="background:rgba(215, 135, 150, 0.55)">uniform, constant magnetic field</span>, with magnetic field strength $B$. If the initial velocity of the electrons in the semiconductor is $v$, and the angle between $v$ and $B$ is $\theta$, then the magnetic force $f$ acting on the electron is:

$$
f = -q \, \boldsymbol{v} \times \boldsymbol{B} \tag{1-46}
$$

The magnitude of the force is

$$
f = q v B \sin \theta = q v_\perp B \tag{1-47}
$$

In this equation, $v_\perp = v \sin \theta$, represents the projection of $v$ onto the plane perpendicular to $B$, and the direction of the force is perpendicular to the plane formed by $v$ and $B$.

Therefore, the electron moves with a uniform velocity $v_\parallel = v \cos \theta$ along the direction of the magnetic field and undergoes uniform circular motion in a plane perpendicular to $B$. <span style="background:rgba(145, 156, 255, 0.55)">The trajectory is a helix.</span> Let the radius of the circle be $r$ and the cyclotron frequency be $\omega_c$, then $v_\perp = r \omega_c$, the centripetal acceleration is $a = v_\perp^2 / r$, and according to $equation (1-34)$, <span style="background:rgba(145, 156, 255, 0.55)">if the energy surface is spherical, then</span> $\omega_c$ <span style="background:rgba(145, 156, 255, 0.55)">can be determined as:</span>

$$
\omega_c = \frac{q B}{m_n^*} \tag{1-48}
$$

Next, by passing electromagnetic waves through a semiconductor sample, <span style="font-weight:bold; color:rgb(202, 83, 85)">resonant absorption</span> can occur when the angular frequency $\omega$ of the alternating electromagnetic field equals the cyclotron frequency $\omega_c$. 

By measuring the angular frequency $\omega$ of the electromagnetic wave and the magnetic induction intensity $B$ at the resonant absorption, the effective mass $m_n^*$ can be calculated using $equation (1-48)$.

If the equipotential surface is not a sphere but an <span style="background:rgba(215, 135, 150, 0.55)">ellipsoid</span> as represented by $equation (1-45)$, then the effective mass is anisotropic, with values $m_x^*, m_y^*, m_z^*$ along the $k_x, k_y, k_z$ axes, respectively. Let $B$ be the direction cosines of $B$ along the $k_x, k_y, k_z$ axes, which are $\alpha, \beta, \gamma$, respectively, then the force acting on the electron is

$$\begin{equation}
\begin{aligned}
f_x &= -q B (v_y \gamma - v_z \beta) \\
f_y &= -q B (v_z \alpha - v_x \gamma) \\
f_z &= -q B (v_x \beta - v_y \alpha)
\end{aligned}
\tag{1-49}
\end{equation}$$
>[!note]+ derivation process
>The cross product of velocity $\mathbf{v}$ and magnetic field $\mathbf{B}$, $\mathbf{v} \times \mathbf{B}$, can be expanded in Cartesian coordinates as follows:
>$$
\mathbf{v} \times \mathbf{B} = 
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
v_x & v_y & v_z \\
B_x & B_y & B_z
\end{vmatrix}$$
>Expanded to obtain:
>$$
\mathbf{v} \times \mathbf{B} = 
\mathbf{i} (v_y B_z - v_z B_y) - 
\mathbf{j} (v_x B_z - v_z B_x) + 
\mathbf{k} (v_x B_y - v_y B_x)$$
>
>Therefore, the components of the cross product are:
>$$
(\mathbf{v} \times \mathbf{B})_x = v_y B_z - v_z B_y$$
>$$
(\mathbf{v} \times \mathbf{B})_y = v_z B_x - v_x B_z$$
>$$
(\mathbf{v} \times \mathbf{B})_z = v_x B_y - v_y B_x$$
>
>According to the Lorentz force formula $\mathbf{F} = q (\mathbf{v} \times \mathbf{B})$，the components of force are:
>$$
f_x = q (v_y B_z - v_z B_y)$$
>$$
f_y = q (v_z B_x - v_x B_z)$$
>$$
f_z = q (v_x B_y - v_y B_x)$$
>
>The direction cosines of the magnetic field $\mathbf{B}$ are $\alpha$, $\beta$, and $\gamma$, then the magnetic field components can be expressed as:
>$$
B_x = \alpha B$$
>$$
B_y = \beta B$$
>$$
B_z = \gamma B$$
>
>Substitute these components into the expression of Lorentz force to obtain:
>$$
f_x = q (v_y \gamma B - v_z \beta B) = qB (v_y \gamma - v_z \beta)$$
>$$
f_y = q (v_z \alpha B - v_x \gamma B) = qB (v_z \alpha - v_x \gamma)$$
>$$
f_z = q (v_x \beta B - v_y \alpha B) = qB (v_x \beta - v_y \alpha)$$
>

The equation of motion of electrons is
$$
\begin{aligned}
m_x^* \frac{dv_x}{dt} + q B (v_y \gamma - v_z \beta) &= 0 \\
m_y^* \frac{dv_y}{dt} + q B (v_z \alpha - v_x \gamma) &= 0 \\
m_z^* \frac{dv_z}{dt} + q B (v_x \beta - v_y \alpha) &= 0
\end{aligned}
\tag{1-50}
$$
Electrons should do <span style="background:rgba(215, 135, 150, 0.55)">periodic motion</span>, try to solve:

$$
\begin{aligned}
v_x &= v_x' e^{i \omega_c t} \\
v_y &= v_y' e^{i \omega_c t} \\
v_z &= v_z' e^{i \omega_c t}
\end{aligned}
\tag{1-51}
$$

Substitute into $equation (1-50)$, we get:

$$
\begin{aligned}
-\frac{q B}{m_x^*} \gamma v_x' + i \omega_c v_y' + \frac{q B}{m_x^*} \alpha v_z' &= 0 \\
-\frac{q B}{m_y^*} \alpha v_y' + i \omega_c v_z' + \frac{q B}{m_y^*} \beta v_x' &= 0 \\
\frac{q B}{m_z^*} \beta v_x' - \frac{q B}{m_z^*} \alpha v_y' + i \omega_c v_z' &= 0
\end{aligned}
\tag{1-52}
$$

To have <span style="background:rgba(145, 156, 255, 0.55)">non-zero solutions</span> for $v_x', v_y', v_z'$, the determinant of the coefficient matrix must be zero:

$$
\begin{vmatrix}
i \omega_c & \frac{q B}{m_x^*} \gamma & -\frac{q B}{m_x^*} \beta \\
-\frac{q B}{m_y^*} \gamma & i \omega_c & \frac{q B}{m_y^*} \alpha \\
\frac{q B}{m_z^*} \beta & -\frac{q B}{m_z^*} \alpha & i \omega_c
\end{vmatrix} = 0 \tag{1-53}
$$

Therefore, the cyclotron frequency $\omega_c$ can be determined as

$$
\omega_c = \frac{q B}{m_n^*} \tag{1-54}
$$

Where $m_n^*$ represents:

$$
\frac{1}{m_n^*} = \sqrt{\frac{m_x^* \alpha^2 + m_y^* \beta^2 + m_z^* \gamma^2}{m_x^* m_y^* m_z^*}} \tag{1-55}
$$

When the frequency $\omega$ of the alternating electromagnetic field is equal to $\omega_c$, resonance absorption is achieved.

In order to observe the obvious resonance absorption peak, <span style="background:rgba(145, 156, 255, 0.55)">high purity of the sample is required</span>, and the experiment is generally carried out at <span style="background:rgba(145, 156, 255, 0.55)">low temperature</span>, and the frequency of the alternating electromagnetic field is in the range of microwave or even infrared light. In the experiment, the frequency of the alternating electromagnetic field is usually fixed, and the magnetic induction intensity is changed to observe the absorption phenomenon. The magnetic induction intensity is about a few tenths of a Tesla ($T$).

# <font color="#000000">Band Structure of</font> $Silicon$ <font color="#000000">and</font> $Germanium$

### <font color="#000000">Conductive band structure of</font> $silicon$ <font color="#000000">and</font> $germanium$

If the equal-energy surface is a spherical surface, it can be seen from $Equation (1-48)$ that only one absorption peak can be observed when the magnetic field direction is changed. 

However, the experimental results of n-type $silicon$ and $germanium$ indicate that when the magnetic induction intensity has different orientations relative to the crystal axis, <span style="background:rgba(215, 135, 150, 0.55)">an unequal number of absorption peaks can be obtained</span>. For example, for silicon:

1. If $B$ is oriented along the $[1 1 1]$ crystallographic axis, only <span style="font-weight:bold; color:rgb(202, 83, 85)">one</span> absorption peak can be observed.

2. If $B$ is observed along the $[1 1 0]$ crystallographic axis, <span style="font-weight:bold; color:rgb(202, 83, 85)">two</span> absorption peaks can be seen;

3. If $B$ is also observed along the $[1 0 0]$ crystallographic axis, <span style="font-weight:bold; color:rgb(202, 83, 85)">two</span> absorption peaks can be seen;
4. If the crystallographic axis has arbitrary orientation, <span style="font-weight:bold; color:rgb(202, 83, 85)">three</span> absorption peaks can be observed.

The experimental results can be well explained if one assumes that energy surfaces near the bottom of the silicon conduction band, such as those near the $[1 0 0]$ direction, are rotating ellipsoids, with the major axis of the ellipsoid aligned with that direction.

The minimum of this model's guiding band isn't at the origin of $k$-space, but rather in the $[1 0 0]$ direction.

根据硅晶体立方对称性的要求，也必有同样的能量在 $[1 0 0],[0 1 0],[0 0 1],[0 0 \bar{1}]$，$[0 \bar{1} 0]$ 的方向上，如图 1-22 所示，共有 6 个旋转椭球面，电子主要分布在这些极值附近。

设 $k_0$ 表示第 $s$ 个极值所对应的波矢，$s=1,2,3,4,5,6$，极值处能值为 $E$，$k_0$ 沿 $\langle 1 0 0 \rangle$ 方向，共有 6 个。根据式 (1-43)，极值附近的能量 $E^*(k)$ 为

$$
E^*(k) = E_c + \frac{\hbar^2}{2} \left[ \frac{(k_x - k_{0x})^2}{m_x^*} + \frac{(k_y - k_{0y})^2}{m_y^*} + \frac{(k_z - k_{0z})^2}{m_z^*} \right] \tag{1-56}
$$

上式表示 6 个椭球等能面的方程。

如选取 $E_c$ 为能量零点，以 $k$ 为坐标原点，取 $k_1, k_2, k_3$ 为三个直角坐标轴，分别与椭球主轴重合，并使 $k_3$ 轴沿椭球长轴方向（即 $k_3$ 沿 $\langle 1 0 0 \rangle$ 方向），则等能面分别为绕 $k_3$ 轴旋转的旋转椭球面。

以沿 $[0 0 1]$ 方向的旋转椭球面为例。设 $k_3$ 轴沿 $[0 0 1]$ 方向，即沿 $k_z$ 方向，则 $k_1, k_2$ 轴位于 $(0 0 1)$ 面内，并互相垂直（参见图 1-23），这时，沿 $k_1, k_2$ 轴的有效质量相同。

现令 $m_x^* = m_y^* = m_t, m_z^* = m_l$ 和 $m_l$ 分别称为横向有效质量和纵向有效质量，则等能面方程为

$$
E(k) = \frac{\hbar^2}{2} \left[ \frac{k_1^2 + k_2^2}{m_t} + \frac{k_3^2}{m_l} \right] \tag{1-57}
$$

对其他 5 个椭球面可以写出类似的方程。

如果 $k_1, k_2$ 轴选取恰当，计算可简单。选取 $k_1$ 使磁感应强度 $B$ 位于 $k_1$ 轴和 $k_3$ 轴所组成的平面内，且同 $k_3$ 轴交 $\theta$ 角（参看图 1-23），则在这个坐标系里，$B$ 的方向余弦 $\alpha, \beta, \gamma$ 分别为


[^1]: The positive and negative nature of effective mass is fundamentally determined by the sign of the band curvature. The positive band curvature near the bottom of the conduction band results in a positive effective mass for electrons at this point.
