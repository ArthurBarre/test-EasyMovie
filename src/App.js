import React from 'react';
import styled from 'styled-components';
import './App.css';
import Button from './components/button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';

const App = () => (
  <div className="App">
    <h1>Hello world</h1>
    <Button>
      Hello World
    </Button>
    <ButtonGroup type='primary' size='large'>
      <Button>
        Hello World
      </Button>
      <Button>
        Hello World
      </Button>
      <Button>
        Hello World
      </Button>
    </ButtonGroup>
  </div>
)

export default App;
