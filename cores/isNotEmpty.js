import { isUndefined } from "./isUndefined.js";
import { isNull } from "./isNull.js";
import { isString } from "./isString.js";
import { isArray } from "./isArray.js";
import { isObject } from "./isObject.js";

/**
 * 判断 value 是否为非空，null 或 undefined 或 '' 或 [] 或 {} 均返回 false
 * @param {*} value
 * @returns true | false
 */
export const isNotEmpty = value => {
  if (isNull(value) 
    || isUndefined(value) 
    || (isString(value) && value.length === 0) 
    || (isArray(value) && value.length === 0)
    || (isObject(value) && Object.keys(value).length === 0)) {
    return false;
  }
  return true;
}