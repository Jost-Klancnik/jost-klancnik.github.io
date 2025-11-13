"use client"

import * as React from "react"
import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {
    ExternalLink,
    Github,
    Mail,
    Download,
    Briefcase,
    GraduationCap,
    MapPin,
    Calendar,
    Star,
    GitBranch,
    Users,
    BookOpen,
    CircleDollarSign,
    LinkIcon,
    LucideCircleDollarSign, BadgeDollarSign
} from "lucide-react"
import Link from "next/link";
import {BiDollar} from "react-icons/bi";
import {AiOutlineDollar} from "react-icons/ai";

export const AboutContent = () => (
    <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
                <div className="sticky top-8 space-y-6">
                    <div className="relative inline-block">
                        <div
                            className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-7xl font-bold border-4 border-primary/20 mx-auto">
                            JK
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold">Jošt Klančnik</h3>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4"/>
                                <span>Slovenia</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Github className="h-4 w-4"/>
                                <a href="https://github.com/Jost-Klancnik"
                                   className="hover:text-primary transition-colors">
                                    github.com/Jost-Klancnik
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <CircleDollarSign className="h-4 w-4"/>
                                <a href="https://www.fiverr.com/s/qDp4wgZ"
                                   className="hover:text-primary transition-colors">
                                    Fiverr
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4"/>
                                <span>Joined January 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:w-2/3 space-y-6">
                <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5"/>
                        About Me
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        I’m a full-stack developer with over five years of experience building and experimenting with
                        web technologies. Most of my work focuses on full-stack web development using the ASP.NET
                        framework and modern JavaScript tools like React and Next.js.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Over the years, I’ve developed a wide range of projects—from personal experiments to
                        production-level applications—while constantly improving my skills and exploring new
                        technologies. I’m deeply involved in open-source development and enjoy creating solutions that
                        others can build on and extend. I’m also a dedicated Linux enthusiast, always looking for
                        efficient, flexible, and transparent ways to build software.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        I like to approach every project with curiosity and a drive to learn, aiming to create clean,
                        maintainable, and scalable solutions that actually make a difference.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Top Skills</h4>
                    <div className="flex flex-wrap gap-2">
                        <Badge>JavaScript</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>Tailwind CSS</Badge>
                        <Badge>Git</Badge>
                        <Badge>Docker</Badge>
                        <Badge>ASP.NET</Badge>
                        <Badge>C#</Badge>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Pinned Projects</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {
                                name: "sudoku-solver",
                                desc: "Back-tracking based sudoku solver",
                                lang: "JavaScript",
                                stars: 2,
                            },
                            {
                                name: "project-presenting-website",
                                desc: "Next.js website for showcasing a project",
                                lang: "JavaScript",
                                stars: 1,
                            }
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: i * 0.1}}
                                className="p-4 border-2 border-border rounded-xl hover:border-primary/50 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h5 className="font-semibold flex items-center gap-2">
                                        <GitBranch className="h-4 w-4"/>
                                        {project.name}
                                    </h5>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Star className="h-3 w-3"/>
                                        {project.stars}
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                                <Badge variant="secondary" className="text-xs">
                                    {project.lang}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const ProjectsContent = () => (
    <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
            {[
                {
                    emoji: "🖥️",
                    title: "Projects tracker",
                    desc: "A simple, yet useful projects tracking application to help you manage and organize your projects effectively.",
                    gradient: "from-blue-500/20 to-cyan-500/20",
                    tags: ["JavaScript", "MySQL"],
                    demo: "",
                    code: "",
                },
                {
                    emoji: "📱",
                    title: "Task Management App",
                    desc: "A collaborative task management tool with real-time updates, team workspaces, and productivity analytics.",
                    gradient: "from-purple-500/20 to-pink-500/20",
                    tags: ["Next.js", "WebSockets"],
                    demo: "",
                    code: "",
                },
                {
                    emoji: "🎨",
                    title: "Design System",
                    desc: "An experimental design system library featuring a collection of reusable UI components built with React and TypeScript.",
                    gradient: "from-orange-500/20 to-red-500/20",
                    tags: ["React", "TypeScript"],
                    demo: "",
                    code: "",
                },
                {
                    emoji: "📊",
                    title: "3D renderer from scratch",
                    desc: "Badly made 3D renderer built for React learning process.",
                    gradient: "from-green-500/20 to-emerald-500/20",
                    tags: ["React"],
                    demo: "",
                    code: "https://github.com/Jost-Klancnik/3D-React-Cube-Renderer",
                },
            ].map((project, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: i * 0.1}}
                    className="border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl group"
                >
                    <div
                        className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
                    >
                        <span className="text-6xl">{project.emoji}</span>
                    </div>
                    <div className="p-6 space-y-4">
                        <h4 className="text-xl font-semibold">{project.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, j) => (
                                <Badge key={j} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-3 pt-2">
                            {(project.demo !== "") ? (
                                <Button variant="outline" size="sm" className="gap-2" asChild>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4"/>
                                        Live Demo
                                    </a>
                                </Button>
                            ) : null}

                            {(project.code !== "") ? (
                                <Button variant="outline" size="sm" className="gap-2" asChild>
                                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4"/>
                                        Code
                                    </a>
                                </Button>
                            ) : null}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
)

export const SkillsContent = () => {
    const skills = [
        {name: "Frontend Development", level: 95, color: "bg-blue-500"},
        {name: "Backend Development", level: 90, color: "bg-green-500"},
        {name: "UI/UX Design", level: 85, color: "bg-purple-500"},
        {name: "Database Management", level: 88, color: "bg-orange-500"},
    ]

    return (
        <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h4 className="text-2xl font-bold">Skill Proficiency</h4>
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, x: -20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: i * 0.1}}
                            className="space-y-2"
                        >
                            <div className="flex justify-between text-sm">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                    initial={{width: 0}}
                                    animate={{width: `${skill.level}%`}}
                                    transition={{duration: 1, delay: i * 0.1, ease: "easeOut"}}
                                    className={`h-full ${skill.color}`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="space-y-6">
                    <h4 className="text-2xl font-bold">Technologies & Tools</h4>
                    <div className="space-y-4">
                        {[
                            {
                                category: "Languages",
                                items: ["JavaScript", "TypeScript", "Python", "C#", "SQL", "Java", "C++"],
                            },
                            {
                                category: "Frontend",
                                items: ["React", "Next.js", "Tailwind", "Framer Motion"],
                            },
                            {
                                category: "Backend",
                                items: ["Node.js", "Express", "MySQL", "MongoDB"],
                            },
                        ].map((group, i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: i * 0.15}}
                            >
                                <h5 className="text-sm font-semibold mb-2 text-muted-foreground">
                                    {group.category}
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item, j) => (
                                        <Badge key={j}>{item}</Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ExperienceContent = () => (
    <div className="space-y-8">
        <div className="max-w-3xl mx-auto space-y-8">
            {[
                {
                    icon: <Briefcase className="h-6 w-6"/>,
                    role: "Full Stack Developer",
                    company: "Self Employed",
                    period: "2021 - Present",
                    location: "Slovenia",
                    desc: "Full stack developer specializing in building web applications using modern JavaScript frameworks like React and Next.js. Experienced in both frontend and backend development, with a focus on creating scalable and maintainable solutions.",
                    achievements: [
                        "Led team of 3 developers",
                    ],
                },
                {
                    icon: <Briefcase className="h-6 w-6"/>,
                    role: "Beginner Full Stack Developer",
                    company: "Self Teaching",
                    period: "2018 - 2021",
                    location: "Remote",
                    desc: "Learning full stack development through self-study and practical projects. Gained hands-on experience with various web technologies and frameworks, focusing on building a strong foundation in both frontend and backend development.",
                    achievements: [
                        "Delivered 20+ client projects",
                        "Learned from multiple senior developers",
                    ],
                },
                {
                    icon: <GraduationCap className="h-6 w-6"/>,
                    role: "Computer Science University",
                    company: "",
                    period: "2015 - 2019",
                    location: "Celje, Slovenia",
                    desc: "Graduated with honors. Specialized in web technologies and software engineering. Active member of the Computer Science Society.",
                    achievements: [
                        "Graduated in top of the class",
                        "Won multiple school awards",
                        "Helped multiple student all the time",
                    ],
                },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: i * 0.2}}
                    className="relative pl-12 pb-8 border-l-4 border-primary/30 last:pb-0"
                >
                    <div
                        className="absolute left-0 top-0 -translate-x-[18px] w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        {item.icon}
                    </div>

                    <div className="space-y-3">
                        <div>
                            <h4 className="text-xl font-bold">{item.role}</h4>
                            <p className="text-muted-foreground">{item.company}</p>
                            <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3"/>
                    {item.period}
                </span>
                                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3"/>
                                    {item.location}
                </span>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>

                        <div className="space-y-2">
                            {item.achievements.map((achievement, j) => (
                                <div key={j} className="flex items-start gap-2 text-sm">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
)

export const CaseStudyContent = () => (
    <div className="space-y-8">
        <div
            className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
            <span className="text-8xl">💼</span>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h3 className="text-3xl font-bold mb-4">Financial Platform Transformation</h3>
                <p className="text-lg text-muted-foreground">
                    A comprehensive redesign and rebuild of a legacy financial management system serving over
                    10,000 users.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                    <div className="text-4xl font-bold text-primary mb-2">70%</div>
                    <div className="text-sm text-muted-foreground">Faster Load Times</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-2xl">
                    <div className="text-4xl font-bold text-primary mb-2">50%</div>
                    <div className="text-sm text-muted-foreground">Reduced Bugs</div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h4 className="text-xl font-semibold mb-3">Challenge</h4>
                    <p className="text-muted-foreground leading-relaxed">
                        The existing system suffered from poor performance, outdated UI, and maintenance
                        difficulties. Users reported frustration with slow load times (averaging 8+ seconds) and
                        a confusing interface that required extensive training. The monolithic architecture made
                        it difficult to add new features or scale the application.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-3">Solution</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        Implemented a phased migration strategy using Next.js for the frontend and Node.js
                        microservices for the backend. Introduced real-time data synchronization using WebSockets
                        and redesigned the UI based on extensive user research and usability testing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge>Next.js</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>Node.js</Badge>
                        <Badge>PostgreSQL</Badge>
                        <Badge>Redis</Badge>
                        <Badge>Docker</Badge>
                        <Badge>AWS</Badge>
                        <Badge>WebSockets</Badge>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-semibold mb-3">Process</h4>
                    <div className="space-y-3">
                        {[
                            "User research and pain point analysis",
                            "Incremental migration strategy planning",
                            "New architecture design with microservices",
                            "UI/UX redesign with accessibility focus",
                            "Phased rollout with A/B testing",
                            "Performance optimization and monitoring",
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                                    {i + 1}
                                </div>
                                <p className="pt-1">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const TestimonialsContent = () => (
    <div className="space-y-6">
        <h3 className="text-3xl font-bold text-center mb-8">What People Say</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
                {
                    name: "Sarah Mitchell",
                    role: "CEO, StartupCo",
                    avatar: "SM",
                    quote:
                        "Working with this developer was an absolute pleasure. They delivered a high-quality product ahead of schedule and were incredibly responsive to feedback throughout the project. The attention to detail and technical expertise really shines through in the final product.",
                    rating: 5,
                },
                {
                    name: "James Rodriguez",
                    role: "CTO, TechVentures",
                    avatar: "JR",
                    quote:
                        "Their technical expertise and problem-solving skills are outstanding. They transformed our complex requirements into an elegant, user-friendly solution that exceeded our expectations. Communication was excellent throughout the entire process.",
                    rating: 5,
                },
                {
                    name: "Emily Lee",
                    role: "Product Manager, InnovateLabs",
                    avatar: "EL",
                    quote:
                        "A true professional who takes pride in their work. The attention to detail and commitment to quality is evident in every aspect of the project. They went above and beyond to ensure everything was perfect.",
                    rating: 5,
                },
                {
                    name: "Michael Chen",
                    role: "Founder, AppCo",
                    avatar: "MC",
                    quote:
                        "Exceptional developer with great communication skills. They understood our vision and brought it to life with clean, maintainable code. Would definitely work together again on future projects.",
                    rating: 5,
                },
            ].map((testimonial, i) => (
                <motion.div
                    key={i}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: i * 0.1}}
                    className="border-2 border-border rounded-2xl p-6 space-y-4 bg-card hover:border-primary/50 transition-colors"
                >
                    <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                            <Star key={j} className="h-5 w-5 fill-primary text-primary"/>
                        ))}
                    </div>
                    <p className="italic text-muted-foreground leading-relaxed">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div
                            className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold">
                            {testimonial.avatar}
                        </div>
                        <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
)

export const ContactContent = () => (
    <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground leading-relaxed">
                Interested in working together? Feel free to reach out through the form below or send me an
                email directly.
            </p>
        </div>

        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required/>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required/>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project inquiry" required/>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                />
            </div>

            <Button type="submit" className="w-full gap-2 text-lg py-6">
                <Mail className="h-5 w-5"/>
                Send Message
            </Button>
        </form>

        <div className="pt-8 border-t border-border text-center space-y-4">
            <p className="text-sm text-muted-foreground">Or reach me directly at</p>
            <a
                href="mailto:hello@example.com"
                className="text-xl font-semibold text-primary hover:underline"
            >
                hello@example.com
            </a>
        </div>
    </div>
)

export const LinksContent = () => (
    <div className="max-w-2xl mx-auto space-y-8 text-center">
        <div className="flex justify-center">
            <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
            >
                <LinkIcon className="h-24 w-24 text-primary"/>
            </motion.div>
        </div>

        <div className="space-y-6">
            <h3 className="text-3xl font-bold">My Links</h3>
            <p className="text-muted-foreground leading-relaxed">All my social and professional links in one place.</p>
            <div className="flex flex-wrap gap-4 justify-center">
                {[
                    {
                        href: "https://github.com/Jost-Klancnik",
                        label: "GitHub",
                        icon: <Github className="h-8 w-8"/>},
                    {
                        href: "https://www.fiverr.com/jostklancnik/build-a-modern-fast-and-responsive-website-or-landing-page",
                        label: "Fiverr",
                        icon: <CircleDollarSign className="h-8 w-8"/>
                    },
                    {
                        href: "https://www.upwork.com/freelancers/~0125a4b65ba4ef635e?mp_source=share",
                        label: "UpWork",
                        icon: <BadgeDollarSign className="h-8 w-8"/>},
                ].map((link, i) => (
                    <div className="relative group">
                        <Badge key={i} variant="default" className="w-12 h-12 rounded-full flex items-center justify-center">
                            <Link href={link.href}>
                                {link.icon}
                            </Link>
                        </Badge>
                        <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-5px] transition-all bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md shadow-md">
                            {link.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
