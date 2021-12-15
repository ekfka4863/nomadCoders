import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")   // https://api.coinpaprika.com/v1/tickers
      .then((response) => response.json())
      // .then((json) => console.log(json))    // 이게 우리의 data -> data를 이제 useState로 만들어 준다 -> const [coins, setCoins] = useState([]);
      .then((json) => {
        setCoins(json);
        setLoading(false);   // API를 전부 받앙왔으니... loading도 끝났다고 알려주기 ... 
      });  
  }, []);   // API는 한번만 렌더링 하면 되니까 dependency에 아무것도 넣지 않아서 watch할게 없게 하기!

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {/* {loading ? <strong>Loading...</strong> : null} */}
      {loading ? <strong>Loading...</strong> 
                    : 
                  <select>
                    {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
                  </select>
      }
      {/* <select>
        {coins.map((coin) => <option>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
      </select> */}
    </div>
  );
}

export default CoinTracker;
