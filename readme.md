### 说明
用于构建cloud-components的打包工具

> 依赖于另一模板脚手架
[template](https://github.com/zxyty/xy-remote-components-template)

### 使用
```shell
npm i -g xy-component-tools
```

新建项目
```shell
npm init

...

#执行 xy-component-tools install 安装依赖

xy-component-tools install
```

启动项目
```shell
yarn start
```

编译组件为云组件module
```shell
yarn compile
```

打包云组件的定义文件
```shell
yarn def
```