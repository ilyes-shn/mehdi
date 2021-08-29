import React from 'react'
import styles from '../../styles/twogrid.module.css'
import SignUpBtn from '../SignUpBtn';
import Image from 'next/image'

const TwoGrid = () => {
    return (
        <div className={styles.twogrid}>
            <div className={styles.bottom}>
                <h1>Delivering good designs &#128666;&#127788;</h1>
                <h4>With everyone in one place, meetings are fast-paced and high-energy — and every guest feels included and heard.</h4>
                <SignUpBtn />
            </div>
            <Image height='313' width='313' alt='design' src='/images/design.svg'/>
        </div>
    )
}

export default TwoGrid
