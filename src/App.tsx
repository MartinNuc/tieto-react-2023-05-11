import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Table } from './Table';
import { NumberGenerator } from './NumberGenerator';
import { MousePosition } from './MousePosition';
import { AutomaticCounter } from './AutomaticCounter';
import { Dropdown } from './dropdown/dropdown';
import { Joke } from './Joke';

function App() {
  return (<>
    <Joke />
    <AutomaticCounter />
    <MousePosition />
    <Dropdown buttonTitle='Toggle menu'>
      <ul>
        <li><a href="google.com">Google</a></li>
        <li><a href="facebook.com">Facebook</a></li>
        <li><a href="seznam.com">Seznam</a></li>
      </ul>
    </Dropdown>
    <NumberGenerator pregeneratedCount={4} />
    <Table columns={4} rows={3} />
    <h1>Hello World</h1>
  </>);
}

export default App;
