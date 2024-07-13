/**
 * 获取 value 的类型
 * @param {*} value 
 * @returns 返回格式为 [object xxx] 其中 xxx 为具体的类型
 */
export default value => Object.prototype.toString.call(value);