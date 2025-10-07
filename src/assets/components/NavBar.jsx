import "./HomeComponents.css";

function NavBar() {
  return (
    <div className="Header">
      <img src="/Glowr.svg" width="130" alt="GlowrLogo" />
      <input type="search" placeholder="Search..." className="SearchBar" />
    </div>
  );
}

export default NavBar;
