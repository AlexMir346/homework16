import React from 'react';
import '../table/styles/table.css';

export default function Table(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Currency name</th>
          <th>Currency</th>
          <th>Exchange Rate</th>
        </tr>
        {props.data.map((element) => {
          return (
            <tr key={element.r030}>
              <td>{element.txt}</td>
              <td>{element.cc}</td>
              <td>{element.rate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
