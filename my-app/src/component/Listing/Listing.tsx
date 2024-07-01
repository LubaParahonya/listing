import React from 'react'
import data from './etsy.json'

type Card = {
  listing_id: number, 
  url: string, 
  mainImage: string, 
  title: string, 
  currency_code: string, 
  price: string, 
  quantity: number
}


export default function Listing() {
  const loadData = JSON.parse(JSON.stringify(data));
  const item: Card[] = [];
  loadData.map(el => item.push({listing_id: el.listing_id, 
                                url: el.url, 
                                mainImage: el.MainImage, 
                                title: el.title, 
                                currency_code: el.currency_code, 
                                price: el.price, 
                                quantity: el.quantity}))
  

return ( 
    {item.map(card =>{
      return(
        <>
        <div className="item-list">
  <div className="item">
    <div className="item-image">
      <a href= {card.url}>
        <img src={card.mainImage.url_570xN} />
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{card.title}</p>
      <p className="item-price">{card.currency_code}{card.price}</p>
      <p className="item-quantity level-medium">{card.quantity}</p>
    </div>
  </div>
</div>
</>
      )
    })}
  )
}

  

