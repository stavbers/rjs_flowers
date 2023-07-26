
import st from './Flowers.module.css'

function Flowers({flowers}){
  console.log(flowers)
  return (
    <>
    {flowers.map((el, index)=> {
      return <div key={index} className="item">
          <h2 className="title">{el.title}</h2>
          <img className='img' src={el.img} alt={el.title} />
          <span></span>
          <span></span>
          <p className='oldPrice'>{el.priceOld}</p>
          <p className='newPrice'>{el.priceNew}</p>
          <button>{el.btn}</button>
      </div>
  })}
  </>
  )
}

export {Flowers}