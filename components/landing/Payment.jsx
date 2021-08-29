import React from 'react'
import PayCard from './PayCard'
import PayCardTwo from './PayCardTwo'
import PayCardThree from './PayCardThree'

import styles from '../../styles/payment.module.css'

const Payment = () => {
    return (
        <div className={styles.payment}>
            <PayCard />
            <PayCardTwo /> 
            <PayCardThree />
        </div>
    )
}

export default Payment
