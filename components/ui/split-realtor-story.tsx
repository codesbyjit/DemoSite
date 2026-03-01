"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2 } from "lucide-react"
import Image from "next/image"

const texts = [
    "Woodhouse Realty is a forward-thinking real estate brokerage committed to empowering clients and agents alike.",
    "We combine local market expertise with modern technology and strategic marketing to deliver seamless buying and selling experiences.",
    "Whether you're purchasing your first home, upgrading your investment portfolio, or selling a luxury property — our team is built to guide you with confidence."
]

export function SplitRealtorStory() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section id="about" className="w-full py-20 bg-background text-foreground overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* Left: Animated Text Content */}
                <div className="flex flex-col items-start gap-6 z-10">
                    <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/5 text-primary text-[10px] uppercase tracking-[0.2em] font-medium">
                        About Us
                    </div>

                    <div className="h-[180px] md:h-[160px] relative w-full">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-white/90"
                            >
                                {texts[index]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex gap-2 mt-2">
                        {texts.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 mt-6 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-primary' : 'w-2 bg-white/20'}`}
                            />
                        ))}
                    </div>

                    <Button
                        className="hidden md:flex border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300"
                    >
                        Learn More About Us
                        <Building2 className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                {/* Right: Image */}
                <div className="relative w-full flex flex-col items-center lg:items-end gap-8">
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5 relative bg-zinc-800">
                        <Image
                            src="/listing-5.jpeg"
                            alt="Woodhouse Realty Team"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white/80 text-sm font-light">
                                Trusted by thousands of clients across British Columbia
                            </p>
                        </div>
                    </div>

                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg tracking-wide font-medium shadow-lg hover:shadow-primary/20 transition-all duration-300 w-full md:w-auto"
                    >
                        Get Free Market Evaluation
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>

            </div>
        </section>
    )
}
