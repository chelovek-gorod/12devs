import React from 'react';
import './InputNumber.css';

function InputNumber(props) {

    function changeInput(e) {
        props.setValue(e.target.value);
        conversion(e.target.value);
    }
    
    function updateValue() {
        let input = document.getElementById(props.id);
        if (input) input.value = props.value;
    }

    function conversion(input) {
        let result = Number(input) * props.rate;
        console.log(input, ' *', props.rate, ' =', result);
        props.setConvert(result);
    }

    console.log('props.value', props.value);

    return (
        <input id={props.value} type='number' value={updateValue()} onChange={(e) => changeInput(e)} />
    );

}

export default InputNumber;