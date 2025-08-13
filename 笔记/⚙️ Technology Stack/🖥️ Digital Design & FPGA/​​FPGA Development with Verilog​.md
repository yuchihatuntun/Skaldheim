### BASIC PART

#### Verilog HDL

**硬件描述语言（Hardware Description Lagnuage，HDL）** 通过描述硬件的实现方法，来产生与之对应的真实的硬件电路，最终实现所设计的预期功能。设计方式与软件不同，因此也就意味着其描述的各个功能之间，可以像硬件一样实现真正的<span style="background:rgba(252, 163, 180, 0.55)">并行执行</span>，这也是硬件描述语言和软件的不同。之所以不直接叫 硬件语言却叫硬件描述语言的原因是：这是通过一种语言来“描述”我们设计的硬件所要实现的功能，而不是直接对硬件进行设计。硬件描述语言描述完设计的功能后，还需要通过“综合”这一过程才能最终生成所设计功能的硬件电路。

##### Verilog v.s. VHDL

目前常用的硬件描述语言主要有两种，一种是Verilog HDL（以下简称Verilog），另一种是VHDL。

- **VHDL优势**：
  - 语法更严谨，经EDA工具自动检查可减少设计疏忽。
  - 行为级和系统级描述能力更强，优于Verilog。
- **VHDL不足**：
  - 代码冗长，相同功能下代码量多于Verilog。
  - 数据类型匹配要求严格，上手难度大，编程耗时多（Verilog支持自动类型转换）。
  - 几乎不支持版图级、管子级等底层描述，无法直接进行集成电路底层建模。

> [!note] EXAMPLE
>   
> 我们通过实现一个 4 位计数器的功能，分别用 VHDL 和 Verilog 代码对比，体现 VHDL 的优势与不足  
>   
> **功能说明**  
> 实现一个带异步复位、同步使能的 4 位加法计数器，计数范围 0-15，溢出后归零。  
>   
> ```vhdl
> -- 库和包声明（严谨性体现）
> library IEEE;
> use IEEE.STD_LOGIC_1164.ALL;
> use IEEE.STD_LOGIC_UNSIGNED.ALL;  -- 需显式声明无符号运算包
> 
> -- 实体定义（行为级描述框架清晰）
> entity counter_4bit is
>     Port ( 
>         clk     : in  STD_LOGIC;  -- 时钟
>         rst_n   : in  STD_LOGIC;  -- 异步复位（低有效）
>         en      : in  STD_LOGIC;  -- 同步使能
>         count   : out STD_LOGIC_VECTOR (3 downto 0)  -- 4位计数输出
>     );
> end counter_4bit;
> 
> -- 结构体（行为级描述能力体现）
> architecture Behavioral of counter_4bit is
>     -- 内部信号声明（类型严格匹配）
>     signal count_reg : STD_LOGIC_VECTOR (3 downto 0) := "0000";
> begin
>     process(clk, rst_n)
>     begin
>         if rst_n = '0' then  -- 异步复位
>             count_reg <= "0000";
>         elsif rising_edge(clk) then  -- 时钟上升沿
>             if en = '1' then  -- 同步使能有效
>                 -- 严格的类型操作（无自动转换）
>                 count_reg <= count_reg + 1;
>             end if;
>         end if;
>     end process;
>     
>     -- 输出赋值（类型严格匹配）
>     count <= count_reg;
> end Behavioral;
> ```
> 
> ```verilog
> module counter_4bit(
>     input clk,        // 时钟
>     input rst_n,      // 异步复位（低有效）
>     input en,         // 同步使能
>     output reg [3:0] count  // 4位计数输出
> );
> 
> // 无需显式声明库，语法更简洁
> always @(posedge clk or negedge rst_n) begin
>     if (!rst_n) begin  // 异步复位
>         count <= 4'd0;  // 整数直接赋值（自动类型转换）
>     end
>     else if (en) begin  // 同步使能有效
>         count <= count + 1;  // 隐式类型转换（无需显式声明运算包）
>     end
> end
> 
> endmodule
> ```
> 
> **对比分析：VHDL 的优势与不足**  
> **VHDL 优势体现**  
> - 语法严谨性  
>   - 必须显式声明库和包（如IEEE.STD_LOGIC_UNSIGNED），EDA 工具可提前检查未声明的运算错误（如+操作），减少设计疏忽。  
>   - 实体与结构体分离的架构，强制规范接口定义和内部逻辑，适合大型团队协作。  
> - 行为级 / 系统级描述能力  
>   - 结构体中可通过更丰富的语法（如多进程、子模块实例化）描述复杂行为，支持从系统级到 RTL 级的逐步细化，优于 Verilog 在复杂系统建模时的灵活性。  
>   
> **VHDL 不足体现**  
> - 代码冗长  
>   - 相同功能下，VHDL 需要更多代码（如库声明、信号定义、类型标注），Verilog 仅需不到一半的行数即可实现。  
> - 数据类型匹配严格  
>   - 必须使用STD_LOGIC_VECTOR类型进行运算，且需显式声明支持无符号运算的包，否则会报错；而 Verilog 中reg [3:0]可直接与整数1相加（自动转换），上手难度更低。  
> - 底层描述支持弱  
>   - VHDL 语法更侧重行为级和 RTL 级描述，几乎不支持晶体管级（如nmos、pmos）或版图级建模；而 Verilog 可通过tran、nmos等关键字直接描述底层电路，适合集成电路物理层设计。  

##### Verilog v.s. C

- **相似性**：Verilog 语法与 C 语言高度相似，部分语法通用，这是其易上手的重要原因（因从 C 语言继承发展而来）。
- **核心差异**：
  - 用途：Verilog 用于描述硬件，C 语言是软件语言。
  - 执行方式：Verilog <span style="font-weight:bold; color:rgb(255, 182, 193)">并行执行</span>，C 语言顺序执行。
  - 映射结果：Verilog 生成实际硬件电路，C 语言仅操作内存和搬移数据。
- 可借助 C 语言语法基础学习 Verilog。

##### Verilog 语言基础语法

> [!note] INTRODUCTION
> - 关于Verilog语法：仅介绍常用语法；高级、不常用语法无需记忆，使用时可参考后续实例、推荐参考书或IEEE官方手册。
> - **代码结构**：以`module`（模块）形式存在，简单逻辑可由单个`module`组成，复杂逻辑可包含多个`module`；每个`module`功能独立，可通过输入、输出端口被其他`module`调用（实例化），便于功能复用和代码阅读。
> - **语法分类**：分为可综合（能生成硬件电路）和不可综合（不能生成硬件电路，可用于仿真验证）语法，可综合代码较少。

###### 标识符

1. **用途**：用于定义常数、变量、信号、端口、子模块或参数的名称。  
2. **大小写敏感性**：Verilog区分大小写，同一名称的大小写形式代表不同符号（与VHDL不同，需特别注意书写）。  
3. **组成规则**：  
   - 可由字母、数字、$（美元符号）、下划线组成；  
   - 第一个字符必须是字母或下划线。  

> [!note] 关键字（保留字）
> 
> 1. **大小写**：所有关键字均为小写。  
> 2. **显示特点**：在编辑器中通常以高亮形式突出显示，便于区分。

###### 逻辑值

#### IP core

