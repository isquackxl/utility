import { getType } from "./getType.js";

/**
 * 判断 value 是否为 Symbol 类型
 * @param {*} value
 * @returns true | false
 */
export const isSymbol = (value) => getType(value) === "Symbol";
