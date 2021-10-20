import React from "react";

function MoreButton({ setPage, page, sushis }) {
  
  
  function handleClick(){
  setPage(() => page + 1)
    if(page >= 25) {
      setPage(1)
    } 
  }
 // return <button onClick={/* Fill me in! */ null}>More sushi!</button>;
 return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
