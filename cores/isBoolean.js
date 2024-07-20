import { getType } from "./getType.js";

/**
 * 判断 value 是否为 Boolean 类型
 * @param {*} value
 * @returns true | false
 */
export const isBoolean = value => getType(value) === "Boolean";
