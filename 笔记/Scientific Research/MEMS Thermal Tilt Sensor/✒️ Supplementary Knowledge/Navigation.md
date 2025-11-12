### **I. Fundamental Theory Enhancement**

#### **1. MEMS Device Principles**  
   - Supplement fundamental principles of MEMS sensors (e.g., **thermal convective type**, piezoresistive type, capacitive type).  
   - Study the working mechanism of thermal convective tilt sensors (**gas thermal diffusion**, relationship between temperature gradient and tilt angle).  
   - Understand **fluid dynamics and heat transfer characteristics** at micro/nano scales (e.g., gas flow models in microcavities).  

##### Reference books

- [微机电系统基础](https://vip.123pan.cn/1823290578/13344311)：Basically covers the basic principles, devices and research methods of MEMS technology.

![[笔记/pic/微机电系统基础.png]]  

- [MEMS与微系统 设计、制造及纳尺度工程](https://vip.123pan.cn/1823290578/13345052)

![[笔记/pic/MEMS与微系统.png]]  

##### Reference online courses

- [COMSOL官方 - COMSOL MEMS仿真](https://www.bilibili.com/video/BV1L7411L7DL/?spm_id_from=333.337.search-card.all.click): COMSOL official bragging course has no real substance. The only example is still a piezoelectric sensor. It is okay to get familiar with the basic operations of COMSOL.
- [COMSOL官方 - MEMS模块多物理场仿真培训](https://www.bilibili.com/video/BV14Z4y1s7ec/?spm_id_from=333.337.search-card.all.click): COMSOL official simulation training has a very long duration.
- [印度理工学院 - MEMS与微系统](https://www.bilibili.com/video/BV1CK4y1K7u3/?spm_id_from=333.337.search-card.all.click): Open online courses by Indian bros, having picture quality comparable to that of landline phones. They are courses at an <span style="font-weight:bold; color:rgb(254, 118, 120)">introductory level</span>.

#### 2. **Multiphysics Coupling Theory**  
   - Master basic equations for **thermal-fluid-structure coupling** (e.g., Navier-Stokes equations, heat conduction equation, structural mechanics equations):  
     $$  
     \rho \left( \frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u} \right) = -\nabla p + \mu \nabla^2 \mathbf{u} + \mathbf{F}  
     $$  
   - Learn multiphysics modeling methods in COMSOL (e.g., boundary condition configuration, parametric sweeps).  

##### Reference books

This <span style="font-weight:bold; color:rgb(254, 118, 120)">needs to be learned a bit more</span>. I don't expect you to learn all of them one by one. Here I list a few reference books for your reference.

###### Theoretical Mechanics

[力学（第五版）](https://vip.123pan.cn/1823290578/13347645): **Landau** for the win! Of course, this book is not suitable for beginners like us. Just enshrine it here like a deity.

###### Thermodynamics and Statistical Physics

<center>To be updated</center>

###### Fluid Mechanics

<center>To be updated</center>

###### Heat Transfer

<center>To be updated</center>

###### Continuum Mechanics

<center>To be updated</center>

###### Computational Fluid Dynamics (CFD)

<center>To be updated</center>

##### Reference online courses

<center>To be updated</center>

#### 3. **Material & Fabrication Fundamentals**  
   - Investigate thermal properties of microelectronics materials (e.g., thermal conductivity $k$ and thermal expansion coefficient $\alpha$ of **silicon**, glass, PDMS).  
   - Familiarize with impacts of MEMS fabrication processes (**photolithography**, etching, thin-film deposition) on device performance.

### **II. Advanced Simulation Tools**  

1. **Advanced COMSOL Applications**  
   - Learn 3D modeling techniques (complex geometry construction, mesh optimization)  
   - Master parametric simulation and optimization modules (e.g., parametric scans, sensitivity analysis)  
   - Practice multiphysics coupling simulations (thermal-field, flow-field, and structural-field joint analysis)  

2. **Data Analysis & Visualization**  
   - Process simulation data using MATLAB/Python (temperature field distribution, flow velocity field extraction)  
   - Learn data fitting and optimization algorithms (e.g., genetic algorithms, gradient descent methods)


### **III. Interdisciplinary Knowledge Expansion**  

1. **Fundamentals of Fluid Mechanics**  
   - Supplement **microscale fluid mechanics** (e.g., impact of Knudsen number $Kn$ on flow regimes).  
   - Study mathematical models for natural and forced convection (e.g., Grashof number $Gr$, Prandtl number $Pr$).  

2. **Thermal Science & Heat Transfer**  
   - Master heat transfer mechanisms: **conduction**, convection, and radiation.  
   - Understand **thermal boundary layer theory** and its applications in sensor design.  

3. **Gas Dynamics**  
   - Investigate thermophysical properties of gases (air, argon, nitrogen): **specific heat capacity $c_p$**, viscosity $\mu$.  
   - Study the impact of gas species on thermal convection responses (e.g., enhanced sensitivity with low-density gases).   

### **IV. Research Skill Enhancement**  

1. **Literature Retrieval & Review**  
   - Learn to search for cutting-edge MEMS sensor papers using academic databases (**IEEE Xplore**, ScienceDirect).  
   - Master literature management tools (**EndNote/Zotero**) and academic writing standards.  

2. **Experimental Design Thinking**  
   - Understand **simulation-experiment correlation** (e.g., guiding fabrication parameters via simulations).  
   - Learn **experimental error analysis** and validation methods (e.g., comparison with experimental data).  

3. **Project Management & Collaboration**  
   - Define phased goals and workflows (e.g., 2D optimization → 3D modeling → multi-scenario validation).  
   - Adopt collaboration tools (**Git version control**, online document sharing).  


### **V. Practical Skill Supplementation**  

1. **Micro/Nanofabrication Basics**  
   - Observe MEMS fabrication processes in labs (e.g., **photolithography**, dry/wet etching).  
   - Learn how process parameters affect device performance (e.g., thin-film thickness control).  

2. **Prototype Testing Fundamentals**  
   - Understand sensor test platform setup (e.g., **temperature control systems**, tilt-stage calibration).  
   - Study signal acquisition and noise suppression methods (e.g., **lock-in amplification techniques**).  


### **VI. Frontier Exploration**  

1. **Novel Material Applications**  
   - Explore **flexible materials (PDMS)** and nanomaterials (graphene) in MEMS.  
   - Investigate packaging impacts on sensor stability (e.g., **vacuum encapsulation**, pressure control).  

2. **Low-Power Design Concepts**  
   - Optimize heat source power via **pulsed heating** and dynamic power management.  
   - Explore self-powering technologies (e.g., **energy harvesting-storage integration**).  
