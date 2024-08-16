import React from 'react'
import { product } from '../data/data'

const Product = () => {
  return (
    <div className='container'>
    <h3 className='text-center'>Product Page</h3>
      <div className='row'>
      {
        product.map((item, i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                  <div className='card'>
                    <img src={item.image} className='card-img-top img-fluid' alt='...' />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <p className='card-text'>{item.description}</p>
                    </div>
                  </div>
                </div>
            )
        })
      }

      </div>
    </div>
  )
}

export default Product

