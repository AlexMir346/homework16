import React from 'react';
import data from '../data/data';
import Table from '../table/table';

import '../app/styles/app.css';

export default function App() {
  return (
    <>
      <h1>Exchange Rate</h1>
      <Table data={data} />
    </>
  );
}
