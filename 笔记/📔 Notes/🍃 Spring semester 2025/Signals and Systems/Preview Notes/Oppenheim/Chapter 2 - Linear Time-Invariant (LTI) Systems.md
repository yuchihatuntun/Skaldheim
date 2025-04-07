---
tags:
  - "#信号与系统"
  - 课程笔记
  - 奥本海姆
  - 线性时不变系统
创建时间: 2025-02-09T14:20:00
修改时间: 2025-02-09T14:21:00
课程名称: Signals and Systems
章节: Chapter 2 - Linear time-invariant systems
重要程度: ⭐⭐⭐考点
掌握程度: 🟢Previewing Now
考试相关: true
实验相关: false
参考教材: 信号与系统 第二版 (艾伦V.奥本海姆)
前置知识: "[[Manjushri Hub/Signals and Systems/Preview Notes/Oppenheim/Chapter 1 - Signals and Systems]]"
---
# <font color="#000000">Introduction</font>
Two key properties of systems—<span style="background:rgba(145, 156, 255, 0.55)">linearity and time-invariance</span>—are of utmost importance in signal and system analysis.

- First, many physical processes have these two properties, so they can all be characterized by linear time-invariant systems.

- Second, the linear time-invariant system <span style="background:rgba(145, 156, 255, 0.55)">can be analyzed in detail</span>.

One of the main reasons linear time-invariant systems can be so deeply analyzed is because they possess <span style="background:rgba(145, 156, 255, 0.55)">the superposition property</span>.

Whether in discrete time or continuous time, one of the important properties of the unit impulse function is that the general signal can be represented as a linear combination of delayed impulses.

This fact, combined with superposition and time invariance, <span style="background:rgba(145, 156, 255, 0.55)">allows the properties of any linear time-invariant system to be fully characterized by a linear time-invariant unit impulse response</span>.

Such a representation is called <span style="font-weight:bold; color:rgb(202, 83, 85)">convolution sum</span> in discrete time and <span style="font-weight:bold; color:rgb(202, 83, 85)">convolution integral</span> in continuous time. This representation provides great convenience in analyzing linear time-invariant systems.

After establishing convolution sum and convolution integral, use these characteristics to analyze certain other properties of linear time-invariant systems. Then discuss continuous-time systems described by <span style="background:rgba(215, 135, 150, 0.55)">linear constant-coefficient differential equations</span> and discrete-time systems described by <span style="background:rgba(215, 135, 150, 0.55)">linear constant-coefficient difference equations</span>. Finally, examine the continuous-time unit impulse function and several other signals related to it from another perspective.
# <font color="#000000">Discrete-time Linear Time-Invariant Systems: Convolutional Sum</font>
The key to thinking of any discrete-time signal as consisting of discrete-time unit pulses is to <span style="background:rgba(145, 156, 255, 0.55)">imagine a discrete-time signal as a series of individual pulses</span>.
![[Pasted image 20250209144705.png|481]]
To clarify how to transform this intuitive understanding into a mathematical expression, let's examine the signal in $Figure 2.1(a)$. The remaining parts of the figure depict a sequence of five time-shifted and weighted unit pulses, where the magnitude of each pulse is equal to the corresponding time sequence value of $x[n]$, for example:
$$
x[-1]\delta[n + 1] = 
\begin{cases} 
x[-1], & n = -1 \\ 
0, & n \neq -1 
\end{cases}
$$

$$
x[0]\delta[n] = 
\begin{cases} 
x[0], & n = 0 \\ 
0, & n \neq 0 
\end{cases}
$$

$$
x[1]\delta[n - 1] = 
\begin{cases} 
x[1], & n = 1 \\ 
0, & n \neq 1 
\end{cases}
$$
Therefore, the sum of these 5 sequences in $Fig. 2.1$ is equal to $x[n]$ within the interval $-2 \leq n \leq 2$. By extending this representation to include more shifted weighted impulses, a general expression can be obtained as: 
$$
x[n] = \cdots + x[-3]\delta[n+3] + x[-2]\delta[n+2] + x[-1]\delta[n+1] + x[0]\delta[n] 
+ x[1]\delta[n-1] + \cdots \tag{2.1}
$$

On the right-hand side of $equation (2.1)$, for all values of $n$, only one term is non-zero, and the magnitude of that non-zero term is $x[n]$. The above equation can be written in <span style="font-weight:bold; color:rgb(202, 83, 85)">a more compact form</span> as:
$$
x[n] = \sum_{k=-\infty}^{+\infty} x[k]\delta[n-k] \tag{2.2}
$$

This expression corresponds to representing any sequence as a linear combination of a series of shifted unit impulse sequences $\delta[n-k]$, where <span style="background:rgba(145, 156, 255, 0.55)">the weighting factors</span> in this linear combination are $x[k]$. For example, if $x[n] = u[n]$, i.e., the unit step sequence. In this case, because $u[k] = 0$ when $k<0$ and $u[k] = 1$ when $k \geqslant 0$, $equation (2.2)$ becomes
$$
u[n] = \sum_{k=0}^{+\infty}\delta[n-k]
$$
$Equation (2.2)$ is referred to as the <span style="font-weight:bold; color:rgb(202, 83, 85)">sifting property</span> of discrete-time unit impulse sequences. Because the sequence $\delta[n-k]$ is non-zero only when $k=n$, the summation on the right-hand side of $Equation (2.2)$ effectively filters the sequence $x[k]$, retaining only the values corresponding to $k=n$.

### <font color="#000000">Unit Impulse Response and Convolutional Sum Representation of Discrete-Time Linear Time-Invariant Systems</font>
$Equation (2.1)$ and $Equation (2.2)$ highlight the importance of filtering because they represent $x[n]$ as the superposition of <span style="background:rgba(215, 135, 150, 0.55)">a set of weighted basis functions</span>. These remarkably simple basis functions are shifted unit impulses, $\delta[n-k]$, each of which is non-zero at a single time point corresponding to $k$, with a value of $1$. The response of a linear system to $x[n]$ is then the weighted superposition of the system's response to each of these shifted impulses.

Furthermore, <span style="background:rgba(145, 156, 255, 0.55)">time-invariant</span> means that the response of a time-invariant system to the shifted unit impulse is the shift of the unshifted unit impulse response.[^1]

Consider the response of a linear system to an arbitrary input $x[n]$. According to $equation (2.2)$, the input $x[n]$ can be represented as a linear combination of shifted unit impulses. Let $h_k[n]$ be the system's response to the shifted unit impulse $\delta[n-k]$. Then, by the superposition property of linear systems ($equations (1.123) and (1.124)$), the system's output $y[n]$ for input $x[n]$ is <span style="background:rgba(145, 156, 255, 0.55)">a weighted superposition of these basic responses</span>:
$$
y[n] = \sum_{k=-\infty}^{+\infty} x[k] h_k[n] \tag{2.3}
$$

Therefore, the response of a linear system at time $n$ is the superposition of the responses generated by each input value at every point in time.

In a time-invariant linear system, the responses $h_k[n]$ corresponding to different values of $k$ are <span style="background:rgba(215, 135, 150, 0.55)">interrelated</span>: since the input $\delta[n-k]$ is a time-shifted version of $\delta[n]$, its response $h_k[n]$ <span style="background:rgba(215, 135, 150, 0.55)">must also be a corresponding time-shifted version</span> of $h_0[n]$, namely,

$$
h_k[n] = h_0[n-k] \tag{2.4}
$$
After simplification, we get:
$$
h[n] = h_0[n] \tag{2.5}
$$

Then, for a linear time-invariant system, $Equation (2.3)$becomes：

$$
y[n] = \sum_{k=-\infty}^{+\infty} x[k] h_k[n] \Rightarrow y[n] = \sum_{k=-\infty}^{+\infty} x[k]h[n-k] \tag{2.6}
$$

This result is called the <span style="font-weight:bold; color:rgb(202, 83, 85)">convolution sum</span> or <span style="font-weight:bold; color:rgb(202, 83, 85)">superposition sum</span>, and the operation on the right side of $equation (2.6)$ is referred to as the convolution of $x[n]$ and $h[n]$, and is denoted by:

$$
y[n] = x[n] * h[n] \tag{2.7}
$$
$Equation (2.6)$ shows a key conclusion: the response of a linear time-invariant system to any input <span style="background:rgba(145, 156, 255, 0.55)">can be completely described by its unit impulse response</span>, so the unit impulse response completely determines the characteristics of the system.

>[!note]+ Example 2.1
>Consider a linear time-invariant system with unit impulse response $h[n]$ and input $x[n]$. Then, since only $x[0]$ and $x[1]$ are non-zero, $equation (2.6)$ simplifies to
>$$
y[n] = x[0] h[n-0] + x[1] h[n-1] = 0.5 h[n] + 2 h[n-1] \tag{2.8}$$
>![[Pasted image 20250314190838.png]]
>When determining $y[n]$, the result involves only the shifts and weighting of two unit impulse responses: the sequences 0.5 $h[n]$ and 2 $h[n-1]$. Summing these two sequences at each value of $n$ yields $y[n]$.

Example 2.2

序列 $x[k]$ 示于图 2.4(a)；而序列 $h[n-k]$ 看成固定 $n$ 时 $k$ 的函数，对于几个不同的 $n$ 值的序列示于图 2.4(b)。在画这些序列时已经用到了这一点，就是 $h[n-k]$ 是单位脉冲响应 $h[k]$ 的时间反转与移位。随着 $k$ 的增加，宗量 $n-k$ 减小，这就说明了需要对 $h[k]$ 进行一个时间反转。知道了这一点，为了画出信号 $h[n-k]$，仅仅需要确定对某个特定 $k$ 值的 $h[n-k]$ 值就够了，例如，在 $k=n$ 时，宗量 $n-k$ 等于 0。于是，如果画出了信号 $h[-k]$，只是将它右移 $n(n>0$ 时)，或左移 $n(n<0$ 时)，就得到了信号 $h[n-k]$。图 2.4(b) 画出了 $n<0$，$n=0$，1，2，3 和 $n>3$ 时的结果。

对于任何具体的 $n$ 值，画出了 $x[k]$ 和 $h[n-k]$ 之后，将这两个信号相乘并在全部 $k$ 值上相加。对该例来说，对于 $n<0$，由图 2.4 看出，因为 $x[k]$ 和 $h[n-k]$ 的非零值都不重合，所以 $x[k]h[n-k]=0$，结果就是 $n<0$ 时 $y[n]=0$。对于 $n=0$，因为序列 $x[k]$ 与序列 $h[0-k]$ 的乘积仅有一个非零样本，其值为 0.5，所以有

$$
y[0] = \sum_{k=-\infty}^{+\infty} x[k]h[0-k] = 0.5 \tag{2.9}
$$

序列 $x[k]$ 与序列 $h[1-k]$ 的乘积有两个非零样本，相加之后得

$$
y[1] = \sum_{k=-\infty}^{+\infty} x[k]h[1-k] = 0.5 + 2.0 = 2.5 \tag{2.10}
$$

类似地有

$$
y[2] = \sum_{k=-\infty}^{+\infty} x[k]h[2-k] = 0.5 + 2.0 = 2.5 \tag{2.11}
$$

和

$$
y[3] = \sum_{k=-\infty}^{+\infty} x[k]h[3-k] = 2.0 \tag{2.12}
$$

最后，对于 $n>3$，乘积 $x[k]h[n-k]$ 对于所有的 $k$ 都是零，由此可得 $n>3$ 时 $y[n]=0$。所得到的输出值与例 2.1 中得到的相同。


[^1]: Imagine you have a smart speaker, and whenever you say "play music" to it, it starts playing immediately. That's time invariance - its reaction speed doesn't change over time.
