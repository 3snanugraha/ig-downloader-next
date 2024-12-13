import { theme } from "@/constants/theme";
import DownloadSection from "@/components/DownloadSection";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col gap-8"
      style={{ 
        fontFamily: theme.typography.fonts.sans,
        backgroundImage: theme.backgrounds.patterns.dots,
        backgroundSize: theme.backgrounds.sizes.md
      }}
    >
      <DownloadSection />

      {/* Features Section */}
      <section 
        className="py-16 rounded-2xl mx-4"        
        style={{ 
          backgroundImage: theme.backgrounds.mesh.purple,
          boxShadow: theme.shadows.xl
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Supported Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg hover:scale-105 transition-transform"
                style={{ 
                  backdropFilter: 'blur(16px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: theme.shadows.lg,
                  color: 'white'
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: theme.backgrounds.gradients.sunset }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <FaInstagram size={24} color="white" />,
    title: "Posts & Reels",
    description: "Download single or multiple posts and reels"
  },
  {
    icon: <FaInstagram size={24} color="white" />,
    title: "Stories",
    description: "Save stories before they disappear (public accounts)"
  },
  {
    icon: <FaInstagram size={24} color="white" />,
    title: "IGTV Videos",
    description: "Download long-form IGTV videos in high quality"
  }
];
