import React from 'react'
import styles from '../../styles/card.module.css'
import SignUpBtn from '../SignUpBtn';

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.bottom}>
                <h1>Delivering good designs &#128666;&#127788;</h1>
                <h4>With everyone in one place, meetings are fast-paced and high-energy — and every guest feels included and heard.</h4>
                <SignUpBtn />
            </div>
        </div>
    )
}

export default Card
