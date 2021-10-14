const OffersDetails = ({data}) => {

  return (
      <div>
        <img src={data.img} alt="Imagen del producto" className="img-product"/>
        <p className="product-name">
            {data.name}
        </p>
        <p className="product-model">
            {data.model} - Talle: {data.size}
        </p>
        <div className="price">
          <p className="offer-price">
            {Math.round(((data.price) - (data.price) * (data.discount) / 100))}
          </p>
          <p className="origin-price">
            {data.price}
          </p>
        </div>
      </div>    
  )
}

export default OffersDetails
