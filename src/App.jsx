
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './components/Coin.jsx'

function App() {

  const [listOfCoins, setListOfCoins] = useState([]);
  const [seachWord, setSearchWord] = useState('');

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc")
      .then(response => {
        setListOfCoins(response.data);
      })
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(seachWord.toLowerCase());
  })

  return (
    <div className="App">
      <div className="cheader">
        <h1>SatoshiScan</h1>
        <p>Unlocking the Vision of Bitcoin's Creator, One Scan at a Time! 🚀</p>
        <input type="text" placeholder='Search for Crypto Currency...' onChange={(e) => {setSearchWord(e.target.value)}}/>
      </div>
      <div className="cdisplay">
        {filteredCoins.map((coin) => {
          return <Coin name={coin.name} image={coin.image} symbol={coin.symbol} current_price={coin.current_price} market_cap_rank={coin.market_cap_rank}/>
        })}
      </div>
    </div>
  )
}

export default App
