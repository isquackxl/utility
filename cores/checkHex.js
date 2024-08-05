import { trimAll } from "./trimAll.js";
const reg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
/**
 * 校验 color 是否符合 HEX 颜色规范
 * @param {String} color
 * @returns true | false
 */
export const checkHex = (color) => reg.test(trimAll(color));
