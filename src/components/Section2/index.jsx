import st from './Section2.module.css'
function Section2(props){
  console.log(props.data)

  
  return (
    <div className="container">
        <div className={st.frame}>
        {props.data.map((el, indx)=> {
          return <div key={indx}><img src={el.img} alt="el.title" /> <p>{el.title}</p></div>
        })}
        </div>
    </div>
  )
}
export {Section2}