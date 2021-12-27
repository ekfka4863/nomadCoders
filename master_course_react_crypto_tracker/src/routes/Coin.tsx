// url(path)에 포함된 값을 얻고자 할 때는 react-router에서 제공하는 useParams 훅을 사용한다 
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


interface RouteParams {
  coinId: string;
}
interface RouteState {
  name: string;
}


// interface
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string; 
  name: string; 
  symbol: string; 
  rank: number; 
  circulating_supply: number; 
  total_supply: number; 
  max_supply: number; 
  beta_value: number; 
  first_data_at: string; 
  last_updated: {
    USD: {
      ath_date: string
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  }; 
}


function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  const [info, setInfo] = useState<InfoData>({});
  const [priceInfo, setPriceInfo] = useState<PriceData>({});

  // 기본 형태: useEffect(() => { ()(); }, []);
  useEffect(() => {
    (async () => {
      // 기본적으로 한 줄로 fetch + async + await 하는 방법 ~ 
      // const response = await (
      //   await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      // ).json();
      
      // 응용 1
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      console.log(infoData);
      
      // 응용 2
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceData);

      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, [coinId]);
  
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;


// cf. 
// https://api.coinpaprika.com/v1/coins/btc-bitcoin
// https://api.coinpaprika.com/v1/tickers/btc-bitcoin

