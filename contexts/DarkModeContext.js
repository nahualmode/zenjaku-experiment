import { createContext, useContext, useState, useEffect } from 'react'

const DarkModeContext = createContext()

export function DarkModeProvider({ children }) {
    const [mounted, setMounted] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const [glitchActive, setGlitchActive] = useState(false)

    useEffect(() => {
        setMounted(true)
        setIsDark(false)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const glitchInterval = setInterval(() => {
            setGlitchActive(true)
            setTimeout(() => setGlitchActive(false), 150)
        }, 3000)
        return () => clearInterval(glitchInterval)
    }, [mounted])

    useEffect(() => {
        if (!mounted) return

        const darkInterval = setInterval(() => {
            setIsDark(prev => !prev)
        }, 10000)
        return () => clearInterval(darkInterval)
    }, [mounted])

    return (
        <DarkModeContext.Provider value={{ isDark, glitchActive, mounted }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider')
    }
    return context
} 