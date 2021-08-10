import React from 'react';
import ProfileCSS from './ProfilePageStyle.module.css';
import { Link } from 'react-router-dom';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlankProfilePicture from './assets/blank-profile-picture.png';

export const ProfilePage = () => {
    return (
        <div className={ProfileCSS.gridContainer}>
            <nav className={ProfileCSS.nav}>
                <ul className={ProfileCSS.navList}>
                    <li className={[ProfileCSS.navListItem, ProfileCSS.navLogoListItem].join(' ')}><Link className={ProfileCSS.navLogoLink} to="/home"><img src={ColoredLogo} className={ProfileCSS.navLogo}></img></Link></li>
                    <li className={ProfileCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={ProfileCSS.navHomeLink} to="/home"><FontAwesomeIcon icon="campground" className={ProfileCSS.navHomeLogo} size='2x'/><span className={[ProfileCSS.navHomeText, ProfileCSS.navText].join(' ')}>Home</span></Link></li>
                    <li className={ProfileCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={ProfileCSS.navNotificationsLink} to="/notifications"><FontAwesomeIcon icon="flag" className={ProfileCSS.navNotificationsLogo} size='2x'/><span className={[ProfileCSS.navNotificationsText, ProfileCSS.navText].join(' ')}>Notifications</span></Link></li>
                    <li className={ProfileCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={ProfileCSS.navMessagesLink} to="/messages"><FontAwesomeIcon icon="comments" className={ProfileCSS.navMessagesLogo} size='2x'/><span className={[ProfileCSS.navMessagesText, ProfileCSS.navText].join(' ')}>Messages</span></Link></li>
                    <li className={ProfileCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={ProfileCSS.navProfileLink} to="/:profile"><FontAwesomeIcon icon="user" className={ProfileCSS.navProfileLogo} size='2x'/><span className={[ProfileCSS.navUserText, ProfileCSS.navText].join(' ')}>Profile</span></Link></li>
                    <li className={ProfileCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={ProfileCSS.navWriteLink} to="/home"><FontAwesomeIcon icon="feather-alt" className={ProfileCSS.navWriteLogo} size='2x'/><span className={[ProfileCSS.navWriteText, ProfileCSS.navText].join(' ')}>Write</span></Link></li>
                </ul>
            </nav>
            <main className={ProfileCSS.feedContainer}>
                <header className={ProfileCSS.feedHeader}>
                    <img className={ProfileCSS.headerProfilePicture} src={BlankProfilePicture}></img><span className={ProfileCSS.feedHeaderText}></span>
                </header>
                <div className={ProfileCSS.postWritingContainer}>
                    postWritingContainer
                </div>
                <div className={ProfileCSS.userFeed}>
                    userFeed
                </div>
            </main>
        </div>
    )
}