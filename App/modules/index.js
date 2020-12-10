import { user } from '../Action/index';
import { app } from '../Action/index';


/**
 * Root reducers.
 */
export const reducers = {
  app: app.appReducer,
  user: user.reducer
}

/**
 * Root actions.
 */
export const actions = {
  app: app.appActions,
  user: user.actions
}

export { app, user }