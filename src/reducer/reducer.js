const initialState = {
    currenciesArr : [], //{ abbreviation : 'USD', name : 'Доллар США', scale : 1, rate : 2.75 }
    baseCurrency : 'BYN', // user can change it
    favoritesArr : ['USD', 'EUR', 'RUB', 'UAH'],
    modalIs : false
};
 
 const reducer = (state = initialState, action) => {
 
    let obj = Object.assign({}, state);
    switch (action.type) {
        case 'SET_BASE':
            obj.baseCurrency = action.base;
            return obj;
        case 'ADD_TO_FAVORITE':
            obj.favoritesArr.push(action.favoriteAdd);
            return obj;
        case 'REMOVE_FROM_FAVORITE':
            obj.favoritesArr = obj.favoritesArr.filter(currency => currency !== action.favoriteRemove);
            return obj;
        case 'LOAD_CURRENCIES':
            obj.currenciesArr = [...action.currenciesArr];
            return obj;
        case 'SHOW_MODAL':
            obj.modalIs = true;
            return obj;
        case 'HIDE_MODAL':
            obj.modalIs = false;
            return obj;
        default: return state;
    }
 }
 export default reducer;