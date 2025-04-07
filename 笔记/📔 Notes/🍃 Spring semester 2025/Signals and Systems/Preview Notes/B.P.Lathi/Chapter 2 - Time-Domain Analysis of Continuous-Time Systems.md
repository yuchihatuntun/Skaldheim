This book considers two approaches to analyzing linear time-invariant (LTI) systems: the time domain method and the frequency domain method. This chapter will discuss <span style="font-weight:bold; color:rgb(236, 95, 98)">the time domain analysis method for linear time-invariant continuous-time (LTI-C) systems</span>.
# <font color="#000000">Introduction</font>

For the purpose of analysis, let us now consider <span style="font-weight:bold; color:rgb(249, 169, 169)">linear differential systems</span>. These are a class of LTI systems introduced in Chapter 1, whose input $x(t)$ and output $y(t)$ are related by <span style="background:rgba(118, 144, 255, 0.55)">differential equations</span> of the following form:

$$
\frac{d^N y}{dt^N} + a_1 \frac{d^{N-1} y}{dt^{N-1}} + \cdots + a_{N-1} \frac{dy}{dt} + a_N y(t)
$$

$$
= b_{N-M} \frac{d^M x}{dt^M} + b_{N-M+1} \frac{d^{M-1} x}{dt^{M-1}} + \cdots + b_{N-1} \frac{dx}{dt} + b_N x(t) \tag{2.1a}
$$

where all coefficients $a_i$ and $b_i$ are constants. Using the operator $D$ to represent $d/dt$（It's about <span style="font-weight:bold; color:rgb(249, 169, 169)">treating the differential as a linear operator</span>.）, the above equation <span style="background:rgba(205, 244, 105, 0.55)">can be</span> expressed as: 

$$
(D^N + a_1 D^{N-1} + \cdots + a_{N-1} D + a_N) y(t)
$$

$$
= (b_{N-M} D^M + b_{N-M+1} D^{M-1} + \cdots + b_{N-1} D + b_N) x(t) \tag{2.1b}
$$

Or

$$
Q(D) y(t) = P(D) x(t) \tag{2.1c}
$$

Among them, the polynomials $Q(D)$ and $P(D)$ are respectively

$$
Q(D) = D^N + a_1 D^{N-1} + \cdots + a_{N-1} D + a_N \tag{2.2a}
$$

$$
P(D) = b_{N-M} D^M + b_{N-M+1} D^{M-1} + \cdots + b_{N-1} D + b_N \tag{2.2b}
$$

In theory, the exponents $M$ and $N$ in the above equation can take on any value. <span style="font-weight:bold; color:rgb(247, 170, 88)">However, there are two practical reasons why</span> $M > N$ <span style="font-weight:bold; color:rgb(247, 170, 88)">is generally undesirable.</span>

- First, we will demonstrate in the future that the effects produced by the LTIC system determined by equation $(2.1)$ are equivalent to those of an $(M-N)$th-order differentiator. <span style="font-weight:bold; color:rgb(247, 170, 88)">A differentiator represents an unstable system</span>, as a bounded input, such as a step input, generates an unbounded output $\delta(t)$.

- Secondly, <span style="font-weight:bold; color:rgb(247, 170, 88)">differentiators amplify noise</span>. Noise is a broadband signal that contains all frequencies ranging from 0 to tending towards infinity.

Therefore, ==the noise contains a significant amount of rapidly varying components==. We know that the derivative of any rapidly varying signal is large. Consequently, any system defined by equation $(2.1)$ (where $M > N$) will amplify the high-frequency components of the noise through differentiation.

<span style="font-weight:bold; color:rgb(236, 95, 98)">Even if the noise at the system input is negligible, it can still be amplified to overwhelm the useful system output</span>; therefore, in practice, $M \leq N$ is generally employed.

The system described by equation $(2.1)$ is linear. Consequently, its response can be represented as the sum of two components: the ==zero-input component== and the ==zero-state component== (decomposition property). Therefore,

$$Complete Response = Zero-Input Response + Zero-State Response \tag{2.3}$$

零输入分量是输入 $x(t)=0$ 时的系统响应，它是系统内部条件(如能量存储，初始条件)单独作用的结果，而它与外部输入 $x(t)$无关。相反的，零状态分量是当系统在零状态(意味着内部能量存储不存在，即所有初始条件都为零)时对输入 $x(t)$产生的响应。
# <font color="#000000">System Response to Internal Conditions: Zero-Input Response</font>

零输入响应 $y_0(t)$ 是当输入 $x(t) = 0$ 时(2.1)式的解

$$ Q(D) y_0(t) = 0 \quad (2.4a) $$

或

$$ (D^N + a_1 D^{N-1} + \cdots + a_{N-1} D + a_N) y_0(t) = 0 \quad (2.4b) $$

这个方程的解可以通过系统的方法求得$^{[1]}$。但是，我们可以通过启发式的推理取得捷径。方程(2.4b)说明 $y_0(t)$ 与它的 N个逐阶导数的线性组合为零，不是对某些 $t$ 值，而是对所有 $t$ 都成立。这样的结果当且仅当 $y_0(t)$ 和它的 N个逐阶导数都有同样的形式时才能实现。否则不可能对所有 $t$ 它们的和都为零。我们知道只有指数函数 $e^{\lambda t}$ 有这样的性质。所以假设(2.4b)式的一个解为

$$ y_0(t) = c e^{\lambda t} $$

那么

$$ D y_0(t) = \frac{d y_0}{d t} = c \lambda e^{\lambda t} $$

$$ D^2 y_0(t) = \frac{d^2 y_0}{d t^2} = c \lambda^2 e^{\lambda t} $$

将这些结果代入(2.4b)式，得到
$$ c(\lambda^N + a_1 \lambda^{N-1} + \cdots + a_{N-1} \lambda + a_N) e^{\lambda t} = 0 $$

对于这个方程的一个非无效解，
$$ \lambda^N + a_1 \lambda^{N-1} + \cdots + a_{N-1} \lambda + a_N = 0 \tag{2.5a} $$

若 $\lambda$ 满足(2.5a)式，则意味着 $ce^{\lambda t}$ 确实是(2.4)式的解。注意：如果用 $\lambda$ 替换 $D$，则(2.5a)式中的多项式与(2.4)式中的多项式 $Q(D)$ 完全相同。因此，(2.5a)式可以表示为
$$ Q(\lambda) = 0 \tag{2.5b} $$

当 $Q(\lambda)$ 表示为分解因式的形式，(2.5b)式可写为
$$ Q(\lambda) = (\lambda - \lambda_1)(\lambda - \lambda_2) \cdots (\lambda - \lambda_N) = 0 \tag{2.5c} $$

很明显，$\lambda$ 有 N 个解：$\lambda_1, \lambda_2, \cdots, \lambda_N$，假设所有 $\lambda_i$ 都不相同。由此，(2.4)式有 N 个可能解：$c_1 e^{\lambda_1 t}, c_2 e^{\lambda_2 t}, \cdots, c_N e^{\lambda_N t}$，其中 $c_1, c_2, \cdots, c_N$ 为任意常数。很容易证明通解由这 N 个解的和给出。

即
$$ y_0(t) = c_1 e^{\lambda_1 t} + c_2 e^{\lambda_2 t} + \cdots + c_N e^{\lambda_N t} \tag{2.6} $$

其中 $c_1, c_2, \cdots, c_N$ 是任意常数，它们由对解的 N 个约束条件(附加条件)所决定。

可见表征系统的多项式 $Q(\lambda)$ 与输入无关，因此多项式 $Q(\lambda)$ 称为系统的特征多项式。方程
$$ Q(\lambda) = 0 \tag{2.7} $$
