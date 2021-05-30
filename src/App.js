import React, {useState} from 'react'
import './App.css'

export default function App() {
     const [result, setResult] = useState("")

     const handleClick = (e) => { 
         setResult(result.concat(e.target.name));
     }

     const Clear = (e) =>{
         setResult('');

     }

     const Back = (e) =>{

    }

    const Equal = (e) =>{

    }

    return (
            <div className='container'>
                <form>
                    <input type='text' value={result}></input>
                </form>
                <div className='Keypad'>
                    <button onClick = {Clear} id = 'clear'>Clear</button>
                    <button onClick = {Back} id = 'back'>C</button>
                    <button name='/' onClick = {handleClick} className='a'>&divide;</button>
                    <button name='7' onClick = {handleClick}>7</button>
                    <button name='8' onClick = {handleClick}>8</button>
                    <button name='9' onClick = {handleClick}>9</button>
                    <button name='*' onClick = {handleClick} className='a'>&times;</button>
                    <button name='4' onClick = {handleClick}>4</button>
                    <button name='5' onClick = {handleClick}>5</button>
                    <button name='6' onClick = {handleClick}>6</button>
                    <button name='-' onClick = {handleClick} className='a'>&ndash;</button>
                    <button name='1' onClick = {handleClick}>1</button>
                    <button name='2' onClick = {handleClick}>2</button>
                    <button name='3' onClick = {handleClick}>3</button>
                    <button name='+' onClick = {handleClick} className='a'>+</button>
                    <button name='0' onClick = {handleClick}>0</button>
                    <button name='.' onClick = {handleClick}>.</button>
                    <button onClick = {Equal} id = 'equal'>=</button>
                </div>
            </div>
    )
}