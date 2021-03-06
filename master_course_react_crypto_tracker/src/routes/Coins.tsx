import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 15px;

  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color .3s ease-in-out;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

// typescript로 api에 대한 interface 만들기 
interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

// test용 
// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//     },
//     {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//     },
//     {
//     id: "hex-hex",
//     name: "HEX",
//     symbol: "HEX",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "token",
//     },
// ];
// cf.  https://api.coinpaprika.com/v1/coins

// loading에 관련된 컴포넌트 만들기 ... loading이 true일때 보여지는 컴포넌트 
const Loader = styled.div`
  /* height: 50px; */
  margin-top: 100px;
  border-radius: 15px;
  background-color: #eee;
  color: ${(props) => props.theme.accentColor};
  font-size: 20px;
  text-align: center;
  line-height: 50px;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;


function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 즉시실행함수
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      // console.log(json);              // 9000개가 넘음... 
      setCoins(json.slice(0, 100));      // TIP! 100개만 가져오기! 
      setLoading(false);
    })();
  }, []);

  // console.log(coins);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      
      {/* <CoinList> */}
      {/* {loading ? "Loading..." : <CoinList> */}
      {loading ? <Loader>Loading...</Loader> : <CoinList>
        {/* <Coin></Coin> */}
        {coins.map((coin) => ( 
          <Coin key={coin.id}>
            <Link 
              to={{
                pathname: `/${coin.id}`,
                state: {name: coin.name},
              }}
            >
              <Img 
                src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} 
              />
              {coin.name} &rarr;
            </Link>
          </Coin>
        ))}
      </CoinList>}
    </Container>
  );
}

export default Coins;