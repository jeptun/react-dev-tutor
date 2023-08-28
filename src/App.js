import { useState } from 'react';
import { foods, filterItems } from './data.js';


export default function App() {
  const [query, setQuery] = useState('test');
  function handleChange(e) {
    setQuery(e.target.value);

    console.log('query: ', query);
  }
  return (
    <>
      <SearchBar _value={query} _onChange={handleChange}/>
      <hr />
      <List items={filterItems(foods,query)} />
    </>
  );
}

function SearchBar({_value, _onChange}) {

  return (
    <label>
      Search:{' '}
      <input
        value={_value}
        onChange={_onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
