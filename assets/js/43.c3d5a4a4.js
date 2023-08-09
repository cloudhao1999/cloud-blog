(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{369:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"开头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开头"}},[s._v("#")]),s._v(" 开头")]),s._v(" "),a("p",[s._v("因为要做毕设了就想先把前后端部署起来，在网上找了许多资料花了一晚上部署完成，将自己收集的资料整合一下方便大家观看。参考资料来源，前端部分根据我自己需要与参考链接有所不同：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://developer.aliyun.com/article/632359",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker技术笔记：Ubuntu安装Docker CE"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_37543356/article/details/111501261",target:"_blank",rel:"noopener noreferrer"}},[s._v("若依前后端分离项目 Docker 部署"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"一-安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-安装docker"}},[s._v("#")]),s._v(" 一：安装Docker")]),s._v(" "),a("h4",{attrs:{id:"步骤一-安装必要的系统工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-安装必要的系统工具"}},[s._v("#")]),s._v(" 步骤一：安装必要的系统工具")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" software-properties-common\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"步骤二-安装gpg证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-安装gpg证书"}},[s._v("#")]),s._v(" 步骤二：安装GPG证书")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"步骤三-写入软件源信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤三-写入软件源信息"}},[s._v("#")]),s._v(" 步骤三：写入软件源信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-cs")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"步骤四-更新并安装docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤四-更新并安装docker-ce"}},[s._v("#")]),s._v(" 步骤四：更新并安装Docker-CE")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("附：安装指定版本的Docker-CE （一般用最新版的就行）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Step 1: 查找Docker-CE的版本:")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" madison docker-ce\n  docker-ce "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.03")]),s._v(".1~ce-0~ubuntu-xenial "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://mirrors.aliyun.com/docker-ce/linux/ubuntu xenial/stable amd64 Packages\n  docker-ce "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.03")]),s._v(".0~ce-0~ubuntu-xenial "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http://mirrors.aliyun.com/docker-ce/linux/ubuntu xenial/stable amd64 Packages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Step 2: 安装指定版本的Docker-CE: (VERSION 如上 17.03.1~ce-0~ubuntu-xenial)")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("VERSION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"步骤五-配置阿里云镜像加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤五-配置阿里云镜像加速"}},[s._v("#")]),s._v(" 步骤五：配置阿里云镜像加速")]),s._v(" "),a("p",[s._v("修改daemon配置文件"),a("code",[s._v("/etc/docker/daemon.json")]),s._v("来使用加速器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有daemon.json就自己用vim建一个")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /etc/docker\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/docker/daemon.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<-")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'EOF\'\n{\n  "registry-mirrors": ["https://irnlfwui.mirror.aliyuncs.com"]\n}\nEOF')]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"步骤六-测试docker版本-验证安装是否成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤六-测试docker版本-验证安装是否成功"}},[s._v("#")]),s._v(" 步骤六：测试Docker版本（验证安装是否成功)")]),s._v(" "),a("p",[s._v("命令："),a("code",[s._v("docker –version && docker version && docker info")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\nDocker version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.12")]),s._v(".1-ce, build 7390fc6\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" version\nClient:\n Version:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.12")]),s._v(".1-ce\n API version:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.35")]),s._v("\n Go version:    go1.9.4\n Git commit:    7390fc6\n Built: Tue Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":17:40 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("\n OS/Arch:   linux/amd64\nServer:\n Engine:\n  Version:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17.12")]),s._v(".1-ce\n  API version:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.35")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Go version:   go1.9.4\n  Git commit:   7390fc6\n  Built:    Tue Feb "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":16:13 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v("\n  OS/Arch:  linux/amd64\n  Experimental: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" info\nContainers: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n Running: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n Paused: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n Stopped: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nImages: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h4",{attrs:{id:"步骤七-测试docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤七-测试docker安装"}},[s._v("#")]),s._v(" 步骤七：测试Docker安装")]),s._v(" "),a("p",[s._v("可以通过运行简单的Docker Image来进行安装测试：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run hello-world\nUnable to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello-world:latest'")]),s._v(" locally\nlatest: Pulling from library/hello-world\nca4f61b1923c: Pull complete \nDigest: sha256:083de497cff944f969d8499ab94f07134c50bcf5e6b9559b27182d3fa80ce3f7\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" hello-world:latest\n\nHello from Docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("列出所有的镜像image和容器container：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nhello-world         latest              f2a91732366c        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" months ago        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".85kB\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-all")]),s._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                      PORTS               NAMES\nc621f40a070c        hello-world         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/hello"')]),s._v("            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" minutes ago      Exited "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(" minutes ago                       friendly_edison\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"二-安装mysql镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-安装mysql镜像"}},[s._v("#")]),s._v(" 二：安装MySQL镜像")]),s._v(" "),a("h4",{attrs:{id:"步骤一-下载docker镜像并运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-下载docker镜像并运行"}},[s._v("#")]),s._v(" 步骤一： 下载docker镜像并运行")]),s._v(" "),a("p",[s._v("MySQL我用的是8.0.x的版本，在部署过程中出现了一些问题，在这里跟大家分享一下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" unless-stopped "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/mysql:/etc/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/logs:/logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/mysql-files:/var/lib/mysql-files "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /etc/localtime:/etc/localtime "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" mysql:8.0.20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lower_case_table_names")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("命令解释：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" 端口映射\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true  挂载文件权限设置\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" unless-stopped  设置 开机后自动重启容器\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/mysql:/etc/mysql    挂载配置文件\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/logs:/logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("      挂载日志\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  挂载数据文件 持久化到主机\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/mysql8.0.20/mysql-files:/var/lib/mysql-files\tMySQL8之后需要同步这个文件夹\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /etc/localtime:/etc/localtime    容器时间与宿主机同步\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("    设置密码\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("  mysql:8.0.20   后台启动,mysql\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lower_case_table_names")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\t  让MySQL不区分大小写（0:大小写敏感"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":大小写不敏感）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("在没有配置 "),a("code",[s._v("--lower_case_table_names=1")]),s._v(" 前出现 "),a("code",[s._v("Table XX.QRTZ_LOCKS doesn‘t exist 的问题")])]),s._v(" "),a("p",[s._v("百度一番后发现 MySQL 5.x 和 8.x 的这个配置还有些不同")])]),s._v(" "),a("p",[s._v("具体错误忘记截图了，可以参考 https://blog.csdn.net/zhengliangs/article/details/105998941")]),s._v(" "),a("p",[a("strong",[s._v("解决问题")])]),s._v(" "),a("p",[s._v("做好备份，删除原来的 MySQL 容器，重新运行 MySQL，在命令结尾加入 "),a("code",[s._v("--lower_case_table_names=1")]),s._v("，")]),s._v(" "),a("p",[s._v("因为 MySQL 8 之后，这一步需要在初始化的时候设置，记得开放阿里云安全组端口")]),s._v(" "),a("h3",{attrs:{id:"三-安装redis镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-安装redis镜像"}},[s._v("#")]),s._v(" 三：安装Redis镜像")]),s._v(" "),a("h4",{attrs:{id:"步骤一-下载docker镜像并运行-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-下载docker镜像并运行-2"}},[s._v("#")]),s._v(" 步骤一： 下载docker镜像并运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" redis "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/redis/data/:/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" redis:3.2 redis-server "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--appendonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("命令解释")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/redis/data/:/data\t\t挂载数据目录\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--appendonly")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\t开启redis 持久化\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("连接：（Windows）")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis-cli.exe "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" 你的服务器IP "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"四-打包项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-打包项目"}},[s._v("#")]),s._v(" 四：打包项目")]),s._v(" "),a("h4",{attrs:{id:"步骤一-前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-前端"}},[s._v("#")]),s._v(" 步骤一：前端")]),s._v(" "),a("ul",[a("li",[s._v("修改"),a("code",[s._v("vue.config.js")]),s._v(" 中 "),a("code",[s._v("devServer")]),s._v("节点映射端口，与后端端口一致")])]),s._v(" "),a("p",[s._v("运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:prod\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("会在本地生成 "),a("code",[s._v("dist")]),s._v(" 目录")]),s._v(" "),a("h4",{attrs:{id:"步骤二-后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-后端"}},[s._v("#")]),s._v(" 步骤二：后端")]),s._v(" "),a("ul",[a("li",[s._v("修改 "),a("code",[s._v("application.yml")]),s._v(" 端口、文件上传路径")]),s._v(" "),a("li",[s._v("修改"),a("code",[s._v("logback.xml")]),s._v(" 日志生成路径"),a("code",[s._v("log.path")])]),s._v(" "),a("li",[s._v("修改 MySQL、Redis地址")])]),s._v(" "),a("p",[s._v("运行若依后端"),a("code",[s._v("bin")]),s._v("目录中的"),a("code",[s._v("clean.bat")]),s._v("和"),a("code",[s._v("package.bat")]),s._v("，你需要提前安装maven工具并在环境变量中添加maven的bin目录地址，或者运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mvn clean\nmvn package\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在 "),a("code",[s._v("ruoyi-admin")]),s._v("的 "),a("code",[s._v("target")]),s._v("下生成了一个 jar 包，那就是我们需要的")]),s._v(" "),a("h3",{attrs:{id:"五-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-部署"}},[s._v("#")]),s._v(" 五：部署")]),s._v(" "),a("h4",{attrs:{id:"步骤一-前端部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-前端部署"}},[s._v("#")]),s._v(" 步骤一：前端部署")]),s._v(" "),a("p",[s._v("编写"),a("code",[s._v("Dockerfile")]),s._v("文件和nginx需要的配置文件"),a("code",[s._v("default.conf")]),s._v("，在Linux上新建一个文件夹，把前端打包好的"),a("code",[s._v("dist")]),s._v("文件和"),a("code",[s._v("Dockerfile")]),s._v("与"),a("code",[s._v("default.conf")]),s._v("放在一起，大概是这样")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@iZbp1dnrmefohxoq2vrh7aZ:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /home/fronted/")]),s._v("\nroot@iZbp1dnrmefohxoq2vrh7aZ:/home/fronted"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls -a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("  default.conf  dist  Dockerfile "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这三个文件")]),s._v("\nroot@iZbp1dnrmefohxoq2vrh7aZ:/home/fronted"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("Dockerfile:")])]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" default.conf /etc/nginx/conf.d")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" dist /usr/share/nginx/html/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chmod 775 -R /usr/share/nginx/html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("expose")]),s._v(" 80")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("大致意思就是使用官方nginx的镜像，将"),a("code",[s._v("default.conf")]),s._v("和前端"),a("code",[s._v("dist")]),s._v("文件里面的内容拷贝到容器内的对应目录中，暴露80端口")]),s._v(" "),a("p",[a("strong",[s._v("default.conf：")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(";\n        server_name  localhost;\t\t# 可以用服务器ip代替\n\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root   /usr/share/nginx/html/;\n            index  index.html index.htm index login;\n            try_files $uri $uri/ /index.html last;\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        location /prod-api/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header REMOTE-HOST $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//IP:PORT/;\t\t# 可以用服务器ip代替")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("blockquote",[a("p",[s._v("在我部署完成后发现不是在根目录下 "),a("strong",[s._v("刷新")]),s._v(" 就会出现 "),a("code",[s._v("404 Not Found")]),s._v("，找到以下解决方案：")])]),s._v(" "),a("p",[s._v("在配置 location 的时候加上"),a("code",[s._v("try_files $uri $uri/ /index.html last;")])]),s._v(" "),a("h4",{attrs:{id:"步骤二-后端部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-后端部署"}},[s._v("#")]),s._v(" 步骤二：后端部署")]),s._v(" "),a("p",[s._v("我使用的是 "),a("code",[s._v("Dockerfile + jar")]),s._v(" 打包成"),a("strong",[s._v("镜像")]),s._v("的部署方式")]),s._v(" "),a("p",[a("strong",[s._v("Dockerfile")])]),s._v(" "),a("div",{staticClass:"language-dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" java:8")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" /jiang")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ruoyi-admin.jar app.jar")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8080")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.jar"')]),s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("在服务器里创建一个文件夹，放入 "),a("code",[s._v("Dockerfile 和 jar包")]),s._v("，运行如下命令生成镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ruoyi-vue "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：最后还有一个 "),a("code",[s._v(".")])])]),s._v(" "),a("p",[s._v("此时，我们只需运行生成的镜像即可")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" ruoyi-vue ruoyi-vue \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果出现容器打开不久自动关闭的，可以使用"),a("code",[s._v("docker run -it -p 8080:8080 --name ruoyi-vue ruoyi-vue")]),s._v("查看运行状况，大部分是配置文件地址问题，不能使用localhost，要改成你的服务器IP")]),s._v(" "),a("p",[s._v("至此，我们就完成了前后端分离 使用Docker部署若依项目，后续还可以进一步使用Jenkins来进行CI/CD操作")])])}),[],!1,null,null,null);a.default=n.exports}}]);