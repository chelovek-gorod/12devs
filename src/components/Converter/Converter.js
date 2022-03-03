import React from 'react';
import './Converter.css';

import CurrencyModalDiv from '../CurrencyModalDiv/CurrencyModalDiv';

function Converter(props) {

    let leftRate;
    let rightRate;
    for (let objCurr of props.currenciesArr) {
        if (objCurr.abbreviation === props.convertLeft.abbreviation) leftRate = objCurr.rate / objCurr.scale;
        if (objCurr.abbreviation === props.convertRight.abbreviation) rightRate = objCurr.rate / objCurr.scale;
        if (leftRate && rightRate) {
            let leftRateTemp = leftRate / rightRate;
            rightRate = rightRate / leftRate;
            leftRate = leftRateTemp;
            break;
        }
    }

    function getName(abbreviation) {
            let currencyObject = props.currenciesArr.find(currency => currency.abbreviation === abbreviation);
            return currencyObject.name;
    }

    const [values, setValues] = React.useState({left: props.convertLeft.value, right: props.convertRight.value});

    function handleChange(event, side) {
        let inputValue = (event.target.value).replace(',', '.');
        let value = Math.abs(Number(inputValue));
        if (isNaN(value) || !isFinite(value)) return;

        if(inputValue[0] === '.' || (inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== '.')) {
            inputValue = '0.' + inputValue.slice(2);
            value = Number(inputValue);
        } 

        let result = value * ((side === 'left') ? leftRate : rightRate);
        let leftValue, rightValue;
        if (side === 'left') {
            leftValue = inputValue;
            rightValue = result.toFixed(2);
        } else {
            leftValue = result.toFixed(2);
            rightValue = inputValue;
        }
        setValues({left: leftValue, right: rightValue});
        props.setConvertValues({left: leftValue, right: rightValue});
        
    }

    if(props.convertLeft.value === '---' && props.convertRight.value === '---') {
        setValues({left: '0', right: '0'});
        props.setConvertValues({left: '0', right: '0'});
    }

    return (
        <div>
            <div className="title">Конвертер валют</div>

            <div className="converter-div">
                <div onClick={() => {props.setModalAction('convertLeft'); props.showModal();}} >
                    <CurrencyModalDiv abbreviation={props.convertLeft.abbreviation}
                        name={getName(props.convertLeft.abbreviation)} />
                </div>
                <input type="text" maxLength={10} placeholder="0" value={values.left}
                    onChange={(event) => handleChange(event, 'left')} />
            </div>
            <div className="converter-div equals"> = </div>
            <div className="converter-div">
                <div onClick={() => {props.setModalAction('convertRight'); props.showModal();}}>
                    <CurrencyModalDiv abbreviation={props.convertRight.abbreviation}
                        name={getName(props.convertRight.abbreviation)} />
                </div>
                <input type="text" maxLength={10} placeholder="0" value={values.right}
                    onChange={(event) => handleChange(event, 'right')} />
            </div>

        </div>
    );
}

export default Converter;