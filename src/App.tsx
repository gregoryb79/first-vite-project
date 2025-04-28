import { Main } from './components/main'
import { Items } from './components/items'
import { ItemCard } from "./components/itemcard"

import "./app.scss";

function App() {
 
  return (
    <>
      <Main title="What to watch">
        <Items>
          <ItemCard title='The Shawshank Redemption' imageUrl="https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg" releaseDate='1994' raiting={5.0}/>
          <ItemCard title='Breaking Bad' imageUrl="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ineLOBPG8AZsluYwnkMpHRyu7L.jpg" releaseDate='1994' raiting={5}/>
          <ItemCard title='Inception' imageUrl="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg" releaseDate='2010' raiting={4.6}/>
          <ItemCard title='Friends' imageUrl="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg" releaseDate='1994' raiting={4.8}/> 
        </Items>
      </Main>
    </>    
  )
}

export default App
