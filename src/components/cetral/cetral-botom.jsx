import "./central-center.css"

function CentralBottom() {
  return(
    <ul className="cetral-center">
      <li className="central-center__item">
          <div className="central-center__inner">
              <h2 className="central-center__title">Reach by device</h2>
              <div>
              <span className="cetral-center__span">women</span>
              <span className="cetral-center__span mobile">men</span>
              </div>
          </div>
            <img className="central-center__img--big" src="./img/gender.svg" alt="gender" width="631" height="167"/>
        </li>
    </ul>

  )
}
export default CentralBottom