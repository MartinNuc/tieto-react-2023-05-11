import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {Table} from './Table';
import { CounterButton } from './CounterButton';
import { NumberGenerator } from './NumberGenerator';
import { MousePosition } from './MousePosition';

function App() {
  return (<>
    <MousePosition />
    <NumberGenerator pregeneratedCount={4} />
    <Table columns={4} rows={3} />
    <h1>Hello World</h1>
  </>);
}

export default App;
