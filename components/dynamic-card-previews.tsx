/*"use client"*/

import * as React from "react"
import {motion} from "framer-motion"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {GitBranch, Star, Users, MapPin, Link as LinkIcon, Calendar, FileText} from "lucide-react"
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiMysql,
    SiTailwindcss,
    /*SiCsharp,*/
    SiDotnet,
    SiPython,
} from "react-icons/si";

export const AboutPreview = () => (
    <div className="h-full p-6 flex flex-col">
        <div className="flex items-start gap-4 mb-4">
            <div className="relative">
                <div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-3xl font-bold border-2 border-primary/20">
                    JK
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-card"/>
            </div>
            <div className="flex flex-1 flex-col justify-center h-full">
                <h3 className="text-2xl font-bold mb-1">Jošt Klančnik</h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3"/>
            Slovenia
          </span>
                    <span className="flex items-center gap-1">
            <LinkIcon className="h-3 w-3"/>
            github.com/Jost-Klancnik
          </span>
                </div>
            </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-5">
            I’m a full-stack developer with 5+ years of experience working with ASP.NET, React, and Next.js. I focus on
            building clean, scalable web applications and enjoy exploring new technologies. I’m active in open source
            and passionate about creating solutions others can build on. As a dedicated Linux user, I’m always looking
            for better, more efficient ways to develop software.
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
            <Badge variant="icon" icon={<SiReact size={46} />} label="React" />
            <Badge variant="icon" icon={<SiTypescript size={46} />} label="TypeScript" />
            <Badge variant="icon" icon={<SiJavascript size={46} />} label="JavaScript" />
            <Badge variant="icon" icon={<SiNodedotjs size={46} />} label="Node.js" />
            <Badge variant="icon" icon={<SiMysql size={41} />} label="MySQL" />
            <Badge variant="icon" icon={<SiTailwindcss size={46} />} label="Tailwind CSS" />
            {/*<Badge variant="icon" icon={<SiCsharp size={46} />} label="C#" />*/}
            <Badge variant="icon" icon={<SiDotnet size={46} />} label="ASP.NET" />
            <Badge variant="icon" icon={<SiPython size={46} />} label="Python" />
        </div>
    </div>
)

export const ProjectsPreview = () => (
    <div className="h-full p-6">
        <h3 className="text-xl font-bold mb-4">Projects</h3>
        <div className="space-y-3">
            <div
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-2xl shrink-0">
                    🖥️
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">Projects tracker</h4>
                    <p className="text-xs text-muted-foreground truncate">JavaScript • MySQL</p>
                </div>
            </div>
            <div
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-2xl shrink-0">
                    📱
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">Task Manager</h4>
                    <p className="text-xs text-muted-foreground truncate">Next.js</p>
                </div>
            </div>
        </div>
        <div className="mt-4 text-center">
            <span className="text-xs text-primary font-medium">View all projects →</span>
        </div>
    </div>
)

export const SkillsPreview = () => (
    <div className="h-full p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-4">Skills</h3>
        <div className="space-y-3 flex-1">
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Frontend</span>
                    <span className="text-muted-foreground">95%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                        initial={{width: 0}}
                        whileInView={{width: "95%"}}
                        transition={{duration: 1, ease: "easeOut"}}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Backend</span>
                    <span className="text-muted-foreground">90%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                        initial={{width: 0}}
                        whileInView={{width: "90%"}}
                        transition={{duration: 1, delay: 0.1, ease: "easeOut"}}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">UI/UX</span>
                    <span className="text-muted-foreground">85%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                        initial={{width: 0}}
                        whileInView={{width: "85%"}}
                        transition={{duration: 1, delay: 0.2, ease: "easeOut"}}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
            <Badge>JS</Badge>
            <Badge>TS</Badge>
            <Badge>React</Badge>
            <Badge>Node</Badge>
            <Badge>+12</Badge>
        </div>
    </div>
)

export const ExperiencePreview = () => (
    <div className="h-full p-6">
        <h3 className="text-xl font-bold mb-4">Experience</h3>
        <div className="space-y-4">
            <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 -translate-x-[5px] w-2 h-2 rounded-full bg-primary"/>
                <div className="text-xs text-muted-foreground mb-1">2021 - Present</div>
                <h4 className="font-semibold text-sm">Full Stack Developer</h4>
                <p className="text-xs text-muted-foreground">Self employed</p>
            </div>
            <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute left-0 top-0 -translate-x-[5px] w-2 h-2 rounded-full bg-primary/50"/>
                <div className="text-xs text-muted-foreground mb-1">2018 - 2021</div>
                <h4 className="font-semibold text-sm">Beginner Full Stack Developer</h4>
                <p className="text-xs text-muted-foreground">Self Teaching</p>
            </div>
        </div>
        <div className="mt-4 text-center">
            <span className="text-xs text-primary font-medium">View full timeline →</span>
        </div>
    </div>
)

export const LinksPreview = () => (
    <div className="h-full p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-4">My Links</h3>
        <div className="flex flex-col items-center justify-center h-full">
            <Button variant="link" size="icon" className="mb-4">
                <LinkIcon className="h-24 w-24"/>
            </Button>
            <br/>
            <p>Get all my links here</p>
        </div>
    </div>
)
