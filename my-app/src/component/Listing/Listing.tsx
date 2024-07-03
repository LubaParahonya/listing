import React from 'react'
import './App.css'

type Card = {
  listing_id: number, 
  url: string, 
  mainImage: string, 
  title: string, 
  currency_code: string, 
  price: string, 
  quantity: number
}


export default function Listing({info}: {info: Card[]}) {
 
   function chooseCode(code: string, price: string){
    if(code === 'USD'){
      return '$' + price
    }
    if(code === 'EUR'){
      return '€' + price
    }
    return code + price
  }
  
  function chooseLevel(quantity: number){
      if(quantity <= 10){
        return 'level-low'
      }
      if(quantity <=20){
        return 'level-medium'
      }
      return 'level-high'
  }

  function сutArray(titleName: string): string{
    const lengthString = titleName?.split('');
    if(lengthString?.length > 50){
      titleName = titleName.substring(0, 49) + '...'
      return titleName
    }
      return titleName
  }
  
  return ( 
    info?.map(card =>{
        return(
          <>
          <div className="item-list">
    <div className="item">
      <div className="item-image">
        <a href= {card.url}>
          <img src={card.mainImage} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{сutArray(card.title)}</p>
        <p className="item-price">{chooseCode(card.currency_code, card.price) }</p>
        <p className={`item-quantity ${chooseLevel(card.quantity)}`}>{card.quantity}</p>
      </div>
    </div>
  </div>
  </>
        )
      })
    )
  }