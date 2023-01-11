// import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";

function App() {

    function handleEditAvatarClick() {
        // return document.querySelector('#overlay_avatar').classList.add('popup_opened')
        setEditAvatarPopupOpen(true)
    }
    function handleEditProfileClick() {
        return document.querySelector('#overlay_edit').classList.add('popup_opened')
    }
    function handleAddPlaceClick() {
        return document.querySelector('#overlay_add-place').classList.add('popup_opened')
    }

    const [state, setState] = useState(0);
// console.log(state)
// console.log(setState)
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)


    return (

        <div className="page__container">

            <Header />

            <Main
                onEditAvatar={ handleEditAvatarClick }
                onEditProfile={ handleEditProfileClick }
                onAddPlace={ handleAddPlaceClick }
                />

            <Footer />

            <PopupWithForm
                isOpen={isEditAvatarPopupOpen}
                title={"Заменить аватар"}
                name={"edit-avatar"}
                textButton={"Сохранить"}
                >
                <span className="popup__input-field popup__input-field_wrap">
                    <input type="url" className="popup__input" id="avatar-input" name="linkavatar"
                                   placeholder="Ссылка на картинку" required/>
                    <span className="popup__input-span avatar-input-error"
                                  id="input-edit-avatar-error"></span>
                </span>
            </PopupWithForm>

            <PopupWithForm/>


            <ImagePopup/>

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



        </div>

  );
}

export default App;
