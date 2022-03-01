import React from 'react';
//import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { setBase, addToFavorite, removeFromFavorite, loadCurrencies, showModal, hideModal, changePage } from '../../actions/action';

import Header from '../Header/Header';
import ModalCurrenciesList from '../ModalCurrenciesList/ModalCurrenciesList';

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

    function setCurrenciesToStore(currencies) {
        let currenciesArr = [{
            abbreviation: 'BYN',
            name: 'Беларуский рубль',
            scale: 1,
            rate: 1
        }];
        let arrSize = currencies.length;
        for (let i = 0; i < arrSize; i++) {
            let currency = currencies[i];
            if (currency.Cur_Abbreviation !== 'XDR') {
                currenciesArr.push( {
                    abbreviation: currency.Cur_Abbreviation,
                    name: currency.Cur_Name,
                    scale: currency.Cur_Scale,
                    rate: currency.Cur_OfficialRate
                } );
            }
        }
        props.loadCurrencies(currenciesArr);
    }

    if (props.loading) {
        getCurrencies();
        return (<div className="content border"><div className="top-bottom-box top"><span className="title">Loading...</span></div></div>);
    }

    if (props.modalIs) {
        return ( <ModalCurrenciesList currenciesArr={props.currenciesArr} clickAction={props.setBase} hideModal={props.hideModal}/> );
    }

    return (
        <>
        <Header currentPage={props.currentPage} changePage={props.changePage} currenciesArr={props.currenciesArr} />
        <div className="content border">
            { /*outputMainCurrency()*/ }
            { /*outputCurrencies()*/ }
            <button onClick={props.showModal}>Popup</button>
        </div>
        </>
    );

}

////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => {

    if (state.currenciesArr.length === 0) return {loading : true};
    
    return {
        baseCurrency : state.baseCurrency,
        currenciesArr : state.currenciesArr,
        favoritesArr : state.favoritesArr,
        modalIs : state.modalIs,
        currentPage : state.currentPage
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadCurrencies: (currenciesArr) => dispatch(loadCurrencies(currenciesArr)),
        setBase: (base) => dispatch(setBase(base)),
        addToFavorite: (favoriteAdd) => dispatch(addToFavorite(favoriteAdd)),
        removeFromFavorite: (favoriteRemove) => dispatch(removeFromFavorite(favoriteRemove)),
        showModal: () => dispatch(showModal()),
        hideModal: () => dispatch(hideModal()),
        changePage: (pageName) => dispatch(changePage(pageName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);