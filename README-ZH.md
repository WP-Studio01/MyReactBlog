# **react博客网站**

[中文](#) \| [English](README.md)

这是react博客网站，静态博客，`posts`文件夹下的内容是文章，统一用markdown格式，请在`posts.jsx`文件的全局变量内注明，格式如下
```json
{
    "文件名1": {
        "title": "标题"
    },
    "文件名2": {
        "title": "标题"
    }
}
```
顺序按照`json`文件里的顺序

最后可以调用`npm start`来本机调试，访问[localhost:3000](http://localhost:3000)可以获得结果

发布时调用`npm run build`生成或更新`build`文件夹，将里面的内容提交到你的网站上，完结撒花~~