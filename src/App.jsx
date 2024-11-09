import './App.css'
import { CardCollection, Header, BrowseMenu, Footer } from './components/index'

import image from './assets/burger1.png'

let card = {
  'img': image,
  'title': 'Burger dreams',
  'price': '$ 124',
  'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'id': '1'
}

let cardArray = [card, {...card, id: '2'}, {...card, id: '3'}, {...card, id: '4'}, {...card, id: '5'}, {...card, id: '6'}]


function App() {

  return (
    <div className='app'>
      <Header />
      <BrowseMenu />
      <CardCollection cards={cardArray} />
      <Footer />
    </div>
  )
}

export default App
