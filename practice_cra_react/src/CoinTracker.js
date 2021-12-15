import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [availableDollar, setAvailableDollar] = useState([]);
  // const [availableCoins, setAvailableCoins] = useState([]);
  const tempArr = [];

  const onChange = (event) => {
    setDollars(event.target.value);
    // console.log(dollars);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setAvailableDollar((currAvailableDollar) => [parseInt(dollars), ...currAvailableDollar]);  
    setDollars("");
  };
  // console.log("availableDollar: ", availableDollar[0]);
  const whichCoins = () => {
    coins.map(( coin ) => {
      if (Math.round(availableDollar[0] / parseInt(coin.quotes.USD.price)) > 0 && 
      Math.round(availableDollar[0] / parseInt(coin.quotes.USD.price)) !== Infinity) {
        // testArr.push(coin.name);
        tempArr.push(`${coin.name} (${coin.symbol}): ${Math.round(availableDollar / coin.quotes.USD.price)}개 구매가능`);
        console.log(tempArr);
      }
    });
  };
  // console.log("availableCoins: ", ...availableCoins);

  // coins.map(( coin ) => {
  //   if (Math.round(availableDollar[0] / parseInt(coin.quotes.USD.price)) > 0 && 
  //   Math.round(availableDollar[0] / parseInt(coin.quotes.USD.price)) !== Infinity) {
  //     // testArr.push(coin.name);
  //     tempArr.push(`${coin.name} (${coin.symbol}): ${Math.round(availableDollar / coin.quotes.USD.price)}개 구매가능`);
  //     console.log(tempArr);
  //   }
  // });


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
      <h1>The Coins! ({coins.length})</h1>
      {/* {loading ? <strong>Loading...</strong> : null} */}
      {loading ? 
                <strong>Loading...</strong> 
                  : 
                <select>
                  {coins.map((coin, index) => 
                    <option key={index}>
                      {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                    </option>
                  )}
                </select>
      }
      <form onSubmit={onSubmit} action="#">
        <input 
          onChange={onChange}
          value={dollars} 
          type="number" 
          placeholder="Dollars(USD) you have?" 
        />
        <button type="submit">Submit money I got</button>
      </form>
      <button onClick={whichCoins} type="button">Click to see result</button>
      {/* <select>
        {coins.map((coin, index) => 
          <option key={index}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        )}
      </select> */}
    </div>
  );
}

export default CoinTracker;
