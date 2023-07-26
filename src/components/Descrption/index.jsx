import React from 'react'
import { CSSTransition } from 'react-transition-group';
import st from './Description.module.css'
import './style.css';
function Description({descr, inProp}){

  return (
    <CSSTransition
    in={inProp}
    timeout={1000}
    classNames='my-node'
    mountOnEnter
    unmountOnExit
    >
    <p className={st.info}>{descr}</p>
</CSSTransition>
  )
}

export {Description}