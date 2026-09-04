import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import './DualImageGallery.css'

const DualImageGallery = ({ primaryImage, secondaryImage, title }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div 
      className="dual-gallery-root"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Back Card (Real Photo Activation) - Stays behind */}
      <motion.div 
        className="dual-card dual-card-back"
        animate={
          isMobile
            ? {}
            : isHovered
              ? {
                  x: 95,
                  y: -6,
                  rotate: 4,
                  scale: 0.94,
                  opacity: 1,
                  zIndex: 2,
                  boxShadow: '10px 18px 36px rgba(0,0,0,0.22)'
                }
              : {
                  x: 14,
                  y: 10,
                  rotate: 2.5,
                  scale: 0.96,
                  opacity: 0.6,
                  zIndex: 1,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.06)'
                }
        }
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 24,
          mass: 0.7
        }}
      >
        <img 
          src={secondaryImage} 
          alt={`${title} Activación`} 
          className="dual-img-photo" 
          loading="lazy" 
        />
        <motion.span 
          className="dual-caption-badge"
          animate={
            isMobile
              ? { opacity: 1, y: 0 }
              : isHovered
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 6 }
          }
          transition={{ duration: 0.2 }}
        >
          Activación Sede Monterrey
        </motion.span>
      </motion.div>

      {/* Front Card (Official Landscape Emblem) - Always on TOP */}
      <motion.div 
        className="dual-card dual-card-front"
        animate={
          isMobile
            ? {}
            : isHovered
              ? {
                  x: -95,
                  y: -4,
                  rotate: -3.5,
                  scale: 0.94,
                  zIndex: 5,
                  boxShadow: '-10px 18px 35px rgba(0,0,0,0.16)'
                }
              : {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  zIndex: 5,
                  boxShadow: '0px 6px 20px rgba(0,0,0,0.08)'
                }
        }
        transition={{
          type: 'spring',
          stiffness: 280,
          damping: 24,
          mass: 0.7
        }}
      >
        <img 
          src={primaryImage} 
          alt={title} 
          className="dual-img-landscape" 
          loading="lazy" 
        />
      </motion.div>
    </div>
  )
}

export default DualImageGallery
