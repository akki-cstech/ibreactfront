import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../CSS/Card.module.css'

const Card = ({ image, link, text }) => {
    return (
        <>
            <div className={styles.main_div}>

                <div  >

                    <Link to={link} className={styles.Link}>

                        <img className={styles.imgTag} src={image} alt="" width="100%" height="auto" />

                        <div className={styles.labelDiv}>

                            <h4 className={styles.hoverText}>{text}</h4>

                        </div>

                    </Link>

                </div>

            </div>
        </>
    )
}

export default Card
