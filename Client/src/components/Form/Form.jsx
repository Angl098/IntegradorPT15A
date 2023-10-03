import { useState } from "react";
import styles from './Form.module.css' 
import validator from "./validation";

const Form = (props) => {
    const {login} = props 
    const [errors, setErrors] = useState({})

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    }) 
    
    const handleChange = (e) =>{
        setErrors(validator({...userData, [e.target.name]: e.target.value}))
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }
    return (
    <div className={styles.formContainer}>
    <div className={styles.formCard}>
        <form className={styles.formDetail} onSubmit={handleSubmit}>
            <div>
                <label> Email: </label>
                <input className={styles.input} name='email' type="text" placeholder='Email...' value={userData.email} onChange={handleChange} />
                {errors.e1 ? (
                <p>{errors.e1}</p>
                ) : errors.e2 ? (
                    <p>{errors.e2}</p>
                    ) : (
                        <p>{errors.e3}</p>
                )}
            </div>
                <div>
                    <label> password: </label>
                    <input className={styles.input} name='password' type="password" placeholder='Password...' value={userData.password} onChange={handleChange}/>
                    {errors.p1 ? (
                        <p>{errors.p1}</p>
                    ) : (
                        <p>{errors.p2}</p>
                    )}
                </div>
            <div className={styles.boton}>
                <button className={styles.btn} type='submit' > SUBMIT </button>
            </div>
        </form>
    </div>
    </div>
    )
}

export default Form