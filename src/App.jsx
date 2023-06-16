import React from 'react';
import Page from "./components/Page/Page";
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.wrapper}>
          <Page/>
        </div>
    );
};

export default App;