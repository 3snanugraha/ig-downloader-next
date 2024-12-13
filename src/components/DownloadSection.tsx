"use client"

import { theme } from "@/constants/theme";
import { FaDownload, FaHistory, FaLink } from "react-icons/fa";
import { useState } from "react";

export default function DownloadSection() {
  const [instagramUrl, setInstagramUrl] = useState("");

  const handleDownload = () => {
    console.log("Downloading from:", instagramUrl);
  };

  return (
    <section 
      className="container mx-auto px-4 py-16 text-center rounded-2xl mt-8"
      style={{ 
        background: theme.backgrounds.gradients.primary,
        boxShadow: theme.shadows.lg
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
        Instagram Bulk Downloader
      </h1>
      <p className="text-xl mb-8 text-white/90">
        Paste your Instagram links below
      </p>

      {/* Input Area */}
      <div className="max-w-2xl mx-auto mb-8">
        <div 
          className="flex gap-4 p-4 rounded-xl mb-4"
          style={{ 
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <FaLink className="text-white/60 text-xl mt-3" />
          <textarea
            value={instagramUrl}
            onChange={(e) => setInstagramUrl(e.target.value)}
            placeholder="Paste Instagram URLs here (one per line)"
            className="w-full bg-transparent text-white placeholder-white/60 outline-none resize-none"
            rows={4}
            style={{
              fontFamily: theme.typography.fonts.mono
            }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 rounded-full hover:scale-105"
            style={{
              backgroundColor: theme.colors.secondary[400],
              color: 'white',
              transition: `all ${theme.transitions.normal} ${theme.transitions.timing}`
            }}
          >
            <FaDownload /> Start Download
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-full hover:scale-105"
            style={{
              backgroundColor: theme.colors.primary[900],
              color: 'white',
              transition: `all ${theme.transitions.normal} ${theme.transitions.timing}`
            }}
          >
            <FaHistory /> View History
          </button>
        </div>
      </div>

      {/* Download Progress */}
      <div 
        className="max-w-2xl mx-auto p-4 rounded-xl"
        style={{ 
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <h3 className="text-white font-semibold mb-2">Download Queue</h3>
        <div className="text-white/80">
          {instagramUrl ? 
            <div className="text-left">
              <p className="font-mono truncate">{instagramUrl}</p>
              <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                <div 
                  className="bg-secondary-400 h-2 rounded-full"
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div> : 
            "No active downloads"
          }
        </div>
      </div>
    </section>
  );
}
