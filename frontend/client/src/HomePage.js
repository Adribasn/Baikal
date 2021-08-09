import React from 'react';
import HomeCSS from './HomePageStyle.module.css';
import { Link } from 'react-router-dom';
import ColoredLogo from './assets/baikal-colored-logo.svg';
import WhiteLogo from './assets/baikal-white-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlankProfilePicture from './assets/blank-profile-picture.png';

export const HomePage = () => {
    return (
        <div className={HomeCSS.gridContainer}>
            <nav className={HomeCSS.nav}>
                <ul className={HomeCSS.navList}>
                    <li className={HomeCSS.navListItem}><Link><img src={ColoredLogo} className={HomeCSS.navLogo}></img></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navHomeLink}><FontAwesomeIcon icon="campground" className={HomeCSS.navHomeLogo} size='2x'/><span className={[HomeCSS.navHomeText, HomeCSS.navText].join(' ')}>Home</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navNotificationsLink}><FontAwesomeIcon icon="bell" className={HomeCSS.navNotificationsLogo} size='2x'/><span className={[HomeCSS.navNotificationsText, HomeCSS.navText].join(' ')}>Notifications</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navMessagesLink}><FontAwesomeIcon icon="envelope" className={HomeCSS.navMessagesLogo} size='2x'/><span className={[HomeCSS.navMessagesText, HomeCSS.navText].join(' ')}>Messages</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navProfileLink}><FontAwesomeIcon icon="user" className={HomeCSS.navProfileLogo} size='2x'/><span className={[HomeCSS.navUserText, HomeCSS.navText].join(' ')}>Profile</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navWriteLink}><FontAwesomeIcon icon="feather-alt" className={HomeCSS.navWriteLogo} size='2x'/><span className={[HomeCSS.navWriteText, HomeCSS.navText].join(' ')}>Write</span></Link></li>
                </ul>
            </nav>
            <main className={HomeCSS.feedContainer}>
                <header className={HomeCSS.feedHeader}>
                    <img className={HomeCSS.headerProfilePicture} src={BlankProfilePicture}></img><span>Home</span>
                </header>
                <div className={HomeCSS.postWritingContainer}>
                    postWritingContainer
                </div>
                <div className={HomeCSS.userFeed}>
                    userFeed
                </div>
            </main>
        </div>
    )
}