import { useState } from 'react'
import './component/Listing/App.css'
import Listing from './component/Listing/Listing'
import data from './component/Listing/etsy.json'

type Card = {
  listing_id: number, 
  url: string, 
  mainImage: string, 
  title: string, 
  currency_code: string, 
  price: string, 
  quantity: number
}

function App() {
const item: Card[] = []
data.map((el: any) => item.push({listing_id: el.listing_id, 
                              url: el.url, 
                              mainImage: el.MainImage, 
                              title: el.title, 
                              currency_code: el.currency_code, 
                              price: el.price, 
                              quantity: el.quantity}))
 

  return (
    <>
    
      <Listing info={item}/>
    </>
  )
}

export default App
