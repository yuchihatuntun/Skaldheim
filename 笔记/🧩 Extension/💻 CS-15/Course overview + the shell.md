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

The shell splits the command based on <span style="background:rgba(252, 163, 180, 0.55)">spaces</span> and parses it, then executes the program represented by **the first word** and passes the subsequent words as parameters that the program can access. 

If you want to pass an argument that contains spaces (for example, a folder named `My Photos`), you can either wrap it in single quotes, double quotes, or use the escape character `\` to handle it (`My\ Photos`).

But how does the shell know where to look for `date` or `echo`? Well, like `Python` or `Ruby`, the shell is a programming environment, so it has variables, conditionals, loops, and functions. 

When you execute a command in the shell, you're actually executing a short piece of code that the shell can interpret and execute. If you ask the shell to execute something that's not a programming keyword that the shell understands, it consults the environment variable $PATH, which lists the paths that the shell searches for programs when it receives a command:
