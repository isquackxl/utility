import { checkHex } from "./checkHex.js";
import { checkHsl } from "./checkHsl.js";
import { checkHsla } from "./checkHsla.js";
import { checkRgb } from "./checkRgb.js";
import { checkRgba } from "./checkRgba.js";

/**
 * 校验 color 是否符合颜色格式规范
 * @param {String} str
 * @returns true | false
 */
export const checkColor = color =>
  checkHex(color) ||
  checkHsl(color) ||
  checkHsla(color) ||
  checkRgb(color) ||
  checkRgba(color);
