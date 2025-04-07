# <span style="color:rgb(0, 0, 0)">Scalars and Vectors</span>
**Scalar**: A physical quantity described <span style="font-weight:bold; color:rgb(236, 95, 98)">only by its magnitude</span>. Examples include weight and height.

**Vector**: A physical quantity that possesses both <span style="font-weight:bold; color:rgb(236, 95, 98)">magnitude and direction</span>, typically represented by boldface letters or letters with arrows. For example, force is a common vector.

- Vector **Geometric** Representation: A vector can be represented by a ==directed line segment==.

- Vector **Algebraic** Representation:$\vec{A} = \vec{e}_A A = \vec{e}_A |\vec{A}|$

- **Magnitude** of a vector:$A = |\vec{A}|$ Line Segment Length

- Vector of Quantities:$\vec{e}_A = \frac{\vec{A}}{|\vec{A}|}$

**Constant Vector**: A vector with a fixed magnitude and direction.

>[!note]+ Unit vectors are not necessarily constant vectors.
### <span style="color:rgb(0, 0, 0)">Vector Algebra</span>
Vectors are represented by their coordinate components： $\vec{A} = A_x \vec{e}_x + A_y \vec{e}_y + A_z \vec{e}_z$
$$
\begin{cases}
A_x = A \cos \alpha \\
A_y = A \cos \beta \\
A_z = A \cos \gamma
\end{cases}
$$ **Coordinate projection**: $\vec{A} = A (\vec{e}_x \cos \varphi + \vec{e}_y \cos \beta + \vec{e}_z \cos \gamma)$

**Unit Vector**(of the target vector): $\vec{e}_A = \vec{e}_x \cos \alpha + \vec{e}_y \cos \beta + \vec{e}_z \cos \gamma$
##### <span style="color:rgb(0, 0, 0)">Vector Algebraic Operations
</span>
**Quantitative Addition and Subtraction**：Geometrically, the addition and subtraction of two vectors can be represented as the diagonal of a parallelogram whose sides are the two vectors.

Addition and Subtraction of Vectors in a Cartesian Coordinate System: $\vec{A} \pm \vec{B} = \vec{e}_x (A_x \pm B_x) + \vec{e}_y (A_y \pm B_y) + \vec{e}_z (A_z \pm B_z)$

**Vector addition and subtraction conform to the** <span style="font-weight:bold; color:rgb(236, 95, 98)">commutative</span> **and** <span style="font-weight:bold; color:rgb(236, 95, 98)">associative laws</span>.

- Commutative Property： $\vec{A} + \vec{B} = \vec{B} + \vec{A}$

- Associative Law： $\vec{A} + (\vec{B} + \vec{C}) = (\vec{A} + \vec{B}) + \vec{C}$

**Scalar multiplication**: Direction remains unchanged, ==scale== is magnified or reduced.
$$k\vec{A} = \vec{e}_x kA_x + \vec{e}_y kA_y + \vec{e}_z kA_z$$

**Scalar Dot Product (Dot Product)** -- ==Result is a Scalar==

$\vec{A} \cdot \vec{B} = AB \cos \theta = A_x B_x + A_y B_y + A_z B_z$ Interaction Term Disappearance

$\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$ —— Scalar products of vectors <span style="font-weight:bold; color:rgb(236, 95, 98)">obey the commutative law</span>.
$$\vec{A} \perp \vec{B} \longrightarrow \vec{A} \cdot \vec{B} = 0$$
$$\vec{A} \parallel \vec{B} \longrightarrow \vec{A} \cdot \vec{B} = AB$$
$$
\vec{e}_x \cdot \vec{e}_y = \vec{e}_y \cdot \vec{e}_z = \vec{e}_z \cdot \vec{e}_x = 0 \\
\vec{e}_x \cdot \vec{e}_x = \vec{e}_y \cdot \vec{e}_y = \vec{e}_z \cdot \vec{e}_z = 1
$$
<span style="font-weight:bold; color:rgb(236, 95, 98)">Vector Cross Product</span>: Obtain a new vector
$$\vec{A} \times \vec{B} = \vec{e}_n AB \sin \theta$$
Represented as coordinate components:
$$\vec{A} \times \vec{B} = \vec{e}_x (A_y B_z - A_z B_y) + \vec{e}_y (A_z B_x - A_x B_z) + \vec{e}_z (A_x B_y - A_y B_x)$$
Better to ==use a determinant==:
$$\vec{A} \times \vec{B} = \left| \begin{array}{ccc} \vec{e}_x & \vec{e}_y & \vec{e}_z \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{array} \right|$$
$$\vec{A} \times \vec{B} = -\vec{B} \times \vec{A}$$
**The direction of the cross product**: the right-hand rule.

**Quantitative Mixture Operations**: Involves less, just understand the concept.

$(\vec{A}+\vec{B})\cdot\vec{C} = \vec{A}\cdot\vec{C} + \vec{B}\cdot\vec{C}$ —— 分配律

$(\vec{A}+\vec{B})\times\vec{C} = \vec{A}\times\vec{C} + \vec{B}\times\vec{C}$ —— 分配律

$\vec{A}\cdot(\vec{B}\times\vec{C}) = \vec{B}\cdot(\vec{C}\times\vec{A}) = \vec{C}\cdot(\vec{A}\times\vec{B})$ —— 标量三重积

$\vec{A}\times(\vec{B}\times\vec{C}) = (\vec{A}\cdot\vec{C})\vec{B} - (\vec{A}\cdot\vec{B})\vec{C}$ —— 矢量三重积