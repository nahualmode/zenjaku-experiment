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
            </Head>

            <div className="pt-24 px-4 pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Cemetery Title */}
                    <div className="mb-16 font-mono">
                        <div 
                            className="text-[10px] tracking-[0.5em] uppercase mb-2 glitch-text"
                            style={{ 
                                color: isDark ? '#FFFFFF' : '#000000',
                                opacity: glitchActive ? 0.9 : 0.5
                            }}
                        >
                            SOLANA EQUILIBRIUM
                        </div>
                        <h1 
                            className="text-3xl font-black tracking-tighter mb-4"
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

                        {/* Value Burned Counter - Minimalist with live USD */}
                        <div className="mb-6 flex flex-col items-start">
                            <span className="font-mono text-2xl font-black text-[#ff9900] tracking-tight">
                                {totalCount} SACRIFICES
                            </span>
                            <span className="font-mono text-base text-[#ff9900]/80 mt-1">
                                {totalValueBurned.toLocaleString()} SOL transcended
                                {usdValue !== null && (
                                    <> (~${usdValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} USD)</>
                                )}
                            </span>
                            <span className="font-mono text-xs text-gray-400 mt-1">
                                Each soul burned, balance restored.
                            </span>
                        </div>
                    </div>

                    {/* Cemetery Grid - Updated to show more items */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {burnedNfts.map((artwork) => (
                            <div 
                                key={artwork.id}
                                className="group relative aspect-square cursor-pointer bg-black"
                                onClick={() => setSelectedPiece(artwork)}
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${artwork.image})`,
                                        filter: isDark ? 'brightness(0.7) contrast(1.2) grayscale(50%)' : 'brightness(0.8) contrast(1.1) grayscale(30%)',
                                        mixBlendMode: isDark ? 'screen' : 'normal'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                
                                {/* Memorial Frame */}
                                <div className="absolute inset-0 border border-[#ff9900]/20" />
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#ff9900]/40" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#ff9900]/40" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#ff9900]/40" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#ff9900]/40" />
                                
                                {/* Always Visible Details */}
                                <div 
                                    className="absolute bottom-0 left-0 right-0 p-2 font-mono space-y-1"
                                    style={{ color: '#FFFFFF' }}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="text-[8px] tracking-wider text-[#ff9900]">
                                            {artwork.burnValue} SOL
                                        </div>
                                        <div className="text-[6px] tracking-wider text-[#ff6600]/70">
                                            {artwork.burnDate}
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold group-hover:text-[#ff9900] transition-colors truncate">
                                        {artwork.title}
                                    </div>
                                </div>

                                {/* Glitch Lines */}
                                <div 
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: `repeating-linear-gradient(transparent, transparent 2px, rgba(255, 153, 0, 0.03) 3px, transparent 3px)`,
                                        backgroundSize: '100% 4px'
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Piece Modal - Updated with burn value */}
            {selectedPiece && (
                <div 
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
                    onClick={() => setSelectedPiece(null)}
                >
                    <div 
                        className="relative w-full max-w-lg sm:max-w-2xl bg-black p-4 sm:p-8 rounded-lg shadow-lg overflow-y-auto max-h-[95vh]"
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            className="fixed top-4 right-4 sm:absolute sm:top-4 sm:right-4 font-mono text-base sm:text-xs text-white bg-black/80 rounded-full px-4 py-2 opacity-80 hover:opacity-100 transition-opacity z-50"
                            style={{ zIndex: 100 }}
                            onClick={() => setSelectedPiece(null)}
                        >
                            CLOSE
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="aspect-square relative">
                                <img
                                    src={selectedPiece.image}
                                    alt={selectedPiece.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="font-mono text-white space-y-4">
                                <div className="space-y-1">
                                    <div className="text-[10px] tracking-[0.3em] opacity-50">MINT ADDRESS</div>
                                    <div className="text-sm break-all font-mono tracking-wider text-[#ff9900]">
                                        {selectedPiece.mintAddress}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2">{selectedPiece.title}</h2>
                                    <p className="text-sm opacity-70 mb-4">{selectedPiece.description}</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 text-[10px]">
                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">VALUE TRANSCENDED</div>
                                        <div className="tracking-wider text-[#ff9900] text-lg font-bold">
                                            {selectedPiece.burnValue} SOL
                                            <span className="text-sm ml-2 opacity-70">
                                                (${(selectedPiece.burnValue * 100).toLocaleString()})
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">BURN DATE</div>
                                        <div className="tracking-wider text-[#ff9900]">{selectedPiece.burnDate}</div>
                                    </div>
                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">BURN TRANSACTION</div>
                                        <div className="tracking-wider text-[#ff9900]">{selectedPiece.burnTx}</div>
                                    </div>
                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">ORIGINAL OWNER</div>
                                        <div className="tracking-wider text-[#ff9900]">{selectedPiece.originalOwner}</div>
                                    </div>
                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">BURN BLOCK</div>
                                        <div className="tracking-wider text-[#ff9900]">#{selectedPiece.burnBlock}</div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <a 
                                        href={`https://solscan.io/token/${selectedPiece.mintAddress}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs tracking-wider hover:text-[#ff9900] transition-colors"
                                    >
                                        VIEW ON SOLSCAN →
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