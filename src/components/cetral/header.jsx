import "./header.css"

function Header() {
  return (
    <header className="header">
    <div className="container header__container">
      <h1 className="header__title">Statistics</h1>
      <form className="header__form" action="#" method="GET">
        <button className="header__form-btn" type="submit" aria-label="submit"></button>
        <input className="header__input" type="search" placeholder="Search" name="search" autoComplete="off"/>
      </form>
      <span className="header__span" aria-label="notification"></span>

      <div className="header__inner">
        <p className="header__user">Anya</p>
        <img className="header__user-img" src="./img/anya.png" alt="anya" width="50" height="50"/>
      </div>
    </div>
    </header>
    )
  }
  
  export default Header