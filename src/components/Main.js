import React from 'react';
import avatarPath from '../images/avatar.png'

export default function Main(props) {
    return (
        <main className="content">

            <section id="profile" className="profile content__section">

                <span className="profile__avatar-edit-btn" onClick={ props.onEditAvatar }>
                    <img className="profile__avatar" src={ avatarPath } alt="бюст улыбающегося человека в красной шапке"/>
                </span>

                <div className="profile__elements-wrap">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">Жак-Ив Кусто....</h1>
                        <button className="btn profile__btn-edit opacity-transition" type="button"
                                onClick={props.onEditProfile} aria-label="edit"></button>
                    </div>
                    <p className="profile__job">..</p>
                </div>
                <button className="btn profile__btn-addplace opacity-transition" type="button"
                        onClick={props.onAddPlace} aria-label="add"></button>
            </section>

            <section className="elements content__section">
                <ul className="elements__list">

                </ul>
            </section>


        </main>
    )
}