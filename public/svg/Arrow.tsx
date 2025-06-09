import React from 'react'

export default function Arrow({ fill }) {
    return (
        <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 37.4 27.88"
        >
            <g id="Layer_1-2" data-name="Layer 1">
                <path
                    fill={fill ? fill : '#000000'}
                    d="M.86,6.88L15.25,26.15c1.72,2.31,5.18,2.31,6.9,0L36.54,6.88c2.12-2.84,.09-6.88-3.45-6.88H4.31C.77,0-1.26,4.04,.86,6.88Z"
                />
            </g>
        </svg>
    )
}
