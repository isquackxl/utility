const reg = /^0\d{2}(?:-?\d{8}|-?\d{7})$/;
/**
 * 校验 str 是否符合固定电话号码规范
 * @param {String} str 
 * @returns true | false
 */
export const checkTelephone = str => reg.test(str);