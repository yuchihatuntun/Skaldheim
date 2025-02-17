## **Feature Engineering and Data Integration**
We systematically analyzed the core features of the global medal distribution and its driving mechanisms based on medal data from the Summer Olympics from 1896 to 2024. 

Our longitudinal analysis of Olympic medal stratification (1896–2024) reveals a persistent core-periphery hierarchy: the U.S. maintains hegemonic dominance (2,583 medals; 1,027 golds) through economic-demographic hegemony, whereas China’s post-2000 trajectory (727 medals; 303 golds) underscores state-driven strategic investments in athletic industrialization. Europe exemplifies polycentric equilibrium (e.g., Germany’s 1,153 medals), reflecting institutional path dependence in sports development, diverging from Asia-Oceania’s medal growth (e.g., China, Australia) concurrent with neoliberal globalization paradigms among emergent economies. 
![[Pasted image 20250124172954.png]]
Empirical validation of host-nation performance amplification (China 2008: +28\%; UK 2012: +26\%) reveals causal linkages between institutional resource concentration, socio-psychological priming, and competitive outcomes. Geopolitical hegemony is quantifiably traced through the USSR’s mid-century athletic zenith (352 golds) and its post-1991 institutional fragmentation. Contrastingly, strategic resource niche exploitation—exemplified by the Netherlands’ cycling dominance (40\% medal share) and Hungary’s fencing specialization (60\% golds)—demonstrates competitive asymmetry against traditional powers’ diversification strategies under RBV (resource-based view) frameworks. 
#### **Characteristics of the “Host Effect”**
![[东道主效应特征.png]]
We operationalize the "host effect" through a dual-path framework: **direct structural factors** $R_{i,t}$ (institutional resource allocation, host nation participation quotas) and **indirect socio-psychological mechanisms** $P_{i,t}$ (crowd-induced motivational priming, implicit adjudication bias):
$$  
\begin{aligned}  
R_{i,t} &= \lambda_1 \frac{C_{i,t}}{C_{i,t-4}} + \lambda_2 \frac{Q_{i,t}}{Q_{i,t-4}}, \\  
P_{i,t} &= \sigma\left(\alpha S_{i,t} + \beta V_{i,t}\right),  
\end{aligned}  
$$
where $C_{i,t}$ (sports investment), $Q_{i,t}$ (events participated), $S_{i,t}$ (spectator support), $V_{i,t}$ (subjective-judged events proportion), and $\sigma(\cdot)$ (Sigmoid function).  

The medal increment $\Delta M_{i,t} = M_{i,t} - M_{i,t-4}$ is modeled as:
$$  
\Delta M_{i,t} = \underbrace{\gamma_0 + \gamma_1 H_{i,t}}_{\text{benchmark effect}} + \underbrace{\gamma_2 (H_{i,t} \cdot \tilde{R}_{i,t}) }_{\text{resource effect}} + \underbrace{\gamma_3 (H_{i,t} \cdot \tilde{P}_{i,t})}_{\text{psychological effect}} + \mathbf{X}_{i,t}^\top \boldsymbol{\theta} + \epsilon_{i,t},  
$$
where $\tilde{R}_{i,t}$ and $\tilde{P}_{i,t}$ are Z-score normalized, $\epsilon_{i,t} \sim \mathcal{N}(0, \sigma^2)$, and $\gamma_1$ captures the baseline host effect.  

After that, we generated $B$ parameter estimates $\{\hat{\boldsymbol{\gamma}}^{(b)}, \hat{\boldsymbol{\theta}}^{(b)}\}_{b=1}^B$ by Bootstrap resampling and calculated confidence intervals for the host main effect, thus quantifying uncertainty:
 $$
\text{CI}_{1-\alpha}(\gamma_1) = \left[\hat{\gamma}_1 - z_{\alpha/2} \cdot \hat{\sigma}_{\gamma_1}, \ \hat{\gamma}_1 + z_{\alpha/2} \cdot \hat{\sigma}_{\gamma_1}\right]
$$
With the above structured equations and interaction term design, we realize the multidimensional quantification of the host effect and provide an interpretable feature engineering basis for Olympic medal prediction.
