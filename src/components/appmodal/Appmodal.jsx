import { useSelector, useDispatch } from 'react-redux'
import './Appmodal.css'
import { closeAppDownloadModal } from '../../redux/slices/appSlice'

const AppDownloadModal = () => {
  const dispatch = useDispatch()
  const { isAppDownloadModalOpen } = useSelector(state => state.app)

  const handleClose = () => {
    dispatch(closeAppDownloadModal())
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isAppDownloadModalOpen) return null

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        <div className="modal-body">
          <div className="modal-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          
          <h2 className="modal-title">Mobile App in Production</h2>
          <p className="modal-message">Will be live soon.</p>
          
          <button className="modal-btn" onClick={handleClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppDownloadModal