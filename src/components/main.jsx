import "./main.css"
import Nav from "./nav"
import Central from "./right"

function Main () {
  const dark = () => {
    document.querySelector(`.body`).classList.toggle(`dark`)
    document.querySelector(`.toggle-btn__span`).classList.toggle(`toggle-btn__span--right`)
  }
  return (
    <div className="body">
    <Nav/>
    <Central/>
    <button className="site-nav__btn togle-btn" onClick={dark}>
      <span className="toggle-btn__span"></span>
    </button>
    </div>
    )
  }
  
  export default Main