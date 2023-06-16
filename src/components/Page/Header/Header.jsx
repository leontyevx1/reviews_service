import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss'
import Button from "../../../UI/Button/Button";
import Authorization from "../../Authorization/Authorization";

const Header = () => {

    const [isAuth, setIsAuth] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('isAuth'))) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [localStorage.getItem('isAuth')])

    return (
        <div className={styles.header_container}>

            <div className={styles.header_container__nav}>

                <Button onClick={() => {
                    if (isAuth) {
                        localStorage.removeItem('isAuth')
                        setIsAuth(false)
                        alert('You are out!')
                    } else {
                        setOpen(true)
                    }
                }}>{isAuth ? 'Logout' : 'Sigh In'}
                </Button>

            </div>

            <Authorization open={open} setOpen={setOpen}/>

        </div>
    );
};

export default Header;