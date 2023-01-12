import React, {useState, useEffect} from 'react';
import avatarPath from '../images/avatar.png'
import api from '../utils/api'

export default function Main(props) {

    const [userAvatar, setUserAvatar] = useState('')
    const [userDescription, setUserDescription ] = useState('')
    const [userName, setUserName] = useState('')

    useEffect(() => {
        api.getUser()
            .then((data) => {
                console.log(data)
                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
    }, [])

    return (
        <main className="content">

            <section id="profile" className="profile content__section">

                <span className="profile__avatar-edit-btn" onClick={ props.onEditAvatar }>
                    <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} src={ userAvatar } alt="бюст улыбающегося человека в красной шапке"/>
                </span>

                <div className="profile__elements-wrap">
                    <div className="profile__name-wrap">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="btn profile__btn-edit opacity-transition" type="button"
                                onClick={ props.onEditProfile } aria-label="edit"></button>
                    </div>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button className="btn profile__btn-addplace opacity-transition" type="button"
                        onClick={ props.onAddPlace } aria-label="add"></button>
            </section>

            <section className="elements content__section">
                <ul className="elements__list">

                </ul>
            </section>


        </main>
    )
}