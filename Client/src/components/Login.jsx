import React from 'react'
import styles from './Form/Form.module.css'
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>
                <Link className={styles.link} to={'/home'}>Home</Link>
            </button>
        </div>
    )
}

export default Login