import './HomeComponents.css';

function NavBar () {
    return (


        <div className='Header'>
            <img src="/Glowr.svg" width="150" alt="GlowrLogo" />
            <div className='SearchBar'>
                <img src="/search.svg" width="30" alt="SearchIcon" />
                Search...
            </div>
        </div>
    )
}

export default NavBar;