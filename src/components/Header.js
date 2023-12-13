import "./css/Header.css"

function Header() {
    return (
        <header className="container">
            <a href="/" className="logo">
                <img src="img/pokedex_logo.png" alt="Logo Pokedex"></img>
            </a>
            <form>
                <div className="form-group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon-search">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="search" placeholder="Search Pokemon's name" />
                </div>

                <button className="btn-search">Search</button>

            </form>
        </header>
    );
}

export default Header;