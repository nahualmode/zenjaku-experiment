import { useState } from 'react'
import Head from 'next/head'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Gallery() {
    const { isDark, glitchActive, mounted } = useDarkMode()
    const [selectedPiece, setSelectedPiece] = useState(null)

    const artworks = [
        {
            id: 1,
            title: "ZENJAKU #001 - The Witch",
            description: "The first digital awakening",
            image: "/images/1-1/001.png",
            inscription: "644891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce517i0",
            tx: "644891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce517",
            block: "789012"
        },
        {
            id: 2,
            title: "ZENJAKU #002",
            description: "Digital consciousness emerges",
            image: "/images/1-1/002.png",
            inscription: "7a4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce518i0",
            tx: "7a4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce518",
            block: "789013"
        },
        {
            id: 3,
            title: "ZENJAKU #003",
            description: "Encrypted rebellion rises",
            image: "/images/1-1/003.png",
            inscription: "8b4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce519i0",
            tx: "8b4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce519",
            block: "789014"
        },
        {
            id: 4,
            title: "ZENJAKU #004",
            description: "The digital vanguard",
            image: "/images/1-1/004.png",
            inscription: "9c4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce520i0",
            tx: "9c4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce520",
            block: "789015"
        },
        {
            id: 5,
            title: "ZENJAKU #005",
            description: "Cybernetic enlightenment",
            image: "/images/1-1/005.png",
            inscription: "ae4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce521i0",
            tx: "ae4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce521",
            block: "789016"
        },
        {
            id: 6,
            title: "ZENJAKU #006",
            description: "Digital meditation flows",
            image: "/images/1-1/006.png",
            inscription: "bf4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce522i0",
            tx: "bf4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce522",
            block: "789017"
        },
        {
            id: 7,
            title: "ZENJAKU #007",
            description: "Blockchain warrior rises",
            image: "/images/1-1/007.png",
            inscription: "cf4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce523i0",
            tx: "cf4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce523",
            block: "789018"
        },
        {
            id: 8,
            title: "ZENJAKU #008",
            description: "Digital spirit awakens",
            image: "/images/1-1/008.png",
            inscription: "df4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce524i0",
            tx: "df4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce524",
            block: "789019"
        },
        {
            id: 9,
            title: "ZENJAKU #009",
            description: "Cyber samurai emerges",
            image: "/images/1-1/009.png",
            inscription: "ef4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce525i0",
            tx: "ef4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce525",
            block: "789020"
        },
        {
            id: 10,
            title: "ZENJAKU #010",
            description: "Digital harmony manifests",
            image: "/images/1-1/010.png",
            inscription: "ff4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce526i0",
            tx: "ff4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce526",
            block: "789021"
        },
        {
            id: 11,
            title: "ZENJAKU #011",
            description: "Blockchain mystic revealed",
            image: "/images/1-1/011.png",
            inscription: "0f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce527i0",
            tx: "0f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce527",
            block: "789022"
        },
        {
            id: 12,
            title: "ZENJAKU #012",
            description: "Digital zen mastered",
            image: "/images/1-1/012.png",
            inscription: "1f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce528i0",
            tx: "1f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce528",
            block: "789023"
        },
        {
            id: 13,
            title: "ZENJAKU #013",
            description: "Cyber enlightenment achieved",
            image: "/images/1-1/013.png",
            inscription: "2f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce529i0",
            tx: "2f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce529",
            block: "789024"
        },
        {
            id: 14,
            title: "ZENJAKU #014",
            description: "Digital warrior's path",
            image: "/images/1-1/014.png",
            inscription: "3f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce530i0",
            tx: "3f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce530",
            block: "789025"
        },
        {
            id: 15,
            title: "ZENJAKU #015",
            description: "Blockchain wisdom flows",
            image: "/images/1-1/015.png",
            inscription: "4f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce531i0",
            tx: "4f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce531",
            block: "789026"
        },
        {
            id: 16,
            title: "ZENJAKU #016",
            description: "Digital spirit unleashed",
            image: "/images/1-1/016.png",
            inscription: "5f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce532i0",
            tx: "5f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce532",
            block: "789027"
        },
        {
            id: 17,
            title: "ZENJAKU #017",
            description: "Cyber meditation deepens",
            image: "/images/1-1/017.png",
            inscription: "6f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce533i0",
            tx: "6f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce533",
            block: "789028"
        },
        {
            id: 18,
            title: "ZENJAKU #018",
            description: "Digital harmony perfected",
            image: "/images/1-1/018.png",
            inscription: "7f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce534i0",
            tx: "7f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce534",
            block: "789029"
        },
        {
            id: 19,
            title: "ZENJAKU #019",
            description: "Blockchain warrior ascends",
            image: "/images/1-1/019.png",
            inscription: "8f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce535i0",
            tx: "8f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce535",
            block: "789030"
        },
        {
            id: 20,
            title: "ZENJAKU #020",
            description: "Digital enlightenment peaks",
            image: "/images/1-1/020.png",
            inscription: "9f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce536i0",
            tx: "9f4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce536",
            block: "789031"
        },
        {
            id: 21,
            title: "ZENJAKU #021",
            description: "The final digital transcendence",
            image: "/images/1-1/021.png",
            inscription: "af4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce537i0",
            tx: "af4891f76e708f9a82c84f6b33a47e1e6f59b9d8a154420f78f0c34c0c8ce537",
            block: "789032"
        },
        {
            id: 22,
            title: "ZENJAKU #022",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        },
        {
            id: 23,
            title: "ZENJAKU #023",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        },
        {
            id: 24,
            title: "ZENJAKU #024",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        },
        {
            id: 25,
            title: "ZENJAKU #025",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        },
        {
            id: 26,
            title: "ZENJAKU #026",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        },
        {
            id: 27,
            title: "ZENJAKU #027",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        },
        {
            id: 28,
            title: "ZENJAKU #028",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        },
        {
            id: 29,
            title: "ZENJAKU #029",
            description: "Digital enlightenment awaits",
            image: "/images/1-1/PLACEHOLDER.png",
            inscription: "UPCOMING",
            tx: "UPCOMING",
            block: "UPCOMING",
            isPlaceholder: true
        }
    ]

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
                                    <div className="flex justify-between items-center">
                                        <div className={`text-[10px] tracking-wider ${artwork.isPlaceholder ? 'text-[#ff9900]/40' : 'text-[#ff9900]'}`}>
                                            {artwork.isPlaceholder ? 'AWAITING INSCRIPTION' : `INSCRIPTION #${artwork.inscription.slice(0, 8)}...`}
                                        </div>
                                        <div className={`text-[8px] tracking-wider ${artwork.isPlaceholder ? 'text-[#ff6600]/30' : 'text-[#ff6600]/70'}`}>
                                            {artwork.isPlaceholder ? 'BLOCK TBA' : `BLOCK #${artwork.block}`}
                                        </div>
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
                                <div className="space-y-1">
                                    <div className="text-[10px] tracking-[0.3em] opacity-50">INSCRIPTION ID</div>
                                    <div className="text-sm break-all font-mono tracking-wider text-[#ff9900]">
                                        {selectedPiece.inscription}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold mb-2">{selectedPiece.title}</h2>
                                    <p className="text-sm opacity-70 mb-4">{selectedPiece.description}</p>
                                </div>
                                <div className="grid grid-cols-1 gap-4 text-[10px]">
                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">TRANSACTION</div>
                                        <div className="tracking-wider text-[#ff6600]">{selectedPiece.tx}</div>
                                    </div>
                                    <div>
                                        <div className="tracking-[0.3em] opacity-50 mb-1">BLOCK</div>
                                        <div className="tracking-wider text-[#ff9900]">#{selectedPiece.block}</div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <a 
                                        href={`https://ordinals.com/inscription/${selectedPiece.inscription}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-xs tracking-wider hover:text-[#ff9900] transition-colors"
                                    >
                                        VIEW ON ORDINALS EXPLORER →
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
