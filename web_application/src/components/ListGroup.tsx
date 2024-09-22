import { useState } from "react";

interface Props {
  items: string[];
  headings: string;
  onSelectedItem: (item: string, index: number) => void;
}

function ListGroup({ items, headings, onSelectedItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="container">
      <h1 className="text-center">{headings}</h1>
      {items.length === 0 && <p className="text-center">No Items Found</p>}
      <ul
        className="list-group"
        style={{ maxHeight: "300px", overflowY: "auto" }} // Add scrolling
      >
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item, index);
            }}
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            style={{ cursor: "pointer" }} // Pointer cursor for clickable items
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
