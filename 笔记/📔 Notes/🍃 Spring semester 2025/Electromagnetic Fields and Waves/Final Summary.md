### Electrostatics

### <span style="font-weight:bold; color:rgb(255, 177, 10)">Chapter 05</span> Propagation of Uniform Plane Waves in Unbounded Space

#### Exercise Answers

Jump to Exercise [5.3](#exercise_5.3)

> [!note] 5.1
> In free space, given the electric field $E(z,t) = e_y 10^3 \sin(\omega t - \beta z)$ V/m, find the magnetic field strength $H(z,t)$.

> **Solution:**
>  
> Taking the cosine as the basis, rewrite the known electric field expression:  
> $$E(z,t) = e_y 10^3 \cos\left(\omega t - \beta z - \frac{\pi}{2}\right) \ \mathrm{V/m}$$  
>  
> This is an electromagnetic wave propagating uniformly in the $+z$ direction, with an initial phase of $-90^\circ$.  
>  
> The accompanying magnetic field is:  
> $$H(z,t) = \frac{1}{\eta_0} e_z \times E(z,t) = \frac{1}{\eta_0} e_z \times e_y 10^3 \cos\left(\omega t - \beta z - \frac{\pi}{2}\right)$$  
> $$= - e_x \frac{10^3}{120\pi} \cos\left(\omega t - \beta z - \frac{\pi}{2}\right)$$
>
>$$= - e_x 2 \cdot 65 \sin(\omega t - \beta z) \ \mathrm{A/m}$$

> [!note] 5.2
>
> In an ideal medium (parameters $\mu = \mu_0$, $\varepsilon = \varepsilon_r \varepsilon_0$, $\sigma = 0$) there is a uniform plane wave propagating along the $x$ direction, and its electric field instantaneous value expression is known as  
>
> $$E(x,t) = e_y\ 377 \cos(10^9 t - 5x)\ \mathrm{V/m}$$  
>
> Find:  
>
> <span style="font-weight:bold; color:rgb(10, 112, 255)">(1)</span> The relative permittivity of this ideal medium;  
>
> (2) The magnetic field $H(x,t)$ accompanying $E(x,t)$;  
>
> (3) The average power density of this plane wave.

>[!error] Notice
> The first question is too complex to solve those partial differential equations directly. You need to remember the relationship between the propagation speed of electromagnetic waves and the relative dielectric constant (see <span style="font-weight:bold; color:rgb(255, 177, 10)">Example 5.1.2</span> for details).

> **Solution:**
>
>(1)
>
> Observing the given electric field expression, it represents a uniform plane wave propagating along the $+x$ direction, with a phase velocity of  
> $$v_p = \frac{\omega}{k} = \frac{10^9}{5} \ \mathrm{m/s} = 2 \times 10^8 \ \mathrm{m/s}$$  
>
> Also,  
> $$v_p = \frac{1}{\sqrt{\mu \varepsilon}} = \frac{1}{\sqrt{\mu_0 \varepsilon_r \varepsilon_0}} = \frac{1}{\sqrt{\varepsilon_r}} \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = \frac{1}{\sqrt{\varepsilon_r}} \times 3 \times 10^8$$  
>
> Therefore,  
> $$\varepsilon_r = \left(\frac{3}{2}\right)^2 = 2.25$$
>
> (2)
>
> It can also be directly obtained from the relationship $H = \frac{1}{\eta} e_n \times E$ to get $H$  
> $$H = \frac{1}{\eta} e_x \times e_y 377 e^{-j5x} = e_z \frac{\sqrt{\varepsilon_r}}{\eta_0} \times 377 e^{-j5x} = e_z 1.5 e^{-j5x} \ \mathrm{A/m}$$
>
> (3)
>
> The average Poynting vector is  
> $$S_{av} = \frac{1}{2} \text{Re}[E \times H^*] = \frac{1}{2} \text{Re}[e_y 377 e^{-j5x} \times e_z 1.5 e^{j5x}] = e_x 282.75 \ \mathrm{W/m^2}$$

<a id="exercise_5.3"></a>

> [!note] 5.3
> In air, a uniform plane wave propagates along the $e_y$ direction with a frequency $f = 400$ MHz. When $y = 0.5$ m, $t = 0.2$ ns, the maximum value of the electric field strength $E$ is $250$ V/m, and the unit vector indicating its direction is $e_x 0.6 - e_z 0.8$. Find the instantaneous expressions for the electric field $E$ and the magnetic field $H$.(Same as <span style="font-weight:bold; color:rgb(255, 177, 10)">Example 5.1.1</span>)

> Solution:
>
> The general expression for the electric field strength of a uniform plane wave propagating along the $e_y$ direction is  
> $$E(y,t) = E_m \cos(\omega t - ky + \phi)$$
>
> According to the conditions given in this problem, the parameters in the formula are  
> $$\omega = 2 \pi f = 8 \pi \times 10^8 \ \mathrm{rad/s}$$  
> $$k = \omega \sqrt{\mu_0 \varepsilon_0} = \frac{\omega}{c} = \frac{8 \pi \times 10^8}{3 \times 10^8} \ \mathrm{rad/s} = \frac{8 \pi}{3} \ \mathrm{rad/m}$$
>
> $$E_m = 250(e_x 0.6 - e_z 0.8) \ \mathrm{V/m}$$
>
> Since $y = 0.5$ m, $t = 0.2$ ns, $E$ reaches its maximum value, that is  
> $$E_m \cos\left(8 \pi \times 10^8 \times 0.2 \times 10^{-9} - \frac{8 \pi}{3} \times \frac{1}{2} + \phi\right) = E_m$$
>
> Thus it is obtained that  
> $$\phi = \frac{4 \pi}{3} - \frac{4 \pi}{25} = \frac{88 \pi}{75}$$
>
> Therefore  
> $$E = (e_x 150 - e_z 200) \cos\left(8 \pi \times 10^8 t - \frac{8 \pi}{3} y + \frac{88 \pi}{75}\right) \ \mathrm{V/m}$$  
> $$H = \frac{1}{\eta_0} e_y \times E = -\left(e_x \frac{5}{3 \pi} + e_z \frac{5}{4 \pi}\right) \cos\left(8 \pi \times 10^8 t - \frac{8 \pi}{3} y + \frac{88 \pi}{75}\right) \ \mathrm{A/m}$$




