import { getType } from "./getType.js";

/**
 * 判断 value 是否为 Object 类型
 * @param {*} value
 * @returns true | false
 */
export const isObject = (value) => getType(value) === "Object";
