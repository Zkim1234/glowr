import "./HomeComponents.css";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
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
          Ingredients
        </button>
      </nav>
      <div className="SearchContainer">
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
        <input type="search" placeholder="Search..." className="SearchBar" />
      </div>
    </div>
  );
}

export default NavBar;
