import React, { useState } from "react";
import "./App.css";
import TableBox from "./TableBox";

function App() {
  // i initilized data and created a box component which take the data , selectedItems data and a function to update itms in the parent
  // then i created 4 states 2 for left box and 2 for rightBoxData
  // one is the initial data or data after changing and the second is for the selected items in each box then
  // i moved the data with respect to each box ,
  //  left box items will be moved only to right and right box will only be moved to left

  const initialData = ["apple", "banana", "orange", "grape", "kiwi"];
  const [leftBoxData, setLeftBoxData] = useState(initialData);
  const [rightBoxData, setRightBoxData] = useState([]);
  const [selectedItemsLeft, setSelectedItemsLeft] = useState([]);
  const [selectedItemsRight, setSelectedItemsRight] = useState([]);

  const moveItemsToRight = () => {
    const itemsToMove = leftBoxData.filter((_, index) =>
      selectedItemsLeft.includes(index)
    );
    setLeftBoxData(
      leftBoxData.filter((_, index) => !selectedItemsLeft.includes(index))
    );
    setRightBoxData([...rightBoxData, ...itemsToMove]);
    setSelectedItemsLeft([]);
  };

  const moveItemsToLeft = () => {
    const itemsToMove = rightBoxData.filter((_, index) =>
      selectedItemsRight.includes(index)
    );
    setRightBoxData(
      rightBoxData.filter((_, index) => !selectedItemsRight.includes(index))
    );
    setLeftBoxData([...leftBoxData, ...itemsToMove]);
    setSelectedItemsRight([]);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          paddingTop: "30px",
        }}
      >
        <TableBox
          items={leftBoxData}
          selectedItems={selectedItemsLeft}
          onItemClick={(index) => {
            setSelectedItemsLeft([...selectedItemsLeft, index]);
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button onClick={moveItemsToRight}>→</button>
          <button onClick={moveItemsToLeft}>←</button>
        </div>
        <TableBox
          items={rightBoxData}
          selectedItems={selectedItemsRight}
          onItemClick={(index) => {
            setSelectedItemsRight([...selectedItemsRight, index]);
          }}
        />
      </div>
    </div>
  );
}

export default App;
