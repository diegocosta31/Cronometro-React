
import React, { useState } from "react";
import "./Cronometro.css"
// import cronometro from "../img/cronometro.png"


const Cronometro = () => {
    
let [miliSeg, setMiliSeg] = useState(0)
let [seg, setSeg] = useState(0)
let [min, setMin] = useState(0)
let [hrs, setHrs] = useState(0)
let [rep, setRep] = useState(null)


const contagem = ()=>{  
    setMiliSeg(miliSeg = miliSeg + 1)
    if(miliSeg === 9){
      setSeg(seg = seg +1)
      setMiliSeg(miliSeg = 0)
    }
    if(seg === 59){
      setMin(min = min +1)
      setSeg(seg = 0)
    }
    if(min === 59){
      setHrs(hrs = hrs +1)
      setMin(min = 0)
    }
}

const iniciar =  () => {
      setRep(rep = setInterval(()=> contagem(),100))      
}

const parar = ()=> {
    clearInterval(rep)    
} 

const resetar = () => {
    clearInterval(rep)
    setMiliSeg( miliSeg = 0)
    setSeg(seg = 0)
    setMin(min = 0)
    setHrs(hrs = 0)
}


  return (
    <div className="container">
        <h3 id="title">Cronometro</h3>
        <div className="display">
          <p>H: <span>{("0"+hrs).slice(-2)}</span></p>
          <p>M: <span>{("0"+min).slice(-2)}</span></p>
          <p>S: <span>{("0"+seg).slice(-2)}</span></p>
          <p>MS: <span>{("0"+miliSeg).slice(-2)}</span></p>
        </div>
        <div className="container-btn">
          <button className="btn" onClick={iniciar}>Iniciar</button>
          <button className="btn" onClick={parar}>Parar</button>
          <button className="btn" id="reset"onClick={resetar}>Resetar</button>
        </div>
    </div>
  )
}
export default Cronometro





