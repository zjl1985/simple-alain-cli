# 信海平台老项目迁移NG说明

> 本文档不是最终文档，会慢慢更新

> 本文使用到Angular的术语，因此阅读需要一定的Angular的基础，具体可以参考[官方教程](https://www.angular.cn/guide/quickstart)


## 1.  环境

* Node: 8.11.1

* Angular CLI: 6.0.8

* Angular: 6.0.6


> 前提，首先打开命令行输入`ng -v`，查看是否有输出，如果没有
>  执行 `$ npm install -g @angular/cli`
> 升级typescript `npm install -g typescript`


常用命令

- 安装项目 `npm install` 或者 `yarn install`
- 创建module `ng g module xxx --routing` 或者 `ng g m xxx --routing`
- 创建组件 `ng g component list` 或者 `ng g c list`
- 项目运行 `npm run start` 或者 `npm run hmr`

## 2.  HTML内容

将原有页面JSP的HTML标签复制到新的HTML页面，注意去掉之前的JSP的JAVA元素

这里的新的HTML页面指的是组件的HTML，就是`xxx.component.html`

## 3. CSS内容

将之前页面的CSS内容放到新的组件的CSS文件内`xxx.component.css`

这里也可以使用`.less`结尾的样式文件


## 4. JS内容
> 以下内容针对的是`xxx.component.ts`文件，将来如果复杂放到`xxxx.service.ts`文件是可以的

原有的js内容类似如下

```javascript
var IndexAlarmWaterLive = function () {
   //内容
  }();
```
改成如下风格

```javascript
var IndexAlarmWaterLive = function () {
   //内容
  };
module.exports.IndexAlarmWaterLive = IndexAlarmWaterLive;
```
> 1. 去掉最后的小括号
> 2. 加入 `module.exports`的导出，符合CommonJS的规范

在相应的 `Component`引用

```javascript
import {IndexAlarmWaterLive} from '../../../../assets/pages/scripts/water-alarm/water-alarm-live.js';
```
路径自定定义

在`ngOnInit()`函数内执行之前在JPS的内容

```javascript
$(function () {
    IndexAlarmWaterLive.setPath("<%=request.getContextPath()%>");
    IndexAlarmWaterLive.init('<%= nodeid%>', '<%= code%>');
  });
```
换成

```javascript
 ngOnInit() {
    indexAlarmWaterLive.setPath('/alarm');
    indexAlarmWaterLive.init('', '');
  }
```


## 5. TS内容(TypeScript)

> ts有两种书写风格，`namespace`和`class`风格

### 1. `namespace`只需要在之前加入关键字`export`

```javascript
namespace IndexAlarmWaterHis {
    //内容
}
```
改成如下风格

```javascript
export namespace IndexAlarmWaterHis {
    //内容
}
```
在相应的 `Component`引用

```javascript
import { IndexAlarmWaterHis } from './water-alarm-his';
```
路径自定定义

在`ngOnInit()`函数内执行之前在JPS的内容

```javascript
$(function () {
    IndexAlarmWaterLive.setPath("<%=request.getContextPath()%>");
    IndexAlarmWaterLive.init('<%= nodeid%>', '<%= code%>');
  });
```
换成

```javascript
  ngOnInit() {
    IndexAlarmWaterHis.init('', '');
  }
```

### 2. `class`只需要在之前加入关键字`export`

```javascript
class HisChartView {
  'use strict';
}
```
改成如下风格

```javascript
export class HisChartView {
  'use strict';
}
```
在相应的 `Component`引用

```javascript
import { HisChartView } from '../../../../assets/pages/scripts/groupview/hischart-view
```
路径自定定义

在`ngOnInit()`函数内执行之前在JPS的内容

```javascript
$(function () {
   var hisChartView=new HisChartView();
    hisChartView.init('/alarm');
  });
```
换成

```javascript
  ngOnInit() {
   const hisChartView=new HisChartView();
    hisChartView.init('/alarm');
  }
```

### 6.目录结构

新的前端结构具体参考官方文档，这里只简单说说

- **module** 

模块，多个页面的集合，一般对应一个功能，可能包含增删改查，或者多个查询页面。

下面是一个例子，创建名称为hello的模块

```Shell
<!-- 创建模块命令 -->
ng g module hello --routing
```

> - hello 
>   - hello.module.ts  *这个就是module的文件*

- **component**

组件，一个组件就是一个页面。

- **route**

路由，Angular页面的访问99%是通过路由来引导，一个项目有一个根路由**root**,每个模块下面都包含一个子路由，具体情况也有差别，我们的项目，遵循根子路由的风格。
