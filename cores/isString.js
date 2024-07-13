import getType from "./getType.js";

/**
 * 判断 value 是否为 String 类型
 * @param {*} value
 * @returns true | false
 */
export default value => getType(value) === '[object String]';