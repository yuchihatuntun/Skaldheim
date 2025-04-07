This chapter will discuss <span style="font-weight:bold; color:rgb(236, 95, 98)">several fundamental questions about signals</span>, and also introduce some basic concepts and qualitative explanations of systems theory principles and methods.

##### <span style="color:rgb(0, 0, 0)">Signal</span>  
A signal is a set of data or information. Signals are virtually always ==functions of time==. However, this is not always the case. For example, when the charge is distributed over an object, the signal is the charge density, which is a ==function of space== rather than time. 
##### <span style="color:rgb(0, 0, 0)">System</span>
Signals can <span style="font-weight:bold; color:rgb(236, 95, 98)">be further processed</span> by the system, which can <span style="font-weight:bold; color:rgb(236, 95, 98)">modify the signals or extract additional information</span> from them. Therefore, a system is an ==entity== that processes a set of signals (inputs) to produce another set of signals (outputs). A system can be composed of several physical components, as is the case in electrical, mechanical, or hydraulic systems (hardware implementation), or it can be an ==algorithm== that calculates the output from the input signal (software implementation).

# <span style="color:rgb(0, 0, 0)">Signal Strength</span>
Any entity's size is <span style="font-weight:bold; color:rgb(249, 169, 169)">a number</span>, indicating the entity's magnitude or intensity. Generally, the amplitude of a signal ==changes over time==. How can a signal whose amplitude varies over a period be measured using a single number that indicates its size or intensity? Such a measurement <span style="font-weight:bold; color:rgb(249, 169, 169)">must consider not only the amplitude of the signal but also its duration</span>.

If we make a simplified assumption, comparing a person's shape to a cylinder with a variable radius *r* (which changes with height *h*), then the size of a person with a height *H* can be measured by their volume *V*, given by the following formula:
$$ V = \pi \int_0^H r^2(h) dh \tag{1.1} $$
### <font color="#000000">Signal energy</font>

按上述推理表明可将位于一个信号 $x(t)$ 下的面积作为信号大小的一种可能的度量，因为它不仅考虑到信号的幅度还考虑到信号的持续期。不过，即使对一个大的信号 $x(t)$ 来说，由于信号的正负面积可能相互抵消而表现为一个小尺度的信号，因此这一定是一个有缺陷的度量。将信号大小定义为 $x^2(t)$ 下的面积可以克服这个困难，因为这个面积值总是正的。我们将这种度量称为信号能量 $E_x$，并定义(对实信号)为

$$ E_x = \int_{-\infty}^{\infty} x^2(t) dt \quad (1.2a) $$

这个定义可以推广到复值信号 $x(t)$ 为

$$ E_x = \int_{-\infty}^{\infty} |x(t)|^2 dt \quad (1.2b) $$

也有其他一些可能的信号大小的度量方法，比如位于 $|x(t)|$ 下的面积。然而，能量度量不仅在数学上易于处理，而且更有意义（稍后说明），它表明了能从信号当中提取的能量。