import React from 'react';
import './InputNumber.css';

function InputNumber() {

    function changeHandle () {
        console.log('input onChange');
    }

    return (
        <input type='number' value='1' onChange={changeHandle} />
    );

}

export default InputNumber;