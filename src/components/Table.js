import { useState } from "react";

function Table({ plates = [], money}) {

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((plate, num) => (
    <div key={num} className="empty-plate" style={{ top: -7 * num }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
