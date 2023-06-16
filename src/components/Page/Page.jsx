import React from 'react';
import styles from './Page.module.scss'
import Header from "./Header/Header";
import Body from "./Body/Body";

const Page = () => {
    return (
        <div className={styles.page}>
            <Header/>
            <Body/>
        </div>
    );
};

export default Page;