import Link from 'next/link';
import { theme } from "@/constants/theme";

export default function Navbar() {
  return (
    <nav 
      style={{ 
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: theme.shadows.sm
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 
            className="text-xl font-bold"
            style={{ 
              background: theme.backgrounds.gradients.primary,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Instagram Bulk Downloader
          </h1>
          <div className="flex gap-4">
            <Link 
              href="/" 
              className="hover:scale-105 transition-all"
              style={{ 
                color: theme.colors.primary[600],
                transition: `all ${theme.transitions.normal} ${theme.transitions.timing}`
              }}
            >
              Home
            </Link>
            <Link 
              href="/download" 
              className="hover:scale-105 transition-all"
              style={{ 
                color: theme.colors.primary[600],
                transition: `all ${theme.transitions.normal} ${theme.transitions.timing}`
              }}
            >
              Download
            </Link>
            <Link 
              href="/history" 
              className="hover:scale-105 transition-all"
              style={{ 
                color: theme.colors.primary[600],
                transition: `all ${theme.transitions.normal} ${theme.transitions.timing}`
              }}
            >
              History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
