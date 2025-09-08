import { useDispatch } from 'react-redux'
import { openAppDownloadModal } from '../redux/appSlice' 

export const useAppDownloadModal = () => {
  const dispatch = useDispatch()
  
  const openModal = () => {
    dispatch(openAppDownloadModal())
  }
  
  return { openModal }
}