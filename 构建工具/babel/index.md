https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-introduction

### 处理步骤

* 解析
  
  1. 生成令牌流  
  2. 生成ast

* 转换

  接收ast遍历node，对node进行增删改

* 生成

  ast转换为字符串源码，可以生成sourcemap

  