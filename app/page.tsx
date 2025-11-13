"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DynamicPortfolioCard, DynamicCardData } from "@/components/dynamic-portfolio-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  User,
  Briefcase,
  Code,
  GraduationCap,
  FileText, LinkIcon,
} from "lucide-react"
import {
  AboutPreview,
  ProjectsPreview,
  SkillsPreview,
  ExperiencePreview,
  LinksPreview,
} from "@/components/dynamic-card-previews"
import {
  AboutContent,
  ProjectsContent,
  SkillsContent,
  ExperienceContent,
  LinksContent,
} from "@/components/dynamic-card-content"

const portfolioData: DynamicCardData[] = [
  {
    id: "about",
    title: "About",
    icon: <User className="h-6 w-6" />,
    size: "large",
    preview: <AboutPreview />,
    content: <AboutContent />,
  },
  {
    id: "links",
    title: "Links",
    icon: <LinkIcon className="h-6 w-6" />,
    size: "small",
    preview: <LinksPreview />,
    content: <LinksContent />,
  },
  {
    id: "skills",
    title: "Skills",
    icon: <Code className="h-6 w-6" />,
    size: "small",
    preview: <SkillsPreview />,
    content: <SkillsContent />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: <Briefcase className="h-6 w-6" />,
    size: "small",
    preview: <ProjectsPreview />,
    content: <ProjectsContent />,
  },
  {
    id: "experience",
    title: "Experience",
    icon: <GraduationCap className="h-6 w-6" />,
    size: "small",
    preview: <ExperiencePreview />,
    content: <ExperienceContent />,
  },
]

export default function Home() {
  const [expandedCard, setExpandedCard] = React.useState<string | null>(null)
  const [isPageLoaded, setIsPageLoaded] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsPageLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleExpand = (id: string) => {
    setExpandedCard(id)
  }

  const handleCollapse = () => {
    setExpandedCard(null)
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <ThemeToggle />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isPageLoaded ? 1 : 0, y: isPageLoaded ? 0 : -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-6 z-40"
      >
        <motion.h1
          className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Jošt Klančnik
        </motion.h1>
      </motion.div>

      <div className="container mx-auto px-4 py-24 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
              {portfolioData.map((card, index) => (
                <DynamicPortfolioCard
                  key={card.id}
                  data={card}
                  index={index}
                  isExpanded={expandedCard === card.id}
                  onExpand={() => handleExpand(card.id)}
                  onCollapse={handleCollapse}
                  shouldFlyAway={expandedCard !== null && expandedCard !== card.id}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {expandedCard && (
          <div className="fixed inset-0 z-50">
            {portfolioData
              .filter((card) => card.id === expandedCard)
              .map((card, index) => (
                <DynamicPortfolioCard
                  key={card.id}
                  data={card}
                  index={index}
                  isExpanded={true}
                  onExpand={() => {}}
                  onCollapse={handleCollapse}
                  shouldFlyAway={false}
                />
              ))}
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
