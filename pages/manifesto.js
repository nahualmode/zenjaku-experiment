import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function Manifesto() {
    const { isDark, glitchActive, mounted } = useDarkMode()

    const manifestoSections = [
        {
            title: "THE EXPERIMENT",
            content: "A balance of purpose and impact. As half of the royalties force burns supply, the other is donated to charities that empower people. Witness equilibrium in action."
        },
        {
            title: "THE SOULS",
            content: "4,349 digital beings, each a unique reflection of our collective consciousness. Not just PFPs – vessels of chaos and order."
        },
        {
            title: "THE COLLECTORS",
            content: "You are not just holders. You are witnesses to the experiment. The balance between light and dark rests in your hands."
        },
        {
            title: "THE PURPOSE",
            content: "In a world of extremes, we seek equilibrium. Through chaos and order, darkness and light, we find the delicate balance that defines our existence."
        }
    ]

    if (!mounted) {
        return null
    }

    return (
        <>
            <Head>
                <title>Manifesto | The Zenjaku Experiment</title>
                <meta name="description" content="The guiding principles of The Zenjaku Experiment" />
            </Head>

            <div className="relative z-10 min-h-screen flex flex-col justify-center">
                <div className="max-w-6xl mx-auto p-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Manifesto */}
                        <div className="space-y-16 order-2 lg:order-1">
                            {manifestoSections.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="space-y-4"
                                >
                                    <motion.h2 
                                        className="text-2xl font-black tracking-tighter"
                                        animate={{ x: glitchActive ? -3 : 0 }}
                                        style={{ 
                                            color: isDark ? '#FFFFFF' : '#000000',
                                            textShadow: glitchActive ? 
                                                (isDark ? '-3px -3px #ff0000, 3px 3px #00ff00' : '3px 3px #ff0000, -3px -3px #00ff00')
                                                : 'none'
                                        }}
                                    >
                                        {section.title}
                                    </motion.h2>
                                    <motion.p 
                                        className="font-mono text-sm tracking-wide opacity-70"
                                        animate={{ opacity: glitchActive ? 0.9 : 0.7 }}
                                        style={{ color: isDark ? '#FFFFFF' : '#000000' }}
                                    >
                                        {section.content}
                                    </motion.p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Column - Artwork */}
                        <div className="relative aspect-square overflow-hidden order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.8 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div 
                                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000"
                                    style={{
                                        backgroundImage: `url(./images/illustrations/illustration0.png)`,
                                        filter: `contrast(120%) brightness(1.1) ${isDark ? 'hue-rotate(180deg)' : ''}`,
                                        opacity: isDark ? 0.9 : 0.85,
                                        mixBlendMode: isDark ? 'screen' : 'multiply'
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
