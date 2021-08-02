import React from 'react';


const Table = ({items, loading, totalPages}) => {
  console.log('items', items);
  console.log('totalPages', totalPages);

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
                  {items.map((prop, index) =>
                      <tr key={index}>
                        <td>{prop.title}</td>
                        <td>{prop.vote_average}</td>
                        <td>{prop.vote_count}</td>
                        <td>{prop.release_date}</td>
                      </tr>
                  )}
              </tbody>
                </table>
    </div>)
};
export default Table;