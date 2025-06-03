### Little Blue Book (adaptive to teaching materials)

#### Chapter 04

##### Knowledge Summary

##### Practice

> [!note] **3.1**
>
> It is known that in a one-dimensional monatomic chain, the displacement caused by the $j$-th phonon at the $n$-th lattice point is $\mu_{nj} = a_j \sin(\omega_j t + naq_j + \delta_j)$, where $\delta_j$ is an arbitrary phase factor, and it is known that at higher temperatures, the average energy of each phonon is $k_B T$, calculate specifically the mean square displacement of each atom.

> [!warning] **Solution:**
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