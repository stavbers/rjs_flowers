import st from './Info_block.module.css'

function Info_block(props){
  return (
    <div className="container">
      <div className={st.wrp}>
       { props.data.map((el, indx)=> {
          return <p key={indx} className={st.text}>{el}</p>
        })}
      </div>
    </div>
  )
  
}
export {Info_block}