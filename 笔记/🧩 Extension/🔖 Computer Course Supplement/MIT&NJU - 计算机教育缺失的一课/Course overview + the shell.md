![alt text](wallhaven-vq3rk5_2560x1440.png)

### Motivation

As computer scientists, we all know that computers are great at helping us do repetitive tasks. But we often forget that this also applies to how we use computers, not just to program them to solve problems for us. When we work with computers, we have many tools at our fingertips that can help us solve problems more efficiently. <span style="background:rgba(252, 163, 180, 0.55)">But most of us actually only use a few of these tools</span>, often just memorizing a few commands like incantations, or blindly copying and pasting commands from the Internet when we get stuck.

This course is intended to help you solve this problem.

We hope to teach you how to use the tools you already have and introduce you to some new tools. Maybe we can also make you want to explore (or even develop) more tools. We think this is an important missing link in most computer science courses.

### Topic 1: The Shell

What is a shell?

Today's computers have a variety of interactive interfaces that allow us to input commands, from cool graphical user interfaces (GUIs), voice input, and even AR/VR. These interactive interfaces can cover 80% of the usage scenarios, but they also fundamentally limit your operation methods - <span style="background:rgba(252, 163, 180, 0.55)">you can't click a button that doesn't exist or use voice to input a command that hasn't been entered</span>. In order to fully utilize the power of computers, we have to go back to the most basic way and use **a text interface**: `Shell`

Almost all platforms you can access support some form of shell, and some even provide multiple shells for you to choose from. Although there are some differences in details between them, their core functions are the same: <span style="background:rgba(252, 163, 180, 0.55)">it allows you to execute programs, input, and get some semi-structured output.</span>

In this class, we will use `Bourne Again SHell`, or "`bash`" for short. This is **the most widely used shell**, and its syntax is similar to other shells. To open a shell prompt (where you enter commands), you first need to open a <span style="background:rgba(252, 163, 180, 0.55)">terminal</span>. Your device will usually already have a terminal built in, or you can install one, which is pretty easy.

#### Using the shell

When you open a terminal, you'll see a prompt that generally looks something like this:

```bash
missing:~$ 
```

This is <span style="background:rgba(252, 163, 180, 0.55)">the main text interface</span> to the shell. It tells you that your hostname is missing and that your `current working directory` or location is `~` (for "home"). The `$` sign indicates that **you are not the root user**.

At this prompt, you can enter commands, which are eventually interpreted by the shell. The simplest command is to execute a program:

```bash
missing:~$ date
Fri 10 Jan 2020 11:49:31 AM EST
missing:~$ 
```
Here, we execute the `date` program, and, as expected, it prints the current date and time. The shell then waits for us to enter another command. We can pass <span style="background:rgba(252, 163, 180, 0.55)">parameters</span> to programs while executing commands:

```bash
missing:~$ echo hello
hello
```

In the above example, we let the shell execute `echo` and specify the parameter `hello`. The `echo` program prints the parameter.

>[!note] The `echo` Command
> The `echo` command itself is its full name. It is not an abbreviation. Its name comes from its function: to <span style="background:rgba(252, 163, 180, 0.55)">"echo back" the input text to the standard output</span>.

The shell splits the command based on <span style="background:rgba(252, 163, 180, 0.55)">spaces</span> and parses it, then executes the program represented by **the first word** and passes the subsequent words as parameters that the program can access. 

If you want to pass an argument that contains spaces (for example, a folder named `My Photos`), you can either wrap it in single quotes, double quotes, or use the escape character `\` to handle it (`My\ Photos`).

But how does the shell know where to look for `date` or `echo`? Well, like `Python` or `Ruby`, the shell is a programming environment, so it has variables, conditionals, loops, and functions. 

When you execute a command in the shell, you're actually executing a short piece of code that the shell can interpret and execute. If you ask the shell to execute something that's not a programming keyword that the shell understands, it consults the environment variable `$PATH`, which lists the paths that the shell searches for programs when it receives a command:

```bash
missing:~$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
```

When we execute the `echo` command, the shell knows that we need to execute the `echo` program, and then it searches `$PATH` for a series of directories separated by `:` to search for the program based on the name. When the program is found, it is executed (assuming that the file is an executable program (ELF)). 

```bash
missing:~$ which echo
/bin/echo
```

To determine which specific program a program name represents, you can use the `which` program. 

```bash
missing:~$ /bin/echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

```

We can also bypass `$PATH` and execute the program by directly specifying the path to the program to be executed.

#### Navigating in the shell

A path in the shell is a set of directories separated by `/` on Linux and macOS and `\` on Windows. 

The path `/` represents the root directory of the system, all folders are included under this path, and each drive has a root directory on Windows (for example: `C:\`). If a path starts with /, it is an absolute path, and all others are relative paths. A relative path is a path relative to the current working directory, which can be obtained using the pwd command. In addition, the cd command is required to switch directories. In the path, . represents the current directory, and .. represents the parent directory:

```bash
missing:~$ pwd
/home/missing
missing:~$ cd /home
missing:/home$ pwd
/home
missing:/home$ cd ..
missing:/$ pwd
/
missing:/$ cd ./home
missing:/home$ pwd
/home
missing:/home$ cd missing
missing:~$ pwd
/home/missing
missing:~$ ../../bin/echo hello
hello
```
