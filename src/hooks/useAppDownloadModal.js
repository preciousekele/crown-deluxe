import { useDispatch } from 'react-redux'
import { openAppDownloadModal } from '../redux/appSlice' // Adjust path to your appSlice

export const useAppDownloadModal = () => {
  const dispatch = useDispatch()
  
  const openModal = () => {
    dispatch(openAppDownloadModal())
  }
  
  return { openModal }
}