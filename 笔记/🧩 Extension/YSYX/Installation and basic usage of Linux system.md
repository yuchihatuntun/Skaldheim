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

### How to learn Linux



