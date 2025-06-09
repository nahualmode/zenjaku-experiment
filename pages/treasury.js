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
      </Head>
      <div className={`pt-24 px-2 pb-16 min-h-screen ${bg}`}>
        <div className="max-w-5xl mx-auto w-full">
          {/* Slick Title */}
          <div className="mb-8 font-mono">
            <div 
              className="text-[10px] tracking-[0.5em] uppercase mb-2 glitch-text"
              style={{ color: isDark ? '#FFFFFF' : '#000000', opacity: glitchActive ? 0.9 : 0.5 }}
            >
              zenjaku treasury
            </div>
            <h1 
              className="text-3xl font-black tracking-tighter mb-2"
              style={{ color: isDark ? '#FFFFFF' : '#000000', WebkitTextStroke: isDark ? '1px #FFF' : '1px #000', textShadow: glitchActive ? (isDark ? '-2px -2px #ff3300, 2px 2px #ff9900' : '2px 2px #ff3300, -2px -2px #ff9900') : 'none' }}
            >
              BALANCE THROUGH GIVING
            </h1>
            <div className="space-y-2">
              <p 
                className="font-mono text-sm opacity-70"
                style={{ color: isDark ? '#FFFFFF' : '#000000' }}
              >
                Half of all royalties are used to help others, restoring balance to the world.
              </p>
              <p 
                className="font-mono text-sm opacity-70"
                style={{ color: isDark ? '#FFFFFF' : '#000000' }}
              >
                Every donation helps restore balance. Stories are shared on <a href="https://twitter.com/zenjakuNFT" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: accentSecondary }}>Twitter</a>.
              </p>
            </div>
          </div>

          {/* Hero Stats Bar */}
          <div className="w-full flex flex-col sm:flex-row items-stretch justify-between mb-8 border-b" style={{ borderColor: accent, background: isDark ? '#181818' : '#f7f7f7' }}>
            <div className="flex-1 flex flex-col items-center justify-center py-8 px-2 sm:px-8 relative">
              <span className="font-mono text-xs text-gray-400 mb-1 tracking-widest">Total donated</span>
              <span className={`font-mono text-4xl font-black ${statText} tracking-tight`} style={{ letterSpacing: '-2px' }}>
                ${TOTAL_DONATED.toLocaleString()}
              </span>
              <span className="absolute left-1/2 -bottom-1 w-12 h-0.5" style={{ background: accent, opacity: 0.7, transform: 'translateX(-50%)' }} />
            </div>
            <div className="hidden sm:block w-px" style={{ background: accent, opacity: 0.15 }} />
            <div className="flex-1 flex flex-col items-center justify-center py-8 px-2 sm:px-8 relative">
              <span className="font-mono text-xs text-gray-400 mb-1 tracking-widest">Treasury balance</span>
              <span className={`font-mono text-4xl font-black ${statText2} tracking-tight`} style={{ letterSpacing: '-2px' }}>
                ${TREASURY_BALANCE.toLocaleString()}
              </span>
              <span className="absolute left-1/2 -bottom-1 w-12 h-0.5" style={{ background: accentSecondary, opacity: 0.7, transform: 'translateX(-50%)' }} />
            </div>
          </div>

          {/* Latest Story Banner - Gallery Subtitle Style */}
          <div className="w-full flex items-center gap-4 py-6 px-2 sm:px-8 border-b" style={{ borderColor: accent, background: isDark ? '#181818' : '#f7f7f7', minHeight: 90 }}>
            {/* Small avatar and username */}
            <div className="flex flex-col items-center justify-center min-w-[48px]">
              <div className="w-8 h-8 rounded-full bg-[#ff9900] flex items-center justify-center border border-[#ff9900]/40 mb-1">
                 <span className="font-mono text-xs text-white">pfp</span>
              </div>
              <span className="font-mono text-[10px] text-gray-400 truncate max-w-[60px]">{LATEST_STORY.handle}</span>
            </div>
            {/* Main tweet text, styled like gallery subtitle */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <span className="font-mono text-sm opacity-70" style={{ color: isDark ? '#FFFFFF' : '#000000' }}>{LATEST_STORY.text}</span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-500 text-xs whitespace-nowrap">{LATEST_STORY.date}</span>
                <a href={LATEST_STORY.tweetUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-xs tracking-wider hover:text-[#ff9900] transition-colors border border-[#ff9900]/40 rounded px-3 py-1 font-mono bg-transparent whitespace-nowrap">View on Twitter</a>
              </div>
            </div>
            {/* Amount donated, bold at right */}
            <div className="flex flex-col items-end min-w-[110px]">
              <span className="ml-2 bg-[#ff9900] text-white text-sm sm:text-base font-mono font-bold rounded-full px-4 py-1 whitespace-nowrap">+${LATEST_STORY.amount.toLocaleString()} DONATED</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 