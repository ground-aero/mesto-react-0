import React from 'react';

function PopupWithForm({ name, title, textButton, isOpen, children }) {

    console.log(children)
    return (

        <>
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__btn-close opacity-transition" type="button"
                        aria-label="close"></button>
                <form action="src/components/App" className="popup__form" name={name} noValidate>
                    <h2 className="popup__title">{title}</h2>
                    {children}
                    <button type="submit"
                            className="btn btn_submit btn_type_submit-edit-avatar opacity-transition">{textButton}
                    </button>
                </form>
            </div>
        </div>

            <div className={`popup popup_type_${name}`} id="overlay_edit">
              <div className="popup__container" id="popup__container_edit">
                <button className="popup__btn-close opacity-transition" type="button"
                         aria-label="close"></button>
                 <form action="src/components/App" className="popup__form" id="form-add-profile" name="profile"
                       noValidate>
                     <h2 className="popup__title">Редактировать профиль</h2>
                     <span className="popup__input-field popup__input-field_wrap">
                                 <input type="text" className="popup__input" id="name-input" name="name"
                                        placeholder="Ваше имя"
                                        minLength="2" maxLength="40" required/>
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

            <div className={`popup popup_type_${name}`} id="overlay_add-place">
                             <div className="popup__container" id="window_add-place">
                                 <button className="popup__btn-close opacity-transition" type="button"
                                         aria-label="close"></button>
                                 <form action="src/components/App#" className="popup__form" id="form-place" name="place" tabIndex="1" noValidate>
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

            <div className={`popup popup_type_${name}`} id="overlay_delete">
                             <div className="popup__container" id="popup__container_type_delete">
                                 <button className="popup__btn-close opacity-transition" type="button"
                                         aria-label="close"></button>
                                 <h2 className="popup__title">Вы уверены?</h2>
                                 <form action="src/components/App#" className="popup__form" id="form-confirm" name="confirm" tabIndex="3"
                                       noValidate>
                                     <button type="submit"
                                             className="btn btn_submit btn_type_submit-delete opacity-transition">Да
                                     </button>
                                 </form>
                             </div>
                     </div>

        </>
    )
}

export default PopupWithForm