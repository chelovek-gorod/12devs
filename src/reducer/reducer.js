const initialState = {
    currenciesArr : [], //{ abbreviation : 'USD', name : 'Доллар США', scale : 1, rate : 2.75 }
    baseCurrency : 'BYN', // user can change it
    favoritesArr : ['USD', 'EUR', 'RUB', 'UAH']
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
        default: return state;
    }
 }
 export default reducer;

 /*
 
 {"Cur_ID":440,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"AUD","Cur_Scale":1,"Cur_Name":"Австралийский доллар","Cur_OfficialRate":1.9868},
 {"Cur_ID":510,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"AMD","Cur_Scale":1000,"Cur_Name":"Армянских драмов","Cur_OfficialRate":5.7315},
 {"Cur_ID":441,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"BGN","Cur_Scale":1,"Cur_Name":"Болгарский лев","Cur_OfficialRate":1.5776},
 {"Cur_ID":449,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"UAH","Cur_Scale":100,"Cur_Name":"Гривен","Cur_OfficialRate":9.1837},
 {"Cur_ID":450,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"DKK","Cur_Scale":10,"Cur_Name":"Датских крон","Cur_OfficialRate":4.1455},
 {"Cur_ID":431,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"USD","Cur_Scale":1,"Cur_Name":"Доллар США","Cur_OfficialRate":2.7597},
 {"Cur_ID":451,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"EUR","Cur_Scale":1,"Cur_Name":"Евро","Cur_OfficialRate":3.0873},
 {"Cur_ID":452,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"PLN","Cur_Scale":10,"Cur_Name":"Злотых","Cur_OfficialRate":6.6183},
 {"Cur_ID":508,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"JPY","Cur_Scale":100,"Cur_Name":"Иен","Cur_OfficialRate":2.3930},
 {"Cur_ID":461,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"IRR","Cur_Scale":100000,"Cur_Name":"Иранских риалов","Cur_OfficialRate":6.5707},
 {"Cur_ID":453,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"ISK","Cur_Scale":100,"Cur_Name":"Исландских крон","Cur_OfficialRate":2.1791},
 {"Cur_ID":371,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"CAD","Cur_Scale":1,"Cur_Name":"Канадский доллар","Cur_OfficialRate":2.1547},
 {"Cur_ID":462,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"CNY","Cur_Scale":10,"Cur_Name":"Китайских юаней","Cur_OfficialRate":4.3697},
 {"Cur_ID":394,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"KWD","Cur_Scale":1,"Cur_Name":"Кувейтский динар","Cur_OfficialRate":9.1061},
 {"Cur_ID":454,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"MDL","Cur_Scale":10,"Cur_Name":"Молдавских леев","Cur_OfficialRate":1.5080},
 {"Cur_ID":448,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"NZD","Cur_Scale":1,"Cur_Name":"Новозеландский доллар","Cur_OfficialRate":1.8515},
 {"Cur_ID":455,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"NOK","Cur_Scale":10,"Cur_Name":"Норвежских крон","Cur_OfficialRate":3.0778},
 {"Cur_ID":456,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"RUB","Cur_Scale":100,"Cur_Name":"Российских рублей","Cur_OfficialRate":3.2978},
 {"Cur_ID":457,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"XDR","Cur_Scale":1,"Cur_Name":"СДР (Специальные права заимствования)","Cur_OfficialRate":3.8475},
 {"Cur_ID":421,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"SGD","Cur_Scale":1,"Cur_Name":"Сингапурcкий доллар","Cur_OfficialRate":2.0378},
 {"Cur_ID":458,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"KGS","Cur_Scale":100,"Cur_Name":"Сомов","Cur_OfficialRate":3.2533},
 {"Cur_ID":459,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"KZT","Cur_Scale":1000,"Cur_Name":"Тенге","Cur_OfficialRate":5.9979},
 {"Cur_ID":460,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"TRY","Cur_Scale":10,"Cur_Name":"Турецких лир","Cur_OfficialRate":1.9606},
 {"Cur_ID":429,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"GBP","Cur_Scale":1,"Cur_Name":"Фунт стерлингов","Cur_OfficialRate":3.6911},
 {"Cur_ID":463,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"CZK","Cur_Scale":100,"Cur_Name":"Чешских крон","Cur_OfficialRate":12.4490},
 {"Cur_ID":464,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"SEK","Cur_Scale":10,"Cur_Name":"Шведских крон","Cur_OfficialRate":2.8998},
 {"Cur_ID":426,"Date":"2022-02-28T00:00:00","Cur_Abbreviation":"CHF","Cur_Scale":1,"Cur_Name":"Швейцарский франк","Cur_OfficialRate":2.9794}

 */