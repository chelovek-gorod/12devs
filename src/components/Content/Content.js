import React from 'react';

import { connect } from 'react-redux';
import { setBase, addToFavorite, removeFromFavorite, loadCurrencies, showModal, hideModal, setModalAction, changePage } from '../../actions/action';

import Header from '../Header/Header';
import Rates from '../Rates/Rates';
import Converter from '../Converter/Converter';

import ModalCurrenciesList from '../ModalCurrenciesList/ModalCurrenciesList';

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

    function getBaseName() {
        let baseCurrencyObject = props.currenciesArr.find(currency => currency.abbreviation === props.baseCurrency);
        return baseCurrencyObject.name;
    }

    if (props.loading) {
        getCurrencies();
        return (<div className="content border"><div className="top-bottom-box top"><span className="title">Loading...</span></div></div>);
    }

    console.log('props.modalIs', props.modalIs);

    function showModal() {
        let modalActionType;
        switch (props.modalActionType) {
            case 'setBase' : modalActionType = props.setBase; break;
            case 'convertLeft' : modalActionType = props.setBase; break;
            case 'convertRight' : modalActionType = props.setBase; break;
            default: modalActionType = 'return';
        }
        if(modalActionType === 'return') return;

        return ( <ModalCurrenciesList currenciesArr={props.currenciesArr} clickAction={modalActionType} hideModal={props.hideModal} /> );
    }

    function showContent() {
        if (props.currentPage === 'rates') return ( <Rates /> );
        if (props.currentPage === 'converter') return ( <Converter /> );
        return ( <div className='page404'>404</div> );
    }

    return (
        <>
        <Header currentPage={props.currentPage} changePage={props.changePage} abbreviation={props.baseCurrency} name={getBaseName()}
                showModal={props.showModal} setModalAction={props.setModalAction} actionModal={'setBase'} />
        <div className="content border">
            { showContent() }
        </div>
        { props.modalIs ? showModal() : null }
        <footer>Разработал <span>Мирге Марсель</span></footer>
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
        modalActionType : state.modalActionType,
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
        setModalAction: (modalActionType) => dispatch(setModalAction(modalActionType)),
        changePage: (pageName) => dispatch(changePage(pageName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);