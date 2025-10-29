"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export interface DynamicCardData {
  id: string
  title: string
  icon: React.ReactNode
  size: "small" | "medium" | "large" | "wide"
  content: React.ReactNode
  preview: React.ReactNode
}

interface DynamicPortfolioCardProps {
  data: DynamicCardData
  index: number
  isExpanded: boolean
  onExpand: () => void
  onCollapse: () => void
  shouldFlyAway: boolean
}

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-1 row-span-2",
  large: "col-span-1 md:col-span-2 row-span-2",
  wide: "col-span-1 md:col-span-4 row-span-1",
}

const flyAwayVariants = {
  initial: { opacity: 1, scale: 1, y: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  flyAway: (index: number) => {
    const angle = (index % 8) * 45
    const distance = 1200
    const x = Math.cos((angle * Math.PI) / 180) * distance
    const y = Math.sin((angle * Math.PI) / 180) * distance

    return {
      x,
      y,
      opacity: 0,
      scale: 0.3,
      rotate: (index % 2 === 0 ? 1 : -1) * 45,
      transition: {
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
        delay: index * 0.03,
      },
    }
  },
}

const expandVariants = {
  collapsed: {
    position: "relative" as const,
    zIndex: 1,
  },
  expanded: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    transition: {
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1],
    },
  },
}

export function DynamicPortfolioCard({
  data,
  index,
  isExpanded,
  onExpand,
  onCollapse,
  shouldFlyAway,
}: DynamicPortfolioCardProps) {
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (isExpanded) {
      closeButtonRef.current?.focus()

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onCollapse()
        }
      }

      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [isExpanded, onCollapse])

  if (isExpanded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/98 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`card-title-${data.id}`}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-card border-2 border-border rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b-2 border-border bg-card/95 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.2,
                  duration: shouldReduceMotion ? 0.01 : 0.4,
                  ease: "easeOut",
                }}
                className="text-primary"
              >
                {data.icon}
              </motion.div>
              <motion.h2
                id={`card-title-${data.id}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.25,
                  duration: shouldReduceMotion ? 0.01 : 0.4,
                }}
                className="text-3xl font-bold"
              >
                {data.title}
              </motion.h2>
            </div>
            <Button
              ref={closeButtonRef}
              variant="ghost"
              size="icon"
              onClick={onCollapse}
              className="rounded-full hover:bg-secondary transition-all duration-200 hover:rotate-90"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 0.3,
              duration: shouldReduceMotion ? 0.01 : 0.5,
            }}
            className="overflow-y-auto max-h-[calc(90vh-100px)] p-8"
          >
            {data.content}
          </motion.div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.article
      custom={index}
      initial="initial"
      animate={shouldFlyAway ? "flyAway" : "animate"}
      variants={shouldReduceMotion ? {} : flyAwayVariants}
      className={`${sizeClasses[data.size]} group relative bg-card border-2 border-border rounded-2xl overflow-hidden cursor-pointer transition-colors hover:border-primary/50`}
      onClick={onExpand}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`Expand ${data.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onExpand()
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {data.preview}

      <motion.div
        className="absolute top-4 right-4 text-primary opacity-60 group-hover:opacity-100"
        whileHover={{ rotate: 90, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        {data.icon}
      </motion.div>
    </motion.article>
  )
}
