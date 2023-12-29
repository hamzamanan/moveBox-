import React from "react";

function TableBox({ items, selectedItems, onItemClick }) {
  return (
    <div
      style={{
        border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "500px",
      }}
    >
      {items.length > 0 &&
        items.map((item, index) => {
          return (
            <p
              key={index}
              onClick={() => onItemClick(index)}
              style={{
                background: selectedItems.includes(index)
                  ? "blue"
                  : "transparent",
                cursor: "pointer",
              }}
            >
              {item}
            </p>
          );
        })}
    </div>
  );
}

export default TableBox;
