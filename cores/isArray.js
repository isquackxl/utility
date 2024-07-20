import { getType } from "./getType.js";

/**
 * 判断 value 是否为 Array 类型
 * @param {*} value
 * @returns true | false
 */
export const isArray = value => getType(value) === "Array";
