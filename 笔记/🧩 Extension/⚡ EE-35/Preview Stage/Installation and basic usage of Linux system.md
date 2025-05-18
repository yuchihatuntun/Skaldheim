### Linux vs. Windows  

#### Unix - A different style

Unix (the ancestor of Linux) accomplishes everything through <span style="background:rgba(252, 163, 180, 0.55)">the command line</span>:  

- `ping www.baidu.com` – Check basic network status  

- `df /` – View disk partition usage  

- `fdisk /dev/sdb` – Partition a disk  

- `poweroff` – Shut down the system  

- `find . -name "*.[ch]"` – Search for `.c` and `.h` files in the current directory  

- `grep "\bint i\b" a.c` – Find where variable `i` is defined in a file  

- `wc a.c` – Count lines, words, and characters in a file  

- `apt-get install gcc` – Download and install a new tool with one command  

- `wget http://www.xxx.com/abc.zip` – Download a file  

- `iconv -f gbk -t utf-8 file.txt` – Convert file encoding

#### Shortcomings of Windows GUI

##### Some simple tasks are actually poorly handled by Windows GUI

>[!note] Example: Comparing whether two files are identical
>
> **Windows GUI Solution**:
> *(No straightforward built-in method; typically requires third-party tools.)*  
>
> **Linux Solution**:  
> - Text files: `vimdiff file1 file2`  
> - Binary/non-text files: `diff file1 file2`  
> - Large files: `md5sum file1 file2`  
> *(Translated strictly without additional commentary.)*

##### Some slightly complex tasks are nearly impossible with Windows GUI.  

>[!note] Example: List all included header files in a C project  
>
> **Windows GUI Solution:**
> *(No practical built-in method; requires scripting or specialized tools.)*  
>
> **Linux Solution:**  
>
> ```bash
> find . -name "*.[ch]" | xargs cat | grep "^#include" | sort | uniq
> ```
> 1. `find . -name "*.[ch]"` : Searches for all `.c` and `.h` files in the current directory and subdirectories
> 2. `xargs cat` : Reads the content of each found file
> 3. `grep "^#include"` : Extracts only lines that begin with `#include`
> 4. `sort` : Arranges the include lines alphabetically
> 5. `uniq` : Removes duplicate include lines, showing each unique header only once

This embodies the Unix philosophy:  
- Each tool does one thing, but does it perfectly.  

- Tools use text for input/output, making them easily chainable.  

- Combine small tools to solve complex problems.  

#### Why is Linux More Suitable for Programmers?

- **Key Idea**: Improve problem-solving efficiency through <span style="background:rgba(252, 163, 180, 0.55)">programming creation</span>
- **Combination of Standard Small Tools** -> Shell programming
- **Command Programming in vim**: (e.g., `dd` to delete one line, `10dd` to delete ten lines)
- **grep/awk/sed** -> Regular expression programming

>[!note] Regular Expression (regex or regexp)
> It is a powerful text pattern matching language. It allows you to <span style="background:rgba(252, 163, 180, 0.55)">define a search pattern</span> and then use this pattern to find, locate, extract or replace specific parts in a text string.

- **Linux Command Line** has become the preferred choice in many IT industries:
  - Operations
  - Server development
  - Routers
  - ...
- **Open Source**: Opportunity to understand how computer systems work:
  - `.bashrc`
  - `/etc/profile`
  - `/etc/rcS.d/S01udev`
  - `strace`
  - `ltrace`
  - ...even OS source code
- **Windows** targets the general public, where "ease of use" is most important

### Overview of command-line tools  

#### Command Line Conventions

##### Command Format

`command parameter1 parameter2 ...`

>[!note] Example: List Files in Current Directory
>
>  ```bash
> $ ls -l -a    # Options can also be combined as ls -la
> total 56K
> drwxr-xr-x  2 yzh yzh  4096 Sep 11 09:52 .  --> Current directory
> drwxr-xr-x 10 yzh yzh  4096 Sep 10 19:51 .. --> Parent directory
> -rw-r--r--  1 yzh yzh 34565 Sep  4 10:48 01.md
> -rw-r--r--  1 yzh yzh  9314 Sep 11 09:36 02.md
> |\./\./\./  | \./ \./ \.../ \........../   +--> Filename
> | |  |  |   |  |   |    |        +------------> Last modified date
> | |  |  |   |  |   |    +---------------------> File size (bytes)
> | |  |  |   |  |   +--------------------------> File group
> | |  |  |   |  +------------------------------> File owner
> | |  |  |   +---------------------------------> Hard link count
> | |  |  +-------------------------------------> Other users' permissions
> | |  +----------------------------------------> Group permissions
> | +-------------------------------------------> Owner permissions
> +---------------------------------------------> File type
> ```

#### Linux Filesystem Hierarchy Standard (FHS)

```bash
ROOT DIRECTORY OF THE ENTIRE FILESYSTEM HIERARCHY
├── /bin/
│   └── ESSENTIAL USER COMMAND BINARIES
├── /boot/
│   └── STATIC FILES OF THE BOOT LOADER
├── /dev/
│   └── TEACHER
├── /etc/
│   └── HOST-SPECIFIC SYSTEM CONFIGURATION
│       └── REQUIRED DIRECTORIES: OPT, XII, 50ML, XML
├── /home/
│   ├── USER HOME DIRECTORIES
│   ├── /home/student/
│   │   └── /home/student/dir
│   └── /home/linuxym
├── /lib/
│   └── ESSENTIAL SHARED LIBRARIES AND KERNEL MODULES
├── /media/
│   └── MOUNT POINT FOR REMOVABLE MEDIA
├── /mnt/
│   └── MOUNT POINT FOR TEMPORARILY MOUNTED FILESYSTEMS
├── /opt/
│   └── ADD-ON APPLICATION SOFTWARE PACKAGES
├── /sbin/
│   └── SYSTEM BINARIES
├── /srv/
│   └── DATA FOR SERVICES PROVIDED BY THIS SYSTEM
├── /tmp/
│   └── TEMPORARY FILES
├── /usr/
│   ├── (MULTI)-USER UTILITIES AND APPLICATIONS
│   ├── /usr/local/
│   │   ├── /usr/local/bin
│   │   └── /usr/local/games
├── /var/
│   └── VARIABLE FILES
├── /root/
├── /proc/
│   └── VIRTUAL FILESYSTEM DOCUMENTING KERNEL AND PROCESS STATUS AS TEXT FILES
└── (√ represents /home/current-user)
```

#### Abundant Tools

##### [Busybox](https://www.busybox.net/) Suite (Contains common Linux command line tools)

Tools are categorized as follows:

- [coreutils](https://www.gnu.org/software/coreutils/) (Basic tools)
- Network management  
- Printer management  
- Editors  
- System log management  
- Mail management  
- Compression/archiving  
- Login/password management  
- runit compatibility  
- Linux system administration  
- Console management  
- Debian compatibility  
- Shell  
- Startup/shutdown  
- klibc compatibility  
- File/text search  
- Linux Ext2 filesystem  
- Miscellaneous  
- Process management  
- Linux kernel module management  

Standard Linux offers even more tools:  
The `/bin` directory contains thousands of tools  

*If you need to install a tool but don't know which package contains it, you can search on the [package search page](https://packages.ubuntu.com/)*


### How to learn Linux

#### RTFM

**The most important Linux command:** `man` (manual)

- A **manual** for looking up commands, library functions, system files, etc.
- `man man` - Learn how to <span style="background:rgba(252, 163, 180, 0.55)">RTFM</span>
- `man ls` - View how to use the ls command

> [!note] The main function of the `ls` command is to **list the files** and subdirectories in a directory.

- `man 3 printf` - Learn how to use the library function `printf`
- `man -k xxx` - Search for commands containing the keyword xxx

#### Learning New Tools

The following tools cover most needs of programmers:

- **File Management** - `cd, pwd, mkdir, rmdir, ls, cp, rm, mv, tar`

>[!note] File Management Tools
>
> - `cd` (Change Directory):
>
> **Function**: Used to switch the current working directory. Users can use the cd command to enter other directories in the file system.
> **For example**: `cd /home/user/documents` will switch the current directory to `/home/user/documents`. `cd ..` will switch to the parent directory. `cd` or `cd ~` will switch to the current user's home directory.
> - `pwd` (Print Working Directory):
>
> **Function**: Used to display <span style="background:rgba(252, 163, 180, 0.55)">the absolute path</span> of the current working directory. When you are not sure which directory you are currently in, you can use this command to check.
> **For example**: After entering pwd, the terminal may display `/usr/local/bin`, indicating that you are currently in this path.
> - `mkdir` (Make Directory):
>
> **Function**: Used to create a new directory (folder).
> **For example**: `mkdir new_folder` will create a new directory named `new_folder` in the current directory. Use the `-p` option (such as `mkdir -p path/to/new_folder`) to create multiple levels of non-existent parent directories at once.
> - `rmdir` (Remove Directory):
>
> **Function**: Used to **remove an empty directory**. If the directory contains files or other subdirectories, the rmdir command usually reports an error and does not remove the directory.
> **For example**: `rmdir empty_folder` will remove an empty directory named `empty_folder`.
> - `ls` (List):
>
> **Function**: Used to list files and subdirectories in a directory. It can `>` display the name of the file, and through different options, more detailed information such as file permissions, size, modification date, etc.
> **For example**: ls will list the contents of the current directory. ls -l will display detailed information in long format. ls -a will display all files including hidden files.
> - `cp` (Copy):
> 
> **Function**: Used to **copy files or directories**. You can copy a file to another location, copy multiple files to a directory, or copy an entire directory and its contents.
> **For example**: `cp source.txt destination.txt` will copy `source.txt` and name it `destination.txt`. `cp file.txt /backup/` will copy `file.txt` to the `/backup/` directory. 
>
> Copying directories usually requires the `-r` or `-R` (recursive) option, such as `cp -r documents/ new_documents/`.
> - `rm` (Remove):
>
> **Function**: Used to **remove files or directories**. This is a powerful command that needs to be used with caution, as <span style="background:rgba(252, 163, 180, 0.55)">deleted files cannot usually be easily restored</span>.
> **For example**: `rm old_file.txt` will delete the file named `old_file.txt`. To delete a directory and all its contents, the `-r` (recursive) option is usually used, such as `rm -r old_folder/`. The `-f` (force) option can be used to force the deletion without prompting.
> `mv` (Move):
>
> **Function**: Used to **move files or directories**, or to rename files or directories.
Move: mv source_file.txt /new_location/ will move source_file.txt to the /new_location/ directory.
Rename: mv old_name.txt new_name.txt will rename old_name.txt to new_name.txt (if new_name.txt does not exist). If the target is an existing directory name, the source file or directory will be moved to that directory.
tar (Tape Archive):

Function: Used to create archive files (packed files) and extract files from archive files. The tar command itself is only responsible for packing and unpacking, and is usually used in conjunction with other compression tools (such as gzip or bzip2) to achieve compression and decompression.
Create an archive: tar -cvf archive.tar file1 file2 directory1 will pack file1, file2, and directory1 into a file called archive.tar.
Create and compress (gzip): tar -czvf archive.tar.gz file1 file2 directory1
Extract an archive: tar -xvf archive.tar will extract files from archive.tar.
Extract a compressed archive (gzip): tar -xzvf archive.tar.gz

- **File Retrieval** - `cat, more, less, head, tail, file, find`

> [!note] File Retrieval Tools
>
> - `cat` (Concatenate):
>
>   **Function**: Primarily used to **concatenate files and print their content to the standard output device**. It is often used to view the contents of files, and can also be used to create or combine files.
>   **For example**: `cat myfile.txt` will display the entire content of the `myfile.txt` file in the terminal. `cat file1.txt file2.txt > newfile.txt` will combine the contents of `file1.txt` and `file2.txt` and write the result to `newfile.txt`.
> - `more`:
>
>   **Function**: A utility for **displaying the content of a file one page at a time**. When a file's content is too long to fit on a single screen, `more` allows you to view it page by page. It only supports forward navigation.
>   **For example**: `more longfile.txt` will display the content of `longfile.txt` page by page; press the spacebar to advance to the next page, and press `q` to quit.
> - `less`:
>
>   **Function**: Similar to `more`, `less` is also a utility for **displaying file content one page at a time**, but it is more powerful. `less` allows users to navigate **both forwards and backwards** through the file and supports searching within the file. It doesn't load the entire file at startup like `more` does, making it faster for opening large files.
>   **For example**: `less largefile.log` will display the content of `largefile.log` page by page; you can use arrow keys, Page Up/Down keys to navigate, type `/keyword` to search for a keyword, and press `q` to quit.
> - `head`:
>
>   **Function**: Used to **display the beginning part of a file**. By default, it displays the first 10 lines of the file.
>   **For example**: `head myfile.txt` will display the first 10 lines of `myfile.txt`. `head -n 20 myfile.txt` will display the first 20 lines of the file.
> - `tail`:
>
>   **Function**: Used to **display the ending part of a file**. By default, it displays the last 10 lines of the file. It is particularly useful for monitoring real-time updates to log files (using the `-f` option).
>   **For example**: `tail myfile.txt` will display the last 10 lines of `myfile.txt`. `tail -n 5 myfile.txt` will display the last 5 lines of the file. `tail -f access.log` will continuously display new content added to `access.log`.
> - `file`:
>
>   **Function**: Used to **determine and report the type of a file**. It examines the file's content and structure, rather than relying solely on the file extension to identify the file type.
>   **For example**: `file image.jpg` might output `image.jpg: JPEG image data, JFIF standard 1.01...`. `file script.sh` might output `script.sh: Bourne-Again shell script, ASCII text executable`.
> - `find`:
>
>   **Function**: A very powerful **file searching utility**. It can search for files within a specified directory hierarchy based on various criteria (such as filename, type, size, modification time, permissions, etc.).
>   **For example**: `find /home/user -name "*.txt"` will search for all files with the `.txt` extension in the `/home/user` directory and its subdirectories. `find . -type d -empty` will find all empty directories within the current directory. `find /var/log -mtime -7` will find files in the `/var/log` directory that have been modified within the last 7 days.

- **Input/Output Control** - `Redirection, Pipe, tee, xargs`

>[!note] Input/Output Control Tools
>
> - `Redirection`:
>
>   **Function**: Redirection is a feature of the shell (not a command itself) that allows you to **change where the standard input, standard output, or standard error of a command comes from or goes to**. Instead of displaying output on the screen, you can send it to a file, or instead of a command taking input from the keyboard, it can take it from a file.
>   **For example**: `ls -l > file_list.txt` will redirect the standard output of the `ls -l` command to a file named `file_list.txt` (overwriting the file if it exists). `wc -l < mydocument.txt` will redirect the content of `mydocument.txt` to the standard input of the `wc -l` command, which will then count the lines in the document. `grep "error" log.txt 2> error_messages.txt` will redirect the standard error (file descriptor 2) of the `grep` command to `error_messages.txt`.
> - `Pipe` (`|`):
>
>   **Function**: A pipe is a shell feature (represented by the `|` character) used to **send the standard output of one command to the standard input of another command**. This allows you to chain commands together, creating powerful command pipelines where the output of one process becomes the input for the next.
>   **For example**: `ls -l | grep ".txt"` will first list all files and directories in long format, and then the output of `ls -l` is "piped" as input to the `grep` command, which will filter and display only the lines containing ".txt". `cat access.log | cut -d ' ' -f 1 | sort | uniq -c` is a pipeline that reads a log file, extracts the first field (e.g., IP address), sorts them, counts unique occurrences, and displays the result.
> - `tee`:
>
>   **Function**: The `tee` command reads from standard input and **writes to both standard output and one or more files simultaneously**. It's named after a T-splitter in plumbing, as it splits the flow of data. This is useful for viewing output on the screen while also saving it to a log file.
>   **For example**: `ls -l | tee file_list.txt` will display the output of `ls -l` on the terminal and, at the same time, save a copy of that output to `file_list.txt`. `some_command | tee -a output.log` will append the output of `some_command` to `output.log` (if it exists, otherwise it creates it) and also display it on the screen.
> - `xargs`:
>
>   **Function**: The `xargs` command is used to **build and execute command lines from standard input**. It takes the output of a command (often a list of file names or other items) and passes them as arguments to another command. This is particularly useful when a command cannot directly accept a long list of arguments from a pipe or when you need to perform an operation on each item in a list.
>   **For example**: `find . -name "*.log" | xargs rm -f` will find all files ending with `.log` in the current directory and its subdirectories, and then `xargs` will take this list of files and pass them as arguments to the `rm -f` command to delete them. `echo "file1.txt file2.txt" | xargs -n 1 touch` will take the two filenames and execute `touch` for each one separately (creating `file1.txt` and then `file2.txt`).

- **Text Processing** - `vim, grep, awk, sed, sort, wc, uniq, cut, tr`
> [!note] Text Processing Tools
>
> - `vim` (Vi IMproved):
>
>   **Function**: A highly configurable, powerful, and ubiquitous **text editor**. Vim is an improved version of the `vi` editor and is known for its modal editing (e.g., insert mode, normal mode, visual mode), which can make text manipulation very efficient once learned. It's widely used by programmers and system administrators.
>   **For example**: `vim myfile.txt` will open `myfile.txt` in the Vim editor. To start editing, you typically press `i` to enter "insert mode". To save and quit, you would press `Esc` to enter "normal mode", then type `:wq` and press Enter.
> - `grep` (Global Regular Expression Print):
>
>   **Function**: Used to **search for patterns in text** within files or from standard input. `grep` prints lines that match a given regular expression or fixed string. It's an essential tool for finding specific information in logs, code, or any text-based data.
>   **For example**: `grep "error" application.log` will search for the word "error" in the `application.log` file and print all lines containing it. `ls -l | grep ".txt"` will list files in long format and then `grep` will filter this list to show only lines containing ".txt".
> - `awk`:
>
>   **Function**: A versatile **programming language designed for text processing and data extraction/reporting**. `awk` processes files line by line, splitting each line into fields. It allows you to perform complex pattern matching, data manipulation, and calculations on text data.
>   **For example**: `awk '{print $1, $3}' data.txt` will print the first and third fields (columns, assuming space as a delimiter by default) of each line in `data.txt`. `awk -F',' '$2 > 100 {print $1}' sales.csv` will use a comma as a field separator (`-F','`), and for lines where the second field is greater than 100, it will print the first field.
> - `sed` (Stream EDitor):
>
>   **Function**: A powerful **stream editor for performing basic text transformations on an input stream** (a file or input from a pipeline). `sed` is primarily used for find and replace operations, but can also perform insertions, deletions, and other modifications to text, line by line.
>   **For example**: `sed 's/old_text/new_text/g' myfile.txt` will replace all occurrences (`g`) of "old_text" with "new_text" in `myfile.txt` and print the result to standard output (it doesn't modify the original file unless the `-i` option is used). `sed '/^#/d' config.conf` will delete all lines that start with `#` (comments) from `config.conf`.
> - `sort`:
>
>   **Function**: Used to **sort lines of text files** or input from standard input. It can sort alphabetically, numerically, in reverse order, and by specific fields or columns within the lines.
>   **For example**: `sort names.txt` will sort the lines in `names.txt` alphabetically. `sort -r numbers.txt` will sort the lines in `numbers.txt` in reverse numerical order (assuming numbers are at the beginning of lines or the `-n` option is used for numeric sort). `ls -l | sort -k5 -n` will list files and then sort them numerically based on the fifth field (file size).
> - `wc` (Word Count):
>
>   **Function**: Used to **count the number of lines, words, and bytes (or characters) in files** or from standard input.
>   **For example**: `wc myfile.txt` will output the number of lines, words, and bytes in `myfile.txt`. `wc -l myfile.txt` will output only the number of lines. `ls | wc -w` will count the number of words (typically file and directory names) listed by the `ls` command.
> - `uniq` (Unique):
>
>   **Function**: Used to **filter out or report repeated adjacent lines in a sorted file**. It's important that the input is sorted because `uniq` only compares adjacent lines.
>   **For example**: `sort names.txt | uniq` will first sort `names.txt` and then remove any duplicate adjacent lines. `sort data.log | uniq -c` will sort `data.log`, remove duplicate adjacent lines, and prepend each unique line with a count of its occurrences.
> - `cut`:
>
>   **Function**: Used to **remove sections (fields, characters, or bytes) from each line of a file** or standard input. It's useful for extracting specific columns of data from delimited text.
>   **For example**: `cut -d':' -f1 /etc/passwd` will use a colon (`:`) as a delimiter and extract the first field (usernames) from each line of the `/etc/passwd` file. `ls -l | cut -c1-10` will display only the first 10 characters of each line from the output of `ls -l`.
> - `tr` (Translate):
>
>   **Function**: Used to **translate or delete characters** from standard input, writing to standard output. It can perform operations like converting case, squeezing repeated characters, or deleting specific characters.
>   **For example**: `cat myfile.txt | tr 'a-z' 'A-Z'` will convert all lowercase letters in `myfile.txt` to uppercase. `echo "Hello   World" | tr -s ' '` will squeeze multiple spaces into a single space, outputting "Hello World".

- **Regular Expressions**
- **Task Management** - `jobs, ps, top, kill, free, lsof`

Use them frequently and you'll remember. If not:

- Try options like `-h`, `--help` to view help information
- Use `man` command

**More tool resources**:

- [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)

#### STFW

When you want to do something, there's a high probability someone has already done it.

- Using <span style="background:rgba(252, 163, 180, 0.55)">search engines</span> can help you find solutions.

>[!note] Example 1: Opening PDF files
>
> - Search "Linux open pdf" → Learn `evince` can open it
> - `sudo apt-get install evince` → `evince file.pdf` → Solved

>[!note] Example 2: Terminal splitting
>
> - Search "Linux split screen" → Discover `tmux` as a solution
> - `sudo apt-get install tmux` → Don't know how to use it
> - Search "tmux tutorial" → Study the usage guide
> - Still unclear about some parts → `man tmux` → Solved

*RTFM + STFW will serve you for life*

##### Stay Away from Baidu's Poison

| Category | Efficiency Boosters | Time Wasters |
|----------|----------------------|--------------|
| Search Engines | www.google.com | ~~www.baidu.com~~ |
| Encyclopedias | en.wikipedia.org | ~~baike.baidu.com~~ |
| Q&A Sites | stackoverflow.com | ~~zhidao.baidu.com <br> bbs.csdn.net~~ |


