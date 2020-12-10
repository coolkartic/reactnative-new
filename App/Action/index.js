import * as appActions from './appAction';
import * as actions from './userAction';
import appReducer from '../reducers/appReducer';
import reducer from '../reducers/userReducer';

export const app = { appReducer, appActions }
export const user = { reducer, actions }
export { AppState } from '../reducers/appReducer';
export { UserState  } from '../reducers/userReducer';
