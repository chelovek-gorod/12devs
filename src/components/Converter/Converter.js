import React from 'react';
import './Converter.css';

import CurrencyModalDiv from '../CurrencyModalDiv/CurrencyModalDiv';
import InputNumber from '../InputNumber/InputNumber';

function Converter(props) {

    let leftRate;
    let rightRate;
    for (let objCurr of props.currenciesArr) {
        if (objCurr.abbreviation === props.convertLeft.abbreviation) leftRate = objCurr.rate / objCurr.scale;
        if (objCurr.abbreviation === props.convertRight.abbreviation) rightRate = objCurr.rate / objCurr.scale;
        if (leftRate && rightRate) break;
    }

    console.log('leftRate =', leftRate, '; rightRate =', rightRate);

    function getName(abbreviation) {
            let currencyObject = props.currenciesArr.find(currency => currency.abbreviation === abbreviation);
            return currencyObject.name;
    }

    return (
        <div>
            <div className="title">Конвертер валют</div>

            <div className="converter-div">
                <div onClick={() => {props.setModalAction('convertLeft'); props.showModal();}} >
                    <CurrencyModalDiv abbreviation={props.convertLeft.abbreviation}
                        name={getName(props.convertLeft.abbreviation)} />
                </div>
                <InputNumber id={'left'} value={props.convertLeft.value} currenciesArr={props.currenciesArr}
                    setValue={props.setValueConvertLeft} setConvert={props.setValueConvertRight} rate={rightRate} />
            </div>
            <div className="converter-div equals"> = </div>
            <div className="converter-div">
                <div onClick={() => {props.setModalAction('convertRight'); props.showModal();}}>
                    <CurrencyModalDiv abbreviation={props.convertRight.abbreviation}
                        name={getName(props.convertRight.abbreviation)} />
                </div>
                <InputNumber id={'right'} value={props.convertRight.value} currenciesArr={props.currenciesArr}
                    setValue={props.setValueConvertRight} setConvert={props.setValueConvertLeft} rate={leftRate} />
            </div>

        </div>
    );
}

export default Converter;