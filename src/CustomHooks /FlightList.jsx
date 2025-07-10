import React, { useEffect, useState } from 'react';
import useEvent from './Event';

function FlightList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://683ffb195b39a8039a5658ce.mockapi.io/flight')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const [search, setSearch, filteredItems] = useEvent(items);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredItems.map((item) => (
        <div key={item.id}>
          <p><strong>Name:</strong> {item.from}</p>
          <p><strong>Brand:</strong> {item.to}</p>
          <p><strong>Price:</strong> {item.price} ₸</p>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
