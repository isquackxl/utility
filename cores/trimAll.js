/**
 * 去除所有空格
 * @param {String} str 
 * @returns 去除掉所有空格之后的字符串
 */
export const trimAll = str => str.split(/[\t\r\f\n\s]*/g).join('')