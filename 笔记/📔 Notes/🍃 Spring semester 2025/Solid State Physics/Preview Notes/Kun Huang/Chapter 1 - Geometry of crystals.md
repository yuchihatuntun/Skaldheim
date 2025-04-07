Solids are divided into crystalline and amorphous. <span style="background:rgba(145, 156, 255, 0.55)">We mainly focus on crystals</span> because their structural regularity is crucial to understanding the properties of materials; amorphous structures are not discussed for the time being due to their structural complexity. Crystals are further divided into single crystals and polycrystals:

  1. <span style="font-weight:bold; color:rgb(202, 83, 85)">Polycrystals</span> are composed of a large number of <span style="background:rgba(145, 156, 255, 0.55)">randomly oriented grains</span> (such as metals), and their microstructure is controlled by dynamic growth conditions such as cooling rate, impurity distribution, and processing technology. The formation of polycrystals originates from the competitive mechanism of simultaneous growth of multiple nuclei.
2. <span style="font-weight:bold; color:rgb(202, 83, 85)">Single crystals</span>, with periodic atomic arrangement <span style="background:rgba(145, 156, 255, 0.55)">throughout the material</span> (such as natural mineral rock salt, quartz), have important applications in semiconductors, magnetic materials and other fields. Its macroscopic geometric regularity (such as cube, hexagonal shape) directly reflects the long-range order of microscopic atomic arrangement.
3. The development of crystal structure research In the 18th and 19th centuries, the crystallographic theory based on geometric morphology inferred the model of the ordered arrangement of atoms; in the 20th century, breakthroughs in <span style="background:rgba(215, 135, 150, 0.55)">X-ray diffraction technology</span> (such as Bragg's law of diffraction) experimentally confirmed this theory and promoted the accurate determination of thousands of crystal structures.
# <font color="#000000">Lattice and its periodicity</font>

(1) 一些晶格的实例

晶体中原子的规则排列一般称为晶体格子，或简称为晶格。这一节先介绍几个最常遇到和比较基本的实例。

把晶格设想成为原子球的规则堆积，有助于我们比较直观地理解晶格的组成。

图 1-1(a) 表示，在一个平面内，规则排列原子球的一个最简单的形式。如果把这样的原子层叠起来，各层的球完全对应，就形成所谓简单立方晶格。没有实际的晶体采取简单立方晶格，但是一些更复杂的晶格可以在简单立方晶格基础

上加以分析。简单立方晶格的原子球心显然形成一个三维的立方格子的结构，往往用图 1-1(b)的形式表示这种晶格结构，它表示出这个格子的一个典型单元，整个格子可以看做这样一个单元沿着三个方向的重复排列。按照同样的理解，图 1-1(c) 表示所谓体心立方晶格，有相当多的金属，如 Li, Na, K, Rb, Cs, Fe 等元素，具有体心立方晶格。

图 1-2 表示原子球在一个平面内最紧密排列的方式，常称为密排面。把密排面叠起来可以形成原子球最紧密堆积的晶格。为了堆积最紧密，在堆积时应把一层的球心对准另一层的球隙，仔细分析就会发现，这样实际上可以形成两种不同的最紧密的晶格排列。首先我们注意到，密排原子层的间隙可以分成两套，图 1-2 把它们分别涂黑和留为空白。如称原来的密排层为 A，另一密排层可以对准其中任一套间隙，我们分别称为 B 和 C。两种密排的晶格可以表示为

ABABAB...

(六角密排)，

ABCABCABC...

(立方密排，或面心立方)

前一种晶格称为六角密排晶格，常常用图 1-3 的六角单元表示这种结构；后一种称为立方密排，或面心立方晶格。图 1-4(a) 表示这种晶格的典型单元，它和简单立方相似，但在每个立方面中心有一个原子，图 1-4(b) 表示面心立方晶格的原子密排面。很多金属元素具有两种密排结构之一，例如 Cu, Ag, Au, Al 具有面




# <font color="#000000">X-ray diffraction method</font>
At the beginning of the 20th century, the nature of X-rays was not understood. In 1912, Laue put forward a hypothesis: <span style="background:rgba(145, 156, 255, 0.55)">crystals are composed of atoms arranged regularly</span> and can be used as gratings to test X-rays.
### <font color="#000000">Wulf-Bragg formula -- </font><span style="color:rgb(202, 83, 85)">Relationship Between Interplanar Spacing and Diffraction Angle</span>
The atoms are arranged to form a <span style="background:rgba(145, 156, 255, 0.55)">crystal face</span>, which can cause specular reflection of X-rays. The light reflected by a series of crystal faces produces interference due to the existence of optical path difference. <span style="background:rgba(215, 135, 150, 0.55)">When the optical path difference of each two beams is equal to an integer multiple of the wavelength, the interference is intensified</span>.
![[Pasted image 20250314204203.png]]
<center>Figure 3 Optical path difference of X-ray diffraction</center>
$$
Optical\ path\ difference = \overline{AB} + \overline{BC} = 2d \cos \theta = n\lambda. \tag{Q1}
$$
When $\theta$ or $\lambda$ is appropriate, constructive interference can be achieved.
### <font color="#000000">Interplanar Distance and Inverted Arrow</font>
Given a plane $Ax + By + Cz = 1$, the perpendicular distance from the origin to the plane is $1/(A^2 + B^2 + C^2)^{1/2}$. For crystal planes $(h_1, h_2, h_3)$ with lattice vectors $a_1, a_2, a_3$, the reciprocal lattice vectors are $b_1, b_2, b_3$. It can be proven that the plane equation is:

$$(h_1 b_1 + h_2 b_2 + h_3 b_3) \cdot x = 1. \tag{Q2}$$

where $x$ is <span style="background:rgba(215, 135, 150, 0.55)">an arbitrary vector from the origin to the crystal plane</span>.

| **variable**    | **Belonging space**          | **physical meaning**                                                                                      |
| --------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| $h_1, h_2, h_3$ | **regular lattice subspace** | Miller indices (direction indicators) of crystal planes in a direct lattice.                              |
| $a_1, a_2, a_3$ | **regular lattice subspace** | Basis vectors of the direct lattice (basis vectors directly describing the arrangement of crystal atoms). |
| $b_1, b_2, b_3$ | **Reciprocal lattice space** | The basis vector of an inverted lattice (the Fourier transform basis vector of a regular lattice).        |
| $\mathbf{x}$    | **regular lattice subspace** | Position vector from the origin to the crystal plane in direct space.                                     |


**Proof:**
Let a point on the crystal plane along the $a_1$ axis be $x = \xi a_1$. Substituting this into $equation (Q2)$ , we obtain $h_1 \xi = 1, \xi = 1/h_1$. Therefore, $x = (1/h_1) a_1$. Similarly, the intersection of the crystal plane with the $a_2$ axis is $(1/h_2) a_2$, and the intersection with the $a_3$ axis is $(1/h_3) a_3$.

So the plane determined by $equation (Q2)$ is the plane closest to the origin. The distance from the origin to this plane is the crystal plane spacing:

$$
d = \frac{1}{|h_1 b_1 + h_2 b_2 + h_3 b_3|}. \tag{Q3}
$$

If $h_1, h_2, h_3$ are large, then $d$ is small.

To observe diffraction, the condition $2d \cos \theta = n\lambda$ must be met. Diffraction cannot occur when $d < \lambda/2$. Therefore, diffraction is essentially caused by a limited number of <span style="font-weight:bold; color:rgb(202, 83, 85)">low-index crystal planes</span>; higher-index planes will not contribute. Low-index planes are those with a dense atomic arrangement and are, in practice, the most significant.

For positive lattice plane families with Miller indices $h_1 h_2 h_3$, <span style="background:rgba(145, 156, 255, 0.55)">the direction of the normal is determined by the reciprocal lattice vector</span> $\mathbf{G}$:
$$\mathbf{G} = h_1 \mathbf{b}_1 + h_2 \mathbf{b}_2 + h_3 \mathbf{b}_3$$
The magnitude of the reciprocal lattice vector $\mathbf{G}$ satisfies the following relationship with the interplanar spacing $d_{h_1 h_2 h_3}$ of the direct lattice planes:
$$|\mathbf{G}| = \frac{2\pi}{d_{h_1 h_2 h_3}}$$
The equations of the crystal plane family with Miller exponents of $h_1 h_2 h_3$in a regular lattice are:

$$h_1 x + h_2 y + h_3 z = n \quad (n \in \mathbb{Z})$$

Cartesian coordinates **x** can be expressed as:
$$\mathbf{x} = x \mathbf{a}_1 + y \mathbf{a}_2 + z \mathbf{a}_3$$
Then the dot product of the inverse vector and the orthogonal vector is:
$$\mathbf{G} \cdot \mathbf{x} = (h_1 \mathbf{b}_1 + h_2 \mathbf{b}_2 + h_3 \mathbf{b}_3) \cdot (x \mathbf{a}_1 + y \mathbf{a}_2 + z \mathbf{a}_3)$$

According to the definition of inverted lattice basis vectors, there are:

$$\mathbf{b}_i \cdot \mathbf{a}_j = 2\pi \delta_{ij} \quad (\delta_{ij} \text{is the Kronecker delta function})$$

Therefore:

$$\mathbf{G} \cdot \mathbf{x} = 2\pi (h_1 x + h_2 y + h_3 z)$$

Substituting the equation of the plane lattice faces, $h_1 x + h_2 y + h_3 z = n$, yields:
   
   $$\mathbf{G} \cdot \mathbf{x} = 2\pi n$$
   
For $n = 1$, the equation simplifies to:
   
   $$\mathbf{G} \cdot \mathbf{x} = 2\pi$$
After normalization, divide by $2\pi$:
$$(h_1 \mathbf{b}_1 + h_2 \mathbf{b}_2 + h_3 \mathbf{b}_3) \cdot \mathbf{x} = 1$$
Using the point-to-plane distance formula, the crystal plane spacing (d) is:
$$d = \frac{1}{|\mathbf{G}|} = \frac{1}{\sqrt{h_1^2 \mathbf{b}_1^2 + h_2^2 \mathbf{b}_2^2 + h_3^2 \mathbf{b}_3^2}}$$
### <font color="#000000">Several commonly used crystal diffraction methods  </font>
##### <font color="#000000">rotation method of crystal</font>
![[Pasted image 20250314214921.png]]
<center>Fig. F4 Rotating crystal method</center>
##### <font color="#000000">powder method  </font>
The device is similar to the rotating crystal method, except that the sample is powder. <span style="background:rgba(145, 156, 255, 0.55)">Powder represents crystals in all different directions</span>. Each crystal plane causes a corresponding reflection.

##### <font color="#000000">Laue method</font>  
The device is the same as before, using a single crystal, and the X-ray is a continuous spectrum. Each crystal face can always find the appropriate wavelength reflection, resulting in a photograph as shown in $Figure F5$. This method is used to <span style="background:rgba(215, 135, 150, 0.55)">check crystal symmetry</span>.

### <font color="#000000">Laue equation</font>

When an X-ray hits an atom, the electrons in the atom oscillate and emit secondary radiation with different intensities in all directions. <span style="background:rgba(145, 156, 255, 0.55)">Laue's equation solves the interference problem of atomic secondary radiation</span>.

Let's look at the two atoms A and B (see Figure F6). The optical path difference of A and B radiation is equal to
![[Pasted image 20250314220407.png]]
<center>Fig. F6 Interference conditions of atomic secondary radiation</center>
$$
\overline{CB} + \overline{BD} = \overrightarrow{AB} \cdot n - \overrightarrow{AB} \cdot n' = \overrightarrow{AB} \cdot (n - n')
$$

The conditions for enhanced interference by atomic radiation are

$$
\overrightarrow{AB} \cdot \frac{(n - n')}{\lambda} = m. \tag{Q4}
$$

Where $m$ is an integer. And $\overrightarrow{AB} = l_1 a_1 + l_2 a_2 + l_3 a_3$ (for all integers $l_1, l_2, l_3$), condition (Q4) can also be written as

$$
a_1 \cdot \frac{(n - n')}{\lambda} = m_1, a_2 \cdot \frac{(n - n')}{\lambda} = m_2, a_3 \cdot \frac{(n - n')}{\lambda} = m_3. \tag{Q5}
$$
### <font color="#000000">Laue equation solving method</font>

设 $\frac{(n - n')}{\lambda} = S_1 b_1 + S_2 b_2 + S_3 b_3$，其中 $b_1, b_2, b_3$ 是倒格矢。代入劳厄方程(Q5)，利用倒格矢的特性(1-3)式，得到 $S_1, S_2, S_3$ 是整数。

将 $b_1, b_2, b_3$ 作为元矢量，画一个晶格，称为倒格子，如图 F7 所示。由原点作矢量 $n/\lambda$。

在矢量的端点以 $1/\lambda$ 为半径作球，如果球面通过一个倒格点，代表劳厄方程有一个解。

如果是单色波，一般不容易发生反射干涉。如果是连续谱，波长由 $\lambda_1 \rightarrow \lambda_2$，则可以以 $1/\lambda_1$ 和 $1/\lambda_2$ 为半径分别作两个球(见图 F7)，在球面中间所包含的各格点都分别代表一个可能的反射干涉。

# <font color="#000000">Neutron diffraction and electron diffraction</font>

The neutron energy for <span style="font-weight:bold; color:rgb(202, 83, 85)">neutron diffraction</span> <span style="background:rgba(215, 135, 150, 0.55)">must be 0.1 eV</span> and can be obtained with the development of atomic energy technology. Compared with the X-ray diffraction method, it has the following advantages:

1. X-ray diffraction has a large difference in diffraction intensity between heavy and light atoms. Heavy atoms have strong diffraction intensity while light atoms have weak diffraction intensity. However, the scattering intensity of neutrons by light and heavy atomic nuclei is not very different.
2. X-rays cannot distinguish atoms with similar atomic weights, while neutrons do not scatter in the same way for adjacent nuclei.
3. Neutrons are scattered by atomic magnetic moments, so they are used to <span style="background:rgba(215, 135, 150, 0.55)">study the microstructure of atomic magnetism</span>.

<span style="font-weight:bold; color:rgb(202, 83, 85)">Electron diffraction</span> has the following characteristics: Since electrons are strongly scattered by atoms, the electron beam can only penetrate a few to dozens of atomic layers of the crystal. <span style="background:rgba(145, 156, 255, 0.55)">This method is suitable for studying the structure of each layer of atoms within the crystal surface.</span>

