import "./HomeComponents.css";

function NavBar() {
  return (
    <div className="Header">
      <img src="/Glowr.svg" width="130" alt="GlowrLogo" />
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
