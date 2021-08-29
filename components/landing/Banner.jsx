import React from 'react'
import SignUpBtn from '../SignUpBtn';
import styles from '../../styles/banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1>Start building your app.</h1>
            <h2>Now open in beta!</h2>
            <SignUpBtn />
        </div>
    )
}

export default Banner
