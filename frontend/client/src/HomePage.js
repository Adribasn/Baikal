import React from 'react';
import HomeCSS from './HomePageStyle.module.css';
import { Link } from 'react-router-dom';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {
    return (
        <div className={HomeCSS.gridContainer}>
            <nav className={HomeCSS.nav}>
                Nav
                {/*
                <ul>
                    <li><Link><img src={ColoredLogo} className={HomeCSS.navLogo}></img></Link></li>
                    <li><Link><span className={HomeCSS.navHomeText}>Home</span><FontAwesomeIcon icon="campground"/></Link></li>
                    <li><Link><span className={HomeCSS.navNotificationsText}>Notifications</span><FontAwesomeIcon icon="bell"/></Link></li>
                    <li><Link><span className={HomeCSS.navMessagesText}>Messages</span><FontAwesomeIcon icon="envelope"/></Link></li>
                    <li><Link><span className={HomeCSS.navUserText}>Profile</span><FontAwesomeIcon icon="user"/></Link></li>
                    <li><Link><span className={HomeCSS.navTweetText}>Tweet</span><FontAwesomeIcon icon="feather-alt"/></Link></li>
                </ul>
                */}
            </nav>
            <main className={HomeCSS.feed}>
                Feed
            </main>
        </div>
    )
}