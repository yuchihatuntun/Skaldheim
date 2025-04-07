This chapter mainly elaborates on the properties and electrical characteristics of semiconductor materials and devices. First, we consider the electrical properties of solids. Common semiconductor materials are usually single-crystal materials. The electrical properties of single-crystal materials depend not only on their chemical composition but also on the arrangement of atoms in the solid. Therefore, it is necessary for us to understand the crystal structure of solids. The formation or growth of single-crystal materials is an important part of semiconductor technology. This chapter briefly discusses several semiconductor growth techniques to enable readers to understand some terms used to describe the structure of semiconductor devices. 

# **1.0 Overview** 
This chapter contains the following: 

- Describe the three classifications of solids: amorphous, polycrystalline, and single crystal.
- Discuss the concept of a unit cell.
- Describe three types of single crystal structures and calculate the atomic volume density and surface density for each structure.
- Describe the diamond crystal structure.
- Briefly discuss several methods for forming single crystal semiconductor materials. 


# **1.2 Solid Type** 

<span style="font-weight:bold; color:rgb(134, 164, 254)">Amorphous, polycrystalline, and single-crystal are the three basic types of solids.</span> The characteristic of each type is determined by <span style="font-weight:bold; color:rgb(238, 135, 135)">the size of the ordered regions in the material</span>. 
![[Pasted image 20250223231720.png|384]]

An ordered region refers to a spatial domain where atoms or molecules have a regular or periodic geometric arrangement. 

- Amorphous materials are only ordered at the scale of a few atoms or molecules. 

- Polycrystalline materials, on the other hand, are ordered at the scale of many atoms or molecules. These ordered regions are called single-crystal regions and vary in size and direction. 

- Single-crystal regions are called grains, which are separated from each other by grain boundaries. Single-crystal materials have a high degree of geometric periodicity throughout their entire structure. 

The advantage of single-crystal materials is that <span style="font-weight:bold; color:rgb(247, 170, 88)">their electrical properties are usually better than those of non-single-crystal materials</span> because grain boundaries lead to a degradation of electrical properties. [^3]

# **1.3 Space Lattice** 

We primarily focus on single-crystal materials where atoms are arranged in a geometrically periodic manner. <span style="font-weight:bold; color:rgb(134, 164, 254)">A single crystal is formed when a typical unit or group of atoms repeats itself in a specific interval along every direction in three dimensions.</span> This periodic arrangement of atoms within a crystal is called a lattice.  
### **1.3.1 Original Cells and Crystal Cells** 

We describe a particular atomic arrangement using points called <span style="font-weight:bold; color:rgb(238, 135, 135)">lattice points</span>. Figure 1.2 shows an infinite two-dimensional lattice array. The simplest way to <span style="font-weight:bold; color:rgb(134, 164, 254)">repeat the atomic arrangement is by translation</span>.  

Each lattice point in $Fig. 1.2$ is translated by $a_1$ in one direction and $b_1$ in another, non-collinear direction, to produce a two-dimensional crystal lattice. By translating in a third, non-collinear direction, we obtain a three-dimensional crystal lattice. The translation directions <span style="font-weight:bold; color:rgb(247, 170, 88)">do not necessarily have to be perpendicular</span>. 
![[Pasted image 20250223232907.png|273]]
Because a three-dimensional crystal lattice is a periodic repetition of atoms, we don't need to consider the entire lattice; we only need to consider the basic repeating unit. This basic unit, called a unit cell, is a small portion of the crystal that can be replicated to produce the entire crystal. Unit cells come in various structures. Figure 1.3 shows several possible unit cell structures in a two-dimensional lattice.  

Unit cell A can be translated in the $a_2$ and $b_2$ directions, while unit cell B can be translated in the $a_3$ and $b_3$ directions. Any combination of these unit cell translations can construct the entire two-dimensional lattice. Unit cells C and D in Figure 1.3 can also generate the complete lattice through appropriate translations. The discussion about two-dimensional unit cells can be easily extended to three dimensions to describe actual single-crystal materials.  



# **1.7 Growth of Semiconductor Materials** 

The success of manufacturing very large-scale integrated circuits (VLSI) heavily relies on the continuous advancement of techniques for forming or growing single-crystal semiconductor materials. Semiconductors are among the purest materials; for example, most impurities in silicon have a concentration less than one billionth. This demand for high purity means that every step in the growth and manufacturing process must be handled with extreme care. The mechanical and dynamic principles of crystal growth are extremely complex. Although this book describes them using the most common terms, it is beneficial to have some understanding of the growth techniques and terminology. 

### **1.7.1 Growing in a Melt** 

<span style="font-weight:bold; color:rgb(234, 69, 73)">The Czochralski method</span> is a common technique for growing ==single crystals==. In this technique, a small piece of single crystal material called a seed crystal is brought into contact with the surface of a liquid phase of the same material, and then slowly pulled up from the melt. 
![[Pasted image 20250223225834.png|480]]
When a seed crystal is slowly pulled upward, solidification occurs at the solid-liquid interface. Typically, as the crystal is pulled, it is also slowly rotated to stir the melt and achieve more uniform temperature distribution.  A controlled amount of impurity atoms, such as boron or phosphorus, are added to the melt, resulting in a semiconductor crystal doped with intentional impurities after growth. Figure 1.21(a) shows a schematic diagram of the Czochralski growth method and ==the silicon ingot==, also known as ==boule==, produced by this process.  

Some unnecessary impurities may also appear in silicon ingots. 

Zone refining is a common technique for purifying materials. It involves a high-temperature coil, or an r-f induction coil[^1], slowly moving along the axis of a silicon ingot. 

The temperature induced by the coil is sufficient to form a liquid layer. At the solid-liquid interface, impurities exhibit a certain distribution. The parameter describing this distribution is called <span style="font-weight:bold; color:rgb(234, 69, 73)">the segregation coefficient</span>, which is ==the ratio of impurity concentration in the solid phase to that in the liquid phase==. 

As the liquid zone moves through the material, impurities are carried away with the liquid. After several passes of the r-f induction coil, <span style="font-weight:bold; color:rgb(134, 164, 254)">most impurities concentrate at both ends of the silicon rod, which can then be removed</span>. This process, also known as zone melting or zone refining, achieves the desired purity level. [^2]

半导体生长之后，硅锭被机械地切削出合适的直径并做出沿轴向的一个平底面来表征晶向。此平面与$[110]$方向垂直，它是$(110)$平面。允许每个芯片沿着给定的晶面制作，以使划片更容易些。接下来将硅棒切成硅片。硅片要足够厚，以便能支撑自身。机械双面打磨工艺能够获得一致厚度的平整硅片。由于这种工艺留下了表面损伤和机械操作沾污，表面还要用化学腐蚀去除。最后一步是抛光，得到光滑表面，在上面可以制作物件或进行后续的生长工艺。这个最终的硅片称为衬底材料。





































[^1]: A Radio Frequency Induction Coil is a type of electromagnetic coil used to generate or receive radio frequency signals. It typically consists of wire wound in a spiral or ring shape, capable of interacting with electromagnetic fields within the radio frequency range (generally referring to electromagnetic wave frequencies between 3 kHz and 300 GHz).  

[^2]: The coil is designed to generate a high-frequency electromagnetic field. When a substance (such as a mixture) passes through this device, the coil heats or excites its components. Because different substances react differently to electromagnetic fields or heat—for example, some impurities may be more easily heated, vaporized, or separated—this allows for the removal of unwanted impurities or the extraction of target components. 

[^3]: In single-crystal materials, atoms are arranged in an orderly manner, allowing electrons to flow smoothly with minimal hindrance. However, the disordered structure at grain boundaries scatters electrons, making their movement more difficult and even trapping them. This results in increased electrical resistance and decreased conductivity. 



