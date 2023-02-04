import { useState } from "react";
import "./style.css";

import { FiArrowLeft } from "react-icons/fi";
import Button from "../../components/Button";
import Display from "../../components/Display";

const Home = () => {
    const [currentNumber, setCurrentNumber] = useState('')

    const handleAddNumber = (number) => {
        const current = number.target.innerText
        if (current === "=") {
            setCurrentNumber(prev => {
                try {
                    return eval(prev)
                } catch {
                    return ""
                }
            })
        } else if (current === "C") {
            setCurrentNumber('')
        } else {
            setCurrentNumber(prev => prev += current)
        }
    }

    return (
        <div className="calculadora">
            <Display number={currentNumber} />
            <div className="keyboard">
                <Button onClick={e => handleAddNumber(e)} label={<FiArrowLeft />} flex="normal sides" />
                <Button onClick={e => handleAddNumber(e)} label="C" flex="normal sides" />
                <Button onClick={e => handleAddNumber(e)} label="%" flex="normal sides" />
                <Button onClick={e => handleAddNumber(e)} label="*" flex="normal sides" />
                <Button onClick={e => handleAddNumber(e)} label="7" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="8" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="9" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="/" flex="normal sides" />
                <Button onClick={e => handleAddNumber(e)} label="4" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="5" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="6" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="-" flex="normal sides" />
                <Button onClick={e => handleAddNumber(e)} label="1" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="2" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="3" flex="normal" />
                <Button onClick={e => handleAddNumber(e)} label="+" flex="normal sides" />
                <Button onClick={e => handleAddNumber(e)} label="0" flex="grow sides" />
                <Button onClick={e => handleAddNumber(e)} label="=" flex="grow sides" />
            </div>
        </div>
    )
}
export default Home;