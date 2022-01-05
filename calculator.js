import react from "react";
import reactDom from "react-dom";
import "./calculator.css";
import { useState } from 'react';


let current_screen_value = "";

function Calculator() {

    let [screenValue, setScreenValue] = useState("");

    const calculate = (e) => { 
        
        if ((e.target.matches("input[type='button'][class='num_button']")) || (e.target.matches("input[type='button'][class='operator_button']"))) {
            if (screenValue === "0") {
                setScreenValue(e.target.value);
            }
            else { 
                setScreenValue(screenValue + e.target.value);
            }
            

            
        }
        else if (e.target.matches("input[type='button'][class='ans_button']")) {
            
            setScreenValue(eval(screenValue));
        }
        else if (e.target.matches("input[type='button'][class='clear_button']")) { 
            setScreenValue("0");
        }
        else if (e.target.matches("input[type='button'][class='backspace_button']")) {
            
            //setScreenValue(screenValue.slice(0, screenValue.length - 1));
            let temp = "";
            for (let i = 0; i < screenValue.length - 1; i++) { 
                temp += String(screenValue[i]);
            }
            setScreenValue(temp);
        }
    }
    return (
        <div id="calculator_container">
            <div id="header_container">
                <input type="text" name="screen" id="screen" value={screenValue} readOnly/>
            </div>
            <div id="body_container">
                <table id="buttons_table" cellSpacing="0">
                    <tbody onClick={(e) =>calculate(e) }>
                        <tr>
                            <td ><input type="button" id="clear" value="AC" className="clear_button" readOnly /></td>
                            <td ><input type="button" id="%" value="%" className="operator_button" readOnly /></td>
                            <td ><input type="button" id="^" value="^" className="operator_button" readOnly /></td>
                            <td ><input type="button" id="<-" value="back" className="backspace_button" readOnly/></td>
                        </tr>
                        <tr>
                            <td ><input type="button" id="7" value="7" className="num_button" readOnly/></td>
                            <td ><input type="button" id="8" value="8" className="num_button" readOnly/></td>
                            <td ><input type="button" id="9" value="9" className="num_button" readOnly/></td>
                            <td ><input type="button" id="+" value="+" className="operator_button" readOnly/></td>
                        </tr>
                        <tr>
                            <td ><input type="button" id="4" value="4"className="num_button" readOnly/></td>
                            <td ><input type="button" id="5" value="5"className="num_button" readOnly/></td>
                            <td ><input type="button" id="6" value="6"className="num_button" readOnly /></td>
                            <td ><input type="button" id="-" value="-"className="operator_button" readOnly/></td>
                        </tr>
                        <tr>
                            <td ><input type="button" id="1" value="1" className="num_button" readOnly/></td>
                            <td ><input type="button" id="2" value="2" className="num_button" readOnly/></td>
                            <td ><input type="button" id="3" value="3" className="num_button" readOnly/></td>
                            <td ><input type="button" id="*" value="*"className="operator_button" readOnly/></td>
                        </tr>
                        <tr>
                            <td ><input type="button" id="." value="."className="num_button" readOnly/></td>
                            <td ><input type="button" id="0" value="0"className="num_button" readOnly/></td>
                            <td ><input type="button" id="=" value="="className="ans_button" readOnly /></td>
                            <td ><input type="button" id="/" value="/"className="operator_button" readOnly/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    )
   
}

export default Calculator;