### Chapter02 Linear Time-Invariant Systems

#### Knowledge Sorting

##### Discrete-time LTI systems

1. Representing discrete-time signals with <span style="font-weight:bold; color:rgb(255, 177, 10)">pulses</span>

An arbitrary sequence $x[n]$ can be represented as a linear combination of unit impulse sequences $\delta[n-k]$ shifted by one unit, and the coefficient of this linear combination is $x[k]$, i.e.

$$
x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k]
$$

This is called <span style="font-weight:bold; color:rgb(255, 177, 10)">the selection property</span> of unit impulse in discrete-time LTI systems.

2. Unit impulse response of discrete-time LTI system

The response $h[n]$ of the discrete-time LTI system to the unit impulse $\delta[n]$ is called the unit impulse response of the discrete-time LTI system.

3. Response of discrete-time LTI system to arbitrary sequence $x[n]$

According to the linearity and time-invariance, the response of a discrete-time LTI system to an arbitrary sequence $x[n]$ is

$$
y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

This indicates that a discrete-time LTI system is completely characterized by its unit impulse response $h[n]$. The above equation defines the convolution of two sequences $x[n]$ and $h[n]$.

Therefore, it can be concluded that: the output $y[n]$ of any discrete-time LTI system is equal to the convolution of the system's input $x[n]$ and the unit impulse response $h[n]$.

4. Properties of Convolution

Commutative property: $x[n] * h[n] = h[n] * x[n]$

Distributive property: $x[n] * (h_1[n] + h_2[n]) = x[n] * h_1[n] + x[n] * h_2[n]$

Associative property: $x[n] * (h_1[n] * h_2[n]) = (x[n] * h_1[n]) * h_2[n]$

5. Calculation of Convolution

When calculating convolution using the definition, pay attention to the determination of the upper and lower limits of the convolution.
Using the graphical method to calculate convolution can be divided into "overlap, shift, multiplication, and summation" four steps.
For the convolution of two finite sequences, you can also use vertical multiplication. In vertical multiplication, do not carry over during multiplication and addition, otherwise, you will not get the correct result.

##### Continuous-time LTI systems

1. Representing Continuous-Time Signals with Impulse Functions

Any arbitrary signal $x(t)$ can be represented as a weighted sum of shifted impulse functions, i.e.

$$
x(t) = \int_{-\infty}^{\infty} x(\tau) \delta(t - \tau) d\tau
$$

This is called the selection property of continuous-time impulse functions.

2. Unit Impulse Response of Continuous-Time LTI System

The response $h(t)$ of the continuous-time LTI system to the unit impulse function $\delta(t)$ is called the unit impulse response of the continuous-time LTI system.

3. Response of Continuous-Time LTI System to Arbitrary Signal $x(t)$

According to the linearity and time-invariance, the response of a continuous-time LTI system to any signal $x(t)$ is

$$
y(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau
$$

This indicates that a continuous-time LTI system is completely characterized by its impulse response $h(t)$. The above equation defines the convolution of two continuous-time signals $x(t)$ and $h(t)$.

This indicates that the output of any continuous-time LTI system is equal to the convolution of the system's input $x(t)$ and the unit impulse response $h(t)$.

4. Properties of Convolution

Commutative property: $x(t) * h(t) = h(t) * x(t)$

Distributive property:
$$
x(t) * [h_1(t) + h_2(t)] = x(t) * h_1(t) + x(t) * h_2(t)
$$

Associative property:
$$
x(t) * [h_1(t) * h_2(t)] = [x(t) * h_1(t)] * h_2(t)
$$

Derivative of convolution:
$$
\frac{\mathrm{d}}{\mathrm{d}t} [x(t) * h(t)] = x(t) * \frac{\mathrm{d}}{\mathrm{d}t} h(t) = \frac{\mathrm{d}}{\mathrm{d}t} x(t) * h(t)
$$

Integral of convolution:
$$
\int_{-\infty}^t [x(\tau) * h(\tau)] \mathrm{d}\tau = x(t) * \int_{-\infty}^t h(\tau) \mathrm{d}\tau = \left[ \int_{-\infty}^t x(\tau) \mathrm{d}\tau \right] * h(t)
$$

Time-shifting of convolution: If $x(t) * h(t) = y(t)$, then
$$
x(t-t_1) * h(t-t_2) = y(t-t_1-t_2)
$$

5. Calculation of Convolution Integral

When calculating the integral of convolution using the definition, the key is to determine the upper and lower limits of the integral.
Using the graphical method to calculate convolution integral, the steps are: overlap, shift, multiplication, and integration.
The convolution integral can also be solved using properties, which can be more convenient.

#### Typical Example Practice

Example 2-1 Let $x[n] = \delta[n] + 2\delta[n-1] - \delta[n-3]$ and $h[n] = 2\delta[n+1] + 2\delta[n-1]$, calculate the following convolutions:

(a) $y_1[n] = x[n] * h[n]$; (b) $y_2[n] = x[n+2] * h[n]$; (c) $y_3[n] = x[n] * h[n+2]$.
