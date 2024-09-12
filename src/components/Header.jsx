import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <Navbar />
      <div className="header__container">
        <div className="header__text">
          <h2 className="header__sub-heading">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="header__heading">SPACE</h1>
          <p className="header__body">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="header__cta-container">
          <button className="header__cta">Explore</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
