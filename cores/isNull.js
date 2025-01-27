import { getType } from "./getType.js";

/**
 * 判断 value 是否为 Null 类型
 * @param {*} value
 * @returns true | false
 */
export const isNull = (value) => getType(value) === "Null";
