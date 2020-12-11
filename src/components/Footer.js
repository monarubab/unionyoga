import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                Jetzt Newsletter abonnieren.
                </p>
                <p className="footer-subscription-text">
                    Du erhälst regelmäßig Tipps zu den Themen Yoga und Meditation.
                </p>
                <div>
                    <form>
                        <input
                            className="footer-input"
                            type="email"
                            name="email"
                            placeholder="Deine Email-Adresse"
                        />
                        <Button buttonStyle='btn--outline'>Anmelden</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Impressum</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Datenschutz</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>AGB</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Kontakt</h2>
                        <Link to='/sign-up'>Impressum</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Datenschutz</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>AGB</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Impressum</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Datenschutz</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>AGB</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Kontakt</h2>
                        <Link to='/sign-up'>Impressum</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Datenschutz</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>AGB</Link>
                    </div>
                </div>
                <section className="social-media">
                    <div className="social-media-wrap">
                        <div className="footer-logo">
                            <Link to="/" className="social-logo">
                                Union Yoga <i className="fa fa-heart"></i>
                            </Link>
                        </div>
                        <div className="social-icons">
                            <Link
                                className="social-icon-link facebook"
                                to='/'
                                targat='_blank'
                                arial-label='Facebook'
                            >
                                <i className="fa fa-facebook"></i>
                            </Link>
                            <Link
                                className="social-icon-link instagram"
                                to='/'
                                targat='_blank'
                                arial-label='Instagram'
                            >
                                <i className="fa fa-instagram"></i>
                            </Link>
                            <Link
                                className="social-icon-link youtube"
                                to='/'
                                targat='_blank'
                                arial-label='Youtube'
                            >
                                <i className="fa fa-youtube"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;