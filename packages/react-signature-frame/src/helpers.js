/**
 * @param {String} searchStr
 * @param {Object} [options]
 * @param {boolean} [options.forceManualParse]
 * @returns {Object}
 */
export function parseURLParams (searchStr, options = {}) {
  searchStr = searchStr || ''
  if (typeof searchStr !== 'string') return {}
  searchStr = searchStr.trim()

  let params = {}
  if (typeof URLSearchParams !== 'undefined' && !options?.forceManualParse) {
    const searchObj = new URLSearchParams(searchStr)
    /* @ts-ignore: TS2339 */
    for (const paramEntry of searchObj.entries()) {
      const [key, value] = paramEntry
      params[key] = value
    }
  } else if (searchStr) {
    // IE does not support URLSearchParams, so this
    const parsableString = searchStr.indexOf('=') > -1 ? searchStr : searchStr + '='
    try {
      params = JSON.parse('{"' + parsableString.replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (e) {
      console.warn(e)
      console.warn('Could not parse params from', parsableString)
    }
    for (const key in params) {
      params[key] = decodeURIComponent(params[key].replace(/\+/g, '%20'))
    }
  }
  return params
}

/**
 * @param {Object} object
 * @param {String[]} keysToOmit
 * @returns {*}
 */
export function omit (object, keysToOmit) {
  const ret = { ...object }
  if (keysToOmit && keysToOmit.length) {
    for (const path of keysToOmit) {
      delete ret[path]
    }
  }
  return ret
}
