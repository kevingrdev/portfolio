/**
 * @description save info in session Storage and paser JSON.stringify
 * @param {String} key
 * @param {Object} data
 * */
export function setLocal(key, data) {
  const dataString = JSON.stringify(data)
  return localStorage.setItem(key, dataString)
}

/**
 * @description get info session Storage and paser JSON.parse
 * @param {String} key
 * */
export function getLocal(key) {
  const dataCrude = localStorage.getItem(key)

  return JSON.parse(dataCrude)
}
