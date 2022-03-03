import React from 'react';
import './Converter.css';

import CurrencyModalDiv from '../CurrencyModalDiv/CurrencyModalDiv';

function Converter(props) {

    const [values, setValues] = React.useState({left: props.convertLeft.value, right: props.convertRight.value});

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

    function handleChange(event, side) {
        let value = Number(event.target.value);
        let result = value * ((side === 'left') ? leftRate : rightRate);
        let leftValue, rightValue;
        if (side === 'left') {
            leftValue = value.toFixed(2);
            rightValue = result.toFixed(2);
        } else {
            leftValue = result.toFixed(2);
            rightValue = value.toFixed(2);
        }
        props.setConvertValues({left: leftValue, right: rightValue});
        setValues({left: leftValue, right: rightValue});
    }

    return (
        <div>
            <div className="title">Конвертер валют</div>

            <div className="converter-div">
                <div onClick={() => {props.setModalAction('convertLeft'); props.showModal();}} >
                    <CurrencyModalDiv abbreviation={props.convertLeft.abbreviation}
                        name={getName(props.convertLeft.abbreviation)} />
                </div>
                <input key={props.convertLeft.value} value={values.left} onChange={(event) => handleChange(event, 'left')} 
                    type='number' min='0' max='9999999999' step='1.00' />
            </div>
            <div className="converter-div equals"> = </div>
            <div className="converter-div">
                <div onClick={() => {props.setModalAction('convertRight'); props.showModal();}}>
                    <CurrencyModalDiv abbreviation={props.convertRight.abbreviation}
                        name={getName(props.convertRight.abbreviation)} />
                </div>
                <input key={props.convertRight.value} value={values.right} onChange={(event) => handleChange(event, 'right')} 
                    type='number' min='0' max='9999999999' step='1.00' />
            </div>

        </div>
    );
}

export default Converter;