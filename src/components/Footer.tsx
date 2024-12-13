import { theme } from "@/constants/theme";
import { FaInstagram, FaGithub, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer 
      style={{ 
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: theme.shadows.sm
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div 
            className="text-lg font-semibold"
            style={{ color: theme.colors.primary[600] }}
          >
            Instagram Bulk Downloader © {new Date().getFullYear()}
          </div>
          
          <div className="flex items-center gap-2">
            <span 
              className="text-sm"
              style={{ color: theme.colors.neutral[600] }}
            >
              Made with
            </span>
            <FaHeart 
              className="animate-pulse"
              style={{ color: theme.colors.secondary[500] }} 
            />
          </div>

          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ color: theme.colors.primary[500] }}
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ color: theme.colors.primary[500] }}
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
