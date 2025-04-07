# <font color="#000000">Impurity Levels in Silicon and Germanium Crystals</font>
### <font color="#000000">Substitution Impurities and Interstitial Impurities</font>

Impurities in semiconductors primarily originate from the <span style="background:rgba(255, 220, 103, 0.55)">insufficient purity</span> of the raw materials used to create them, contamination during the semiconductor single crystal fabrication process and device manufacturing, or the <span style="background:rgba(255, 220, 103, 0.55)">intentional introduction of atoms</span> of a specific chemical element to control the semiconductor's properties.

Silicon is a <span style="background:rgba(118, 144, 255, 0.55)">Group IVA element</span> in the periodic table of chemical elements; each silicon atom possesses 4 valence electrons, and silicon atoms combine into crystals through covalent bonds. Its crystal structure is <span style="background:rgba(118, 144, 255, 0.55)">diamond cubic</span>, with a cubic unit cell. <span style="background:rgba(118, 144, 255, 0.55)">Eight silicon atoms</span> are contained within one unit cell. If we approximate the atoms as spheres of radius $r$, we can calculate the percentage of the unit cell's volume occupied by these eight atoms.

The distance between the center of a sphere located at a vertex of a cube and the center of another sphere located 1/4 of the cube's space diagonal length away from that vertex is equal to the sum of the two spheres' radii, $2r$. This should equal 1/4 of the length of the space diagonal of a cube with side length $a$, which is $\sqrt{3}a$. Therefore, <span style="background:rgba(255, 220, 103, 0.55)">the sphere's radius</span> $r = \sqrt{3}a/8$.

The volume of 8 spheres divided by the volume of the unit cell is:
$$
\frac{8 \times \frac{4}{3} \pi r^3}{a^3} = \frac{\sqrt{3}\pi}{16} \times 100\% \approx 34\%
$$
![[Pasted image 20250314025353.png]]

This result demonstrates that in diamond-structured crystals, the 8 atoms within a unit cell occupy only about 34% of the unit cell's volume, with the <span style="background:rgba(118, 144, 255, 0.55)">remaining 66% being void space</span>. The two types of void spaces in the diamond-structured crystal are shown in the figure, and these are commonly referred to as <span style="font-weight:bold; color:rgb(44, 80, 165)">interstitial sites</span>.

- $Figure 2-1(a)$ illustrates <span style="background:rgba(255, 220, 103, 0.55)">tetrahedral interstitial sites</span>, which are voids formed within a regular tetrahedron composed of 4 atoms connected by the dashed lines in the figure $T$；
- $Figure 2-1(b)$ illustrates the <span style="background:rgba(255, 220, 103, 0.55)">hexagonal interstitial site</span>, which is the space enclosed by the 6 atoms connected by the dashed lines in the figure $H$。

In conclusion, after impurity atoms enter semiconductor silicon, they can only exist in two ways. One way is for the impurity atoms to occupy interstitial sites between lattice atoms, commonly referred to as <span style="font-weight:bold; color:rgb(44, 80, 165)">interstitial impurities</span>; the other way is for the impurity atoms to substitute lattice atoms and reside at lattice points, commonly referred to as <span style="font-weight:bold; color:rgb(44, 80, 165)">substitutional impurities</span>. In fact, impurity atoms entering other semiconductor materials also exist in these two ways.
![[Pasted image 20250314030129.png|236]]
$Figure 2-2$ illustrates a schematic diagram of interstitial and substitutional impurities in the crystal lattice of silicon. In the figure, 

- A represents an interstitial impurity, 
- B represents a substitutional impurity. 

 <span style="background:rgba(118, 144, 255, 0.55)">Interstitial impurities are generally small atoms</span>, such as lithium ions (Li$^+$), which have a radius of 0.068 nm, making them interstitial impurities in silicon, germanium, and gallium arsenide.

Generally, when forming substitutional impurities, it's required that <span style="background:rgba(255, 220, 103, 0.55)">the size</span> of the substitutional impurity atom be relatively close to the size of the crystal lattice atom being replaced, and that <span style="background:rgba(255, 220, 103, 0.55)">their valence shell electron structures</span> are also relatively similar. For example, silicon and germanium are Group IV elements, and their situations are relatively similar to those of Group III and Group V elements; therefore, Group III and Group V elements are substitutional impurities in silicon and germanium crystals.

The number of impurity atoms per unit volume is referred to as <span style="font-weight:bold; color:rgb(44, 80, 165)">impurity concentration</span>, and it's typically used to represent the amount of impurities in a semiconductor crystal.

### <font color="#000000">Donor impurities, donor levels</font>
![[Pasted image 20250315121157.png]]
<center>Figure 2-3 Donor impurities in silicon</center>

Let's first consider the case of doping silicon with phosphorus ($P$) to discuss the effect of Group V impurities. As shown in Figure 2-3, a phosphorus atom occupies the position of a silicon atom. The phosphorus atom has five valence electrons, four of which form covalent bonds with the surrounding four silicon atoms, leaving one valence electron remaining. Simultaneously, there is an extra positive charge of +$q$ at the phosphorus atom's location (a silicon atom losing a valence electron has a positive charge of 4$q$, and a phosphorus atom losing a valence electron has a positive charge of 5$q$), which is called the <span style="font-weight:bold; color:rgb(202, 83, 85)">positive charge center phosphorus ion</span> (P$^+$).

Therefore, after phosphorus atoms replace silicon atoms, <span style="background:rgba(145, 156, 255, 0.55)">the effect is to create a positive charge center</span>, P$^+$, <span style="background:rgba(145, 156, 255, 0.55)">and an excess valence electron</span>. This excess valence electron is then bound around the positive charge center, P$^+$. However, <span style="background:rgba(215, 135, 150, 0.55)">this binding force is much weaker than that of a covalent bond</span>; a small amount of energy can break it free, allowing it to become a conducting electron and move freely within the lattice. At this point, the phosphorus atom becomes a phosphorus ion with one fewer valence electron (P$^+$), which is <span style="background:rgba(145, 156, 255, 0.55)">an immobile positive charge center</span>.

<center>Table 2-1 Ionization energy of group V impurities in silicon</center>
![[Pasted image 20250315121956.png]]
The process by which electrons break free from the binding of impurity atoms and become conductive electrons is called <span style="font-weight:bold; color:rgb(202, 83, 85)">impurity ionization</span>. The energy required to break free this extra valence electron and become a conductive electron is called <span style="font-weight:bold; color:rgb(202, 83, 85)">the ionization energy of the impurity</span>. Let $\Delta E_D$ represent this. Experimental measurements indicate that <span style="background:rgba(145, 156, 255, 0.55)">the ionization energy of Group V impurities in silicon and germanium is very small</span>, ranging from $0.04\ to\ 0.05\ eV$ in silicon and approximately $0.01 eV$ in germanium, <span style="background:rgba(215, 135, 150, 0.55)">significantly smaller than the band gap width</span> $E_g$ <span style="background:rgba(215, 135, 150, 0.55)">of silicon and germanium</span>, as shown in Table 2-1.

When group V impurities are ionized in silicon and germanium, they can release electrons to generate conductive electrons and form positive charge centers. They are called <span style="font-weight:bold; color:rgb(202, 83, 85)">donor impurities</span> or <span style="font-weight:bold; color:rgb(202, 83, 85)">n-type impurities</span>. The process of releasing electrons by them is called <span style="font-weight:bold; color:rgb(202, 83, 85)">donor ionization</span>. When donor impurities are not ionized, they are neutral and are called <span style="font-weight:bold; color:rgb(202, 83, 85)">bound state</span> or <span style="font-weight:bold; color:rgb(202, 83, 85)">neutral state</span>. After ionization, they become positive charge centers and are called ionized state.
![[Pasted image 20250315122252.png]]
<center>Figure 2-4 Donor energy levels and donor ionization</center>

The ionization process of donor impurities can be represented using an <span style="background:rgba(145, 156, 255, 0.55)">energy band diagram</span>, as shown in $Figure 2-4$. After gaining energy $\Delta E_D$, an electron transitions from the donor's bound state to the conduction band, becoming a conduction electron. Therefore, the energy of the electron when bound to the donor impurity is lower than the bottom of the conduction band, $E_c$, by $\Delta E_D$. The energy states of electrons bound by donor impurities are known as <span style="font-weight:bold; color:rgb(202, 83, 85)">donor energy levels</span>, denoted as $E_D$. Because $\Delta E_D \ll E_g$, <span style="background:rgba(145, 156, 255, 0.55)">the donor energy level is located within the band gap close to the bottom of the conduction band</span>. Generally, donor impurities are present in small numbers, and <span style="background:rgba(215, 135, 150, 0.55)">the interaction between impurity atoms can be neglected</span>.

A certain type of impurity's donor energy levels are <span style="background:rgba(145, 156, 255, 0.55)">isolated energy levels with the same energy</span>. In the band diagram, the donor energy level is represented by a short segment located at $\Delta E_D$ away from the bottom of the conduction band, $E_c$, with <span style="background:rgba(215, 135, 150, 0.55)">each segment corresponding to a donor impurity atom</span>. A small black dot is drawn on the donor energy level $E_D$ to indicate the electron bound by the donor impurity atom; at this point, the donor impurity is in a bound state. The "+" symbol drawn at the energy level of the donor indicates <span style="background:rgba(145, 156, 255, 0.55)">a positive charge after ionization of the donor impurity</span>.

### <font color="#000000">Acceptor impurity, acceptor energy level</font>
![[Pasted image 20250315123715.png]]
<center>Figure 2-5 Acceptor impurities in silicon</center>

When boron (a group III impurity) is doped into a silicon crystal, boron atoms occupy the positions of silicon atoms. As boron has three valence electrons, when forming covalent bonds with four surrounding silicon atoms, it lacks one electron and needs to capture one electron from the silicon lattice, generating a hole. At the same time, after a boron atom accepts an electron, it becomes a negatively charged boron ion (B⁻), which is called a <span style="font-weight:bold; color:rgb(202, 83, 85)">negative charge center</span>.

带负电的硼离子和带正电的空穴间有静电引力作用，所以这个空穴受到硼离子的束缚，在硼离子附近运动。不过，硼离子对这个空穴的束缚是很弱的，只需要很少的能量就可以使空穴挣脱束缚，成为在晶体的共价键中自由运动的导电空穴。而硼原子成为多了一个价电子的硼离子(B$^-$)，它是一个不能移动的负电中心。因为Ⅲ族杂质在硅、锗中能够接受电子而产生导电空穴，并形成负电中心，所以称它们为受主杂质或 p 型杂质。空穴挣脱受主杂质束缚的过程称为受主电离。受主杂质未电离时是中性的，称为束缚态或中性态。电离后成为负电中心，称为受主离化态。

使空穴挣脱受主杂质束缚成为导电空穴所需要的能量，称为受主杂质的电离能，用 $\Delta E_A$ 表示。实验测量表明，Ⅲ族杂质元素在硅、锗晶体中的电离能很小。在硅中约为 0.045～0.065eV[但铟(In)在硅中的电离能为 0.16eV，是一例外]。在锗中约为 0.01eV，比硅、锗晶体的禁带宽度小得多。表 2-2 为Ⅲ族杂质在硅、锗中的电离能的测量值。

受主杂质的电离过程也可以在能带图中表示出来，如图 2-6 所示。当空穴得到能量 $\Delta E_A$ 后，就从受主的束缚态跃迁到价带成为导电空穴，因为在能带图上表示空穴的能量是越向下越高，所以空穴被受主杂质束缚时的能量比价带顶 $E$ 低 $\Delta E_A$。把被受主杂质所束缚的空穴的能量状态称为受主能级，记为 $E_A$。因为 $\Delta E_A \ll E_g$，所以受主能级位于价带顶很近的禁带中。一般情况下，受主能级也是孤立能级，在能带图中，受主能级用离价带顶 $E_g$ 为 $\Delta E_A$ 处的短线段表示，每一条短线段对应一个受主杂质原子。在受主能级 $E_A$ 上画一个小圆圈，表示被受主杂质束缚的空穴，这时受主杂质处于束缚态。图中的箭头表示受主杂质的电离过程，在价带中画的小圆圈表示进入价带的空穴，受主能级处画的 $\oplus$ 号表示受主杂质电离以后带负电荷。

当然，受主电离过程实际上是电子的运动，是价带中的电子得到能量 $\Delta E_A$ 后，跃迁到受主能级上，再与束缚在受主能级上的空穴复合，并在价带中产生了一个可以自由运动的导电空穴，同时也就形成一个不可移动的受主离子。

纯净半导体中掺入受主杂质后，受主杂质电离，使价带中的导电空穴增多，增强了半导体的导电能力，通常把主要依靠空穴导电的半导体称为空穴型或 p 型半导体。

In conclusion, group III and group V impurities are acceptor and donor impurities respectively in silicon and germanium crystals. <span style="background:rgba(145, 156, 255, 0.55)">They introduce energy levels in the forbidden band</span>：

- $Accepter\ energy\ level$ compared to the band edge, $\Delta E_A$,

- $Donor\ energy\ level$ is below the conduction band bottom by $\Delta E_D$.

These impurities can be in two states, namely the un-ionized neutral or bound state and the ionized state. When they are in the ionized state,

- $Acceptor\ impurity$ provides holes to the valence band and becomes the negative center.

- $Donor\ impurity$ provide electrons to the conduction band and become positive charge centers.

Experimental evidence shows that the ionization energies of group III and group V impurities in silicon and germanium are <span style="background:rgba(145, 156, 255, 0.55)">very small</span>. 

These impurity energy levels are usually called <span style="font-weight:bold; color:rgb(202, 83, 85)">shallow energy levels</span>, and impurities that produce shallow energy levels are called <span style="font-weight:bold; color:rgb(202, 83, 85)">shallow-level impurities</span>. At room temperature, the energy of thermal vibration of lattice atoms is transferred to electrons, which can ionize almost all group III and group V impurities in silicon and germanium.

## Simple calculation of ionization energy of shallow-level impurities

Use the <span style="background:rgba(215, 135, 150, 0.55)">hydrogen-like model</span> to estimate the ionization energy of impurities.

As mentioned before, when the $donor\ impurity$ (phosphorus) is in a bound state, this phosphorus atom will have a positive charge center with <span style="background:rgba(145, 156, 255, 0.55)">one more electron charge and a bound valence electron</span> compared to the surrounding silicon atoms. This situation appears to be <span style="background:rgba(215, 135, 150, 0.55)">analogous to adding a "hydrogen atom"</span> to $silicon$ or $germanium$ crystals, allowing for an estimate of the numerical value of $\Delta E_D$ using the hydrogen atom model. The energy $E_n$ of an electron in a hydrogen atom is:
$$
E_n = - \frac{m_0 q^4}{2(4\pi\varepsilon_0)^2 \hbar^2 n^2}
$$

In this equation, $n = 1, 2, 3, \cdots$ is <span style="font-weight:bold; color:rgb(202, 83, 85)">the principal quantum number</span>. 

- When $n = 1$, the ground state energy is $E_1 = \frac{m_0 q^4}{2(4\pi\varepsilon_0)^2 \hbar^2}$; 
- When $n = \infty$, it represents the $ionization\ state$ of the hydrogen atom, where $E_{\infty} = 0$. 

So, the ionization energy of the ground state electron of a hydrogen atom is:

$$
E_0 = E_{\infty} - E_1 = \frac{m_0 q^4}{2(4\pi\varepsilon_0\varepsilon_r)^2 \hbar^2} = 13.6 eV \tag{2-1}
$$

This is <span style="background:rgba(145, 156, 255, 0.55)">a comparatively large value</span>. Considering the impurity atoms present within the crystal, and that positive and negative charges are situated within <span style="background:rgba(215, 135, 150, 0.55)">a dielectric medium with a dielectric constant of</span> $\varepsilon=\varepsilon_0\varepsilon_r$, the gravitational attraction of the electron to the positive charge center will be reduced by a factor of $\varepsilon_r$, and the binding energy will be reduced by a factor of $\varepsilon_r^2$. 

Furthermore, considering that the electron is not moving in free space, but within a periodic potential field of the crystal lattice, the electron's $inertial\ mass$ $m_0$ must be replaced by an $effective\ mass$ $m_n^{*}$.

After such correction, the donor impurity ionization energy can be expressed as:

$$
\Delta E_D = \frac{m_n^{*} q^4}{2(4\pi\varepsilon_0\varepsilon_r)^2 \hbar^2} = \frac{m_n^{*}}{m_0} \frac{E_0}{\varepsilon_r^2}
$$

Similar discussions on acceptor impurities yield the ionization energy of acceptor impurities:

$$
\Delta E_A = \frac{m_p^{*} q^4}{2(4\pi\varepsilon_0\varepsilon_r)^2 \hbar^2} = \frac{m_p^{*}}{m_0} \frac{E_0}{\varepsilon_r^2} \tag{2-3}
$$

The relative dielectric constants $\varepsilon_r$ of $germanium$ and $silicon$ are 16 and 12, respectively; therefore, the donor impurity ionization energies of germanium and silicon are $0.05 m_n^* / m_0$ and $0.1 m_n^* / m_0$, respectively.

$m_n^* / m_0$ is generally less than 1, therefore, the ionization energy of donor impurities in germanium and silicon is certainly less than 0.05 eV and 0.1 eV, and similar conclusions can be drawn for acceptor impurities. This is consistent with experimental results showing that the ionization energy of shallow-level impurities is quite low.

To estimate the magnitude of the ionization energy of donor impurities, we take $m_n^*$ as the effective mass for conductivity, with a value of $1/m_n^* = 1/3(1/m_l + 2/m_t)$. For germanium, $m_l = 1.64 m_0, m_t = 0.819 m_0$; for silicon, $m_l = 0.92 m_0, m_t = 0.19 m_0$, resulting in: $\text{Germanium} m_n^* = 0.12 m_0, \text{Silicon} m_n^* = 0.26 m_0$.

The above calculations do not account for the influence of impurity atoms, so <span style="background:rgba(215, 135, 150, 0.55)">the hydridic model is merely an approximation of the actual situation</span>. Numerous further theoretical studies ${}^{[4.5]}$ exist to bring the theoretical calculation results more in line with experimental measurements.

### <font color="#000000">The compensation effect of impurities</font>
If both donor and acceptor impurities exist simultaneously in a semiconductor, is the semiconductor n-type or p-type? 

This depends on which impurity has a higher concentration. Because <span style="background:rgba(145, 156, 255, 0.55)">there is a mutual cancellation effect between donor and acceptor impurities</span>, it is usually called <span style="font-weight:bold; color:rgb(202, 83, 85)">the compensation effect</span> of impurities.
![[Pasted image 20250315132545.png]]
<center>Figure 2-7 Compensation effect of impurities</center>

As shown in $Figure 2-7$, $N_D$ represents the donor impurity concentration, $N_A$ represents the acceptor impurity concentration, $n$ represents the electron concentration in the conduction band, and $p$ represents the hole concentration in the valence band. Below is a discussion of the compensation effect of impurities, <span style="background:rgba(215, 135, 150, 0.55)">assuming complete ionization of both donor and acceptor impurities</span>.

##### <font color="#000000">When</font> $N_D \gg N_A$

Because the $accepter\ level$ is lower than the $donor\ level$, <span style="background:rgba(145, 156, 255, 0.55)">the electrons from the donor impurities first jump to</span> $N_A$ <span style="background:rgba(145, 156, 255, 0.55)">acceptor levels</span>. 

Additionally, $N_D - N_A$ electrons remain in the donor levels. Under the condition that all impurities are fully ionized, they jump to the conduction band and become conduction electrons. At this point, the electron concentration $n = N_D - N_A \approx N_D$, and the semiconductor is $n-type$, as shown in $Figure 2-7(a)$.

##### <font color="#000000">When</font> $N_A \gg N_D$ 

After all electrons on the donor energy level have transitioned to the acceptor energy level, there remain $N_A - N_D$ holes on the acceptor energy level. These holes can jump into the $valence\ band$ and become conduction holes. Therefore, the hole concentration $p = N_A - N_D \approx N_A$, and the semiconductor is p-type, as shown in $Figure 2-7(b)$.

After compensation, the net impurity concentration in a semiconductor is referred to as the <span style="font-weight:bold; color:rgb(202, 83, 85)">effective impurity concentration</span>. When $N_D > N_A$, then $N_D - N_A$ represents the <span style="font-weight:bold; color:rgb(202, 83, 85)">effective donor concentration</span>; when $N_A > N_D$, then $N_A - N_D$ represents the <span style="font-weight:bold; color:rgb(202, 83, 85)">effective acceptor concentration</span>.

By leveraging impurity compensation, <span style="background:rgba(145, 156, 255, 0.55)">the conductivity type of a specific region within a semiconductor can be altered via diffusion or ion implantation</span> to fabricate various devices. However, if not properly controlled, a situation can arise where $N_D \approx N_A$, meaning the donor electrons just manage to fill the acceptor levels. Although a large number of impurities are present, they cannot provide electrons and holes to the conduction and valence bands. This phenomenon is known as <span style="font-weight:bold; color:rgb(202, 83, 85)">heavily compensated impurity</span>. Such material is easily mistaken for high-purity semiconductor, but in reality, it contains a significant amount of impurities and exhibits poor performance, <span style="background:rgba(215, 135, 150, 0.55)">making it unsuitable for semiconductor device fabrication</span>.

### <font color="#000000">Deep level impurities</font>

In semiconductor silicon and germanium, what will happen if elements from other groups are doped into silicon and germanium?

A large number of experimental measurements show that they also generate energy levels in the forbidden bands of silicon and germanium. In these two diagrams, the energy levels above the midline of the forbidden band are indicated as lower than the energy at the bottom of the conduction band, and the energy levels below the midline of the forbidden band are indicated as higher than the energy at the top of the valence band. The donor energy level is represented by a solid short straight line segment, and the receiver energy level is represented by a hollow short straight line segment.

从这两个图中可以看到，非Ⅲ、V族杂质在硅、锗中产生的能级有以下两个特点：

1. The donor energy level produced by non-ⅲ and V group impurities in the forbidden band of silicon and germanium is <span style="background:rgba(215, 135, 150, 0.55)">far from</span> the bottom of the conduction band, and the receiver energy level produced by them is also far from the top of the valence band. This energy level is usually called the <span style="font-weight:bold; color:rgb(202, 83, 85)">deep energy level</span>, and the corresponding impurities are called <span style="font-weight:bold; color:rgb(202, 83, 85)">deep energy level impurities</span>.

2. 这些深能级杂质能够产生多次电离，每一次电离相应地有一个能级。因此，这些杂质在硅、锗的禁带中往往引入若干个能级。而且，有的杂质既能引入施主能级，又能引入受主能级。例如：

I 族元素铜、银、金在锗中均产生三个受主能级，其中金还产生一个施主能级。在硅中，铜