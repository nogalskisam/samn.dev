"use client"

import { useEffect, useRef } from 'react'

export function BackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (x: number, y: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 300)
      gradient.addColorStop(0, 'rgba(66, 133, 244, 0.3)')
      gradient.addColorStop(1, 'rgba(66, 133, 244, 0)')
      return gradient
    }

    const draw = (mouseX: number, mouseY: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = createGradient(mouseX, mouseY)
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const animate = () => {
      draw(mouseX, mouseY)
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

