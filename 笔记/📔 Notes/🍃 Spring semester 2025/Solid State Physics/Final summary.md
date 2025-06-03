### Little Blue Book (adaptive to teaching materials)

#### Chapter 04

##### Knowledge Summary

##### Practice

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

