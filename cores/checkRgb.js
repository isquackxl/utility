import { trimAll } from "./trimAll.js";
const reg = /^[rR][gG][Bb][\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[\)]{1}$/;
/**
 * 校验 color 是否符合 RGB 颜色规范
 * @param {String} str 
 * @returns true | false
 */
export const checkRgb = color => reg.test(trimAll(color));