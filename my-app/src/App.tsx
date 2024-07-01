import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listing from './component/Listing/Listing'
import data from './component/Listing/etsy.json'

function App() {
const loadData = JSON.parse(JSON.stringify(data));
const item = []
loadData.map(el => item.push({listing_id: el.listing_id, 
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
