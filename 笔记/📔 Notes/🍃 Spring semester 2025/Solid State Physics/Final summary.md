### Chapter 01 Crystal Structure


#### The Blue Book



<h2 id="exercise_1.1"></h2>

> [!note] 1.1
>
> If equal volume spheres are arranged into the following structures, let $x$ represent the ratio of the volume occupied by the spheres to the total volume, prove

Structure | $x$
---|---
Simple cubic | $\pi/6 \approx 0.52$
Body-centered cubic | $\sqrt{3}\pi/8 \approx 0.68$
Face-centered cubic | $\sqrt{2}\pi/6 \approx 0.74$
Hexagonal close-packed | $\sqrt{2}\pi/6 \approx 0.74$
Diamond cubic | $\sqrt{3}\pi/16 \approx 0.34$

>[!tip] This is a high school question. Just remember it as a conclusion.

<h2 id="exercise_1.3"></h2>

>[!note] 1.3
>
> Prove: The reciprocal lattice of body-centered cubic is face-centered cubic; the reciprocal lattice of face-centered cubic is body-centered cubic.

| Bravais Lattice        | Common Choice for Primitive Vectors                                                                                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Simple Cubic (SC)** | The conventional and primitive cells are identical.<br>$\vec{a}_1 = a\hat{i}$<br>$\vec{a}_2 = a\hat{j}$<br>$\vec{a}_3 = a\hat{k}$                                                                                              |
| **Body-Centered Cubic (BCC)** | Vectors from one lattice point to the body-centers of adjacent cells.<br>$\vec{a}_1 = \frac{a}{2}(-\hat{i} + \hat{j} + \hat{k})$<br>$\vec{a}_2 = \frac{a}{2}(\hat{i} - \hat{j} + \hat{k})$<br>$\vec{a}_3 = \frac{a}{2}(\hat{i} + \hat{j} - \hat{k})$ |
| **Face-Centered Cubic (FCC)** | Vectors from one lattice point to the centers of the three adjacent faces.<br>$\vec{a}_1 = \frac{a}{2}(\hat{j} + \hat{k})$<br>$\vec{a}_2 = \frac{a}{2}(\hat{i} + \hat{k})$<br>$\vec{a}_3 = \frac{a}{2}(\hat{i} + \hat{j})$          |
| **Simple Hexagonal** | Two vectors with a 120° angle in the basal plane, and one vector perpendicular to this plane.<br>$\vec{a}_1 = a\hat{i}$<br>$\vec{a}_2 = a(\frac{1}{2}\hat{i} + \frac{\sqrt{3}}{2}\hat{j})$<br>$\vec{a}_3 = c\hat{k}$          |

*In these formulas, $a$ and $c$ represent the lattice constants, and $\hat{i}, \hat{j}, \hat{k}$ are the Cartesian unit vectors.*

> Let the unit vectors parallel to the crystal axes be $i, j, k$. The primitive vectors of the body-centered cubic lattice can be taken as

$$
\boldsymbol{a}_1 = \frac{a}{2}(-\boldsymbol{i} + \boldsymbol{j} + \boldsymbol{k}), \quad \boldsymbol{a}_2 = \frac{a}{2}(\boldsymbol{i} - \boldsymbol{j} + \boldsymbol{k}), \quad \boldsymbol{a}_3 = \frac{a}{2}(\boldsymbol{i} + \boldsymbol{j} - \boldsymbol{k})
$$

> From the reciprocal lattice formula $b_1 = \frac{2\pi}{v_c} \boldsymbol{a}_2 \times \boldsymbol{a}_3$, $b_2 = \frac{2\pi}{v_c} \boldsymbol{a}_3 \times \boldsymbol{a}_1$, $b_3 = \frac{2\pi}{v_c} \boldsymbol{a}_1 \times \boldsymbol{a}_2$, we can obtain its reciprocal lattice vectors as

$$
b_1 = \frac{2\pi}{a}(\boldsymbol{j} + \boldsymbol{k}), \quad b_2 = \frac{2\pi}{a}(\boldsymbol{k} + \boldsymbol{i}), \quad b_3 = \frac{2\pi}{a}(\boldsymbol{i} + \boldsymbol{j})
$$

> And the primitive vectors of the face-centered cubic lattice can be taken as

$$
\boldsymbol{a}_1 = \frac{a}{2}(\boldsymbol{j} + \boldsymbol{k}), \quad \boldsymbol{a}_2 = \frac{a}{2}(\boldsymbol{i} + \boldsymbol{k}), \quad \boldsymbol{a}_3 = \frac{a}{2}(\boldsymbol{i} + \boldsymbol{j})
$$

> Equations (1) and (2) differ only by a constant factor, which indicates that the reciprocal lattice of the body-centered cubic is face-centered cubic. Similarly, it can be proven that the reciprocal lattice of the face-centered cubic is body-centered cubic.

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

### Chapter 04 Band theory

#### Knowledge Summary

> [!info] Learning Objectives
>
> 1. Master and apply the Bloch theorem;
>
> 2. Understand the characteristics of electron motion in one-dimensional and three-dimensional periodic fields under the approximation of nearly free electrons;
>
> 3. Understand and master the method of calculating energy bands using the tight-binding approximation;
>
> 4. Understand the symmetry of crystal energy bands;
>
> 5. Master the calculation of the density of states;
>
> 6. Understand the concepts of Fermi surface, Fermi velocity, Fermi temperature, and Fermi radius;
>
> 7. Understand the characteristics of electron states in surface electron states and disordered systems.

##### The Bloch Theorem

For a periodic potential, i.e.

$$V(\boldsymbol{r} + \boldsymbol{R}_n) = V(\boldsymbol{r})$$

where $\boldsymbol{R}_n$ takes all lattice vectors of the Bravais lattice, the Schrödinger equation for a single electron is

$$\hat{H} \psi(\boldsymbol{r}) = \left[ -\frac{\hbar^2}{2m} \nabla^2 + V(\boldsymbol{r}) \right] \psi(\boldsymbol{r}) = \varepsilon \psi(\boldsymbol{r}) \tag{4.1}$$

The eigenfunctions of $\hat{H}$ are plane wave functions modulated by periodic functions of the Bravais lattice, i.e.

$$\psi_{\boldsymbol{k}}(\boldsymbol{r}) = e^{i\boldsymbol{k} \cdot \boldsymbol{r}} u_{\boldsymbol{k}}(\boldsymbol{r}) \tag{4.2}$$

and

$$u_{\boldsymbol{k}}(\boldsymbol{r} + \boldsymbol{R}_n) = u_{\boldsymbol{k}}(\boldsymbol{r}) \tag{4.3}$$

It is easy to derive from the above that Bloch's theorem can also be expressed as for each eigenvalue problem of the above Schrödinger equation, there exists a wave vector $\boldsymbol{k}$, such that

$$\psi(\boldsymbol{r} + \boldsymbol{R}_n) = e^{i\boldsymbol{k} \cdot \boldsymbol{R}_n} \psi(\boldsymbol{r}) \tag{4.4}$$

It holds for all lattice vectors $R_n$ of the Bravais lattice. $\psi_{\boldsymbol{k}}(\boldsymbol{r})$ is called the Bloch function.

Bloch's theorem is derived from the translational symmetry of the crystal, and any wave in a periodic structure should have the form of a Bloch function.

##### Hasaya

The value of the wave vector $\boldsymbol{k}$ is determined by the periodic boundary conditions (Bloch-Fermi boundary conditions), i.e.

$$
\left\{
\begin{array}{l}
\psi(\boldsymbol{r} + N_1 \boldsymbol{a}_1) = \psi(\boldsymbol{r}) \\
\psi(\boldsymbol{r} + N_2 \boldsymbol{a}_2) = \psi(\boldsymbol{r}) \\
\psi(\boldsymbol{r} + N_3 \boldsymbol{a}_3) = \psi(\boldsymbol{r})
\end{array}
\right. \tag{4.5}
$$

where $\boldsymbol{a}_i (i = 1, 2, 3)$ are the three lattice vectors of the Bravais lattice, $N = N_1 N_2 N_3$ is the total number of unit cells in the crystal, and $N_i$ is an integer of order $N^{1/3}$.

##### Three Basic Approximations

1. **Adiabatic approximation**

Due to the huge mass difference between electrons and atomic nuclei, the velocity of electrons is much greater than that of atomic nuclei, allowing the treatment of electrons and nuclei as two separate systems without energy exchange. When considering the motion of electrons, the nuclei can be considered stationary.

2. **Single electron approximation**

The influence of the solid's ions and the remaining electrons can be replaced by an average field, simplifying the wave equation problem of many electrons to that of a single electron.

3. **Periodic field approximation**

Regardless of the interaction between a single electron and the ions in the crystal or the interaction among the remaining electrons, it is assumed that the total potential field experienced by a single electron in the crystal is a periodic field.

In short, by using the adiabatic approximation, the problem of many particles composed of a large number of atomic nuclei (ions) and electrons is transformed into a problem of many electrons. Using the single electron approximation, it is further transformed into a problem of a single electron. Then, using the periodic field (average field) approximation, the motion of a single electron in the crystal is considered as the motion of the electron in the "field formed by the average charge distribution of positive ions and other electrons."

##### Near-free electron approximation for electron motion in a one-dimensional periodic field

The so-called near-free electron approximation is: *assuming that the periodic field is small, the average value $\bar{V}$ of the potential can be used to replace $V(x)$, and the periodic potential $[V(x) - \bar{V}]$ is treated as a perturbation.* 

The wave equation for the zeroth-order approximation is

$$
-\frac{\hbar^2}{2m} \frac{\mathrm{d}^2}{\mathrm{d}x^2} \psi^0 + \bar{V} \psi^0 = E^0 \psi^0 \tag{4.7}
$$

The solution for the free particle in the constant field $\bar{V}$ is:

$$
\psi_k^0(x) = \frac{1}{\sqrt{L}} e^{ikx}, \quad E_k^0 = \frac{\hbar^2 k^2}{2m} + \bar{V} \tag{4.8}
$$

where the lattice length $L = Na$, $N$ is the number of unit cells, $a$ is the lattice constant (interatomic distance). The value of $k$ is determined by the periodic boundary conditions

$$
k = \frac{l}{Na} (2\pi) \quad (l \in \mathbb{Z}) \tag{4.9}
$$

The wave function satisfies the normalization condition. It is because the zeroth-order approximate solution corresponds to free electrons that this approximation is called the nearly-free electron approximation.

Under general perturbation theory (without degeneracy), the first and second-order corrections to the eigenvalues are given by:

$$
E_k^{(1)} = \langle k | \Delta V | k \rangle = 0
$$

$$
E_k^{(2)} = \sum_{k'} \frac{|\langle k' | \Delta V | k \rangle|^2}{E_k^0 - E_{k'}^0}
$$

The first-order correction to the wave function is:

$$
\psi_k^{(1)} = \sum_{k'} \frac{\langle k' | \Delta V | k \rangle}{E_k^0 - E_{k'}^0} \psi_{k'}^0
$$

It can be proven that:

$$
\langle k' | \Delta V | k \rangle = \langle k' | V(x) | k \rangle =
\begin{cases}
\displaystyle \frac{1}{a} \int_0^a e^{-i 2\pi \frac{n}{a} \xi} V(\xi) d\xi = V_n, & k' = k + \frac{n}{a} 2\pi \\
0, & \text{otherwise}
\end{cases}
$$

For states $k$ close to $-\frac{n\pi}{a}$, a degenerate perturbation treatment should be applied.

$$
k = -\frac{n\pi}{a}(1 - \Delta), \, \Delta << 1
$$

Under the perturbation of a periodic field, the main effect is the mixing with states that have energies close to it:
$$
k = \frac{n\pi}{a}(1 + \Delta), \, \Delta << 1
$$

Using an approximate treatment method, all other mixed states are ignored, and the wave function is written as:

$$
\psi = a\psi_k^0 + b\psi_{k'}^0
$$

where $\psi_k^0$ and $\psi_{k'}^0$ satisfy equation (4.7), with corresponding eigenvalues $E_k^0$ and $E_{k'}^0$. From equation (4.7) and the wave equation:

$$
\left[-\frac{\hbar^2}{2m} \frac{d^2}{dx^2} + V(x) - E\right] \psi(x) = 0
$$

the eigenvalues can be solved as:

$$
E_\pm = \frac{1}{2} \left\{(E_k^0 + E_{k'}^0) \pm \left[(E_k^0 - E_{k'}^0)^2 + 4|V_n|^2\right]^{1/2}\right\}
$$

Now, two cases are discussed:

(1) $|E_k^0 - E_{k'}^0| >> |V_n|$, i.e., state $k$ is far from $-\frac{n\pi}{a}$.

At this point, there is still a significant difference in energy between the $k$ and $k'$ states. Expanding equation (4.10) with respect to $|V_n|/(E_k^0 - E_{k'}^0)$ and taking the first-order approximation yields:

$$
E_\pm =
\begin{cases}
E_{k'}^0 + \frac{|V_n|^2}{E_{k'}^0 - E_k^0} \\
E_k^0 - \frac{|V_n|^2}{E_{k'}^0 - E_k^0}
\end{cases}
$$

Here, it is assumed that $\Delta > 0$ (i.e., $E_{k'}^0 > E_k^0$). From the above equation, it can be seen that the mutual influence results in an increase in the energy of the originally higher-energy $k'$ state and a decrease in the energy of the originally lower-energy $k$ state. This is a general result in quantum mechanics, known as the "repulsion effect" between energy levels.

(2) $|E_k^0 - E_{k'}^0| << |V_n|$, i.e., $k$ is very close to $-\frac{n\pi}{a}$.

Expanding equation (4.10) with respect to $(E_{k'}^0 - E_k^0)/|V_n|$ to the first order and using the relationship between $k$ and $\Delta$ gives:

$$
E_\pm =
\begin{cases}
\bar{V} + T_n + |V_n| + \Delta^2 T_n \left(\frac{2T_n}{|V_n|} + 1\right) \\
\bar{V} + T_n - |V_n| - \Delta^2 T_n \left(\frac{2T_n}{|V_n|} - 1\right)
\end{cases}
$$

where $T_n$ represents the kinetic energy when $k = \frac{n\pi}{a}$:
$$
T_n = \frac{\hbar^2}{2m} \left(\frac{n\pi}{a}\right)^2
$$

When $\Delta \to 0$, $E_\pm$ approaches $\bar{V} + T_n \pm |V_n|$ in a parabolic manner.

##### Energy band and Energy gap

Due to the influence of the periodic potential field, the $E(k)$ function will be discontinuous at $k = \frac{\pi}{a}n$, with an energy jump of $2|V_n|$. According to equation (4.9), for each $l$, there is one quantum state, and its energy can be found from the $E(k)$ graph. By plotting all the energy levels of the quantum states, when $N$ is very large, the values of $k$ become extremely dense, and the corresponding energy levels are also very dense. Therefore, they are sometimes referred to as quasi-continuous.

The quasi-continuous energy levels split into a series of bands $1, 2, 3, \dots$, which correspond to the first Brillouin zone, second Brillouin zone, third Brillouin zone, etc. These bands are called energy bands. The energy levels belonging to one Brillouin zone form an energy band, and different Brillouin zones correspond to different energy bands. Within an energy band, the energy levels are quasi-continuous.

The intervals between the bands are called energy gaps, and no energy levels exist within the gaps. The widths of the various gaps directly correspond to the discontinuities in the $E(k)$ curve at $k = \frac{\pi}{a}n$, i.e., $2|V_1|, 2|V_2|, 2|V_3|, \dots$.

The formation of energy bands by the energy levels of electrons moving in a periodic field is one of the most fundamental results of band theory. Each energy band corresponds to the range of $k$ values within a Brillouin zone, such as $2\pi/a$ in the one-dimensional case. Each energy band contains $k$ values within this range.



##### Energy State Density

Corresponding to the density of lattice vibration modes, the concept of density of states is introduced.
Considering the spin, the general expression for the density of states is

$$
N_n(E) = \frac{V}{4\pi^3} \int \frac{\mathrm{d}S}{|\nabla_{\boldsymbol{k}} E_n(\boldsymbol{k})|} \tag{4.28}
$$

The density of states for one-dimensional, two-dimensional, and three-dimensional free electron gases are respectively

**One-dimensional:** 

$$N(E) = \frac{L}{\pi} \left( \frac{2m}{\hbar^2} \right)^{1/2} E^{-1/2} \quad (\text{where $L$ is the length of the lattice})$$

**Two-dimensional:** 

$$N(E) = \frac{S}{\pi \hbar^2} m \quad (\text{where $S$ is the area of the lattice})$$

**Three-dimensional:** 

$$N(E) = \frac{2V}{(2\pi)^2} \left( \frac{2m}{\hbar^2} \right)^{3/2} E^{1/2} \quad (\text{where $V$ is the volume of the lattice})$$

>[!warning] Van Hove Singularity
> Because the energy band function $E_n(\boldsymbol{k})$ is a periodic function in reciprocal space, there are always some $\boldsymbol{k}$ values where $|\nabla_{\boldsymbol{k}}E| = 0$ in each unit cell, leading to a divergence in the integral of the density of states formula. For the three-dimensional case, it is still integrable, giving a finite $N_n(E)$, but the slope $\frac{\mathrm{d}N_n(E)}{\mathrm{d}E}$ diverges, and this divergence of $N_n(E)$ is called the Van Hove singularity.
>
> Van Hove singularity (Singularity) arises from **the unique symmetry of crystal materials**, and similar issues are encountered in the density of lattice vibration modes (lattice vibration mode density).

##### Fermi Surface and Free Electron Sphere Radius

If there are $N$ electrons in a solid, and the electrons are considered free electrons, $N$ electrons fill a sphere of radius $k_F$ in $k$-space, then we have

$$k_F = 2\pi \left( \frac{3}{8\pi} \right)^{1/3} n^{1/3} \tag{4.29}$$

where $n = \frac{N}{V}$ is **the electron number density**.

Generally, this sphere is called the Fermi sphere, $k_F$ is the Fermi radius, the surface of the sphere is the Fermi surface. The Fermi surface is the boundary between the occupied and unoccupied electron regions in $k$-space. The energy value of the Fermi surface is the Fermi energy $E_F$, the momentum $\boldsymbol{p}_F = \hbar \boldsymbol{k}_F$ is the Fermi momentum, and $\boldsymbol{v}_F = \boldsymbol{p}_F/m$ is the Fermi velocity.

>[!warning] Free Electron Sphere Radius
> The free electron sphere radius, also often called the **Wigner-Seitz radius**, represents the radius of the spherical space occupied by each free electron on average.
> The radius of the free electron sphere is defined as
> $$r_s = \left( \frac{3}{4\pi n} \right)^{1/3}$$

> [!note] Example: Fermi Sphere Radius and Lattice Constant in Different Lattices
>
> For a metal with valence electron number $Z_c$ under the free electron approximation, the relationship between the Fermi sphere radius and lattice constant $a$ in simple cubic (sc), body-centered cubic (bcc), and face-centered cubic (fcc) lattices is as follows:
>
> $$
> k_F = \frac{(3\pi^2 Z_c)^{1/3}}{a} = \left\{
> \begin{array}{ll}
> (3\pi^2 Z_c)^{1/3}/a, & \text{sc} \\
> (6\pi^2 Z_c)^{1/3}/a, & \text{bcc} \\
> (12\pi^2 Z_c)^{1/3}/a, & \text{fcc}
> \end{array}
> \right.
> $$
>
> The radius of the free electron sphere is defined as
>
> $$
> r_s = \left( \frac{3}{4\pi n} \right)^{1/3}
> $$
>
> Taking the hydrogen atomic radius $a_0 = \frac{\hbar^2}{me^2} = 0.529\,\text{A}$ as the unit of length, $r_s/a_0$ is a dimensionless quantity.
>
> $$
> k_F = \frac{(9\pi/4)^{1/3}}{r_s} = \frac{1.92}{r_s} = \frac{3.63}{(r_s/a_0)}\,\text{A}^{-1} \tag{4.30}
> $$
>
> $$
> v_F = \frac{4.20}{r_s/a_0} \times 10^8\,\text{cm/s}
> $$
>
> $$
> E_F = \frac{50.1\,\text{eV}}{(r_s/a_0)^2}
> $$

### Chapter 06 Metal Electron Theory

#### Knowledge Summary

##### Fermi Distribution Function

For the equilibrium state of a system, the basic principle of Fermi-Dirac statistics is summarized as the so-called Fermi distribution function:

$$
f(E) = \frac{1}{e^{(E - E_\mathrm{F})/k_\mathrm{B}T} + 1} \tag{6.1}
$$

where $E_\mathrm{F}$ is the Fermi energy level, which can be determined by the following equation ($N$ is the total number of electrons in the system):

$$
\sum_i f(E_i) = N
$$

Using the density of states function $N(E)$, the above equation can be written as:

$$
N = \int_0^\infty f(E) N(E) \, \mathrm{d}E \tag{6.2}
$$

Introducing the function $Q(E)$ (representing the total number of quantum states below energy $E$):

$$
Q(E) = \int_0^E N(E) \, \mathrm{d}E
$$

By performing integration by parts and rewriting the limits of integration, expanding $Q(E)$ near the Fermi energy level to the second order, we obtain:

$$
N = Q(E_\mathrm{F}) + \frac{\pi^2}{6} Q''(E_\mathrm{F}) (k_\mathrm{B}T)^2 \tag{6.3}
$$


