import './App.css'
import { Card } from './components/Card'

import image from './assets/burger1.png'

let card = {
  'img': image,
  'title': 'Burger dreams',
  'price': '124$',
  'descriprion': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}

function App() {

  return (
    <div>
      <Card img={card.img} title={card.title} price={card.price} descriprion={card.descriprion}/>
    </div>
  )
}

export default App
