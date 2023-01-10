import React from 'react';

function handleEditAvatarClick() {
    return document.querySelector('#overlay_avatar').classList.add('popup_opened')
}
function handleEditProfileClick() {
    return document.querySelector('#overlay_edit').classList.add('popup_opened')
}
function handleAddPlaceClick() {
    return document.querySelector('#overlay_add-place').classList.add('popup_opened')
}


export default function Main(props) {
    return (
        <main className="content">

            <section id="profile" className="profile content__section">

                <span className="profile__avatar-edit-btn" onClick={handleEditAvatarClick}>
                    <img className="profile__avatar" src="<%=require('./images/avatar.png')%>"
                         alt="бюст улыбающегося человека в красной шапке"/>
                </span>

                <div className="profile__elements-wrap">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">Жак-Ив Кусто....</h1>
                        <button className="btn profile__btn-edit opacity-transition" type="button"
                                onClick={handleEditProfileClick} aria-label="edit"></button>
                    </div>
                    <p className="profile__job">..</p>
                </div>
                <button className="btn profile__btn-addplace opacity-transition" type="button"
                        onClick={handleAddPlaceClick} aria-label="add"></button>
            </section>

            <section className="elements content__section">
                <ul className="elements__list">

                </ul>
            </section>


            <div className="popup popup_img-bg" id="overlay_img-zoom">
                <div className="popup__container-img popup__container-img_type_zoomer">
                    <button
                        className="popup__close-img popup__btn-close opacity-transition opacity-transition_type_middle"
                        type="button"></button>
                    <img className="popup__img" src="src/components/App#" alt="#"/>
                    <h3 className="popup__subtitle"></h3>
                </div>
            </div>

        </main>
    )
}