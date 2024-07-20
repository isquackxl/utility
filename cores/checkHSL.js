import { trimAll } from "./trimAll.js";
const reg = /^[hH][Ss][Ll][\(]([\\s]*(2[0-9][0-9]|360|3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*)[\)]$/;
/**
 * 校验 color 是否符合 HSL 颜色规范
 * @param {String} color 
 * @returns true | false
 */
export const checkHsl =  color => reg.test(trimAll(color));