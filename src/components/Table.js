import React from 'react';


const Table = (props) => {
  console.log('items', props.items);
  return (
    <div>
      {props.items.map((prop) => {
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