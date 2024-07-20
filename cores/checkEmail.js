const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
/**
 * 校验 str 是否符合邮箱规范，支持汉字
 * @param {String} str 
 * @returns true | false
 */
export const checkEmail =  str => reg.test(str)