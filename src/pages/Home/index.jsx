import "./style.css"
import { useState, useEffect } from "react";

import { FiArrowLeft } from "react-icons/fi";
import Display from "../../components/Display"
import Button from "../../components/Button"

const Home = () => {
    const [currentNumber, setCurrentNumber] = useState('')

    const handleAddNumber = (number) => {
        const current = number.target.innerText
        switch(current){
            case '=':
                setCurrentNumber(prev => eval(prev))
                break;
            case '%':
                alert("Apenas botão visual");
                break;
            case undefined:
                alert("Apenas botão visual");
                break;
            case 'C':
                setCurrentNumber('')
                break;
            default:
                setCurrentNumber(prev => prev + current)
                break;
        }


    }
    const EventOnClick = () => {
        const btn = document.querySelectorAll('.keyboard div button')
        btn.forEach(el => el.addEventListener("click", handleAddNumber))
    }
    useEffect(() => {
        EventOnClick()
    }, [])
    return (
        <div className="calculadora">
            <Display number={currentNumber} />
            <div className="keyboard">
                <Button label={<FiArrowLeft />} flex="normal sides" />
                <Button label="C" flex="normal sides" />
                <Button label="%" flex="normal sides"/>
                <Button label="*" flex="normal sides" />
                <Button label="7" flex="normal" />
                <Button label="8" flex="normal" />
                <Button label="9" flex="normal" />
                <Button label="/" flex="normal sides" />
                <Button label="4" flex="normal" />
                <Button label="5" flex="normal" />
                <Button label="6" flex="normal" />
                <Button label="-" flex="normal sides" />
                <Button label="1" flex="normal" />
                <Button label="2" flex="normal" />
                <Button label="3" flex="normal" />
                <Button label="+" flex="normal sides" />
                <Button label="0" flex="grow sides" />
                <Button label="=" flex="grow sides" />
            </div>
        </div>
    )
}
export default Home;