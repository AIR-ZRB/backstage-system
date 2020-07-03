## 后台管理系统

前端环境搭建：
+ Vue-Cli
+ Vue
+ Vue-Router
+ axios
+ elementui
+ scss

后端环境搭建：
+ express：NodeJs库
+ MySql：连接MySql数据库
+ jsonwebtoken：生成token

软件测试：
+ postman：接口测试

## 功能模块

### login功能

创建git分支：`git checkout -b login`
查看git分支：`git branch`



合并git分支：
1. 先在子分支`git checkout login`
2. 提交代码`git commit -am "commit"`
3. 切换回主分支`git checkout master`
4. 再合并分支`git marge login`
5. 提交`git push -u origin login`，这样就把`login`分支上传到远程仓库中了





## 接口权限

通过axios请求拦截器添加token，保证拥有权限
```js
    axios.interceptors.request.use(config => {
        config.headers.Authorization = window.sessionStorage.getItem("token");
        // 必须return config
        return config;
    })
```






