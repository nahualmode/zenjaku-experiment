import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useDarkMode } from '../contexts/DarkModeContext'

// Treasury stats and latest story (easy to update)
const TOTAL_DONATED = 4200 // USD
const TREASURY_BALANCE = 6900 // USD
const LATEST_STORY = {
  author: 'This Is The Coin',
  handle: '@thisisthecoin',
  avatar: '/treasury/avatar.png',
  text: 'We just received a donation from Zenjaku! Thank you for helping us restore balance. #crypto #charity',
  date: 'Sep 4, 2021',
  tweetUrl: 'https://twitter.com/thisisthecoin/status/1434531234567890',
  amount: 4200
}

export default function Treasury() {
  const { isDark, glitchActive, mounted } = useDarkMode()
  if (!mounted) return null

  const accent = isDark ? '#ff9900' : '#ff6600'
  const accentSecondary = isDark ? '#ff6600' : '#ff9900'
  const statText = isDark ? 'text-[#ff9900]' : 'text-[#ff6600]'
  const statText2 = isDark ? 'text-[#ff6600]' : 'text-[#ff9900]'
  const bg = isDark ? 'bg-black' : 'bg-white'
  const border = isDark ? 'border-[#ff9900]/30' : 'border-[#ff9900]/20'
  const textColor = isDark ? '#fff' : '#111'

  return (
    <>
      <Head>
        <title>Treasury | The Zenjaku Experiment</title>
        <meta name="description" content="Transparent record of donations and treasury for Zenjaku. Half of all royalties are used to help others, restoring balance to the world." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className={`pt-24 px-4 pb-16 min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Treasury Header - Matching site aesthetic */}
          <div className="mb-16 font-mono">
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
                  REAL WORLD IMPACT
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
                  THE TREASURY
                </h1>
                <p 
                  className="text-sm opacity-70 leading-relaxed"
                  style={{ color: isDark ? '#FFFFFF' : '#000000' }}
                >
                  Half of all royalties are offered to the world — supporting causes, lifting others, and restoring balance beyond the chain. Every donation becomes part of the story, recorded and shared on <a href="https://x.com/vibeknights" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity" style={{ color: isDark ? '#ff6600' : '#ff9900' }}>X</a>.
                </p>
              </div>

              {/* Right Column - Stats */}
              <div className="lg:order-2 lg:flex lg:justify-end lg:items-start">
                <div className="text-center lg:text-right space-y-3 lg:mt-8">
                  <div className="font-mono text-xl sm:text-2xl font-black tracking-tight" style={{ color: isDark ? '#ff9900' : '#ff6600' }}>
                    ${TOTAL_DONATED.toLocaleString()} DONATED
                  </div>
                  <div className="font-mono text-sm opacity-70" style={{ color: isDark ? '#ff9900' : '#ff6600' }}>
                    ${TREASURY_BALANCE.toLocaleString()} treasury balance
                  </div>
                  <div 
                    className="text-[10px] font-mono tracking-wider"
                    style={{ 
                      color: isDark ? '#ff9900' : '#ff6600',
                      opacity: glitchActive ? 0.9 : 0.7
                    }}
                  >
                    BALANCE // RESTORED // ETERNAL
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Donation Story */}
          <div className="relative">
            {/* Cyberpunk Frame */}
            <div className={`absolute inset-0 border ${isDark ? 'border-[#ff9900]/20' : 'border-[#ff6600]/30'}`} />
            <div className={`absolute top-0 left-0 w-6 h-6 border-t border-l ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
            <div className={`absolute top-0 right-0 w-6 h-6 border-t border-r ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
            <div className={`absolute bottom-0 left-0 w-6 h-6 border-b border-l ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
            <div className={`absolute bottom-0 right-0 w-6 h-6 border-b border-r ${isDark ? 'border-[#ff9900]/40' : 'border-[#ff6600]/50'}`} />
            
            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Avatar and Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9900] to-[#ff6600] flex items-center justify-center border border-[#ff9900]/40">
                    <span className="font-mono text-sm font-bold text-white">TC</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-sm font-bold" style={{ color: isDark ? '#FFFFFF' : '#000000' }}>
                      {LATEST_STORY.author}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider opacity-70" style={{ color: isDark ? '#ff9900' : '#ff6600' }}>
                      {LATEST_STORY.handle}
                    </span>
                  </div>
                </div>

                {/* Story Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-sm opacity-80 leading-relaxed" style={{ color: isDark ? '#FFFFFF' : '#000000' }}>
                    {LATEST_STORY.text}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono text-[10px] tracking-wider opacity-60" style={{ color: isDark ? '#FFFFFF' : '#000000' }}>
                      {LATEST_STORY.date}
                    </span>
                    <a 
                      href={LATEST_STORY.tweetUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block text-[10px] tracking-wider hover:opacity-80 transition-opacity font-mono border border-current px-3 py-1"
                      style={{ color: isDark ? '#ff9900' : '#ff6600' }}
                    >
                      VIEW ON TWITTER →
                    </a>
                  </div>
                </div>

                {/* Donation Amount */}
                <div className="flex flex-col items-end">
                  <div className={`font-mono text-lg font-black tracking-tight ${isDark ? 'text-[#ff9900]' : 'text-[#ff6600]'}`}>
                    +${LATEST_STORY.amount.toLocaleString()}
                  </div>
                  <div className="font-mono text-[10px] tracking-wider opacity-70" style={{ color: isDark ? '#FFFFFF' : '#000000' }}>
                    DONATED
                  </div>
                </div>
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
        </div>
      </div>
    </>
  )
} 