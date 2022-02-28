import React from 'react';
//import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { setBase, addToFavorite, removeFromFavorite, loadCurrencies } from '../../actions/action';

import Currency from '../Currency/Currency';

/*
import Converter from '../Converter/Converter';
import Rates from '../Rates/Rates';
*/

import './Content.css';

function Content(props) {

    function getCurrencies() {
        fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
            .then(res => res.json())
            .then((result) => {
                setCurrenciesToStore(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function getKey() {
        let key = 0;
        return function() { return key++; }
    }
    let newKey = getKey();

    function setCurrenciesToStore(currencies) {
        let currenciesArr = [];
        let arrSize = currencies.length;
        for (let i = 0; i < arrSize; i++) {
            let currency = currencies[i];
            currenciesArr.push( {
                abbreviation: currency.Cur_Abbreviation,
                name: currency.Cur_Name,
                scale: currency.Cur_Scale,
                rate: currency.Cur_OfficialRate
            } );
        }
        props.loadCurrencies(currenciesArr);
    }

    
    function outputCurrencies() {
        return props.currencies.map(currency => <Currency key={newKey()} abbreviation={currency.abbreviation} name={currency.name} scale={currency.scale} rate={currency.rate} addToFavorite={props.addToFavorite} />);
    }
    
    console.log('props', props);

    if (props.loading) {
        getCurrencies();
        return (<div className="content border"><div className="top-bottom-box top"><span className="title">Loading...</span></div></div>);
    }

    return (
        <div className="content border">
            { outputCurrencies() }
        </div>
    );

}

////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
    console.log('state', state);
    if (state.currenciesArr.length === 0) return {loading : true};
    return {
        baseCurrency : state.baseCurrency,
        currencies : state.currenciesArr,
        favoritesArr : state.favoritesArr
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadCurrencies: (currenciesArr) => dispatch(loadCurrencies(currenciesArr)),
        setBase: (base) => dispatch(setBase(base)),
        addToFavorite: (favoriteAdd) => dispatch(addToFavorite(favoriteAdd)),
        removeFromFavorite: (favoriteRemove) => dispatch(removeFromFavorite(favoriteRemove))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);