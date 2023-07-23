import st from './Section3.module.css'

function Section3(props){
  console.log(props.data)
  const {logo, descr, info, priceTip, title} = props.data
  
  return (
    <div className="container">
      <div className={st.wrp}>
        <img className={st.img} src={logo} alt={descr} />
        <span className={st.left}></span>
        <span className={st.right}></span>
        <span className={st.title}>{title}</span>
        <span className={st.btn}>{info}</span>
        <span className={st.tip}></span>
        <p className={st.info}>{descr}</p>
      </div>
    </div>
  )
}

export {Section3}