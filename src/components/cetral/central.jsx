import "./central.css"
import CentralTop from "./central-top"
import CentralCenter from "./central-center"
import CentralBottom from "./cetral-botom"

function Main() {
  return (
    <section className="container">
      <CentralTop/>
      <CentralCenter/>
      <CentralBottom/>
    </section>
    ) 
  }
  
  export default Main