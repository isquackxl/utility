import { trimAll } from "./trimAll.js";
const reg = /^[rR][gG][Bb][Aa][\(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[\)]{1}$/;
/**
 * 校验 color 是否符合 RGBA 颜色规范
 * @param {String} color
 * @returns true | false
 */
export const checkRgba = color => reg.test(trimAll(color));