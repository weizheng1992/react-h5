#!/bin/sh
###
 # @Author: weizheng
 # @Date: 2022-12-23 14:16:01
 # @LastEditors: weizheng
 # @LastEditTime: 2022-12-23 14:16:06
### 
# 解决Windows 上通过 Git Bash ( stdin is not a tty)使用 Yarn 时，Git 钩子可能会失败
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
