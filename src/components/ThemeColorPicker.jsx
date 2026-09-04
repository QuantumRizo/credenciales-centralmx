import { useEffect, useState } from 'react'
import './ThemeColorPicker.css'

// Kept for backwards compatibility with previously saved selections.
const secondaryColorOptions = [
  { id: 'central-slate-blue', color: '#5E7D95', hover: '#435B6D' },
  { id: 'pms-cool-gray-6-c', color: '#959B9B', hover: '#7A8080' },
  { id: 'pms-874', color: '#B29158', hover: '#997B44' },
  { id: 'pms-548', color: '#2B4C5F', hover: '#1F3947' },
  { id: 'pms-554', color: '#486856', hover: '#375243' },
  { id: 'pms-2765', color: '#484164', hover: '#36304E' },
  { id: 'pms-445', color: '#565C62', hover: '#42474C' },
  { id: 'pms-166', color: '#DE5425', hover: '#C44317' },
]

const DEFAULT_COLOR = '#5E7D95'

const hexToHsl = (hex) => {
  const value = hex.replace('#', '')
  const red = Number.parseInt(value.slice(0, 2), 16) / 255
  const green = Number.parseInt(value.slice(2, 4), 16) / 255
  const blue = Number.parseInt(value.slice(4, 6), 16) / 255
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const lightness = (max + min) / 2
  const delta = max - min

  if (delta === 0) return { hue: 0, saturation: 0, lightness: lightness * 100 }

  const saturation = delta / (1 - Math.abs(2 * lightness - 1))
  let hue

  if (max === red) hue = ((green - blue) / delta) % 6
  else if (max === green) hue = (blue - red) / delta + 2
  else hue = (red - green) / delta + 4

  return {
    hue: (hue * 60 + 360) % 360,
    saturation: saturation * 100,
    lightness: lightness * 100,
  }
}

const hslToHex = (hue, saturation, lightness) => {
  const s = saturation / 100
  const l = lightness / 100
  const chroma = (1 - Math.abs(2 * l - 1)) * s
  const segment = hue / 60
  const x = chroma * (1 - Math.abs((segment % 2) - 1))
  const match = l - chroma / 2
  let red = 0
  let green = 0
  let blue = 0

  if (segment < 1) [red, green] = [chroma, x]
  else if (segment < 2) [red, green] = [x, chroma]
  else if (segment < 3) [green, blue] = [chroma, x]
  else if (segment < 4) [green, blue] = [x, chroma]
  else if (segment < 5) [red, blue] = [x, chroma]
  else [red, blue] = [chroma, x]

  return `#${[red, green, blue]
    .map((channel) => Math.round((channel + match) * 255).toString(16).padStart(2, '0'))
    .join('')}`.toUpperCase()
}

const isHexColor = (value) => /^#[0-9A-F]{6}$/i.test(value || '')

const ThemeColorPicker = () => {
  const initialHsl = hexToHsl(DEFAULT_COLOR)
  const [hue, setHue] = useState(initialHsl.hue)
  const [saturation, setSaturation] = useState(initialHsl.saturation)
  const [lightness, setLightness] = useState(initialHsl.lightness)
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR)
  const [isOpen, setIsOpen] = useState(false)

  const applyColor = (nextHue, nextSaturation, nextLightness, { persist = false } = {}) => {
    const color = hslToHex(nextHue, nextSaturation, nextLightness)
    const hover = hslToHex(nextHue, nextSaturation, Math.max(10, nextLightness - 12))
    setHue(nextHue)
    setSaturation(nextSaturation)
    setLightness(nextLightness)
    setSelectedColor(color)
    document.documentElement.style.setProperty('--accent', color)
    document.documentElement.style.setProperty('--accent-hover', hover)

    if (persist) {
      try {
        localStorage.setItem('central_theme_accent', color)
      } catch {
        // The picker still works when storage is unavailable.
      }
    }
  }

  const applyHexColor = (color, options) => {
    const nextHsl = hexToHsl(color)
    applyColor(nextHsl.hue, nextHsl.saturation, nextHsl.lightness, options)
  }

  const saveColor = () => {
    try {
      localStorage.setItem('central_theme_accent', selectedColor)
    } catch {
      // The selected color remains active for the current visit.
    }
    setIsOpen(false)
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem('central_theme_accent')
      if (saved && isHexColor(saved)) {
        applyHexColor(saved)
      } else {
        applyHexColor(DEFAULT_COLOR, { persist: true })
      }
    } catch {
      applyHexColor(DEFAULT_COLOR)
    }
  }, [])

  const updateFromWheel = (event) => {
    const wheel = event.currentTarget
    if (event.type === 'pointermove' && !wheel.hasPointerCapture(event.pointerId)) return
    const bounds = wheel.getBoundingClientRect()
    const centerX = bounds.left + bounds.width / 2
    const centerY = bounds.top + bounds.height / 2
    const x = event.clientX - centerX
    const y = event.clientY - centerY
    const radius = Math.min(bounds.width, bounds.height) / 2
    const distance = Math.min(Math.hypot(x, y), radius)
    const nextHue = (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360
    const nextSaturation = (distance / radius) * 100
    applyColor(nextHue, nextSaturation, lightness)
  }

  const wheelAngle = (hue * Math.PI) / 180
  const markerStyle = {
    left: `${50 + (saturation / 100) * 44 * Math.sin(wheelAngle)}%`,
    top: `${50 - (saturation / 100) * 44 * Math.cos(wheelAngle)}%`,
  }

  return (
    <div className="theme-picker-container">
      {isOpen && (
        <div className="theme-picker-popover animate-fade-in-up">
          <button
            className="popover-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar selector"
          >
            ×
          </button>

          <div
            className="color-wheel"
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId)
              updateFromWheel(event)
            }}
            onPointerMove={updateFromWheel}
            onClick={updateFromWheel}
            role="slider"
            aria-label="Seleccionar color"
            aria-valuetext={selectedColor}
            tabIndex="0"
          >
            <span className="color-wheel-marker" style={markerStyle} />
          </div>

          <input
            className="picker-lightness-slider"
            type="range"
            min="8"
            max="92"
            value={lightness}
            onChange={(event) => applyColor(hue, saturation, Number(event.target.value))}
            aria-label="Ajustar luminosidad"
            style={{ '--picker-hue': hue, '--picker-saturation': `${saturation}%` }}
          />

          <button className="picker-save-btn" type="button" onClick={saveColor}>
            Guardar
          </button>

          <input
            className="picker-native-fallback"
            type="color"
            value={selectedColor}
            onChange={(event) => applyHexColor(event.target.value)}
            aria-label="Elegir color"
          />
        </div>
      )}

      <button
        className={`theme-trigger-bar ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Abrir selector de color"
        title="Personalizar color"
      >
        <span className="trigger-icon" aria-hidden="true">🎨</span>
        <span className="trigger-color-dot" style={{ backgroundColor: selectedColor }} />
      </button>
    </div>
  )
}

export default ThemeColorPicker
