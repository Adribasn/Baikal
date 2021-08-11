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
            <main className={ProfileCSS.profileContainer}>
                <header className={ProfileCSS.profileHeader}>
                    <img className={ProfileCSS.headerProfilePicture} src={BlankProfilePicture}></img><span className={ProfileCSS.profileHeaderText}>USERNAME-PLACEHOLDER</span>
                </header>
                <div className={ProfileCSS.userProfileContainer}>
                    <div className={ProfileCSS.userProfile}>
                        <div className={ProfileCSS.profileBannerContainer}>
                            <div className={ProfileCSS.profileBannerDiv}>
                                
                            </div>
                        </div>
                        <div className={ProfileCSS.profilePictureContainer}>
                            <div className={ProfileCSS.profilePictureDiv}>
                                <img src={BlankProfilePicture} className={ProfileCSS.profilePicture}></img>
                            </div>
                        </div>
                        <div className={ProfileCSS.profileBioContainer}>
                            <button className={ProfileCSS.editProfileButton}>Edit</button>
                            <h1 className={ProfileCSS.profileUserNameText}>USERNAME-PLACEHOLDER</h1>
                            <div className={ProfileCSS.profileBioDiv}>
                                <p className={ProfileCSS.profileBio}>BIO-PLACEHOLDER</p>
                            </div>
                            
                            {/*
                            <div className={ProfileCSS.profileCountContainer}>
                                <div className={ProfileCSS.profileFollowingCountCountainer}>
                                    <h3 className={ProfileCSS.profileFollowingCount}>0</h3>
                                    <h3 className={ProfileCSS.profileFollowingText}>Following</h3>
                                </div>
                            
                                <div className={ProfileCSS.profileFollowersCountCountainer}>
                                    <h3 className={ProfileCSS.profileFollowersCount}>0</h3>
                                    <h3 className={ProfileCSS.profileFollowersText}>Followers</h3>
                                </div>
                            </div>
                            */}
                        </div>
                    </div>
                    <div className={ProfileCSS.userPostsContainer}>
                        userPosts
                    </div>
                </div>
            </main>
        </div>
    )
}