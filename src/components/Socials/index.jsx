import st from './Socials.module.css'

function Socials(props){
  return (
    <div className="container">
      <div className={st.wrp}>
       {props.data.map((el, indx)=> {
          return <a className={st.link} key={indx} href="#!"><img className={st.img} src={el.img} alt={el.alt} /></a>
        })}
      </div>
    </div>
  )
  
}

export {Socials}