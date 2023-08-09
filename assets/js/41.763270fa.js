(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{367:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[a("strong",[s._v("本篇文章适用于Node.js（Express后台）+MongoDB开发的项目")])]),s._v(" "),a("h3",{attrs:{id:"流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[s._v("#")]),s._v(" 流程")]),s._v(" "),a("h4",{attrs:{id:"_1-远程连接到服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-远程连接到服务器"}},[s._v("#")]),s._v(" 1.远程连接到服务器")]),s._v(" "),a("p",[s._v("可以登录阿里云远程连接到自己的服务器，也可以使用git-bash登录：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@公网IP\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-更新apt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新apt"}},[s._v("#")]),s._v(" 2.更新apt")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-确认nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-确认nginx"}},[s._v("#")]),s._v(" 3.确认nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" show nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_4-安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装nginx"}},[s._v("#")]),s._v(" 4.安装nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),s._v(" "),a("h4",{attrs:{id:"_5-安装mongodb数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-安装mongodb数据库"}},[s._v("#")]),s._v(" 5.安装MongoDB数据库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" show mongodb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" mongodb-server\nmongo\nshow dbs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_6-安装git-为了方便同步代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-安装git-为了方便同步代码"}},[s._v("#")]),s._v(" 6.安装git（为了方便同步代码）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_7-配置ssh-key-然后将公钥复制放在github或者gitee的对应项目的仓库中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-配置ssh-key-然后将公钥复制放在github或者gitee的对应项目的仓库中"}},[s._v("#")]),s._v(" 7.配置ssh-key，然后将公钥复制放在github或者gitee的对应项目的仓库中")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /root/.ssh/id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2Jsb2d4aW4udG9wL3VwbG9hZHMvYTJjNjJmYjExMWJmOTI2YmE0MWEyNzY3NjQ1YWM2NjI?x-oss-process=image/format,png",alt:"img"}})]),s._v(" "),a("h4",{attrs:{id:"_8-安装node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-安装node-js"}},[s._v("#")]),s._v(" 8.安装Node.js")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" nodejs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_9-安装npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-安装npm"}},[s._v("#")]),s._v(" 9.安装npm")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_10-配置淘宝镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-配置淘宝镜像"}},[s._v("#")]),s._v(" 10.配置淘宝镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https  //registry.npm.taobao.org\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_11-安装nrm-可快速切换npm镜像的工具-也可不安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-安装nrm-可快速切换npm镜像的工具-也可不安装"}},[s._v("#")]),s._v(" 11.安装nrm（可快速切换npm镜像的工具，也可不安装）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" nrm\nnrm current //查看当前使用镜像\nnrm use npm/nrm use taobao //切换镜像\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_12-安装n-用于升级node-js本身"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-安装n-用于升级node-js本身"}},[s._v("#")]),s._v(" 12.安装n（用于升级node.js本身）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" n\nn latest  //安装完毕后需要退出重新连接服务器\nnodejs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("  //查看当前node.js版本\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"_13-拉取代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-拉取代码"}},[s._v("#")]),s._v(" 13.拉取代码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ll  //查看所有文件\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data  //新建文件夹\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data  //进入文件夹\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone url  //url为你项目的（ssh）url地址\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_14-进入server文件夹-安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-进入server文件夹-安装依赖"}},[s._v("#")]),s._v(" 14.进入server文件夹，安装依赖")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" 文件名\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_15-安装pm2启动项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-安装pm2启动项目"}},[s._v("#")]),s._v(" 15.安装pm2启动项目")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" pm2\npm2 start index.js  //启动项目\npm2 list  //查看进程\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://localhost:3000  //请求地址，查看端口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_16-配置nginx反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-配置nginx反向代理"}},[s._v("#")]),s._v(" 16.配置nginx反向代理")]),s._v(" "),a("p",[s._v("进入vscode安装扩展Remote - SSH")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("https://www.digitalocean.com/community/tools/nginx"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#?  //在线自动生成nginx配置的网站")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx reload  //重载nginx配置文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_17-迁移本地数据到服务器-mongodump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-迁移本地数据到服务器-mongodump"}},[s._v("#")]),s._v(" 17.迁移本地数据到服务器（mongodump）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mongodb "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" 数据库名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将生成的dump文件夹复制到远程服务器的root用户的个人文件夹,然后输入")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mongorestore  //恢复数据\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_18-后续修改的代码同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-后续修改的代码同步"}},[s._v("#")]),s._v(" 18.后续修改的代码同步")]),s._v(" "),a("p",[s._v("登录远程服务器，进入之前git clone下来的文件夹")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull  //拉取代码\npm2 reload index  //重新加载\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);