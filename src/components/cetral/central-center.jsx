import "./central-center.css"

function CentralCenter() {
  return(
    <ul className="cetral-center">
      <li className="central-center__item">
        <div className="central-center__inner">
          <h2 className="central-center__title">Audience reach</h2>
          <span className="central-center__time">31/01/2020 – 06/02/2020</span>
        </div>
        <img className="central-center__img-big" src="./img/reach-img.png" alt="Audience-reach" width="716" height="141"/>
      </li>
      <li className="central-center__item">
        <h2 className="central-center__title">Reach by device</h2>
        <div className="central-center__inner central-center__inner--small">
          <img className="central-center__img" src="./img/device.png" alt="Reach-by-device" width="136" height="121"/>
          <div>
            <p className="cetral-center__span">Desktop</p>
            <p className="cetral-center__span mobile">Mobile views</p>
          </div>
        </div>
      </li>
    </ul>
    )
  }
  
  export default CentralCenter