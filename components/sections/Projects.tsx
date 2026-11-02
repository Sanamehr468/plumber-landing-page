'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

const galleryItems = [
  {
    title: 'Bathroom Renovation',
    category: 'Residential Plumbing',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Kitchen Pipe Upgrade',
    category: 'Commercial & Residential',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Water Heater Installation',
    category: 'Emergency Services',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Projects() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }, [])

  const handleTouchMove = (e: React.TouchEvent) => {
    handleSliderMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleSliderMove(e.clientX)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(prev - 5, 0))
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(prev + 5, 100))
    }
  }

  return (
    <section id="projects" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <div>
              <span className="inline-block rounded-full text-xs font-semibold bg-surface text-accent border border-accent/20 px-3 py-1 mb-3">
                Our Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Before & After Transformations
              </h2>
              <p className="text-muted font-body text-sm sm:text-base mt-4">
                Drag the interactive slider below to see how FlowRight transforms outdated or broken plumbing into pristine, reliable systems.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-4xl mx-auto mb-16">
            <div 
              ref={sliderRef}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#1E293B] select-none cursor-ew-resize shadow-2xl bg-surface"
              onMouseMove={handleMouseMove}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                  alt="After plumbing repair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
                <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#1E293B] text-white text-xs font-bold">
                  After
                </div>
              </div>

              {/* Before Image (Clipped) */}
              <div 
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-full h-full" style={{ width: sliderRef.current ? `${sliderRef.current.offsetWidth}px` : '100vw', maxWidth: 'none' }}>
                  <Image
                    src="https://images.unsplash.com/photo-1542013936-69f0eed2b716?auto=format&fit=crop&w=1200&q=80"
                    alt="Before plumbing repair"
                    fill
                    className="object-cover filter grayscale contrast-125"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#1E293B] text-white text-xs font-bold">
                  Before
                </div>
              </div>

              {/* Slider Handle Bar */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold shadow-lg border-2 border-primary">
                  ↔
                </div>
              </div>

              {/* Accessible Range Input overlay */}
              <input 
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                onKeyDown={handleKeyDown}
                aria-label="Before and after comparison"
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index}>
              <div className="bg-surface border border-[#1E293B] rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/20">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-display font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted font-body text-sm">
                    Professional installation and diagnostic verification by FlowRight team.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
