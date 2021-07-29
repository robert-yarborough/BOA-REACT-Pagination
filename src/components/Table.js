import React from 'react';


const Table = ({items}) => {
  console.log('items', items);
  return (
    <div>
      {items.map((prop) => {
        return (<table>
          <tr>
            <td>{prop.title}</td>
          </tr>
          <tr>
            <td>{prop.vote_average}</td>
          </tr>
          <tr>
            <td>{prop.vote_count}</td>
          </tr>
          <tr>
            <td>{prop.release_date}</td>
          </tr>
        </table>)
      })}
    </div>
  )
};
export default Table;