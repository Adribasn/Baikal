import React from 'react';
import NotificationsCSS from './NotificationsPageStyle.module.css';
import { Link } from 'react-router-dom';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlankProfilePicture from './assets/blank-profile-picture.png';

export const NotificationsPage = () => {
    return (
        <div className={NotificationsCSS.gridContainer}>
            <nav className={NotificationsCSS.nav}>
                <ul className={NotificationsCSS.navList}>
                    <li className={[NotificationsCSS.navListItem, NotificationsCSS.navLogoListItem].join(' ')}><Link className={NotificationsCSS.navLogoLink} to="/home"><img alt="profilepicture" src={ColoredLogo} className={NotificationsCSS.navLogo}></img></Link></li>
                    <li className={NotificationsCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={NotificationsCSS.navHomeLink} to="/home"><FontAwesomeIcon icon="campground" className={NotificationsCSS.navHomeLogo} size='2x'/><span className={[NotificationsCSS.navHomeText, NotificationsCSS.navText].join(' ')}>Home</span></Link></li>
                    <li className={NotificationsCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={NotificationsCSS.navNotificationsLink} to="/notifications"><FontAwesomeIcon icon="flag" className={NotificationsCSS.navNotificationsLogo} size='2x'/><span className={[NotificationsCSS.navNotificationsText, NotificationsCSS.navText].join(' ')}>Notifications</span></Link></li>
                    <li className={NotificationsCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={NotificationsCSS.navMessagesLink} to="/messages"><FontAwesomeIcon icon="comments" className={NotificationsCSS.navMessagesLogo} size='2x'/><span className={[NotificationsCSS.navMessagesText, NotificationsCSS.navText].join(' ')}>Messages</span></Link></li>
                    <li className={NotificationsCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={NotificationsCSS.navProfileLink} to="/profile"><FontAwesomeIcon icon="user" className={NotificationsCSS.navProfileLogo} size='2x'/><span className={[NotificationsCSS.navUserText, NotificationsCSS.navText].join(' ')}>Profile</span></Link></li>
                    <li className={NotificationsCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={NotificationsCSS.navWriteLink} to="/home"><FontAwesomeIcon icon="feather-alt" className={NotificationsCSS.navWriteLogo} size='2x'/><span className={[NotificationsCSS.navWriteText, NotificationsCSS.navText].join(' ')}>Write</span></Link></li>
                </ul>
            </nav>
            <main className={NotificationsCSS.notificationsContainer}>
                <header className={NotificationsCSS.notificationsHeader}>
                    <img className={NotificationsCSS.headerProfilePicture} src={BlankProfilePicture}></img><span className={NotificationsCSS.notificationsHeaderText}>Notifications</span>
                </header>
                <div className={NotificationsCSS.userNotifications}>
                    userNotifications
                </div>
            </main>
        </div>
    )
}