const reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
/**
 * 校验 str 是否符合身份证号码规范，15位或18位
 * @param {String} str 
 * @returns true | false
 */
export const checkID =  str => reg.test(str);