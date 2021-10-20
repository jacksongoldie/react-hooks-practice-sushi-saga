import { useState, useEffect }from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Money from "./Money";


const API = `http://localhost:3001/sushis/?_limit=4`;

function App() {

  const [sushis, setSushis] = useState([]);
  const [page, setPage] = useState(1);
  const [plates, setPlates] = useState([]);
  const [money, setMoney] = useState(100);
  const [hidden, setHidden] = useState(true);


  useEffect(() => {
    fetch(API + "&_page=" + page)
    .then(r => r.json())
    .then(data => setSushis(data))
    .catch(error => console.error('Error', error));
  }, [page]);

  //not what I'm trying to do bc it will rerender all sushis and not leave empty plate??
/* function eatSushi(id, price){
  const newSushis = sushis.filter((sushi) => sushi.id !== id)
  setSushis(newSushis)
} */

  function handleMoneyClick(){
    setHidden((x) => !x)
  }

  return (
    <div className="app">
      <button onClick={handleMoneyClick}>{hidden ? 'Add money' : 'Close form'}</button>
      {hidden ? null : <Money money={money} setMoney={setMoney} />}
      <SushiContainer 
        sushis={sushis} 
        page={page} 
        setPage={setPage}
        setPlates={setPlates}
        plates={plates}
        setMoney={setMoney}
        money={money}
        />
      <Table
        plates={plates}
        money={money}
       />
    </div>
  );
}

export default App;
