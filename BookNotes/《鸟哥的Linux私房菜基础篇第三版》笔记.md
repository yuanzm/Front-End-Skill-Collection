## 计算器概论
- 世界上常见到两种主要CPU种类： 分别是精简指令集(RISC)和复杂指令集(CISC)系统。
	+ 精简指令集的CPU设计中，每个指令的运行时间都很短，完成的动作也很单纯，指令的执行效能较佳。
	+ 复杂指令集在微指令集的每个小指令都能够执行一些较为低阶的硬件操作。指令数目多且复杂，每条指令的长度并不相同。
	因为指令执行较为复杂所以每条指令花费的时间较长，但每条指令可以处理的工作比较丰富。常见的CISC微指令集CPU主要有AMD、Intel
	VIA等X86架构的CPU。
- 计算机中最重要的接口设备是主板，因为主板负责将所有的设备统统连接在一起，让所有的设备能够协调沟通。而主板上面最重要的就是
主板芯片组，这个芯片组将所有的设备汇集在一起。
- Intel芯片架构：整个主板上面最重要的就是芯片组了，而芯片组通常又分成两个网桥来控制各自的组件结构，分别是：（1）北桥：负责链接速度
较快的CPU、主存储器与显示适配器等组件；（2）南桥：负责连接速度较慢的周边接口，包括硬盘、USB和网卡等。
- 与Intel不同的地方在于AMD芯片架构中主存储器与CPU直接相通而不是而不是通通过北桥。

## 第三章 主机规划与磁盘分区
- 在Linux系统中，每个装置都被当成一个档案来对待！
- 几乎所有的硬件装置档案都在/dev目录内
- 个人计算机常见的磁盘接口有两种，分别是IDE和SATA，主流的是SATA
- 我们称呼能够连接到IDE接口的装置为IDE装置，不管是磁盘还是光盘设备
- 以一个IED接口来说，由于一个IDE扁平电缆可以连接两个IDE装置，又通常主机都会提供两个IDE接口，
因此最多可以接到四个IDE装置。
- 磁盘的第一个扇区特别重要，因为它记录了整个磁盘的重要信息。磁盘的第一个扇区主要记录了两个重要信息，分别是:
    + 主要启动记录区（Master Boot Record，MBR）：可以安装开机管理程序的地方，有446 bytes
    + 分隔表（partition table）：记录整个磁盘分割的状态，有64 bytes
- MBR是很重要的，因为当系统在开机的时候会去去读这个区块的内容，这样系统才会知道你的程序放在哪里了且该如何开机。如果你需要安装多重引导的系统，MBR这个区块的管理就非常重要了。
- 由于分割表就只有64bytes而已，最多只能容纳四笔分割记录，这四个分割的记录表被称为主要或者延伸分割槽。
    + 其实所谓的分隔只是针对那64bytes的分割表进行设定而已
    + 磁盘默认的分割表仅仅能写入四组分割信息
    + 这四组分割信息我们称为主要或者扩展分割槽
    + 分割槽的最小单位为磁柱
    + 当我们需要写入磁盘的时候，一定会参考磁盘分割表，才能针对某个分割槽进行数据处理
- 主要分割，延伸分割与逻辑分割的特性：
    + 主要分割与延伸分割最多可以有4笔（硬盘的限制）
    + 延伸分割最多只能有一个（操作系统的限制）
    + 逻辑分割是由延伸分割持续切割出来的分割槽
    + 延伸分割无法格式化
- CMOS是记录各项硬件参数且嵌入在主板上面的存储器，BIOS则是一个写入到主板上面的韧体（软件程序）。这个BIOS就是在开机的时候，计算机会主动执行的第一个程序了。
- 开机的时候BIOS会去分析计算机里面有哪些存储设备，我们以硬盘为例，BIOS会依据使用者的设定去取得能够开机的硬盘，并且到该硬盘里面去读取第一个扇区的MBR位置。
- 开机流程
    + BIOS：开机主动执行的韧体，会认识第一个可开机的装置；
    + MBR：第一个可开机装置的第一个扇区的主要启动记录模块，内含开机管理程序；
    + 开机管理程序（boot loader）：一支读取核心档案来执行的软件；
    + 核心档案：将开机管理功能交给其他loader负责
- BISO和MBR都是硬件本身会支持的功能，至于boot loader则是操作系统安装在MBR上面的一套软件了。由于MBR仅仅有446bytes而已，这个开机管理程序是非常小>而美的。
- boot loader的主要任务有：
    + 提供选单：用户可以选择不同的开机项目，这是多重引导的重要功能；
    + 载入核心档案：直接指向可开机的程序区段来开始操作系统；
    + 转交其他loader：将开机管理功能转交给其他loader

## 首次登陆与在线求助man page
-  man page的数据在不同的distribution都不一样，通常是放在/usr/share/man这个目录里头。
- 在计算机的运作模式里面，所有的数据都要被读入内存之后才能够被CPU处理，但是数据又经常需要由内存写回硬盘里面（）例如存储的动作。由于硬盘的速度很
慢，如果常常让数据在内存和硬盘里面写来写去，系统的性能不会很好。在Linux中，为了加快数据的读取速度，在默认的情况下面，某些已经加载到内存中的数据
不会直接写回硬盘，而是先暂存在内存中。为了防止出现数据不能及时写入硬盘的情况，就需要sync指令，将数据从内存同步到硬盘。

## Linux磁盘与文件管理系统
- 磁盘分区完毕之后还需要格式化，之后操作系统才能够使用这个分隔槽。进行格式化的原因是因为每种操作系统的文件属性/权限并不相同，进行格式化才能确保分隔槽能够满足操作系统的文件系统格式。
- 在比较新的操作系统中，档案数据除了档案实际内容外，通常还包含非常多的属性，例如Linux操作系统的档案权限(rwx)与文件属性（拥有者、群组、时间参数等）。文件系统通常会将这两部分数据放在不同的区块，权限和属性放到inode中，至于实际的数据放到data block中。另外还会有一个超级区块会记录整个文件系统的整体信息，包括inode和block的总量、使用量、剩余量等。
- data block是用来防止档案的地方，在EXT2文件系统中所支持的block有1k、2k及4k三种而已。
- inode
    + 每个inode的大小均固定在128bytes
    + 每个档案只会占用一个inode
    + 文件系统能够建立的档案数量与inode的数量有关
    + 系统读取档案时，需要先找到inode，并分析inode记录权限与用户是否符合，符合才能开始实际的操作block
    + inode记录一个block号码需要花费4bytes，为了能够记录很大的档案，inode记录block的区域定义为12个直接、一个间接、一个双间接和一个三间接记录区。所谓的间接就是拿一个block来当做记录block号码的记录区。
- superblock的大小为1024bytes
