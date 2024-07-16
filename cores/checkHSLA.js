import trimAll from "./trimAll.js";

/**
 * 校验 color 是否符合 HSLA 颜色规范
 * @param {String} str 
 * @returns true | false
 */
export default color => /^[hH][Ss][Ll][Aa][\(]([\\s]*(2[0-9][0-9]|360|3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,){2}([\\s]*(1|1.0|0|0.[0-9])[\\s]*)[\)]$/.test(trimAll(color));