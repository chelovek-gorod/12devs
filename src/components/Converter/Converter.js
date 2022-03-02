import React from 'react';
import './Converter.css';

import CurrencyModalDiv from '../CurrencyModalDiv/CurrencyModalDiv';
import InputNumber from '../InputNumber/InputNumber';

function Converter(props) {

    // currenciesArr={props.currenciesArr} convertCurrencyLeft={props.convertCurrencyLeft} convertCurrencyRight={props.convertCurrencyRight}
    // showModal={props.showModal} setModalAction={props.setModalAction}
    // setConvertCurrencyLeft={props.setConvertCurrencyLeft} setConvertCurrencyRight={props.setConvertCurrencyRight}

    function getName(abbreviation) {
            let currencyObject = props.currenciesArr.find(currency => currency.abbreviation === abbreviation);
            return currencyObject.name;
    }

    return (
        <div>
            <div className="title">Конвертер валют</div>

            <div className="converter-div">
                <CurrencyModalDiv abbreviation={props.convertCurrencyLeft} name={getName(props.convertCurrencyLeft)} 
                    onClick={() => {props.setModalAction('convertLeft'); props.showModal();}} />
                <InputNumber />
            </div>
            <div className="converter-div equals"> = </div>
            <div className="converter-div">
                <CurrencyModalDiv abbreviation={props.convertCurrencyRight} name={getName(props.convertCurrencyRight)}
                    onClick={() => {props.setModalAction('convertRight'); props.showModal();}} />
                <InputNumber />
            </div>

        </div>
    );
}

export default Converter;