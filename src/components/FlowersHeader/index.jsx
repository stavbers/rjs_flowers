import React, {useRef, useEffect} from 'react'

import st from './FlowersHeader.module.css';


function FlowersHeader({logo, descr, info, title, handleClick, inProp}){
  const subTitleRef = useRef(null)

  useEffect(()=> {

      if(title.length > 13){
        subTitleRef.current.classList.add(st['smText'])
      }
  }, [])  

  
  return(
    <div className={st.wrp}>
    <img className={st.img} src={logo} alt={descr} />
    <div className={st.title}>
        <p ref={subTitleRef} className={st.subTitle}>{title}</p>
        <span className={st.hr}></span> 
        <span className={st.btn} onClick={handleClick}>
            {inProp ? 'Скрыть' : info}
        </span>
        <span className={st.tip}></span>
    </div>
</div>
  )
}

export {FlowersHeader}