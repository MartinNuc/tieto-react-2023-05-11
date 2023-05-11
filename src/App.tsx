import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Table} from './Table';

function App() {
  return (<>
    <Table columns={4} rows={3} />
    <h1>Hello World</h1>
  </>);
}

export default App;
