### Course Overview

#### Environment, development languages, and tool dependencies

##### Software Configuration

 - <span style="background:rgba(252, 163, 180, 0.55)">Linux</span> Environment

##### Software Development (Simulator, System Software, Applications)

- <span style="background:rgba(252, 163, 180, 0.55)">C</span> language, minimal <span style="background:rgba(252, 163, 180, 0.55)">C++</span> (basic class usage) - <span style="background:rgba(252, 163, 180, 0.55)">GCC</span> compiler  

##### Hardware Development 

- <span style="background:rgba(252, 163, 180, 0.55)">Verilog</span> or Chisel - Open-source <span style="background:rgba(252, 163, 180, 0.55)">Verilator</span> simulator + Open-source <span style="background:rgba(252, 163, 180, 0.55)">GTKWave</span> waveform viewer

##### Backend Physical Design

- Commercial EDA tools (primarily handled by engineers or offline interns).  Open-source EDA will soon be integrated into the teaching process.

[http://matthieu.benoit.free.fr/cross/data_sheets/8086_family_Users_Manual.pdf]


### ✒️ How to learn "YSYX"

#### A real processor is a complex system

- **Textbook Processor**​​: 6 instructions (MIPS)

- ​**Course Project Processor​**​: ~40 instructions

- **​"YSYX" Processor**: 

    - **Guoke**: ~100 instructions + pipeline + interrupts/exceptions + cache + MMU + AXI bus

- **​Research Prototype**​​

    - **Xiangshan(2nd Gen)**: ~250 instructions + 8 fetch + 6 decode + 17 FUs + 192-entry ROB + ...

- **​​Commercial-Grade Processor (Mass-Produced)​​**

    - **Apple M1**: ARMv8 ISA + 8 decode + 17 FUs + ~630-entry ROB + proprietary tech + ...

##### Simply knowing how to read waveforms is not enough

The number of cycles in a real processor's operation is often unimaginably large—relying solely on waveform analysis is far from sufficient.

