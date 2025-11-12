### e2 studio/Keil开发环境

### 环境简介

e2 studio （简称为 e2 或 e2s）是瑞萨电子的一款包含代码开发、构建和调试的开发工具。 e2 studio 基于开源Eclipse IDE和与之相关的C/C++开发工具（CDT）。 e2 studio 托管了瑞萨的FSP灵活配置软件包，这是一个用于支持瑞萨MCU开发的固件库。 通过使用FSP库，我们可以轻松配置和管理瑞萨MCU，从而轻松实现复杂的应用程序。

Keil （也称为 Keil5、Keil MDK uVision5、MDK、MDK-ARM 等）是ARM官方的一款专为微控制器应用而设计的集成开发工具。 Keil 软件为基于 Cortex-M、Cortex-R0/R3/R4、ARM7、ARM9 处理器设备提供了一个完整的开发环境，功能强大，能够满足大多数的嵌入式应用。 我们在使用 Keil 软件开发瑞萨 RA MCU 时，为了方便配置芯片和生成FSP库代码， 需要配合 RA Smart Configurator (RASC) 软件一起使用。

RA Smart Configurator （简称为 RASC）是一款桌面应用程序，可为用户提供与集成到 e2 studio 中的 FSP 配置器（Smart Configurator）相同的功能。 借助 RASC，使用第三方工具链和 IDE （比如 Keil、IAR、GCC）的开发人员可以像 e2 studio 的用户一样， 以相同的方式访问软件系统（BSP、HAL 驱动程序、中间件、RTOS）的项目设置和图形化配置、引脚分配和时钟设置等。

