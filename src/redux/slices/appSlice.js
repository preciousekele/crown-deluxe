import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  theme: 'dark',
  language: 'en',
  notifications: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        ...action.payload
      })
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      )
    },
  },
})

export const { 
  setLoading, 
  setTheme, 
  setLanguage, 
  addNotification, 
  removeNotification 
} = appSlice.actions
export default appSlice.reducer