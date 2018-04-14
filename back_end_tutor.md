### Back End Tutor

> for Dian 2018 Spring Prep 
>
> contact: rickiemeow@gmail.com

- 应用场景： 2018年种子班招新后台开发

##### 一、需求分解

- 报名表信息的CRU*D （D可选）

> *CRUD: 增加(Create)、读取查询(Retrieve)、更新(Update)和删除(Delete)*

#### 二、API文档

- ###### 根据需求整合一份API文档

##### 三、 根据API文档进行开发

1. 初始化项目

```bash
npm init
# entry point: (index.js)
npm install -g express-generator
express example_project
cd example_project
npm install
npm start
```

default port 3000

go to http://localhost:3000/

visit http://localhost:3000/users



创建 router/entry_form.js

将该路由挂载在app中

2. 路由：尝试从路由请求JSON数据

3. 数据库：尝试从数据库得到数据
   1. 新建logic/entry_logic.js
   2. 新建models/entry_db.js

4. 测试：

   ```bash
   cnpm install -g mocha
   mocha test/entry.js
   ```

   ​