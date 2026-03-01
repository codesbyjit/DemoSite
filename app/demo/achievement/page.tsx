import Achievement from "@/components/ui/achievement";
import { Navbar } from "@/components/Navbar";

export default function AchievementDemo() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <Navbar />
            <div className="pt-32"> {/* Spacing for fixed navbar */}
                <div className="container mx-auto px-6 mb-12">
                    <h1 className="text-2xl text-white/50 font-light">Component Demo: Achievement Section</h1>
                </div>
                <Achievement />
            </div>
        </main>
    );
}
