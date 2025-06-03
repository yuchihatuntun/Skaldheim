
### Chapter 03 Lattice Vibration and Crystal Thermodynamics

#### Knowledge Summary

#### The Blue Book

> [!note] 3.1
>
> It is known that in a one-dimensional monatomic chain, the displacement caused by the $j$-th phonon at the $n$-th lattice point is $\mu_{nj} = a_j \sin(\omega_j t + naq_j + \delta_j)$, where $\delta_j$ is an arbitrary phase factor, and it is known that at higher temperatures, the average energy of each phonon is $k_B T$, calculate specifically the mean square displacement of each atom.

> **Solution:**
> 
> According to $\frac{1}{T} \int_0^T \sin^2(\omega_j t + naq_j + \delta_j) dt = \frac{1}{2}$, where $T = \frac{2\pi}{\omega_j}$ is the period of vibration, thus we have
>
> $$
> \overline{\mu_{nj}^2} = a_j^2 \sin^2(\omega_j t + naq_j + \delta_j) = \frac{1}{2} a_j^2 \tag{1}
> $$
>
> Since the average kinetic energy of the phonon (denoted $N$ as the total number of atoms in the one-dimensional chain, i.e., the total number of lattice points)
>
> $$
> \sum_n \frac{1}{2} m \overline{\mu_{nj}^2} = \frac{1}{2} m \sum_n a_j^2 \omega_j^2 \cos^2(\omega_j t + naq_j + \delta_j) = \frac{1}{4} m a_j^2 \omega_j^2 N
> $$
>
> Also, because for the classical simple harmonic motion
>
> Average kinetic energy = Average potential energy = $\frac{1}{2}$ phonon average energy = $\frac{k_B T}{2}$
>
> So $\frac{1}{4} m a_j^2 \omega_j^2 N = \frac{1}{2} k_B T$, i.e.
>
> $$
> a_j^2 = \frac{2 k_B T}{N m \omega_j^2} \tag{2}
> $$
>
> The displacement of any atom is the superposition of all phonon-induced displacements, i.e.
>
> $$
> \mu_n = \sum_j \mu_{nj} = \sum_j a_j \sin(\omega_j t + naq_j + \delta_j)
> $$
>
> The mean square displacement of the atom is
>
> $$
> \overline{\mu_n^2} = \overline{\left( \sum_j \mu_{nj} \right) \left( \sum_k \mu_{nk}^* \right)} = \sum_j \overline{\mu_{nj}^2} + \sum_{j \neq k} \overline{\mu_{nj} \cdot \mu_{nk}^*} \tag{3}
> $$
>
> (3) The second term is relatively small compared to the first term. Considering only the first term, combined with (1) and (2), we can obtain the mean square displacement of each atom as
>
> $$
> \overline{\mu_n^2} = \sum_j \overline{\mu_{nj}^2} = \frac{k_B T}{N m} \sum_j \frac{1}{\omega_j^2} \tag{4}
> $$

> [!note] 3.2
>
> Discuss the one-dimensional diatomic chain of $N$ atoms (with a distance $a$ between adjacent atoms), its $2N$ phonon solutions, and when $M = m$, the results correspond one-to-one with those of a one-dimensional monatomic chain.

> **Solution:**
>
> In a one-dimensional diatomic chain, the range of the wave vector $q$ is $-\frac{\pi}{2a} < q \leq \frac{\pi}{2a}$. The relationship for the vibrational frequency is given by
>
> $$
> \omega_{\pm}^2 = \beta \frac{M+m}{Mm} \left\{ 1 \pm \sqrt{1 - \frac{4Mm}{M+m} \sin^2 aq} \right\} \tag{1}
> $$
>
> When $M = m$, for optical branches we have
>
> $$
> \omega_{+}^2 = \beta \frac{2}{m} (1 + \cos aq) = \frac{4\beta}{m} \cos^2 \frac{aq}{2}, \quad -\frac{\pi}{2a} < q \leq \frac{\pi}{2a}
> $$
>
> When $M = m$, for acoustic branches we have
>
> $$
> \omega_{-}^2 = \beta \frac{2}{m} (1 - \cos aq) = \frac{4\beta}{m} \sin^2 \frac{aq}{2}, \quad -\frac{\pi}{2a} < q \leq \frac{\pi}{2a}
> $$
>
> which corresponds to the solution of a one-dimensional monatomic chain
>
> $$
> \omega^2 = \frac{4\beta}{m} \sin^2 \frac{aq}{2}, \quad -\frac{\pi}{a} < q \leq \frac{\pi}{a}
> $$
>
> is one-to-one as shown in Figure 3.1. If the left half of the range $-\frac{\pi}{2a} < q \leq \frac{\pi}{2a}$ for $\omega_{+}$ is shifted to the range $\frac{\pi}{2a} < q \leq \frac{\pi}{a}$, and the left half of $\omega_{+}$ is shifted to the range $-\frac{\pi}{a} < q \leq -\frac{\pi}{2a}$, then the curve of the one-dimensional diatomic chain becomes the curve of the one-dimensional monatomic chain.

> [!note] 3.3
>
> Consider the lattice vibration of a diatomic chain, where the force constants between the nearest neighboring atoms alternate between $c$ and $10c$. Let the masses of the two types of atoms be the same, and the nearest neighboring distance be $a/2$. Find the $\omega(k)$ at $k=0$ and $k=\frac{\pi}{a}$, and sketch the dispersion relation. This problem simulates a diatomic molecular crystal, such as $H_2$.

> **Solution:**
>
> Let $x_{2n}$ represent the displacement of the $2n$-th atom, and $x_{2n+1}$ represent the displacement of the $(2n+1)$-th atom. The equations of motion are
>
> $$
> m\ddot{x}_{2n} = 10c(x_{2n+1} - x_{2n}) - c(x_{2n} - x_{2n-1})
> $$
>
> $$
> m\ddot{x}_{2n+1} = c(x_{2n+2} - x_{2n+1}) - 10c(x_{2n+1} - x_{2n})
> $$
>
> Simplifying, we get
>
> $$
> m\ddot{x}_{2n} = c(10x_{2n+1} + x_{2n-1} - 11x_{2n}) \tag{1}
> $$
>
> $$
> m\ddot{x}_{2n+1} = c(x_{2n+2} + 10x_{2n} - 11x_{2n+1})
> $$
>
> Let $x_{2n} = Ae^{i[(2n)\frac{aq}{2}-\omega t]}$, $x_{2n+1} = Be^{i[(2n+1)\frac{aq}{2}-\omega t]}$, substituting into (1) gives
>
> $$
> -m\omega^2 A = c \left( e^{-i\frac{aq}{2}} + 10e^{i\frac{aq}{2}} \right) B - 11cA \tag{2}
> $$
>
> $$
> -m\omega^2 A = c(10e^{-i\frac{aq}{2}} + e^{i\frac{aq}{2}}) - 11cB
> $$
>
> Simplifying to the condition for non-zero solutions of $A$, $B$
>
> $$
> \left| \begin{array}{cc}
> m\omega^2 - 11c & ce^{i\frac{aq}{2}} + 10ce^{-i\frac{aq}{2}} \\
> 10ce^{i\frac{aq}{2}} + ce^{-i\frac{aq}{2}} & m\omega^2 - 11c
> \end{array} \right| = 0 \tag{3}
> $$
>
> Solving, we get
>
> $$
> \omega_{\pm}^2(k) = \frac{11c \pm c\sqrt{20\cos ka + 101}}{m} \tag{4}
> $$
>
> When $k=0$, $\cos ka = 1$, so
>
> $$
> \omega_{-} = 0, \quad \omega_{+} = \sqrt{\frac{22c}{m}} \tag{5}
> $$
>
> When $k=\frac{\pi}{a}$, $\cos ka = -1$, at this time
>
> $$
> \omega_{-} = \sqrt{\frac{2c}{m}}, \quad \omega_{+} = \sqrt{\frac{20c}{m}} \tag{6}
> $$

> [!note] 3.4
>
> Consider a square lattice composed of identical atoms, with $u_{l,m}$ denoting the displacement of the atom at the $l$-th row and $m$-th column from the equilibrium position, each atom having mass $M$, and the force constant between nearest neighboring atoms being $c$.
>
> (1) Prove the equation of motion
>
> $$
> M \frac{\mathrm{d}^2 u_{l,m}}{\mathrm{d}t^2} = c[(u_{l+1,m} + u_{l-1,m} - 2u_{l,m}) + (u_{l,m+1} + u_{l,m-1} - 2u_{l,m})]
> $$
>
> (2) Assume the solution is of the form $u_{l,m} = u(0) \exp[i(lk_xa + mk_ya) - \omega t]$, where $a$ is the distance between nearest neighboring atoms, prove that the equation of motion is satisfied if $\omega^2 M = 2c(2 - \cos k_xa - \cos k_ya)$, which is the dispersion relation of the problem.
>
> (3) Prove that the $k$-space region where independent solutions exist is a square with side length $\frac{2\pi}{a}$, which is the first Brillouin zone of the square lattice. Construct the $\omega-k$ diagram when $k = k_x$ and $k_y = 0$, and when $k_x = k_y$.
>
> (4) For $ka \ll 1$, prove
>
> $$
> \omega = \left( \frac{ca^2}{M} \right)^{1/2} (k_x^2 + k_y^2)^{1/2} = \left( \frac{ca^2}{M} \right)^{1/2} k
> $$

> **Solution:**
>
> (1) As shown in Figure 3.4, considering only the influence of the nearest neighboring atoms, the $(l, m)$ atom is affected by the four atoms $(l+1, m)$, $(l-1, m)$, $(l, m+1)$, and $(l, m-1)$. The forces are represented as  
>  
> The force exerted by $(l+1, m)$ on the $(l, m)$ atom is: $c(u_{l+1,m} - u_{l,m})$  
>  
> The force exerted by $(l-1, m)$ on the $(l, m)$ atom is: $c(u_{l,m} - u_{l-1,m})$
>
> Considering the forces exerted by $(l+1, m)$ and $(l-1, m)$ atoms on the $(l, m)$ atom, as well as the forces exerted by $(l, m+1)$ and $(l, m-1)$ atoms in the opposite direction, the equation of motion can be written as
>
> $$
> M \frac{\mathrm{d}^2 u_{l,m}}{\mathrm{d}t^2} = c[(u_{l+1,m} - u_{l,m}) - (u_{l,m} - u_{l-1,m})] + c[(u_{l,m+1} - u_{l,m}) - (u_{l,m} - u_{l,m-1})]
> $$
>
> Simplifying, we get
>
> $$
> M \frac{\mathrm{d}^2 u_{l,m}}{\mathrm{d}t^2} = c[(u_{l+1,m} + u_{l-1,m} - 2u_{l,m}) + (u_{l,m+1} + u_{l,m-1} - 2u_{l,m})] \tag{1}
> $$
>
> (2) Substitute $u_{l,m} = u(0) \exp[i(lk_xa + mk_ya) - \omega t]$ into equation (1), at this time the left side of the equation is $-\omega^2 M u_{l,m}$, and the right side is
>
> $$
> c \left[ u_{l+1,m} + u_{l-1,m} - 2u_{l,m} + u_{l,m+1} + u_{l,m-1} - 2u_{l,m} \right]
> $$
>
> Substitute the assumed solution:
>
> $$
> u_{l+1,m} = u_{l,m} e^{ik_x a}, \quad u_{l-1,m} = u_{l,m} e^{-ik_x a}
> $$
> $$
> u_{l,m+1} = u_{l,m} e^{ik_y a}, \quad u_{l,m-1} = u_{l,m} e^{-ik_y a}
> $$
>
> So the right side becomes:
>
> $$
> c \left[ (e^{ik_x a} + e^{-ik_x a} - 2) u_{l,m} + (e^{ik_y a} + e^{-ik_y a} - 2) u_{l,m} \right]
> $$
> $$
> = c \left[ (2\cos k_x a - 2) + (2\cos k_y a - 2) \right] u_{l,m}
> $$
> $$
> = 2c (\cos k_x a + \cos k_y a - 2) u_{l,m}
> $$
> $$
> = -2c (2 - \cos k_x a - \cos k_y a) u_{l,m}
> $$
>
> Therefore, the equation of motion is satisfied if
>
> $$
> \omega^2 M = 2c(2 - \cos k_x a - \cos k_y a) \tag{2}
> $$
>
> (3)
>
> In $u_{l,m} = u(0) \exp[i(lk_xa + mk_ya) - \omega t]$, replace $k_x$ with $k_x + \frac{2\pi}{a}n_1$, and $k_y$ with $k_y + \frac{2\pi}{a}n_2$, where $n_1$, $n_2$ are integers, then we have
>
> $$
> u_{l,m} = u(0) \exp \left\{ i \left[ l \left( k_x + \frac{2\pi}{a}n_1 \right) a + m \left( k_y + \frac{2\pi}{a}n_2 \right) a \right] - \omega t \right\}
> $$
>
> $$
> = u(0) \exp[i(lk_xa + mk_ya - \omega t)] \cdot \exp[i2\pi(n_1l + n_2m)] = u_{l,m}
> $$
>
> So $u_{l,m}$ and $\omega^2$ are periodic functions of $k_x$ and $k_y$ with period $\frac{2\pi}{a}$, hence $k_x$ and $k_y$ can be limited to the range
>
> $$
> -\frac{\pi}{a} \leq k_x < \frac{\pi}{a}, \quad -\frac{\pi}{a} \leq k_y < \frac{\pi}{a}
> $$
>
> This region, where all independent solutions are located, is a square region in $k$-space with side length $\frac{2\pi}{a}$, known as the first Brillouin zone of the two-dimensional square lattice.
>
> Taking $k_x = k, k_y = 0$, from equation (2) we get
>
> $$
> \omega^2 = \frac{2c(1 - \cos ka)}{M} = \frac{4c}{M} \sin^2 \left( \frac{ka}{2} \right)
> $$
>
> $$
> \omega = \sqrt{\frac{4c}{M}} \left| \sin \left( \frac{ka}{2} \right) \right| \tag{3}
> $$
>
> Taking $k_x = k_y$, from equation (2) we get
>
> $$
> \omega^2 = \frac{4c(1 - \cos k_xa)}{M} = \frac{8c}{M} \sin^2 \left( \frac{\sqrt{2}}{4} ka \right)
> $$
>
> (4)
>
> Using the approximation $\cos x \approx 1 - \frac{1}{2}x^2$ for small $x$, when $ka \ll 1$, we have
>
> $$
> \omega^2 = \frac{2c}{M} \left[ 2 - \left( 1 - \frac{(k_xa)^2}{2} \right) - \left( 1 - \frac{(k_ya)^2}{2} \right) \right] = \frac{ca^2}{M} (k_x^2 + k_y^2) = \frac{ca^2}{M} k^2
> $$
>
> Therefore, $\omega = \left( \frac{ca^2}{M} \right)^{1/2} k$.

#### The Physics Dictionary
