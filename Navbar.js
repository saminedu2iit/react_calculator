import './Navbar.css';
import About from './About';
import Calculator from './calculator';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";




function Navbar() { 
    return (
        
        <div id="navbar_div">
            
            <div id="navbar_left_container">
                <a id="home_link" href='/'>Home</a>
                <a id="about_link" href='/about'>About</a>
            </div>
            <div id="navbar_right_div">
                <input type="checkbox" name="night_mode_checkbox" id="night_mode_checkbox" />
                <label htmlFor='night_mode_checkbox'>Enable Nightmode</label>
                </div>
                      
        
          
           
        </div>
    )
}




export default Navbar;