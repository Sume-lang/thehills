'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const motionDropdown = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
        },
    },
    closed: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.2,
        },
    },
}

export default function Dropdownmotion({
    children,
    className,
    style,
}: {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}) {
  return (
    <AnimatePresence>
        <motion.div
            layout
            initial="closed"
            animate="open"
            exit="closed"
            variants={motionDropdown}
            className={`bg-gray-100 rounded-md shadow-md ${className}`}
            style={{
                minWidth: '200px',
                ...style,
            }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
  )
}

