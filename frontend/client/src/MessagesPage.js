import React from 'react';
import MessagesCSS from './MessagesPageStyle.module.css';
import { Link } from 'react-router-dom';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlankProfilePicture from './assets/blank-profile-picture.png';

export const MessagesPage = () => {
    return (
        <div className={MessagesCSS.gridContainer}>
            <nav className={MessagesCSS.nav}>
                <ul className={MessagesCSS.navList}>
                    <li className={[MessagesCSS.navListItem, MessagesCSS.navLogoListItem].join(' ')}><Link className={MessagesCSS.navLogoLink} to="/home"><img src={ColoredLogo} className={MessagesCSS.navLogo}></img></Link></li>
                    <li className={MessagesCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={MessagesCSS.navHomeLink} to="/home"><FontAwesomeIcon icon="campground" className={MessagesCSS.navHomeLogo} size='2x'/><span className={[MessagesCSS.navHomeText, MessagesCSS.navText].join(' ')}>Home</span></Link></li>
                    <li className={MessagesCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={MessagesCSS.navNotificationsLink} to="/notifications"><FontAwesomeIcon icon="flag" className={MessagesCSS.navNotificationsLogo} size='2x'/><span className={[MessagesCSS.navNotificationsText, MessagesCSS.navText].join(' ')}>Notifications</span></Link></li>
                    <li className={MessagesCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={MessagesCSS.navMessagesLink} to="/messages"><FontAwesomeIcon icon="comments" className={MessagesCSS.navMessagesLogo} size='2x'/><span className={[MessagesCSS.navMessagesText, MessagesCSS.navText].join(' ')}>Messages</span></Link></li>
                    <li className={MessagesCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={MessagesCSS.navProfileLink} to="/home"><FontAwesomeIcon icon="user" className={MessagesCSS.navProfileLogo} size='2x'/><span className={[MessagesCSS.navUserText, MessagesCSS.navText].join(' ')}>Profile</span></Link></li>
                    <li className={MessagesCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={MessagesCSS.navWriteLink} to="/home"><FontAwesomeIcon icon="feather-alt" className={MessagesCSS.navWriteLogo} size='2x'/><span className={[MessagesCSS.navWriteText, MessagesCSS.navText].join(' ')}>Write</span></Link></li>
                </ul>
            </nav>
            <main className={MessagesCSS.feedContainer}>
                <header className={MessagesCSS.feedHeader}>
                    <img className={MessagesCSS.headerProfilePicture} src={BlankProfilePicture}></img><span className={MessagesCSS.feedHeaderText}>Messages</span>
                </header>
                <div className={MessagesCSS.postWritingContainer}>
                    postWritingContainer
                </div>
                <div className={MessagesCSS.userFeed}>
                    userFeed
                </div>
            </main>
        </div>
    )
}