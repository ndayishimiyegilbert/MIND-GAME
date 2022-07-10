
import './App.css';
import {useState} from  'react'

const imageShuffle=[
  {"src":"/img/cook1.avif"},
  {"src":"/img/glass1.jpg"},
  {"src":"/img/jacket1.avif"},
  {"src":"/img/jacket4.avif"},
  {"src":"/img/jeans.avif"},
  {"src":"/img/jeans2.avif"},
  
];
function App() {
  const [cards,setCards]=useState([])
  const[turns,setTurns]=useState(0)
    const shuffle=()=>{
      const shuffleCards=[...imageShuffle,...imageShuffle]
      .sort((()=> Math.random() - 0.5))
      .map((card)=>({...card,id: Math.random()}))
      setCards(shuffleCards)
      setTurns(0)
    }
    console.log(turns,cards);
  return (
    <div className="App">
       <div className='all'>
         <h1>magic Game</h1>
         <button onClick={shuffle}>New Game</button>
         <div className='grid'>
           {
             cards.map(card=>(
               <div key={card.id}>
                  <div className='grid-images'>
                    <img src={card.src} className="front" alt='card front'/>
                    <img src="/img/cover.png"className="back" alt="card back"/> 

                  </div>
                 </div>
             ))}

         </div>
       </div>
    </div>
  );
}

export default App;
