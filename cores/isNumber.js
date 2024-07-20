import { getType } from "./getType.js";

/**
 * 判断 value 是否为 Number 类型
 * @param {*} value
 * @returns true | false
 */
export const isNumber = (value) => getType(value) === "Number";
