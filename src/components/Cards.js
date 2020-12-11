import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Du bist eingeladen Yoga kennenzulernen.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='./images/img-9.jpg'
                            text='Prävention: "vorbeugen ist besser als heilen"'
                            label='Klangyoga'
                            path='/courses'
                        />
                        <CardItem
                            src='./images/img2.jpg'
                            text='Die innere Mitte körperlich wie auch seelich wird gestärkt'
                            label='Yin&Yang'
                            path='/courses'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-3.jpg'
                            text='Schnupperstunden sind in jedem der Kurse möglich'
                            label='Gruppenunterricht'
                            path='/courses'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Glück, Gesundheit, Selbstliebe, Kreativität'
                            label='Über Union Yoga'
                            path='/shop'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Warum wirkt Yoga?'
                            label='Blog'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards