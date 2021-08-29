import React from 'react'
import styles from '../../styles/twogrid.module.css'
import SignUpBtn from '../SignUpBtn';

const TwoGrid = () => {
    return (
        <div className={styles.twogrid}>
            <div className={styles.first}>
                <h1>Bring meeting & workshops online in a big way</h1>
                <SignUpBtn />
            </div>
            <div className={styles.second}>
                <h4>Creative energy that you can feel, presentations that just flow, and teams that connect and collaborate like humans — bring the in-person experience online with Miro, whether you’re running a brainstorm or facilitating a workshop.</h4>
            </div>
        </div>
    )
}

export default TwoGrid
