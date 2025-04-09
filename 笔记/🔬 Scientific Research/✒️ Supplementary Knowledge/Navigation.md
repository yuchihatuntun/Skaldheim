### **1. Fundamental Theory Enhancement**

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






3. **Material & Fabrication Fundamentals**  
   - Investigate thermal properties of microelectronics materials (e.g., thermal conductivity $k$ and thermal expansion coefficient $\alpha$ of **silicon**, glass, PDMS).  
   - Familiarize with impacts of MEMS fabrication processes (**photolithography**, etching, thin-film deposition) on device performance.

---

### **二、仿真工具进阶**

1. **COMSOL高级应用**  
   - 学习三维建模技巧（复杂几何结构构建、网格优化）  
   - 掌握参数化仿真与优化模块（如参数扫描、灵敏度分析）  
   - 实践多物理场耦合仿真（热场-流场-结构场联合分析）

2. **数据分析与可视化**  
   - 使用MATLAB/Python处理仿真数据（温度场分布、流速场提取）  
   - 学习数据拟合与优化算法（如遗传算法、梯度下降法）

---

### **三、跨学科知识拓展**

1. **流体力学基础**  
   - 补充微尺度流体力学（如Knudsen数对流动状态的影响）  
   - 学习自然对流与强制对流的数学模型（如Grashof数、Prandtl数）

2. **热学与传热学**  
   - 掌握热传导、对流、辐射的传热机制  
   - 理解热边界层理论及其在传感器设计中的应用

3. **气体动力学**  
   - 了解不同气体（如空气、氩气、氮气）的热物理性质（比热容、粘度）  
   - 学习气体种类对热对流响应的影响（如低密度气体对灵敏度的提升）

---

### **四、科研技能提升**

1. **文献检索与综述能力**  
   - 学习使用学术数据库（IEEE Xplore、ScienceDirect）查找MEMS传感器前沿论文  
   - 掌握文献管理工具（EndNote/Zotero）与学术写作规范

2. **实验设计思维**  
   - 理解仿真与实验的关联性（如如何通过仿真指导实际工艺参数选择）  
   - 学习实验误差分析与结果验证方法（如仿真与实测数据对比）

3. **项目管理与协作**  
   - 制定阶段性目标与分工（如二维优化→三维建模→多工况验证）  
   - 学习团队协作工具（Git版本控制、在线文档协作）

---

### **五、实践技能补充**

1. **微纳加工基础**  
   - 参观实验室了解MEMS器件制造流程（如光刻、干法/湿法蚀刻）  
   - 学习工艺参数对器件性能的影响（如薄膜厚度控制的工艺方法）

2. **原型测试基础**  
   - 了解传感器测试平台搭建（如温控系统、倾斜台校准）  
   - 学习信号采集与噪声抑制方法（如锁相放大技术）

---

### **六、前沿领域探索**

1. **新型材料应用**  
   - 关注柔性材料（如PDMS）与纳米材料（如石墨烯）在MEMS中的应用  
   - 了解封装技术对传感器稳定性的影响（如真空封装与气压控制）

2. **低功耗设计理念**  
   - 学习热源功率优化策略（如脉冲加热与动态功耗控制）  
   - 探索自供电技术（如能量采集与存储集成）

---

### **学习建议**

1. **短期目标（1-3个月）**  
   - 完成COMSOL官方教程中多物理场模块学习  
   - 精读3-5篇MEMS热对流传感器的经典论文（如参考文献中Fuxue Zhang、Ye等人的研究）

2. **中期目标（3-6个月）**  
   - 通过校选课/慕课补充《微机电系统设计》《计算流体力学》课程  
   - 参与实验室开放日了解MEMS加工设备操作

3. **长期目标（6-12个月）**  
   - 结合项目进展撰写技术报告或论文初稿  
   - 尝试将仿真结果与已有实验数据对比验证

---

通过系统性补充上述知识，可显著提升项目的理论深度与仿真可信度，并为后续实验验证及实际应用奠定基础。
