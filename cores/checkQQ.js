/**
 * 校验 str 是否符合QQ号规范
 * @param {String} str 
 * @returns true | false
 */
export default str => /^[1-9]{1}[0-9]{4,14}$/.test(str);