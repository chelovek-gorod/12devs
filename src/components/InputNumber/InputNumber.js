import React from 'react';
import './InputNumber.css';

function InputNumber(props) {

    React.useEffect(() => { document.getElementById(props.id).value = props.value; });

    function handleChange(event) {
        let inputValue = Number(event.target.value);
        let result = inputValue * props.rate;
        let leftValue, rightValue;
        if (props.id === 'left') {leftValue = inputValue.toFixed(2); rightValue = result.toFixed(2)}
        else {leftValue = result.toFixed(2); rightValue = inputValue.toFixed(2)};
        props.setConvertValues({left: leftValue, right: rightValue});
    }

    return (
        <input id={props.id} type='number' min='0' max='9999999999' step='1.00' value={props.value} onChange={(event) => handleChange(event)} />
    );
}

export default InputNumber;