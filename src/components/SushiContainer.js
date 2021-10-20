import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  const {sushis, page, setPage, setPlates, plates, setMoney, money} = props;


  const sushiToDisplay = sushis.map((sushi) => {
    return(
    <Sushi 
      id={sushi.id}
      key={sushi.id} 
      img={sushi.img_url} 
      name={sushi.name} 
      price={sushi.price} 
      created={sushi.created_at}
      setPlates={setPlates} 
      setMoney={setMoney}
      money={money}
      plates={plates}
   />)
  })
  

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiToDisplay}
      <MoreButton setPage={setPage} page={page} plates={plates} sushis={sushis} />
    </div>
  );
}

export default SushiContainer;
