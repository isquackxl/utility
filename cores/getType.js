/**
 * 获取 value 的类型
 * @param {*} value 
 * @returns 返回格式为具体的数据类型
 */
export const getType = value => Object.prototype.toString.call(value).slice(8, -1);
