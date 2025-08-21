import { useState } from 'react'
import Head from 'next/head'
import { useDarkMode } from '../contexts/DarkModeContext'
import inscriptionsData from '../data/inscriptions.json'

export default function Gallery() {
    const { isDark, glitchActive, mounted } = useDarkMode()
    const [selectedPiece, setSelectedPiece] = useState(null)

    const artworks = inscriptionsData.artworks

    if (!mounted) {
        return null
    }

    return (
        <>
            <Head>
                <title>1/1 Gallery | The Zenjaku Experiment</title>
                <meta name="description" content="21 unique pieces of digital rebellion, inscribed forever on the Bitcoin blockchain." />
            </Head>

            <div className="pt-24 px-4 pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Gallery Title */}
                    <div className="mb-16 font-mono">
                        <div 
                            className="text-[10px] tracking-[0.5em] uppercase mb-2 glitch-text"
                            style={{ 
                                color: isDark ? '#FFFFFF' : '#000000',
                                opacity: glitchActive ? 0.9 : 0.5
                            }}
                        >
                            INSCRIBED ON BITCOIN BLOCK 789012
                        </div>
                        <h1 
                            className="text-3xl font-black tracking-tighter mb-4"
                            style={{ 
                                color: isDark ? '#FFFFFF' : '#000000',
                                WebkitTextStroke: isDark ? '1px #FFF' : '1px #000',
                                textShadow: glitchActive ? 
                                    (isDark ? '-2px -2px #ff3300, 2px 2px #ff9900' : '2px 2px #ff3300, -2px -2px #ff9900')
                                    : 'none'
                            }}
                        >
                            29 DIGITAL ENLIGHTENMENTS
                        </h1>
                        <div className="space-y-2">
                            <p 
                                className="text-sm opacity-70"
                                style={{ color: isDark ? '#FFFFFF' : '#000000' }}
                            >
                                Each piece a unique enlightenment. Each inscription a digital meditation.
                                <span className="ml-2 text-[#ff9900]">21/29 revealed.</span>
                            </p>
                            <p 
                                className="text-[10px] font-mono tracking-wider"
                                style={{ 
                                    color: isDark ? '#ff9900' : '#ff6600',
                                    opacity: glitchActive ? 0.9 : 0.7
                                }}
                            >
                                IMMUTABLE // UNCENSORABLE // ETERNAL
                            </p>
                            <p 
                                className="text-[10px] font-mono"
                                style={{ color: isDark ? '#FFFFFF' : '#000000', opacity: 0.5 }}
                            >
                                ARTWORK INSCRIBED ON THE BITCOIN BLOCKCHAIN
                            </p>
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artworks.map((artwork) => (
                            <div 
                                key={artwork.id}
                                className={`group relative aspect-square cursor-pointer bg-black ${artwork.isPlaceholder ? 'pointer-events-none' : ''}`}
                                onClick={() => !artwork.isPlaceholder && setSelectedPiece(artwork)}
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${artwork.image})`,
                                        filter: artwork.isPlaceholder 
                                            ? 'brightness(0.3) contrast(1.2)' 
                                            : (isDark ? 'brightness(1.1) contrast(1.1)' : 'contrast(1.1)'),
                                        mixBlendMode: isDark ? 'screen' : 'normal'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                
                                {/* Cyberpunk Frame */}
                                <div className={`absolute inset-0 border ${artwork.isPlaceholder ? 'border-[#ff9900]/10' : 'border-[#ff9900]/20'}`} />
                                <div className={`absolute top-0 left-0 w-8 h-8 border-t border-l ${artwork.isPlaceholder ? 'border-[#ff9900]/20' : 'border-[#ff9900]/40'}`} />
                                <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r ${artwork.isPlaceholder ? 'border-[#ff9900]/20' : 'border-[#ff9900]/40'}`} />
                                <div className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l ${artwork.isPlaceholder ? 'border-[#ff9900]/20' : 'border-[#ff9900]/40'}`} />
                                <div className={`absolute bottom-0 right-0 w-8 h-8 border-b border-r ${artwork.isPlaceholder ? 'border-[#ff9900]/20' : 'border-[#ff9900]/40'}`} />
                                
                                {artwork.isPlaceholder && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div 
                                                className="text-[#ff9900]/60 font-mono text-sm tracking-wider mb-2"
                                                style={{
                                                    textShadow: glitchActive ? '1px 1px #ff3300, -1px -1px #ff9900' : 'none'
                                                }}
                                            >
                                                COMING SOON
                                            </div>
                                            <div className="text-white/30 text-xs">Digital enlightenment awaits</div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Always Visible Details */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 p-4 font-mono space-y-3"
                                    style={{ color: '#FFFFFF' }}
                                >
                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <div className={`text-[9px] tracking-wider ${artwork.isPlaceholder ? 'text-[#ff9900]/40' : 'text-[#ff9900]'}`}>
                                                {artwork.isPlaceholder ? 'AWAITING INSCRIPTION' : `INSCRIPTION #${artwork.inscriptionNumber || 'N/A'}`}
                                            </div>
                                            <div className={`text-[8px] tracking-wider ${artwork.isPlaceholder ? 'text-[#ff6600]/30' : 'text-[#ff6600]/70'}`}>
                                                {artwork.isPlaceholder ? 'BLOCK TBA' : `BLOCK #${artwork.block}`}
                                            </div>
                                        </div>
                                        {!artwork.isPlaceholder && artwork.contentType && (
                                            <div className="flex justify-between items-center">
                                                <div className="text-[8px] tracking-wider text-white/50">
                                                    {artwork.contentType}
                                                </div>
                                                <div className="text-[8px] tracking-wider text-white/50">
                                                    {artwork.contentSize}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`text-sm font-bold ${artwork.isPlaceholder ? 'text-white/40' : 'group-hover:text-[#ff9900]'} transition-colors`}>
                                        {artwork.title}
                                    </div>
                                    {!artwork.isPlaceholder && (
                                        <div 
                                            className="text-[8px] tracking-wider opacity-70"
                                            style={{
                                                textShadow: glitchActive ? '1px 1px #ff3300, -1px -1px #ff9900' : 'none'
                                            }}
                                        >
                                            TX: {artwork.tx.slice(0, 12)}...
                                        </div>
                                    )}
                                </div>

                                {/* Glitch Lines */}
                                <div 
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: `repeating-linear-gradient(transparent, transparent 2px, rgba(255, 153, 0, ${artwork.isPlaceholder ? '0.01' : '0.03'}) 3px, transparent 3px)`,
                                        backgroundSize: '100% 4px'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Piece Modal */}
            {selectedPiece && (
                <div 
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPiece(null)}
                >
                    <div 
                        className="max-w-6xl w-full bg-black p-8 relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-4 right-4 font-mono text-xs text-white opacity-50 hover:opacity-100 transition-opacity"
                            onClick={() => setSelectedPiece(null)}
                        >
                            CLOSE
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="aspect-square relative">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${selectedPiece.image})`,
                                        filter: isDark ? 'brightness(1.1)' : 'none'
                                    }}
                                />
                            </div>
                            <div className="font-mono text-white space-y-4">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">{selectedPiece.title}</h2>
                                    <p className="text-sm opacity-70 mb-4">{selectedPiece.description}</p>
                                </div>
                                
                                <div className="grid grid-cols-1 gap-4 text-[10px]">
                                    <div className="space-y-1">
                                        <div className="tracking-[0.3em] opacity-50">INSCRIPTION NUMBER</div>
                                        <div className="text-lg font-bold tracking-wider text-[#ff9900]">
                                            #{selectedPiece.inscriptionNumber || 'N/A'}
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <div className="tracking-[0.3em] opacity-50">INSCRIPTION ID</div>
                                        <div className="text-xs break-all font-mono tracking-wider text-[#ff9900]/80">
                                            {selectedPiece.inscription}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">CONTENT TYPE</div>
                                            <div className="tracking-wider text-[#ff6600]">{selectedPiece.contentType || 'image/png'}</div>
                                        </div>
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">SIZE</div>
                                            <div className="tracking-wider text-[#ff6600]">{selectedPiece.contentSize || 'N/A'}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">BLOCK HEIGHT</div>
                                            <div className="tracking-wider text-[#ff9900]">#{selectedPiece.block}</div>
                                        </div>
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">NETWORK</div>
                                            <div className="tracking-wider text-[#ff9900]">BITCOIN</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">TRANSACTION HASH</div>
                                        <div className="text-xs break-all tracking-wider text-[#ff6600]/70">{selectedPiece.tx}</div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <a 
                                        href={`https://ordiscan.com/inscription/${selectedPiece.inscription}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs tracking-wider hover:text-[#ff9900] transition-colors"
                                    >
                                        VIEW ON ORDISCAN →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
