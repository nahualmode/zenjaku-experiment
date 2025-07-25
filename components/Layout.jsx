import { useDarkMode } from '../contexts/DarkModeContext'
import { useState, useEffect } from 'react'

export default function Layout({ children }) {
    const { isDark, glitchActive, mounted } = useDarkMode()
    const [timestamp, setTimestamp] = useState('')
    const [showFirstCredit, setShowFirstCredit] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        if (!mounted) return
        updateTimestamp()
        const timestampInterval = setInterval(updateTimestamp, 1000)
        return () => clearInterval(timestampInterval)
    }, [mounted])

    useEffect(() => {
        // Flicker only on mobile
        const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 767px)').matches)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        let interval = null
        let fadeTimeout = null
        if (isMobile) {
            interval = setInterval(() => {
                setFade(false)
                fadeTimeout = setTimeout(() => {
                    setShowFirstCredit((prev) => !prev)
                    setFade(true)
                }, 350) // fade out for 350ms, then swap and fade in
            }, 5000)
        } else {
            setShowFirstCredit(true)
            setFade(true)
        }
        return () => {
            window.removeEventListener('resize', checkMobile)
            if (interval) clearInterval(interval)
            if (fadeTimeout) clearTimeout(fadeTimeout)
        }
    }, [isMobile])

    const updateTimestamp = () => {
        const date = new Date().toISOString().split('T')[0].replace(/-/g, '')
        const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
        setTimestamp(`${date}_${random}`)
    }

    if (!mounted) {
        return null
    }

    return (
        <main className={`min-h-screen w-full relative overflow-hidden transition-colors duration-1000 ${isDark ? 'bg-black' : 'bg-white'}`}>
            {children}

            <div className="fixed bottom-4 right-4 font-mono text-[8px] sm:text-[10px] tracking-wider z-20 text-right">
                <div
                    className={`transition-opacity duration-300`}
                    style={{ 
                        color: isDark ? '#FFFFFF' : '#000000', 
                        opacity: glitchActive ? 0.8 : 0.5 
                    }}
                >
                    LIGHT_AGENT: {isDark ? 'DORMANT' : 'ACTIVE'}
                    <br />
                    DARK_AGENT: {isDark ? 'ACTIVE' : 'DORMANT'}
                </div>
            </div>

            <div 
                className="fixed bottom-4 left-4 font-mono text-[8px] sm:text-[10px] tracking-wider z-20 transition-opacity duration-300"
                style={{ 
                    color: isDark ? '#FFFFFF' : '#000000',
                    opacity: glitchActive ? 0.8 : 0.5 
                }}
            >
                {timestamp}
            </div>

            {/* Centered Footer Credit */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-20 pointer-events-none">
                <div
                    className="font-mono text-[8px] sm:text-[10px] tracking-wider opacity-70 text-center pointer-events-auto min-w-[120px] min-h-[1em]"
                    style={{ color: isDark ? '#FFFFFF' : '#000000' }}
                >
                    {/* Flicker on mobile, show both on desktop */}
                    <span className="hidden md:inline">
                        a social experiment by <span className="font-bold">BUSTOS69</span> &middot; pfps by <span className="font-bold">Vibing Studios</span>
                    </span>
                    <span className="inline md:hidden transition-opacity duration-300"
                        style={{ opacity: fade ? 1 : 0, transition: 'opacity 350ms' }}>
                        {showFirstCredit
                            ? <>a social experiment by <span className="font-bold">BUSTOS69</span></>
                            : <>pfps by <span className="font-bold">Vibing Studios</span></>
                        }
                    </span>
                </div>
            </div>

            {glitchActive && (
                <>
                    <div className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-20" style={{ clipPath: 'polygon(0 25%, 100% 25%, 100% 26%, 0 26%)' }}></div>
                    <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-20" style={{ clipPath: 'polygon(0 75%, 100% 75%, 100% 76%, 0 76%)' }}></div>
                </>
            )}
        </main>
    )
} 