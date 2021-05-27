import React from 'react';
import Button from './Component/Button';
import Input from './Component/Input';
import Clear from './Component/Clear';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className='calc-wrapper'>
        <div className='row'>
          <Input input='rrr'></Input>
        </div>
        <div className='row'>
          <Button>9</Button>
          <Button>8</Button>
          <Button>7</Button>
          <Button className='sign'>/</Button>
        </div>
        <div className='row'>
          <Button>9</Button>
          <Button>8</Button>
          <Button>7</Button>
          <Button className='sign'>*</Button>
        </div>
        <div className='row'>
          <Button>3</Button>
          <Button>2</Button>
          <Button>1</Button>
          <Button className='sign'>-</Button>
        </div>
        <div className='row'>
          <Button>.</Button>
          <Button>0</Button>
          <Button>p</Button>
          <Button className='sign'>+</Button>
        </div>
        <div className='row'>
          <Clear clear='Clear'/>
        </div>
      </div>
    </div>
  );
}

export default App;
