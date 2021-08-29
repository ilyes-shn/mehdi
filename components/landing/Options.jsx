import React from 'react'
import SmallCard from './SmallCard'
import SmallCardTwo from './SmallCardTwo'
import SmallCardThree from './SmallCardThree'
import styles from '../../styles/options.module.css'

const Options = () => {
    return (
        <div className={styles.options}>
            <SmallCard />
            <SmallCardTwo />
            <SmallCardThree />
        </div>
    )
}

export default Options
