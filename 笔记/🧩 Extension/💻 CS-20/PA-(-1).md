### Before the experiment

>[!warning] Latest News
> - [**Academic Integrity**](http://integrity.mit.edu/): What is allowed and what is prohibited  
> - **How to Seek Help Properly**:  
>    - [*The Wisdom of Asking Questions*](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)
>    - [*Don't Ask Like a Fool*](https://github.com/tangx/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)

> [!note] External Resources
> - **PA Practice Course** (2023 Fall Semester, Teacher Wang Huiyan): [Course Materials](http://why.ink:8080/ICS/2023/)
> - **ICS Theory Course** of China University MOOC (Teacher Yuan Chunfeng): [Part 1](https://www.icourse163.org/course/NJU-1001625001), [Part 2](https://www.icourse163.org/course/NJU-1001964032), [Part 3](https://www.icourse163.org/course/NJU-1002532004)
> - **SICP Programming Course** by Nanjing University
>   - If you feel that your programming foundation is not up to standard, I strongly recommend self-studying this course
>   - Although it teaches Python, the grammar of the language is secondary, and <span style="background:rgba(252, 163, 180, 0.55)">the training of programming thinking</span> is the most important
> - [**OS Course**](http://jyywiki.cn/OS/2023/) (2023 Spring Semester, Teacher Jiang Yanyan)

### Experimental Environment

- **CPU architecture**: x64

- **Operating system**: GNU/Linux

- **Compiler**: GCC

- **Programming language**: C language

### Experimental Protocol

The fundamental way to understand "<span style="background:rgba(252, 163, 180, 0.55)">how programs run on a computer</span>" is to implement a complete computer system from scratch.

We will implement a simplified but fully functional `x86/mips32/riscv32(64)` emulator, and eventually run the game "Chinese Paladin" on it.

`PA` includes a preparatory experiment (configuring the experimental environment) and 5 parts of coherent experimental content:

- Turing machine and simple debugger

- von Neumann computer system

- batch processing system

- time-sharing multitasking

- program performance optimization

- experimental environment

### How to Get Help

During learning and experimentation, you will encounter many problems. In addition to referring to the textbook content, you need to master how to obtain other reference materials.

But before that, you need to get used to consulting English materials. Unlike problems encountered in previous programming courses, you will find that it is not easy to search for relevant Chinese materials. Looking back at the layered abstraction diagram of computer science, computer system fundamentals are at a lower level than programming. This means that there are fewer people who understand system fundamentals than those who understand programming, and correspondingly, there will be less Chinese material on system fundamentals than on programming.

How to adapt to consulting English materials? The method is to try and persist in consulting English materials.

#### Search Engines, Encyclopedias, and Q&A Websites

To find English materials, you should use the websites recommended in the table below:

|                 | Search Engine                                         | Encyclopedia             | Q&A Website             |
|-----------------|-------------------------------------------------------|--------------------------|-------------------------|
| Recommended     | <http://google.com>  | <http://en.wikipedia.org> | <http://stackoverflow.com> |
| Not Recommended | ~~<http://www.baidu.com>~~| ~~<http://baike.baidu.com>~~|~~<http://zhidao.baidu.com>~~ <br> ~~<http://bbs.csdn.net>~~|

**Some explanations:**

- Generally, Baidu's ability to handle English keywords is not as good as Google's.
- Generally, the English Wikipedia contains richer content than the Chinese Wikipedia and Baidu Baike. To illustrate why you should use the English Wikipedia, please compare the entry for "`Preorder traversal`" in Baidu Baike [external link], Chinese Wikipedia [external link], and English Wikipedia [external link].
- Stack Overflow is a Q&A website in the programming field. Besides technical questions (e.g., "What is `::!!` in C code?" [external link]), it also has some academic questions (e.g., "Is there a regular expression to detect a valid regular expression?" [external link]) and some interesting questions (e.g., "What is the `-->` operator in C++?" [external link]).

