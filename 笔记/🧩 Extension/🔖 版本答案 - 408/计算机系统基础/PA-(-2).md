![alt text](wallhaven-5gk7m5_2560x1440.png)

### Why should we learn the basics of computer systems?

#### Half-understanding

You have already learned `the basics of programming` and have a certain foundation in C and C++ programming. But you will find that you may still not understand the results of the following program:

##### Array sum

```c
int sum(int a[ ], unsigned len) {
	int i, sum = 0;
	for (i = 0; i <= len-1; i++)
		sum += a[i];
	return sum;
}
```
When `len = 0`, `Access Violation` will occur when executing the for loop of the `sum` function. However, when the parameter `len` is specified as `int` type, the `sum` function can be executed correctly. Why?

>[!note] Explanation
>
> When `len` is `0` and the type is `unsigned int`, the `for` loop of the `sum` function has an `Access Violation` because of the <span style="background:rgba(252, 163, 180, 0.55)">arithmetic overflow</span> behavior of unsigned int.
>
> For unsigned integers, underflow results <span style="background:rgba(252, 163, 180, 0.55)">wrap around to the maximum value of the type</span>. For example, if unsigned int is 32 bits, the result of `0 - 1` will be `2^32 - 1` (which is `UINT_MAX`).
>
> Therefore, the loop condition becomes `i <= UINT_MAX`.
>
> The loop will start executing from `i = 0`. In the first iteration, `sum += a[i]` (i.e. `sum += a[0]`) will try to access the 0th element of array a.
>
> However, since `len` is `0`, array a is actually empty or should not be accessed. Accessing `a[0]` is beyond the valid range of the array (out-of-bounds access), resulting in an "`Access Violation`" runtime error. The loop will continue to try to access `a[1], a[2], ...`, until `UINT_MAX` is reached, which will continue to access invalid memory.

##### Square of integer
