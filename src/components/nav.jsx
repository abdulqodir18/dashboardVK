import "./nav.css"


function Nav() {
  
  return(
    <nav className="site-nav">
      <a classNamek="site-nav__logo-link" href="#">
      <img className="site-nav__logo-img" src="./img/logo.svg" alt="logo" width="42" height="24"/>
    </a>
    
    <ul className="site-nav__list">
      <li className="site-nav__item">
        <button className="site-nav__item-btn home" type="button" aria-label="home"></button>
      </li>
      <li className="site-nav__item">
        <button className="site-nav__item-btn vector" type="button" aria-label="vector"></button>
      </li>
      <li className="site-nav__item">
        <button className="site-nav__item-btn user" type="button" aria-label="user"></button>
      </li>
      <li className="site-nav__item">
        <button className="site-nav__item-btn mesg" type="button" aria-label="messege"></button>
      </li>
      <li className="site-nav__item">
        <button className="site-nav__item-btn play" type="button" aria-label="play"></button>
      </li>
      <li className="site-nav__item">
        <button className="site-nav__item-btn stat" type="button" aria-label="Statistic"></button>
      </li>
      <li className="site-nav__item">
        <button className="site-nav__item-btn setings" type="button" aria-label="setings"></button>
      </li>
    </ul>
    </nav>
    )
    
  }
  
  export default Nav