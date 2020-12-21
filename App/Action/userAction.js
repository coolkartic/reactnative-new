import React from 'react';
import * as types from '../constant/ActionType';
import AsyncStorage from '@react-native-community/async-storage';
import { apiClient } from "../apiClient";

/**
* Sign in.
* @param {string} username 
* @param {string} password
*/

/** Login auth **/
export function login(username, password) {
  return dispatch => {
    apiClient
      .post("login", {"records":{"emis_username": username, "emis_password": password}})
      .then(response => {
        console.log(response, 'upload success');
        alert("SUCC");
        // history.push("/Home");
      })
      .catch(error => {
        console.log(error, 'error');
        alert(error);
      });
  };
}

/**
* Sign out.
*/
export const logout =  () => {
  // direct/sync call
  AsyncStorage.clear()
  return {
      type: types.LOGOUT
  }
}

