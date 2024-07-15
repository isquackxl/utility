/**
 * 校验 str 是否符合身份证号码规范，15位或18位
 * @param {String} str 
 * @returns true | false
 */
export default str => /(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(str);