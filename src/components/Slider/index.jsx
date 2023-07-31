import React, {useState, useEffect} from 'react'

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import st from './Slider.module.css'
function Slider(props){

  
  const [panels, setPanels] = useState([]);
  
  useEffect(()=> {
    setPanels(props.data)
  }, [])
  // threshold={40}
  return <>
  <h2 className={st.title}>Выполненные работы</h2>
  <Flicking renderOnlyVisible={true} circular={true}>
    {panels.map((el, indx)=> {
      return (
        <div className="flicking-panel" key={indx}>
        <img src={el} alt="" /></div>)}
      )
    } 
  </Flicking>
</>

}

export {Slider}
