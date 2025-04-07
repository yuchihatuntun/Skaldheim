# **2.0 Introduction** 
Learning about integrated circuit design can be approached using one of two extreme methods: 

(1) Starting with quantum mechanics, understanding solid-state physics, semiconductor device physics, and device modeling, culminating in circuit design;

(2) Viewing each semiconductor device as a black box, its behavior described by its terminal voltage and current, with circuit design rarely considering the internal workings of the device. 

Experience shows that neither of these two methods is optimal. 
- The first method does not allow readers to see the relationship between various physical phenomena and the designed circuit;
- While in the second method, people are often confused by the contents of the black box.  

In the modern IC industry, a thorough understanding of semiconductor devices is crucial. This is especially important for analog circuit design compared to digital circuits, because in analog design, ==we cannot treat transistors as simple switches==. Many secondary effects of transistors directly impact their performance. Moreover, with each generation update of IC technology, device sizes shrink proportionally, making these effects even more significant. Since designers often need to determine which effects can be ignored in a given circuit, a deep understanding of device operation proves to be extremely valuable. 

<span style="font-weight:bold; color:rgb(234, 69, 73)">We are learning the basic physical characteristics of MOSFETs at the device level. 
</span>This involves the most basic content required for fundamental analog circuit design. 

The ultimate goal is to ==establish a circuit model for each device== by analyzing its operating state. This requires a deep understanding of the fundamental principles behind the device.  

# **2.1 Basic Concepts**

### **2.1.1 MOSFET switch**

Before studying the actual working principle of a MOSFET, let's consider ==a simplified model== of this device to gain an intuitive understanding of the transistor: <span style="font-weight:bold; color:rgb(234, 69, 73)">what characteristics do we expect it to have, and which aspects of these characteristics are important?</span> 
![[Pasted image 20250223132836.png|152]]
Figure 2.1 is a symbol for an n-type MOSFET, showing the three terminals: gate (G), source (S), and drain (D). This device is ==symmetrical==, so the source (S) and drain (D) can be interchanged. 

When acting as a switch, 
- if the gate voltage $V_G$ is high, the transistor connects the source and drain together; 
- if the gate voltage $V_G$ is low, the source and drain are open.  

Even for such a simple description, we still need to answer several questions: 
1. What value of $V_G$ causes the device to conduct? In other words, what is the threshold voltage? 
2. When the device conducts (or breaks), how large is the resistance between the source and drain? 
3. How does this resistance relate to the terminal voltage? 
4. Can the channel between the source and drain always be simulated with a simple linear resistor? 
5. What factors limit the speed of the device? 

Although these problems are raised at the circuit level, answers can only be found by ==analyzing the structure and physical properties of transistors==. 

### **2.1.2 MOSFET Structure** 
![[Pasted image 20250223133855.png|529]]
A simplified structure of an n-type Metal-Oxide-Semiconductor (NMOS) device is shown in Figure 2.2. The device is fabricated on 
- a p-type substrate (also called bulk or body),
- two heavily doped n regions forming the source and drain, respectively. 
- a heavily doped (conductive) polycrystalline silicon region (abbreviated as poly) acts as the gate,
- a thin layer of SiO₂ (abbreviated as gate oxide) isolates the gate from the substrate. 

The effective operation of the device occurs in the substrate region under the gate oxide. 

Note that the source and drain are ==symmetrical== in this structure. 

The horizontal dimension of the source/drain diffusion channel is called the gate length ($L$), and the vertical dimension of the gate is called the gate width ($W$). Due to lateral diffusion of the source/drain junctions during fabrication, ==the actual distance between the source and drain is slightly less than L==. To avoid confusion, we define 
 $$L_{\text{eff}} = L_{\text{drawn}} - 2L_D$$In this equation, $L_{\text{eff}}$ is called the ==effective channel length==, $L_{\text{drawn}}$ is the total length, and $L_D$ is the lateral diffusion length. As we will see later, $L_{\text{eff}}$ and the oxide thickness $t_{\text{ox}}$ play a very important role in the performance of MOS circuits. Therefore, <span style="font-weight:bold; color:rgb(234, 69, 73)">the main driving force in the development of MOS technology is to reduce these two dimensions generation after generation without degrading the performance of other device parameters.</span> 
 
The typical values for these dimensions were $L_{\text{eff}} \approx 10 \text{ nm}$ and $t_{\text{ox}} \approx 15 \text{ Å}$.  From now on, <span style="font-weight:bold; color:rgb(234, 69, 73)">L will be used to represent the effective length</span> unless otherwise stated. 

If the $source$ is defined as the terminal that ==provides charge carriers== (electrons in an NMOS device) and the $drain$ as the terminal that ==collects charge carriers==, this becomes clear. 

<span style="font-weight:bold; color:rgb(234, 69, 73)">The source and drain terminals are defined based on their actual electrical potential</span>:

- **Source:** Typically, the region where charge carriers (electrons or holes) enter the channel. In NMOS, the source is usually connected to a lower potential (e.g., $ground$), while in PMOS it's connected to a higher potential (e.g., power supply $Vdd$). This is because charge carriers always flow from high potential to low potential.

- **Drain:** The region where charge carriers leave the channel, typically connected to the circuit output or load. Its potential may be higher or lower than the source, depending on the circuit's operating state. 

So far, we haven't considered the substrate of the device. In fact, the potential of the substrate has a significant impact on the device characteristics. That is to say, a MOSFET is a ==four-terminal device==. 

Since in a typical MOS operation, both source/drain diodes must be reverse-biased（<span style="font-weight:bold; color:rgb(234, 69, 73)">Because MOSFETs primarily work by forming a channel rather than using PN junctions to conduct current.</span>）, we consider the substrate of an NMOS transistor to be connected to the lowest voltage level in the system. 
![[Pasted image 20250223161205.png|489]]

In complementary MOS (CMOS) technology, both NMOS and PMOS transistors are used. From a simple perspective, a PMOS device can be realized by inverting all doping types (including the substrate), as shown in Figure 2.4(a). However, in actual production, NMOS and PMOS devices must ==be fabricated on the same chip==, meaning on the same substrate.
![[Pasted image 20250223161451.png|551]]
Due to this reason, a certain type of device needs to be fabricated on a "==local substrate==," commonly called a "well." In modern CMOS processes, PMOS devices are made in an n-well. 

Note that the n-well must be biased to a certain potential so that the source/drain junction diodes of the PMOS transistors remain reverse-biased at all times. In most circuits, the n-well is connected to the most positive power supply. 

For simplicity, NMOS and PMOS devices are sometimes referred to as "NFETs" and "PFETs," respectively. 

### **2.1.3 MOS Symbol** 
![[Pasted image 20250223162616.png]]
用来表示NMOS和PMOS晶体管的电路符号如图2.5所示。图2.5(a)中的符号包括晶体管的所有四个端子，其中衬底用B(bulk)而不是用S来表示，以免与源极相混淆。PMOS器件的源极放在顶端，这是为了直观起见，因为源极比栅极的电位高。由于在大多数电路中，NMOS和PMOS器件的衬底端子分别接地和VDD，所以我们画图时通常省略这一连接。在数字电路中，习惯上用图2.5(c)所示的开关符号来表示两种MOS管。但是我们更喜欢图2.5(b)的表示，因为明确地区分源和漏对于理解电路的工作被证明是很有帮助的。

>[!note] 纳米设计注意
>一些现代CMOS工艺提供“深n阱”技术，即n阱包括了NMOS器件及其p型衬底。如下图所示，“深n阱”中NMOS的衬底是“本地化”的，不需要连接到其它NMOS器件的衬底上。但是采用该技术的设计导致相当大面积的开销。因为深n阱必须在p阱之外伸展一定的面积，而且必须与常规的n阱保持一定的间隔。
# **2.3 Secondary Effect** 

### **Body Effects** 
![[Pasted image 20250223155608.png|420]]
In the analysis of Figure 2.10, we implicitly assumed that the transistor's substrate and source are grounded.  

如果$N_{FET}$的衬底电压减小到低于源电压时将会发生什么情况？由于源结和漏结维持反向偏置，我们假定器件仍能正常工作，但是某些特性可能会改变。为了理解这种影响，假设$V_S = V_D = 0$，而且$V_G$略小于$V_{TH}$以使栅下形成耗尽层但没有反型层存在。当$V_B$变得更负时，将有更多的空穴被吸引到衬底电极，而同时留下大量的负电荷，如图2.23所示，耗尽层变得更宽了。从公式(2.1)

我们知道，阈值电压是耗尽层电荷总数的函数，因为在反型层形成之前，栅极电荷必定镜像$Q_d$。因此，随着$V_B$的下降，$Q_d$增加，$V_{TH}$也增加。这称为“体效应”或“背栅效应”。
