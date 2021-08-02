import React from 'react';


const Table = ({items, loading}) => {
  console.log('items', items);
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div>
        <table>
          <colgroup>
            <col style={{ backgroundColor: '#0f0' }} />
            <col span={4} />
          </colgroup>
              <tbody>
                  {items.map((prop) =>
                      <tr>
                        <td>{prop.title}</td>
                        <td>{prop.vote_average}</td>
                        <td>{prop.vote_count}</td>
                        <td>{prop.release_date}</td>
                      </tr>
                  )}
              </tbody>
                </table>
    </div>
  )
};
export default Table;