import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
            
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center gap-6 md:gap-8">

                {/* Badge */}
                <div className="animate-in fade-in duration-1000 delay-100">
                    <span className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-black/30 backdrop-blur-sm text-primary/90 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
                        Modern Real Estate Brokerage in BC
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="animate-in fade-in duration-1000 delay-300 text-4xl md:text-6xl lg:text-7xl font-sans font-light text-white tracking-wide leading-[1.1] max-w-5xl shadow-black drop-shadow-lg">
                    Where Smart Moves Begin.
                </h1>

                {/* Subhead */}
                <p className="animate-in fade-in duration-1000 delay-500 text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed drop-shadow-md">
                    A modern real estate brokerage delivering strategy, results, and exceptional client service across British Columbia.
                </p>

                {/* CTA Buttons */}
                <div className="animate-in fade-in scale-in-95 duration-1000 delay-500 flex flex-col md:flex-row gap-4 mt-8">
                    <Button className="bg-primary text-black hover:bg-white hover:text-black rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                        Find Your Home
                    </Button>
                    <Button className="border border-primary/50 text-white bg-primary/10 backdrop-blur-sm hover:bg-primary hover:text-black hover:border-primary rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
                        Join Our Brokerage
                    </Button>
                    <Button className="border border-white/30 text-white bg-black/30 backdrop-blur-sm hover:bg-white hover:text-black rounded-xl px-8 py-6 tracking-widest text-xs uppercase font-medium transition-all duration-300">
                        Book a Strategy Call
                    </Button>
                </div>

                {/* Trust Line */}
                <p className="animate-in fade-in duration-1000 delay-700 text-sm text-white/60 font-light mt-4 tracking-wide">
                    Local expertise. Data-driven insights. Real results.
                </p>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 animate-bounce">
                <span className="text-[10px] text-white uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    )
}
