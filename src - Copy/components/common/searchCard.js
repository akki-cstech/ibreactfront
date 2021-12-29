import React from 'react'
import styles from '../../CSS/Card.module.css'

const searchCard = ({ image }) => {
    return (
        <>
            <div className={styles.main_div}>
                <img src={image} alt="" width="100%" height="100%" />
            </div>
        </>
    )
}

export default searchCard
