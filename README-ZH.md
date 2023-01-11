# **react博客网站**

[中文](#) \| [English](README.md)

## 修改说明

这是react博客网站，静态博客，使用Github Issue作为载体，统一用markdown格式，请在`blog.jsx`文件的全局变量内注明，格式如下
```json
{
    "user": "hwtalk",
    "repo": "hwtalk-posts",
    "content": [2,1] // 依次填issue的id
}
```
顺序按照`json`文件里的顺序

## 运行

使用`git clone`得到代码仓库，在仓库内调用`npm install`

最后可以调用`npm start`来本机调试，访问[localhost:5150](http://localhost:5150)可以获得结果

发布时调用`npm run build`生成或更新`build`文件夹，将里面的内容提交到你的网站上，完结撒花~~