import { useState } from "react";

function Sushi({ id, img, name, price, setPlates, setMoney, money, plates }) {

  const [isEaten, setIsEaten] = useState(false)

  const alreadyEaten = plates.find(sushi => sushi === id)
 
 
  function handleClick(id, price){
    if (isEaten === false && money >= price){
    setIsEaten(!isEaten)
    setPlates((currentPlates) => [...currentPlates, id])
    setMoney((money)=> money - price)
    }
  }
  

  return (
    <div className="sushi">
      <div key={id} className="plate" onClick={() => handleClick(id, price)}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten || alreadyEaten ? null : (
          <img
            src={img ? img : null}
            alt={name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
