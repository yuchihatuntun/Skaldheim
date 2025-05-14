### Linux vs. Windows  

##### Unix - A different style

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

##### Some simple tasks are actually poorly handled by Windows GUI

>[!note] **Example**: Comparing whether two files are identical
>
> **Windows GUI Solution**:
> *(No straightforward built-in method; typically requires third-party tools.)*  
>
> **Linux Solution**:  
> - Text files: `vimdiff file1 file2`  
> - Binary/non-text files: `diff file1 file2`  
> - Large files: `md5sum file1 file2`  
> *(Translated strictly without additional commentary.)*

### Overview of command-line tools  

### How to learn Linux



