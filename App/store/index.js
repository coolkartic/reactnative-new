import {
    createStore as _createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
  import thunk from 'redux-thunk';
  import { reducers, actions } from '../modules/index';
  
  /**
   * Root states types.
   */
  export { States } from '../modules/index';
  
  // Apply thunk middleware
  const middleware = applyMiddleware(thunk)
  
  /**
   * Create app store.
   */
  const createStore = (data = {}) => {
    return _createStore(combineReducers(reducers), data, middleware)
  }
  
  export { createStore, actions }