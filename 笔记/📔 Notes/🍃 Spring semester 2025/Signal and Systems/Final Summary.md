### Chapter02 Linear Time-Invariant Systems

#### Knowledge Sorting

##### Discrete-time LTI systems

1. Representing discrete-time signals with pulses

An arbitrary sequence $x[n]$ can be represented as a linear combination of unit impulse sequences $\delta[n-k]$ shifted by one unit, and the coefficient of this linear combination is $x[k]$, i.e.

$$
x[n] = \sum_{k=-\infty}^{\infty} x[k] \delta[n-k]
$$

This is called the selection property of unit impulse in discrete-time LTI systems.

2. Unit impulse response of discrete-time LTI system

The response $h[n]$ of the discrete-time LTI system to the unit impulse $\delta[n]$ is called the unit impulse response of the discrete-time LTI system.

3. Response of discrete-time LTI system to arbitrary sequence $x[n]$

According to the linearity and time-invariance, the response of a discrete-time LTI system to an arbitrary sequence $x[n]$ is

$$
y[n] = \sum_{k=-\infty}^{\infty} x[k] h[n-k]
$$

This indicates that a discrete-time LTI system is completely characterized by its unit impulse response $h[n]$. The above equation defines the convolution of two sequences $x[n]$ and $h[n]$.

Therefore, it can be concluded that: the output $y[n]$ of any discrete-time LTI system is equal to the convolution of the system's input $x[n]$ and the unit impulse response $h[n]$.
