import React from 'react'
import style from './Header.module.css'
function Header(props){
 const {logo, menu} = props
  
  return (
    <>
    <div className={style.navbar}>
    <h1 >HEADER </h1>
    </div>

    </>
  )
}




export {Header}