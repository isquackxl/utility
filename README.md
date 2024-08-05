# @quackxl/utility

> 封装了一些常用的`js`方法
>
> 主要是方便自己日常的代码编写
>
> 目前处于想到什么方法添加什么方法的缓慢完善进度中。。。

## 使用文档 & 更新日志

[使用文档](https://isquackxl.github.io/utility-docs/)

## 代码开源

[Github](https://github.com/isquackxl/utility)

[Gitee](https://gitee.com/isquackxl/utility)

[Npm](https://www.npmjs.com/package/@quackxl/utility)

## 已有方法（缓慢更新中）

- `checkColor` 判断数据是否符合颜色格式规范
- `checkEmail` 判断数据是否符合邮箱规范，支持带汉字的邮箱
- `checkHex` 判断数据是否符合 hex 颜色格式规范
- `checkHsl` 判断数据是否符合 hsl 颜色格式规范
- `checkHsla` 判断数据是否符合 hsla 颜色格式规范
- `checkID` 判断数据是否符合身份证号码规范，15 位或者 18 位
- `checkMobilePhone` 判断数据是否符合移动电话号码规范
- `checkQQ` 判断数据是否符合 QQ 号规范
- `checkRgb` 判断数据是否符合 rgb 颜色格式规范
- `checkRgba` 判断数据是否符合 rgba 颜色格式规范
- `checkTelephone` 判断数据是否符合固定电话号码规范
- `dateFormat` 时间格式化。根据传入的`template`格式将传入的`dateTime`时间转化为想要的时间字符串
- `getType` 获取数据的类型
- `isArray` 判断数据是否为 Array 类型
- `isBigInt` 判断数据是否为 `BigInt`类型
- `isBoolean` 判断数据是否为 `Boolean`类型
- `isNotEmpty` 判断数据是否为非空类型，`null`或`undefined`或`''`或`[]`或`{}`均返回`false`
- `isNull` 判断数据是否为`Null`类型
- `isNumber` 判断数据是否为`Number`类型
- `isObject` 判断数据是否为`Object`类型，仅仅判断通过`{}`或`new Object()`创建出来的对象
- `isString` 判断数据是否为`String`类型
- `isSymbol` 判断数据是否为`Symbol`类型
- `isUndefined` 判断数据是否为`Undefined`类型
- `trimAll` 去掉 str 中的全部类型空格，包括`t\r\f\n\s`
