import checkHEX from "./checkHEX.js";
import checkHSL from "./checkHSL.js";
import checkHSLA from "./checkHSLA.js";
import checkRGB from "./checkRGB.js";
import checkRGBA from "./checkRGBA.js";

/**
 * 校验 color 是否符合颜色格式规范
 * @param {String} str 
 * @returns true | false
 */
export default color => checkHEX(color) || checkHSL(color) || checkHSLA(color) || checkRGB(color) || checkRGBA(color);