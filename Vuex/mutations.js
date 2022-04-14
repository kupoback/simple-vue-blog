/**
 * Parses an object and associates the key to the
 * store states key with its value
 * @param {object} currentState
 * @param {object} data
 */
export function objStateParse(currentState, data) {
    Object.keys(data)
          .map(key => currentState[key] = data[key]);
}
