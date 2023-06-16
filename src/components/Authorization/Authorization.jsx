import React from 'react';
import {useForm} from "react-hook-form";
import styles from './Authorization.module.scss'
import c from 'clsx';
import close from '../../assets/close.png'

const users = [{
    login: 'Admin',
    password: 'qwerty1234',
}]

const Authorization = ({open, setOpen}) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm({

        defaultValues: {
            login: '',
            password: '',
            checkbox: false
        },

        mode: "onChange"
    });

    const onSubmit = (data) => {
        const hasUser = users.find(user => user.login === data.login && user.password === data.password)
        if (hasUser) {
            localStorage.setItem('isAuth', 'true')
            reset()
            setOpen(false)
            alert('You have logged in!')
        } else {
            alert('Authorization error!')
        }
    }

    return (
        <div className={c(styles.modal, open && styles['modal--active'])} onClick={() => setOpen(false)}>

            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>

                <img className={styles.close_modal} src={close} alt="close" onClick={() => setOpen(false)}/>
                <h1 className={styles.modal__header}>
                    Authorization
                </h1>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <label className={styles.field__item}>
                        <input {...register('login',
                            {
                                required: 'Login is required field!',
                            })} type='text' placeholder=' '/>
                        {errors?.login ? <span style={{color: 'red'}}>{errors.login.message}</span> : <span>Login</span>}
                    </label>

                    <label className={styles.field__item}>
                        <input {...register('password',
                            {
                                required: 'Password is required field!',
                            })} type='password' placeholder=' '/>
                        {errors?.password ? <span style={{color: 'red'}}>{errors.password.message}</span> :
                            <span>Password</span>}
                    </label>

                    <label className={styles.form__checkbox}>
                        <input {...register("checkbox")} type="checkbox"/>
                        <span>Remember me on next login</span>
                    </label>

                    <button className={styles.form__button} type='submit'>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Authorization;