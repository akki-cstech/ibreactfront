import React from 'react'
import styles from '../../CSS/Card.module.css'

const Card = ({ image }) => {
    return (
        <>
            <div className={styles.main_div}>
                <img src={image} alt="" width="100%" height="auto" />
            </div>
        </>
    )
}

export default Card