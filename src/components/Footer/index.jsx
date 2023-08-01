import st from './Footer.module.css'

function Footer(props){
  
  return (

      <div className={st.wrp}>
        <p className={st.text}>{props.data}</p>
      </div>

  )
}
export {Footer}