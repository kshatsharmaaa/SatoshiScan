import React from "react";
import "../App.css";

function Coin({ name, image, symbol, current_price, market_cap_rank }) {
    return (
        <div className="coin">
            <img src={image} alt={name} />
            <h1>Name: {name}</h1>
            <p>Symbol: {symbol}</p>
            <p>Price: ${current_price}</p>
            <p>Market Cap Rank: {market_cap_rank}</p>
        </div>
    )
}

export default Coin;