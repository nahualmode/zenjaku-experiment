import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useDarkMode } from '../contexts/DarkModeContext'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
    const { isDark, glitchActive, mounted } = useDarkMode()
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        {
            name: 'Observe',
            link: '/manifesto',
            isExternal: false
        },
        {
            name: 'Gallery',
            link: '/gallery',
            isExternal: false
        },
        {
            name: 'Cemetery',
            link: '/cemetery',
            isExternal: false
        },
        {
            name: 'TREASURY',
            link: '/treasury',
            isExternal: false
        },
        {
            name: 'SOL',
            link: 'https://www.tensor.trade/trade/vibe_knights',
            isExternal: true
        },
        {
            name: 'BTC',
            link: 'https://ordinals.com/inscription/your-inscription-id',
            isExternal: true
        }
    ]

    if (!mounted) {
        return null
    }

    return (
        <header className={`fixed top-0 left-0 w-full px-4 py-4 flex justify-between items-center z-50 ${isDark ? 'bg-gradient-to-b from-black/90 to-black/0' : 'bg-gradient-to-b from-white/90 to-white/0'}`}>
            <Link href="/" className="font-mono z-20">
                <div 
                    className={`text-[10px] tracking-[0.5em] uppercase transition-opacity duration-300 ${glitchActive ? 'opacity-30' : 'opacity-50'}`}
                    style={{ color: isDark ? '#FFFFFF' : '#000000' }}
                >
                    THE ZENJAKU EXPERIMENT  
                    
                </div>
                <div 
                    className={`text-xs tracking-[0.3em] uppercase transform transition-transform duration-300 ${glitchActive ? 'translate-x-[2px]' : ''}`}
                    style={{ color: isDark ? '#FFFFFF' : '#000000' }}
                >
                    禅衡者实验 | A RITUAL OF BALANCE
                </div>
            </Link>

            {/* Hamburger for mobile */}
            <button
                className="md:hidden z-30 p-2 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                {menuOpen
                  ? <HiX size={28} style={{ color: isDark ? '#fff' : '#111' }} />
                  : <HiMenu size={28} style={{ color: isDark ? '#fff' : '#111' }} />}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:block">
                <ul className="flex items-center space-x-8">
                    {links.map((link) => (
                        <li key={link.name}>
                            {link.isExternal ? (
                                <a
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`font-mono text-xs tracking-widest uppercase hover:opacity-70 transition-opacity border-b border-current ${isDark ? 'text-white' : 'text-black'}`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    href={link.link}
                                    className={`font-mono text-xs tracking-widest uppercase hover:opacity-70 transition-opacity ${isDark ? 'text-white' : 'text-black'}`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Nav Dropdown */}
            {menuOpen && (
                <nav className={`fixed inset-0 flex flex-col items-center justify-center z-40 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    <button
                        className="absolute top-6 right-6 z-50 p-2 focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close navigation menu"
                    >
                        <HiX size={32} className={isDark ? 'text-white' : 'text-black'} />
                    </button>
                    <ul className="flex flex-col gap-8 text-2xl font-mono uppercase">
                        {links.map((link) => (
                            <li key={link.name}>
                                {link.isExternal ? (
                                    <a
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`font-mono text-2xl tracking-widest uppercase hover:text-[#ff9900] transition-colors border-b border-[#222] pb-2 ${isDark ? 'text-white' : 'text-black'}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        href={link.link}
                                        className={`font-mono text-2xl tracking-widest uppercase hover:text-[#ff9900] transition-colors border-b border-[#222] pb-2 ${isDark ? 'text-white' : 'text-black'}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header
