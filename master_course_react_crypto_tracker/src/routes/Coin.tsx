// url(path)에 포함된 값을 얻고자 할 때는 react-router에서 제공하는 useParams 훅을 사용한다 
import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coin() {
  // const params = useParams();
  // console.log(params);
  const { coinId } = useParams<RouteParams>();
  
  return (
    <h1>Coin: {coinId}</h1>
  );
}

export default Coin;