# @quackxl/utility

> JS常用工具封装

## 安装

```bash
npm install @quackxl/utility
```

## 更新日志

[更新日志](./CHANGELOG.md)

## 代码开源

[Github](https://github.com/isquackxl/utility)

[Gitee](https://gitee.com/isquackxl/utility)

[Npm]()

## checkColor

> 判断数据是否符合颜色格式规范

**引入：**

```js
import { checkColor } from '@quackxl/utility'
or
import checkColor from '@quackxl/utility/cores/checkColor.js'
```

**格式：**

```js
checkColor(color)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `color`  | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkEmail

> 判断数据是否符合邮箱规范，支持带汉字的邮箱

**引入：**

```js
import { checkEmail } from '@quackxl/utility'
or
import checkEmail from '@quackxl/utility/cores/checkEmail.js'
```

**格式：**

```js
checkEmail(str)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `str`    | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |



## checkHEX

> 判断数据是否符合 hex 颜色格式规范

**引入：**

```js
import { checkHEX } from '@quackxl/utility'
or
import checkHEX from '@quackxl/utility/cores/checkHEX.js'
```

**格式：**

```js
checkHEX(color)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `color`  | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkHSL

> 判断数据是否符合 hsl 颜色格式规范

**引入：**

```js
import { checkHSL } from '@quackxl/utility'
or
import checkHSL from '@quackxl/utility/cores/checkHSL.js'
```

**格式：**

```js
checkHSL(color)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `color`  | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkHSLA

> 判断数据是否符合 hsla 颜色格式规范

**引入：**

```js
import { checkHSLA } from '@quackxl/utility'
or
import checkHSLA from '@quackxl/utility/cores/checkHSLA.js'
```

**格式：**

```js
checkHSLA(color)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `color`  | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkID

> 判断数据是否符合身份证号码规范，15位或者18位

**引入：**

```js
import { checkID } from '@quackxl/utility'
or
import checkID from '@quackxl/utility/cores/checkID.js'
```

**格式：**

```js
checkID(str)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `str`    | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkMobilePhone

> 判断数据是否符合移动电话号码规范

**引入：**

```js
import { checkMobilePhone } from '@quackxl/utility'
or
import checkMobilePhone from '@quackxl/utility/cores/checkMobilePhone.js'
```

**格式：**

```js
checkMobilePhone(str)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `str`    | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkQQ

> 判断数据是否符合QQ号规范

**引入：**

```js
import { checkQQ } from '@quackxl/utility'
or
import checkQQ from '@quackxl/utility/cores/checkQQ.js'
```

**格式：**

```js
checkQQ(str)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `str`    | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkRGB

> 判断数据是否符合 rgb 颜色格式规范

**引入：**

```js
import { checkRGB } from '@quackxl/utility'
or
import checkRGB from '@quackxl/utility/cores/checkRGB.js'
```

**格式：**

```js
checkRGB(color)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `color`  | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkRGBA

> 判断数据是否符合 rgba 颜色格式规范

**引入：**

```js
import { checkRGBA } from '@quackxl/utility'
or
import checkRGBA from '@quackxl/utility/cores/checkRGBA.js'
```

**格式：**

```js
checkRGBA(color)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `color`  | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## checkTelephone

> 判断数据是否符合固定电话号码规范

**引入：**

```js
import { checkTelephone } from '@quackxl/utility'
or
import checkTelephone from '@quackxl/utility/cores/checkTelephone.js'
```

**格式：**

```js
checkTelephone(str)
```

**参数：**

| 属性名   | 类型      | 描述             |
| -------- | --------- | ---------------- |
| `str`    | `String`  | 需要判断的字符串 |
| `return` | `Boolean` |                  |

## dateFormat

> 时间格式化。根据传入的`template`格式将传入的`dateTime`时间转化为想要的时间字符串

**引入：**

```js
import { dateFormat } from '@quackxl/utility'
or
import dateFormat from '@quackxl/utility/cores/dateFormat.js'
```

**格式：**

```js
dateFormat(dateTime, template)
```

**参数：**

| 属性名     | 类型               | 描述                                                         |
| ---------- | ------------------ | ------------------------------------------------------------ |
| `dateTime` | `Date` or `String` | 需要格式化的时间。可以有两种格式，Date为时间类型，String为时间戳类型 |
| `template` | `String`           | 格式化模板。指定模板对时间进行格式化，默认值为`'yyyy-MM-dd HH:mm:ss'` |
| `return`   | `String`           | 返回值。根据 template 格式化 dateTime 之后的时间字符串       |

`template`:

| 属性名 | 描述                                                |
| ------ | --------------------------------------------------- |
| yyyy   | 年                                                  |
| M      | 月，不足两位则显示一位                              |
| MM     | 月，不足两位则前补0                                 |
| d      | 日，不足两位则显示一位                              |
| dd     | 日，不足两位则前补0                                 |
| h      | 时，不足两位则显示一位（12时制）                    |
| hh     | 时，不足两位则前补0（12时制）                       |
| H      | 时，不足两位则显示一位（24时制）                    |
| HH     | 时，不足两位则前补0（24时制）                       |
| m      | 分，不足两位则显示一位                              |
| mm     | 分，不足两位则前补0                                 |
| s      | 秒，不足两位则显示一位                              |
| ss     | 秒，不足两位则前补0                                 |
| S      | 毫秒，优先保留一位                                  |
| SS     | 毫秒，优先保留两位，不足补前0                       |
| SSS    | 毫秒，优先保留三位，不足前补0                       |
| t      | 毫秒，截断为一位                                    |
| tt     | 毫秒，截断为两位                                    |
| ttt    | 毫秒，截断为三位                                    |
| w      | 周，阿拉伯数字（1，2，3...）                        |
| W      | 周，大小汉字（一，二，三...）                       |
| c      | 周，英文简写（`Mon.`, `Tue.`, `Wed.`...）           |
| C      | 周，英文全称（`Monday`, `Tuesday`, `Wednesday`...） |

## getType

> 获取数据的类型

**引入：**

```js
import { getType } from '@quackxl/utility'
or
import getType from '@quackxl/utility/cores/getType.js'
```

**格式：**

```js
getType(value)
```

**参数：**

| 属性名   | 类型     | 描述                                                         |
| -------- | -------- | ------------------------------------------------------------ |
| `vaue`   | `Any`    | 需要获取数据类型的数据                                       |
| `return` | `String` | 返回值。返回格式为`[object xxx]`的字符串，其中`xxx`为具体的类型 |

## isArray

> 判断数据是否为 Array 类型

**引入：**

```js
import { isArray } from '@quackxl/utility'
or
import isArray from '@quackxl/utility/cores/isArray.js'
```

**格式：**

```js
isArray(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isBigInt

> 判断数据是否为 `BigInt`类型

**引入：**

```js
import { isBigInt } from '@quackxl/utility'
or
import isBigInt from '@quackxl/utility/cores/isBigInt.js'
```

**格式：**

```js
isBigInt(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isBoolean

> 判断数据是否为 `Boolean`类型

**引入：**

```js
import { isBoolean } from '@quackxl/utility'
or
import isBoolean from '@quackxl/utility/cores/isBoolean.js'
```

**格式：**

```js
isBoolean(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isNotEmpty

> 判断数据是否为非空类型，`null`或`undefined`或`''`或`[]`或`{}`均返回`false`

**引入：**

```js
import { isNotEmpty } from '@quackxl/utility'
or
import isNotEmpty from '@quackxl/utility/cores/isNotEmpty.js'
```

**格式：**

```js
isNotEmpty(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isNull

> 判断数据是否为`Null`类型

**引入：**

```js
import { isNull } from '@quackxl/utility'
or
import isNull from '@quackxl/utility/cores/isNull.js'
```

**格式：**

```js
isNull(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isNumber

> 判断数据是否为`Number`类型

**引入：**

```js
import { isNumber } from '@quackxl/utility'
or
import isNumber from '@quackxl/utility/cores/isNumber.js'
```

**格式：**

```js
isNumber(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isObject

> 判断数据是否为`Object`类型，仅仅判断通过`{}`或`new Object()`创建出来的对象

**引入：**

```js
import { isObject } from '@quackxl/utility'
or
import isObject from '@quackxl/utility/cores/isObject.js'
```

**格式：**

```js
isObject(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isString

> 判断数据是否为`String`类型

**引入：**

```js
import { isString } from '@quackxl/utility'
or
import isString from '@quackxl/utility/cores/isString.js'
```

**格式：**

```js
isString(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isSymbol

> 判断数据是否为`Symbol`类型

**引入：**

```js
import { isSymbol } from '@quackxl/utility'
or
import isSymbol from '@quackxl/utility/cores/isSymbol.js'
```

**格式：**

```js
isSymbol(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## isUndefined

> 判断数据是否为`Undefined`类型

**引入：**

```js
import { isUndefined } from '@quackxl/utility'
or
import isUndefined from '@quackxl/utility/cores/isUndefined.js'
```

**格式：**

```js
isUndefined(value)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `value`  | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |

## trimAll

> 去掉 str 中的全部类型空格，包括`t\r\f\n\s`

**引入：**

```js
import { trimAll } from '@quackxl/utility'
or
import trimAll from '@quackxl/utility/cores/trimAll.js'
```

**格式：**

```js
trimAll(str)
```

**参数：**

| 属性名   | 类型      | 描述           |
| -------- | --------- | -------------- |
| `str`    | `Any`     | 需要判断的数据 |
| `return` | `Boolean` |                |
