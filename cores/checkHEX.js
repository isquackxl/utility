import trimAll from "./trimAll.js";

/**
 * 校验 color 是否符合 HEX 颜色规范
 * @param {String} str 
 * @returns true | false
 */
export default color => /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(trimAll(color));