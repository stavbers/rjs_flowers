import st from './Map.module.css'
import map_img from './map.png'
function Map(props){
  const {title, descr, img} = props.data
  
  return (
    <div className="container">
      <h2 className={st.title}>{title}</h2>
      <h4 className={st.subtitle}>{descr}</h4>
      <div className={st.wrp}>
        <img className={st.img} src={img} alt={descr} />
        <img className={st.map_img} src={map_img} alt={descr} />
      </div>
    </div>
  )
}

export {Map}