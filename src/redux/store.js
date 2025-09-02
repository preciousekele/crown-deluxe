import { configureStore } from '@reduxjs/toolkit'
import navigationReducer from './slices/navigationSlice'
import appReducer from './slices/appSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    app: appReducer,
  },
})

export default store