- chmod +x ./bin/youdao

> 为了能够直接运行 bin 文件，我们需要赋予正确的文件权限，如果你是在 UNIX 环境下，你只需要执行 chmod +x bin/outside，Windows 用户就只能靠自己了，建议使用 Linux 子系统。

- npm link

- 因为 process.argv 的前两个参数分别是解释器和二进制文件名，所以我们使用 .slice(2) 移除掉前两个参数，只关心传递进来的其他命令。

- .gitigore 只能忽略没有track的文件