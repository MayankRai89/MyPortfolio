import { useScroll, useTransform, useSpring } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface ScrollFrameCanvasProps {
  totalFrames?: number
  getFramePath?: (frameIndex: number) => string
  containerRef: React.RefObject<HTMLElement | null>
  className?: string
}

export default function ScrollFrameCanvas({
  totalFrames = 60,
  getFramePath = (i) => `/hero-frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`,
  containerRef,
  className = '',
}: ScrollFrameCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Track scroll position of the hero section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 0%'],
  })

  // Apply gentle spring physics to smooth out scroll rate and prevent fast frame jumps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 22,
    restDelta: 0.001,
  })

  // Map smooth scroll progress (0 to 1) to frame index (1 to totalFrames)
  const frameIndexMotion = useTransform(smoothProgress, [0, 1], [1, totalFrames])

  // Preload all frame images
  useEffect(() => {
    let isMounted = true
    const preloadedImages: HTMLImageElement[] = []
    let loaded = 0

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      img.src = getFramePath(i)
      img.onload = () => {
        if (!isMounted) return
        loaded++
        setLoadedCount(loaded)
        if (loaded === totalFrames) {
          setIsLoaded(true)
        }
      }
      img.onerror = () => {
        if (!isMounted) return
        loaded++
        setLoadedCount(loaded)
        if (loaded === totalFrames) {
          setIsLoaded(true)
        }
      }
      preloadedImages.push(img)
    }

    setImages(preloadedImages)

    return () => {
      isMounted = false
    }
  }, [totalFrames, getFramePath])

  // Draw current frame on canvas whenever scroll progress or loaded status changes
  useEffect(() => {
    let animationFrameId: number

    const renderFrame = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const currentFrame = Math.min(
        totalFrames,
        Math.max(1, Math.round(frameIndexMotion.get()))
      )
      const img = images[currentFrame - 1]

      // Get container dimensions & DPR
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
      }

      ctx.save()
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, rect.width, rect.height)

      if (img && img.complete && img.naturalWidth > 0) {
        // Crop 2% top/left and 14% right/bottom to completely eliminate the Gemini watermark star
        const sx = img.naturalWidth * 0.02
        const sy = img.naturalHeight * 0.02
        const sw = img.naturalWidth * 0.84
        const sh = img.naturalHeight * 0.85
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, rect.width, rect.height)
      } else if (images[0] && images[0].complete) {
        const sx = images[0].naturalWidth * 0.02
        const sy = images[0].naturalHeight * 0.02
        const sw = images[0].naturalWidth * 0.84
        const sh = images[0].naturalHeight * 0.85
        ctx.drawImage(images[0], sx, sy, sw, sh, 0, 0, rect.width, rect.height)
      }

      ctx.restore()
    }

    const unsubscribe = frameIndexMotion.on('change', () => {
      animationFrameId = requestAnimationFrame(renderFrame)
    })

    // Initial render call
    renderFrame()

    // Window resize listener
    const handleResize = () => {
      renderFrame()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      unsubscribe()
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [images, isLoaded, frameIndexMotion, totalFrames])

  const loadPercentage = Math.round((loadedCount / totalFrames) * 100)
  const imageAspect = images[0] && images[0].naturalWidth > 0 ? images[0].naturalWidth / images[0].naturalHeight : undefined

  return (
    <div
      className={`relative max-w-[580px] lg:max-w-[640px] w-full bg-transparent ${className}`}
      style={{ aspectRatio: imageAspect ? `${imageAspect}` : '1 / 1' }}
    >
      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover transition-all duration-300"
      />

      {/* Preloading Bar overlay if images are buffering */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-950/70 rounded-3xl backdrop-blur-md text-amber-400 p-6 z-20">
          <div className="w-12 h-12 border-4 border-amber-500/30 border-t-amber-400 rounded-full animate-spin mb-4" />
          <p className="text-sm font-medium tracking-wide">Loading 3D Frame Sequence...</p>
          <div className="w-48 h-1.5 bg-stone-800 rounded-full mt-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-200"
              style={{ width: `${loadPercentage}%` }}
            />
          </div>
          <span className="text-xs text-stone-400 mt-1">{loadPercentage}%</span>
        </div>
      )}
    </div>
  )
}
