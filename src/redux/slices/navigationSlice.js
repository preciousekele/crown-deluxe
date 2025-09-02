import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeSection: 'home',
  isMenuOpen: false,
  scrollPosition: 0,
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    setMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload
    },
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload
    },
  },
})

export const { setActiveSection, toggleMenu, setMenuOpen, setScrollPosition } = navigationSlice.actions
export default navigationSlice.reducer