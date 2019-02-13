项目设计步骤：

	1 创建一个根目录（用英文）
	2 根目录中创建 dist，src文件夹 + readme.md(用于写使用方法之类的用户读的东西)
	3 在src文件夹中创建：css,fonts,js,images,lib,sass等文件夹 + index.html(如有需要再加其他HTML文件)
	4 配置gulp自动化构建工具：（参考开发日志）
	5 在项目根目录下添加gulpfile.js文件，用于告知gulp执行什么命令（其内为node.js代码）
	6 待gulp开启后，开始编写HTML，sass，js代码；（此时css文件夹下就会自动生成标准css文件）
	7 把需要用到的插件放到lib文件夹下
	8 当编写完成后，在命令行输入： npm run build  就能够在dist文件夹生成最终的文件（具体参考开发日志）








1. 构建过程

```shell
# cd 进入项目根目录
$ cd app

# 安装项目依赖
$ npm i

# 执行构建命令
$ npm run build
```

2. 项目结构
