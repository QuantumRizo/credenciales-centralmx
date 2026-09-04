import { useState, useEffect } from 'react'
import './NetworkStatus.css'

const NetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine)
  const [showRestored, setShowRestored] = useState(false)
  const [isSlow, setIsSlow] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(15)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Top Progress Bar animation on mount
    const timer1 = setTimeout(() => setLoadingProgress(60), 300)
    const timer2 = setTimeout(() => setLoadingProgress(90), 800)
    const timer3 = setTimeout(() => {
      setLoadingProgress(100)
      setTimeout(() => setIsLoading(false), 400)
    }, 1400)

    // Slow connection detection timer (> 3.5s or via Network Information API)
    const slowTimer = setTimeout(() => {
      if (document.readyState !== 'complete') {
        setIsSlow(true)
      }
    }, 3500)

    const checkConnectionSpeed = () => {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection
      if (conn) {
        if (['slow-2g', '2g', '3g'].includes(conn.effectiveType) || conn.rtt > 1200) {
          setIsSlow(true)
        }
      }
    }

    checkConnectionSpeed()

    // Online / Offline Listeners
    const handleOffline = () => {
      setIsOffline(true)
      setShowRestored(false)
    }

    const handleOnline = () => {
      setIsOffline(false)
      setShowRestored(true)
      const restoredTimer = setTimeout(() => {
        setShowRestored(false)
      }, 3500)
      return () => clearTimeout(restoredTimer)
    }

    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(slowTimer)
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])

  return (
    <>
      {/* Top Slim Loading Progress Bar */}
      {isLoading && (
        <div className="top-progress-bar-container">
          <div 
            className="top-progress-bar"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      )}

      {/* Network Banners & Toasts Overlay */}
      <div className="network-toasts-container">
        
        {/* Offline Banner */}
        {isOffline && (
          <div className="network-toast toast-offline animate-bounce-in">
            <div className="toast-icon-badge icon-red">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l22 22"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            </div>
            <div className="toast-content">
              <span className="toast-title">Sin conexión a internet</span>
              <span className="toast-desc">Estás navegando en modo fuera de línea.</span>
            </div>
          </div>
        )}

        {/* Restored Connection Toast */}
        {!isOffline && showRestored && (
          <div className="network-toast toast-online animate-bounce-in">
            <div className="toast-icon-badge icon-green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div className="toast-content">
              <span className="toast-title">Conexión restablecida</span>
              <span className="toast-desc">Navegando en tiempo real.</span>
            </div>
          </div>
        )}

        {/* Slow Connection Toast */}
        {!isOffline && !showRestored && isSlow && (
          <div className="network-toast toast-slow animate-bounce-in">
            <div className="toast-icon-badge icon-orange">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="toast-content">
              <span className="toast-title">Conexión lenta detectada</span>
              <span className="toast-desc">Optimizando activos para una carga más rápida.</span>
            </div>
            <button className="toast-close-btn" onClick={() => setIsSlow(false)}>×</button>
          </div>
        )}

      </div>
    </>
  )
}

export default NetworkStatus
