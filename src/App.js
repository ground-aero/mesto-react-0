// import './App.css';

function App() {
  return (
    <div className="App">
              {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
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

            <header className="header">
                 <img className="header__logo" src="<%=require('./images/logo.svg')%>" alt="лого Mesto"/>
            </header>

            <main className="content">

                <section id="profile" className="profile content__section">
                <span className="profile__avatar-edit-btn">
                    <img className="profile__avatar" src="<%=require('./images/avatar.png')%>"
                         alt="бюст улыбающегося человека в красной шапке"/>
                </span>
                    <div className="profile__elements-wrap">
                        <div className="profile__name-wrap">
                            <h1 className="profile__name">....</h1>
                            <button className="btn profile__btn-edit opacity-transition" type="button"
                                    aria-label="edit"></button>
                        </div>
                        <p className="profile__job">..</p>
                    </div>
                    <button className="btn profile__btn-addplace opacity-transition" type="button"
                            aria-label="add"></button>
                </section>

                <section className="elements content__section">
                    <ul className="elements__list">

                    </ul>
                </section>

                <div className="popup" id="overlay_edit">
                    <div className="popup__container" id="popup__container_edit">
                        <button className="popup__btn-close opacity-transition" type="button"
                                aria-label="close"></button>
                        <form action="#" className="popup__form" id="form-add-profile" name="profile" tabIndex="0"
                              noValidate>
                            <h2 className="popup__title">Редактировать профиль</h2>
                            <span className="popup__input-field popup__input-field_wrap">
                            <input type="text" className="popup__input" id="name-input" name="name"
                                   placeholder="Ваше имя"
                                   tabIndex="1" minLength="2" maxLength="40" required/>
                            <span className="popup__input-span name-input-error"
                                  id="input-edit-error"></span>
                        </span>
                            <span className="popup__input-field popup__input-field_wrap">
                            <input type="text" className="popup__input" id="job-input" name="about" placeholder="О себе"
                                   tabIndex="2" minLength="2" maxLength="200" required/>
                            <span className="popup__input-span job-input-error"
                                  id="input-edit_minimum-error"></span>
                        </span>
                            <button type="submit"
                                    className="btn btn_submit btn_type_save-profile opacity-transition">Сохранить
                            </button>
                        </form>

                    </div>
                </div>

                <div className="popup" id="overlay_add-place">
                    <div className="popup__container" id="window_add-place">
                        <button className="popup__btn-close opacity-transition" type="button"
                                aria-label="close"></button>
                        <form action="#" className="popup__form" id="form-place" name="place" tabIndex="1" noValidate>
                            <h2 className="popup__title">Новое место</h2>
                            <span className="popup__input-field popup__input-field_wrap">
                            <input type="text" className="popup__input" id="place-input" name="name"
                                   placeholder="Название"
                                   tabIndex="1" minLength="2" maxLength="30" required/>
                            <span className="popup__input-span place-input-error"
                                  id="input-addplace-error"></span>
                        </span>
                            <span className="popup__input-field popup__input-field_wrap">
                            <input type="url" className="popup__input" id="link-input" name="link"
                                   placeholder="Ссылка на картинку" tabIndex="2" required/>
                            <span className="popup__input-span link-input-error"
                                  id="input-addplace_url-error"></span>
                        </span>
                            <button type="submit"
                                    className="btn btn_submit btn_type_create-place opacity-transition">Создать
                            </button>
                        </form>
                    </div>
                </div>

                <div className="popup popup_img-bg" id="overlay_img-zoom">
                    <div className="popup__container-img popup__container-img_type_zoomer">
                        <button
                            className="popup__close-img popup__btn-close opacity-transition opacity-transition_type_middle"
                            type="button"></button>
                        <img className="popup__img" src="#" alt="#"/>
                            <h3 className="popup__subtitle"></h3>
                    </div>
                </div>

                <div className="popup" id="overlay_delete">
                    <div className="popup__container" id="popup__container_type_delete">
                        <button className="popup__btn-close opacity-transition" type="button"
                                aria-label="close"></button>
                        <h2 className="popup__title">Вы уверены?</h2>
                        <form action="#" className="popup__form" id="form-confirm" name="confirm" tabIndex="3"
                              noValidate>
                            <button type="submit"
                                    className="btn btn_submit btn_type_submit-delete opacity-transition">Да
                            </button>
                        </form>
                    </div>
                </div>

                <div className="popup" id="overlay_avatar">
                    <div className="popup__container" id="popup__container_type_edit-avatar">
                        <button className="popup__btn-close opacity-transition" type="button"
                                aria-label="close"></button>
                        <form action="#" className="popup__form" id="form-edit-avatar" name="avatar" tabIndex="4"
                              noValidate>
                            <h2 className="popup__title">Обновить аватар</h2>
                            <span className="popup__input-field popup__input-field_wrap">
                            <input type="url" className="popup__input" id="avatar-input" name="linkavatar"
                                   placeholder="Ссылка на картинку" tabIndex="5" required/>
                            <span className="popup__input-span avatar-input-error"
                                  id="input-edit-avatar-error"></span>
                        </span>
                            <button type="submit"
                                    className="btn btn_submit btn_type_submit-edit-avatar opacity-transition">Сохранить
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <template id="card-template">
                <li className="card">
                    <button className="card__btn-del opacity-transition" type="button" aria-label="delete"></button>
                    <img className="card__img" alt="#" src="#"/>
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

            <footer className="footer">
                <p className="footer__autho">&copy; 2022 Mesto Russia</p>
            </footer>

        </div>

    </div>
  );
}

export default App;
