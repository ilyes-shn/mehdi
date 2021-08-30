import React from 'react'
import styles from '../../styles/twogrid.module.css'
import SignUpBtn from '../SignUpBtn';
import Image from 'next/image'

const TwoGrid = () => {
    return (
        <div className={styles.twogrid}>
            <div className={styles.first}>
                <h1>Bring meeting & workshops online in a big way</h1>
                <h4>Creative energy that you can feel, presentations that just flow, and teams that connect and collaborate like humans — bring the in-person experience online with Miro, whether you’re running a brainstorm or facilitating a workshop.</h4>
                <SignUpBtn />
            </div>
            
            <Image height='313' width='313' alt='gatsby' src='/images/gatsby.svg'/>
            
        </div>
    )
}

export default TwoGrid
