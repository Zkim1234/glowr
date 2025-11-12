import { useState, useEffect } from "react";
import "./HomeComponents.css";

function NavBar({ onProductClick }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = (e) => {
    if (e.target === e.currentTarget) {
      setIsSearchOpen(false);
    }
  };

  // Close dialog on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when dialog is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  // Recent search items - matching the image with their product IDs
  const recentSearches = [
    { name: "Toleriane Hydrating Gentle Facial Cleanser", id: 1 },
    { name: "Revitalift Triple Power Anti-Aging Moisturizer", id: 2 },
    { name: "Rapid Wrinkle Repair Retinol Pro+ Eye Cream", id: 4 },
    { name: "UV Lotion Broad-Spectrum SPF 35", id: 5 },
    { name: "Hydrating Cream-to-Foam Cleanser", id: 3 },
    { name: "Daily Moisturizing Face Cream", id: 6 }
  ];

  const handleSearchItemClick = (productId) => {
    if (onProductClick) {
      onProductClick(productId);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <div className="Header">
        <img src="/Glowr.svg" width="130" alt="GlowrLogo" />
        <nav className="NavLinks">
          <button 
            className="NavLink" 
            onClick={() => scrollToSection('top-ranking')}
            aria-label="Go to Top Ranking section"
          >
            Top Ranking
          </button>
          <button 
            className="NavLink" 
            onClick={() => scrollToSection('for-you')}
            aria-label="Go to For You section"
          >
            For You
          </button>
          <button 
            className="NavLink" 
            onClick={() => scrollToSection('hit-ingredients')}
            aria-label="Go to Hit Ingredients section"
          >
            Hit Ingredients
          </button>
        </nav>
        <div className="SearchContainer" onClick={toggleSearch}>
          <svg
            className="SearchIcon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
      </div>
      
      {isSearchOpen && (
        <>
          <div className="SearchDialogOverlay" onClick={closeSearch}></div>
          <div className="SearchDialog">
            <div className="SearchDialogTop">
              <svg
                className="SearchDialogIcon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input 
                type="search" 
                placeholder="Search..." 
                className="SearchDialogInput"
                autoFocus
              />
            </div>
            <div className="SearchDialogList">
              {recentSearches.map((item, index) => (
                <div 
                  key={index} 
                  className="SearchDialogItem"
                  onClick={() => handleSearchItemClick(item.id)}
                >
                  <svg
                    className="RecentIcon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M3 21v-5h5"></path>
                  </svg>
                  <span className="SearchDialogItemText">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
