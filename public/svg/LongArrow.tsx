import React from 'react'

export default function LongArrow({ fill }) {
    return (
        <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12.86 9.06"
        >
            <g id="Layer_1-2" data-name="Layer 1">
                <g>
                    <line
                        style={{
                            fill: 'none',
                            stroke: fill,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '2.42px',
                        }}
                        x1="11.65"
                        y1="4.53"
                        x2="1.21"
                        y2="4.53"
                    />
                    <polyline
                        style={{
                            fill: 'none',
                            stroke: fill,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            strokeWidth: '2.42px',
                        }}
                        points="4.08 7.84 1.21 4.53 4.08 1.21"
                    />
                </g>
            </g>
        </svg>
    )
}
