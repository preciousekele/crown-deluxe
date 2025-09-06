import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  modalType: null,
  modalProps: {}
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.modalType = action.payload.modalType || 'default'
      state.modalProps = action.payload.modalProps || {}
    },
    closeModal: (state) => {
      state.isOpen = false
      state.modalType = null
      state.modalProps = {}
    },
    updateModalProps: (state, action) => {
      state.modalProps = { ...state.modalProps, ...action.payload }
    }
  }
})

export const { openModal, closeModal, updateModalProps } = modalSlice.actions
export default modalSlice.reducer

// Selectors
export const selectModalState = (state) => state.modal
export const selectIsModalOpen = (state) => state.modal.isOpen
export const selectModalType = (state) => state.modal.modalType
export const selectModalProps = (state) => state.modal.modalProps