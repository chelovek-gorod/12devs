import Content from '../components/Content/Content';
import './App.css';

/*

  /        -- конвертер из одной валюты в другую
  /rates   -- страница с текущими курсами валют
              На странице с текущими курсами пользователь может добавлять валюты в «избранное».
              Такие курсы должны отображаться вверху списка.
  
*/

function App() {

    return (
        <div className="app">
            <Content />
        </div>
    );
}

export default App;