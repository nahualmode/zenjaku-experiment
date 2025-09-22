import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useDarkMode } from '../contexts/DarkModeContext'
import { burnedNfts } from '../data/burnedNfts'

// This should be moved to a separate config file or fetched from an API
const BURNED_COUNT = 69 // total number of burned NFTs

const totalValueBurned = burnedNfts.reduce((sum, nft) => sum + (nft.burnValue || 0), 0);
const totalCount = burnedNfts.length;

export default function Cemetery() {
    const { isDark, glitchActive, mounted } = useDarkMode()
    const [selectedPiece, setSelectedPiece] = useState(null)
    const [solPrice, setSolPrice] = useState(null)
    const [usdValue, setUsdValue] = useState(null)

    useEffect(() => {
        async function fetchSolPrice() {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
                const data = await res.json();
                if (data.solana && data.solana.usd) {
                    setSolPrice(data.solana.usd);
                }
            } catch (e) {
                setSolPrice(null);
            }
        }
        fetchSolPrice();
    }, []);

    useEffect(() => {
        if (solPrice !== null) {
            setUsdValue(totalValueBurned * solPrice);
        }
    }, [solPrice, totalValueBurned]);

    if (!mounted) {
        return null
    }

    return (
        <>
            <Head>
                <title>Digital Cemetery | The Zenjaku Experiment</title>
                <meta name="description" content="A memorial for transcended Zenjaku NFTs, forever recorded on the Solana blockchain." />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>

            <div className={`pt-24 px-4 pb-16 min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto">
                    {/* Cemetery Header - Enhanced Mobile Experience */}
                    <div className="mb-12 lg:mb-16 font-mono">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
                            {/* Left Column - Title and Description */}
                            <div className="lg:order-1">
                                <div 
                                    className="text-[10px] tracking-[0.5em] uppercase mb-3 glitch-text"
                                    style={{ 
                                        color: isDark ? '#FFFFFF' : '#000000',
                                        opacity: glitchActive ? 0.9 : 0.5
                                    }}
                                >
                                    SOLANA EQUILIBRIUM
                                </div>
                                <h1 
                                    className="text-2xl sm:text-3xl font-black tracking-tighter mb-4"
                                    style={{ 
                                        color: isDark ? '#FFFFFF' : '#000000',
                                        WebkitTextStroke: isDark ? '1px #FFF' : '1px #000',
                                        textShadow: glitchActive ? 
                                            (isDark ? '-2px -2px #ff6600, 2px 2px #ff9900' : '2px 2px #ff6600, -2px -2px #ff9900')
                                            : 'none'
                                    }}
                                >
                                    DIGITAL CEMETERY
                                </h1>
                                <p 
                                    className="text-sm opacity-70 leading-relaxed"
                                    style={{ color: isDark ? '#FFFFFF' : '#000000' }}
                                >
                                    A memorial for Zenjaku NFTs that were burned from the Solana blockchain. Their absence restores balance, their sacrifice is eternal.
                                </p>
                            </div>

              {/* Right Column - Stats */}
              <div className="lg:order-2 lg:flex lg:justify-end lg:items-start">
                <div className="text-center lg:text-right space-y-3 lg:mt-8">
                  <div className="font-mono text-xl sm:text-2xl font-black tracking-tight" style={{ color: isDark ? '#ff9900' : '#ff6600' }}>
                    {totalValueBurned.toLocaleString()} SOL TRANSCENDED
                  </div>
                  <div className="font-mono text-sm opacity-70" style={{ color: isDark ? '#ff9900' : '#ff6600' }}>
                    {totalCount} sacrifices burned
                    {usdValue !== null && (
                      <> (~${usdValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD)</>
                    )}
                  </div>
                  <div 
                    className="text-[10px] font-mono tracking-wider"
                    style={{ 
                      color: isDark ? '#ff9900' : '#ff6600',
                      opacity: glitchActive ? 0.9 : 0.7
                    }}
                  >
                    SACRIFICED // ERASED // REMEMBERED
                  </div>
                </div>
              </div>
                        </div>
                    </div>

                    {/* Cemetery Grid - Enhanced Mobile Experience */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-2 sm:gap-3 md:gap-4">
                        {burnedNfts.map((artwork) => (
                            <div 
                                key={artwork.id}
                                className="group relative aspect-square cursor-pointer bg-black active:scale-95 transition-transform duration-150 touch-manipulation"
                                onClick={() => setSelectedPiece(artwork)}
                                onTouchStart={(e) => {
                                    // Add subtle haptic feedback on mobile
                                    if (navigator.vibrate) {
                                        navigator.vibrate(10);
                                    }
                                }}
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${artwork.image})`,
                                        filter: isDark ? 'brightness(0.6) contrast(1.3) grayscale(60%)' : 'brightness(0.8) contrast(1.2) grayscale(40%)',
                                        mixBlendMode: isDark ? 'screen' : 'normal'
                                    }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${
                                    isDark ? 'from-black/95 via-black/50 to-transparent' : 'from-black/90 via-black/40 to-transparent'
                                }`} />
                                
                                {/* Compact Cyberpunk Frame - optimized for smaller portraits */}
                                <div className={`absolute inset-0 border ${isDark ? 'border-[#ff9900]/20' : 'border-[#ff6600]/30'}`} />
                                <div className={`absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-l ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
                                <div className={`absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-r ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
                                <div className={`absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-l ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
                                <div className={`absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-r ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
                                
                                {/* Compact Memorial Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="text-center">
                                        <div 
                                            className="text-[#ff9900] font-mono text-xs sm:text-sm tracking-wider"
                                            style={{
                                                textShadow: glitchActive ? '1px 1px #ff3300, -1px -1px #ff9900' : 'none'
                                            }}
                                        >
                                            TRANSCENDED
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Compact Details Layout */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 p-1 sm:p-2 font-mono space-y-1"
                                    style={{ color: '#FFFFFF' }}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className={`text-[6px] sm:text-[8px] tracking-wider ${isDark ? 'text-[#ff9900]' : 'text-[#ff6600]'}`}>
                                            {artwork.burnValue} SOL
                                        </div>
                                        <div className={`text-[5px] sm:text-[7px] tracking-wider ${isDark ? 'text-[#ff6600]/70' : 'text-[#ff6600]/80'}`}>
                                            {artwork.burnDate}
                                        </div>
                                    </div>
                                    <div className={`text-[7px] sm:text-[9px] font-bold transition-colors truncate ${isDark ? 'group-hover:text-[#ff9900]' : 'group-hover:text-[#ff6600]'}`}>
                                        {artwork.title}
                                    </div>
                                </div>

                                {/* Enhanced Glitch Lines */}
                                <div 
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: `repeating-linear-gradient(transparent, transparent 2px, rgba(255, 153, 0, 0.04) 3px, transparent 3px)`,
                                        backgroundSize: '100% 4px'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Piece Modal - Enhanced Mobile Experience */}
            {selectedPiece && (
                <div 
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
                    onClick={() => setSelectedPiece(null)}
                >
                    <div 
                        className="max-w-6xl w-full bg-black p-4 sm:p-8 relative max-h-[95vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 font-mono text-xs sm:text-sm text-white opacity-70 hover:opacity-100 active:opacity-100 transition-opacity bg-black/50 rounded-full px-3 py-2 touch-manipulation"
                            onClick={() => setSelectedPiece(null)}
                        >
                            CLOSE
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="aspect-square relative">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center rounded-lg"
                                    style={{
                                        backgroundImage: `url(${selectedPiece.image})`,
                                        filter: isDark ? 'brightness(0.8) contrast(1.1)' : 'none'
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
                                        <div className="tracking-[0.3em] opacity-50">VALUE TRANSCENDED</div>
                                        <div className="text-lg font-bold tracking-wider text-[#ff9900]">
                                            {selectedPiece.burnValue} SOL
                                            <span className="text-sm ml-2 opacity-70">
                                                (${(selectedPiece.burnValue * 100).toLocaleString()})
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <div className="tracking-[0.3em] opacity-50">MINT ADDRESS</div>
                                        <div className="text-xs break-all font-mono tracking-wider text-[#ff9900]/80">
                                            {selectedPiece.mintAddress}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">BURN DATE</div>
                                            <div className="tracking-wider text-[#ff6600]">{selectedPiece.burnDate}</div>
                                        </div>
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">BURN BLOCK</div>
                                            <div className="tracking-wider text-[#ff6600]">#{selectedPiece.burnBlock || 'N/A'}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">NETWORK</div>
                                            <div className="tracking-wider text-[#ff9900]">SOLANA</div>
                                        </div>
                                        <div>
                                            <div className="tracking-[0.3em] opacity-50 mb-1">STATUS</div>
                                            <div className="tracking-wider text-[#ff9900]">TRANSCENDED</div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">BURN TRANSACTION</div>
                                        <div className="text-xs break-all tracking-wider text-[#ff6600]/70">{selectedPiece.burnTx || 'N/A'}</div>
                                    </div>

                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">ORIGINAL OWNER</div>
                                        <div className="text-xs break-all tracking-wider text-[#ff6600]/70">{selectedPiece.originalOwner || 'N/A'}</div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10 space-y-2">
                                    <a 
                                        href={`https://solscan.io/token/${selectedPiece.mintAddress}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs tracking-wider hover:text-[#ff9900] transition-colors mr-4"
                                    >
                                        VIEW ON SOLSCAN →
                                    </a>
                                    <a 
                                        href="https://www.tensor.trade/trade/zenjaku"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs tracking-wider hover:text-[#ff9900] transition-colors"
                                    >
                                        VIEW ON MARKET →
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