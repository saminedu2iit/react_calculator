import react from 'react';
import reactDom from 'react-dom';
import Calculator from './components/calculator';
import './index.css';
import Navbar from './components/Navbar';


  

let root_div = document.querySelector('#root');

function App() { 
    return (
        <div>
        <Navbar/>
            <Calculator />
            </div>
    )
}


reactDom.render(<App />, root_div);