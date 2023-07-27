
import st from './Flowers.module.css'

function Flowers({flowers}){
  console.log(flowers)
  return (
    <>
    {flowers.map((el, index)=> {
      return <div key={index} className={st.item}>
          <h2 className={st.title}>{el.title}</h2>
          <div className={st.img_wrp}>
          <img className={st.img} src={el.img} alt={el.title} />
          <span className={st.bezel}></span>
          <span></span>
          </div>
          <p className={st.oldPrice}>{el.priceOld}</p>
          <p className={st.newPrice}>{el.priceNew}</p>
          <button className={st.btn}>{el.btn}</button>
      </div>
  })}
  </>
  )
}

export {Flowers}