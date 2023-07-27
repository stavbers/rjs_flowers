import st from './FlowersHeader.module.css';


function FlowersHeader({logo, descr, info, title, handleClick, inProp}){
  return(
    <div className={st.wrp}>
    <img className={st.img} src={logo} alt={descr} />
    <div className={st.title}>
        {title}
        <span className={st.left}></span>
        <span className={st.right}></span>
        <span className={st.btn} onClick={handleClick}>
            {inProp ? 'Скрыть' : info}
        </span>
        <span className={st.tip}></span>
    </div>
</div>
  )
}

export {FlowersHeader}