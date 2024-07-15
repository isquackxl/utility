/**
 * 校验 str 是否符合手机号码规范
 * @param {String} str 
 * @returns true | false
 */
export default str => /^1[3456789]\d{9}$/.test(str);