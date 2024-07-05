import React from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'


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
         
          <div key={uuidv4()} className="item-list">
    <div key={uuidv4()} className="item">
      <div key={uuidv4()} className="item-image">
        <a key={uuidv4()} href= {card.url}>
          <img key={uuidv4()} src={card.mainImage?.hasOwnProperty("url_570xN")? card.mainImage.url_570xN: 'Нет картинки' } />
        </a>
      </div>
      <div key={uuidv4()} className="item-details">
        <p key={uuidv4()} className="item-title">{сutArray(card.title)}</p>
        <p key={uuidv4()} className="item-price">{chooseCode(card.currency_code, card.price) }</p>
        <p key={uuidv4()} className={`item-quantity ${chooseLevel(card.quantity)}`}>{card.quantity}</p>
      </div>
    </div>
  </div>

        )
      })
     
    )
  }