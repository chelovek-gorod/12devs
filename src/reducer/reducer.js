const initialState = {
    currenciesArr : [], //{ abbreviation : 'USD', name : 'Доллар США', scale : 1, rate : 2.75 }
    baseCurrency : 'BYN', // user can change it
    favoritesArr : ['USD', 'EUR', 'RUB', 'UAH'],
    modalIs : false,
    modalActionType : '', // 'setBase' , 'convertLeft', 'convertRight'
    currentPage : 'converter' // 'rates'
};
 
 const reducer = (state = initialState, action) => {
 
    let stateCopy = Object.assign({}, state);
    switch (action.type) {
        case 'SET_BASE':
            stateCopy.baseCurrency = action.base;
            return stateCopy;
        case 'ADD_TO_FAVORITE':
            stateCopy.favoritesArr.push(action.favoriteAdd);
            return stateCopy;
        case 'REMOVE_FROM_FAVORITE':
            stateCopy.favoritesArr = stateCopy.favoritesArr.filter(currency => currency !== action.favoriteRemove);
            return stateCopy;
        case 'LOAD_CURRENCIES':
            stateCopy.currenciesArr = [...action.currenciesArr];
            return stateCopy;
        case 'SHOW_MODAL':
            stateCopy.modalIs = true;
            return stateCopy;
        case 'HIDE_MODAL':
            stateCopy.modalIs = false;
            return stateCopy;
        case 'SET_MODAL_ACTION':
            stateCopy.modalActionType = action.modalActionType;
            return stateCopy;
        case 'CHANGE_PAGE':
            stateCopy.currentPage = action.pageName;
            return stateCopy;
        default: return state;
    }
 }
 export default reducer;