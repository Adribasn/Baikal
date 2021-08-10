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
                    <li className={[HomeCSS.navListItem, HomeCSS.navLogoListItem].join(' ')}><Link className={HomeCSS.navLogoLink} to="/home"><img src={ColoredLogo} className={HomeCSS.navLogo}></img></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navHomeLink} to="/home"><FontAwesomeIcon icon="campground" className={HomeCSS.navHomeLogo} size='2x'/><span className={[HomeCSS.navHomeText, HomeCSS.navText].join(' ')}>Home</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navNotificationsLink} to="/notifications"><FontAwesomeIcon icon="flag" className={HomeCSS.navNotificationsLogo} size='2x'/><span className={[HomeCSS.navNotificationsText, HomeCSS.navText].join(' ')}>Notifications</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navMessagesLink} to="/messages"><FontAwesomeIcon icon="comments" className={HomeCSS.navMessagesLogo} size='2x'/><span className={[HomeCSS.navMessagesText, HomeCSS.navText].join(' ')}>Messages</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navProfileLink} to="/:profile"><FontAwesomeIcon icon="user" className={HomeCSS.navProfileLogo} size='2x'/><span className={[HomeCSS.navUserText, HomeCSS.navText].join(' ')}>Profile</span></Link></li>
                    <li className={HomeCSS.navListItem}><Link style={{ textDecoration: 'none'}} className={HomeCSS.navWriteLink} to="/home"><FontAwesomeIcon icon="feather-alt" className={HomeCSS.navWriteLogo} size='2x'/><span className={[HomeCSS.navWriteText, HomeCSS.navText].join(' ')}>Write</span></Link></li>
                </ul>
            </nav>
            <main className={HomeCSS.feedContainer}>
                <header className={HomeCSS.feedHeader}>
                    <img className={HomeCSS.headerProfilePicture} src={BlankProfilePicture}></img><span className={HomeCSS.feedHeaderText}>Home</span>
                </header>
                <div className={HomeCSS.postWritingContainer}>
                    <div className={HomeCSS.postInputContainer}>
                        <img className={HomeCSS.postProfilePicture} src={BlankProfilePicture}></img>
                        <input type="text" placeholder="What's happening?" className={HomeCSS.postInput}></input>
                    </div>
                    <button className={HomeCSS.postButton}>Post</button>
                </div>
                <div className={HomeCSS.userFeed}>
                    userFeed
                </div>
            </main>
        </div>
    )
}