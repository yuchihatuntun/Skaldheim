

### Mentor Calibre 版图验证工具

随着集成电路“超大规模集成”（芯片功能更复杂、元件密度更高），**需要验证的设计细节呈指数级增长**。此时，**版图物理验证成为“纠错降本”的关键环节**（提前发现设计错误，避免流片后返工，大幅降低成本和风险）。  

> [!note] 核心任务
>
> 芯片设计中，版图物理验证要解决 **“设计是否合法、电学是否合理、物理与逻辑是否一致”**，对应：
>
> 1. **DRC（设计规则检查）**：  
>    检查版图是否符合 **制造工艺规则**（如线宽、线间距、过孔尺寸等），避免因物理设计违规导致芯片制造失败。
> 2. **ERC（电学规则检查）**：  
>    检查电路的 **电学合理性**（如短路、悬空引脚、电源/地连接错误等），排除潜在电气故障。
> 3. **LVS（版图与电路图一致性检查）**：  
>    对比 **物理版图** 和 **原理电路图**，确保两者的电路连接完全一致（防止“画错版图，逻辑白搭”）。

> [!note] 主流工具
> 
> 行业内，主流EDA厂商都提供版图验证工具：  
> 
> - Cadence（Assura）、Synopsys（Hercules）、Mentor（Calibre）。
> - **Calibre的核心竞争力**：  
>   ✔️ **交互界面友好**：工程师易操作，降低学习成本；  
>   ✔️ **验证算法高效**：处理超大规模芯片时速度更快；  
>   ✔️ **错误定位精准**：快速定位问题根源，减少调试时间。  
> 
> 因此，Calibre在集成电路物理验证领域 **市场占有率最高**。  

#### Mentor Calibre版图验证工具调用

Mentor Calibre 支持 **3种启动模式**，覆盖不同使用场景：  

1. **嵌入Cadence Virtuoso Layout Editor**：  
   把Calibre集成到Cadence版图设计环境中，方便“设计→验证”衔接。  
2. **Calibre图形界面**：  
   独立启动Calibre的GUI，适合单独验证（但需手动导入版图文件）。  
3. **Calibre查看器（Calibre View）**：  
   主要用于 **查看验证结果**（如DRC报错位置、LVS对比报告）。  

##### 内嵌 `Cadence Virtuoso Layout Editor`

要想`Cadence`直接调用`Calibre`，需通过 **修改初始化文件 + 启动软件** 实现，分3步：  

**步骤1：修改 `.cdsinit` 文件（Cadence初始化脚本）**  

- **文件位置**：用户根目录（Unix/Linux系统中，以 `.` 开头的是隐藏文件）。  
- **作用**：`.cdsinit` 是Cadence启动时自动执行的脚本文件，通过添加代码，让Cadence加载Calibre的功能。  
- **添加内容**：在文件末尾写入：  

  ```skill
  load "/usr/calibre/calibre.skl"
  ```  

  （`calibre.skl` 是Calibre提供的 **Skill语言脚本**，Skill是Cadence的二次开发语言，用于扩展Cadence功能。）  

**步骤2：启动Cadence Virtuoso**  

- 进入工作目录后，执行命令：  

  ```bash
  icfb&
  ```  

  （`icfb` 是Cadence Virtuoso的启动命令，`&` 表示“后台运行”，避免占用终端。）  

**步骤3：调用Calibre（菜单自动生成）**  

- 打开 **版图文件**（已有或新建的版图设计）后，Cadence的 `Layout Editor` 菜单栏会 **新增“Calibre”菜单**（如图3-1，文中未展示图，但逻辑是“集成成功的标志”）。  
- 菜单包含3个子功能（表3-1）：  

  | 子菜单      | 功能                     | 关联前文的验证任务       |  
  |-------------|--------------------------|--------------------------|  
  | `Run DRC`   | 运行Calibre的DRC检查     | 设计规则检查（DRC）      |  
  | `Run DFM`   | 运行Calibre的DFM检查     | 可制造性设计（本书暂不讲）|  
  | `Run LVS`   | 运行Calibre的LVS检查     | 版图-电路图一致性检查（LVS）|  

> [!tip] 技术细节的深层理解
>
> 1. **为什么改 `.cdsinit`？**  
>    Cadence和Calibre是不同公司的软件，通过 **Skill脚本“桥接”** 实现集成：Calibre提供 `calibre.skl`，让Cadence能调用其验证功能。
>
> 2. **`icfb` 命令的意义？**  
>    是Cadence Virtuoso的 **交互模式启动命令**（Interactive Customization Framework，简称icfb），是版图设计的核心入口。
>
> 3. **菜单功能的价值？**  
>    把Calibre的验证功能“植入”Cadence的菜单栏，让工程师 **不用切换软件** 就能完成DRC、LVS，大幅提升设计效率（呼应前文“本书采用嵌入方式介绍”的逻辑）。 

简言之，这段内容的核心是 **“手把手教你把Calibre装到Cadence里”**：通过修改初始化文件，让Cadence菜单里出现Calibre的验证入口，后续直接点击 `Run DRC`/`Run LVS` 就能开展版图验证——这是芯片设计中“版图→验证”流程的关键衔接步骤。
