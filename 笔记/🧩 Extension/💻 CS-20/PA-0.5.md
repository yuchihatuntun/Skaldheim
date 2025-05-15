### Linux Entry Tutorial

The following content is adapted from the operating system course website by jyy, with some modifications and additions. If you are using Linux for the first time, please read the tutorial carefully while trying out the commands mentioned in the tutorial.

### Exploring the Command Line

The command format for Linux commands is similar:

```bash
command_name parameter1 parameter2 parameter3 ..
```
Parameters are separated by <span style="background:rgba(252, 163, 180, 0.55)">any number of spaces</span>. To learn about commands, you can first read [some basic concepts](https://linux.cn/article-6160-1.html). Then we will introduce some commonly used commands:

- `ls` lists the files (or directories) under the current directory (i.e., "folder"). Directories are displayed in blue. `ls -l` can display detailed information.
- `pwd` displays the current working directory.
- `cd DIR` can change the directory to `DIR`. In Linux, each directory contains at least two special entries: `.` refers to the current directory itself, and `..` refers to the parent directory. The root directory of the file system is `/`.
- `touch NEWFILE` can create an empty file named `NEWFILE`; if `NEWFILE` already exists, its content will not be lost.
- `cp SOURCE DEST` can copy the `SOURCE` file to `DEST`; if `DEST` is a directory, `SOURCE` will be copied into this directory.
- `mv SOURCE DEST` can rename `SOURCE` to `DEST`; if `DEST` is a directory, `SOURCE` will be moved into this directory.
- `mkdir DIR` can create a directory `DIR`.
- `rm FILE` can delete the `FILE` file; if the `-r` option is used, it can recursively delete a directory. Deleted files cannot be recovered, so please use with caution!
- `man COMMAND` can view the help for the `COMMAND` command. For example, `man ls` can view how to use the `ls` command. Use `man` and search the internet flexibly to quickly learn new commands.

The function of `man` is not limited to this. `man` can be followed by two parameters to view help for different types (please search the internet for details). For example, if you don't know how to use the standard C library function `fopen`, you can type `man 3 fopen` to view it.
