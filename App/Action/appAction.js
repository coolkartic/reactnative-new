import * as types from '../constant/ActionType';

/**
* Set loading status on/off
* @param {boolean} yes Loading status
*/

export const loading = (yes=true) => {
  return {
    type: types.SET_LOADING,
    payload: yes
  }
}