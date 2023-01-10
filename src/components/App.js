// import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {

    const [state, setState] = useState(0);
     console.log(state)
     console.log(setState)

    return (
    <div className="App">
    
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}

        <div className="page__container">

            <Header />

            <Main />

            <PopupWithForm id="1" title="Заменить аватар" name="edit-avatar" />


            <template id="card-template">
                <li className="card">
                    <button className="card__btn-del opacity-transition" type="button" aria-label="delete"></button>
                    <img className="card__img" alt="#" src="src/components/App#"/>
                    <div className="card__info-wrap">
                            <h2 className="card__title">Место</h2>
                            <div className="card__btn-like-wrap">
                                <button className="card__btn-like opacity-transition" type="button"
                                        aria-label="like"></button>
                                <span className="card__btn-like-count"></span>
                            </div>
                        </div>
                </li>
            </template>

            <Footer />

        </div>

    </div>
  );
}

export default App;
