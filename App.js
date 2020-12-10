import React from 'react'
import { Provider } from 'react-redux'

import { Main } from './App/screens'
import { createStore } from './App/store'
const store = createStore()

/**
 * Root application.
 */
const Apps = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default Apps