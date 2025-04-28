import { Children, PropsWithChildren } from 'react'
import './App.css'

function App() {
 
  return (
    <body>
      <Main title="What to watch">
        <Items>
          <ItemCard title='The Shawshank Redemption' imageUrl="https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg" releaseDate='1994' raiting={5.0}/>
          <ItemCard title='Breaking Bad' imageUrl="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ineLOBPG8AZsluYwnkMpHRyu7L.jpg" releaseDate='1994' raiting={5}/>
          <ItemCard title='Inception' imageUrl="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg" releaseDate='2010' raiting={4.6}/>
          <ItemCard title='Friends' imageUrl="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg" releaseDate='1994' raiting={4.8}/> 
        </Items>
      </Main>
    </body>    
  )
}

type MainProps = PropsWithChildren<{
  title: string;
}>
function Main ({title, children}: MainProps) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>     
  )
}

function Items({children}:PropsWithChildren) {
  return (
    <ul className='itemsGalery'>
        {children}
    </ul>
  )
}

type ItemCardProps = PropsWithChildren<{
  title: string;
  imageUrl: string;
  releaseDate: string;
  raiting: number;}>
function ItemCard({title, imageUrl, releaseDate, raiting}: ItemCardProps) {
  return (
    <li className='itemCard'>
      <img src={imageUrl} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>{releaseDate}</p>
      <div>
        <p className='raiting'>{raiting}</p>
        <input type="checkbox" />
      </div>      
    </li>
   
  )
}


export default App
