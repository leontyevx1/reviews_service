import React, {useEffect, useState} from 'react';
import Button from "../../../UI/Button/Button";
import styles from './Body.module.scss'
import axios from "axios";
import Card from "./Card/Card";
import Preloader from "../../../UI/Preloader/Preloader";

const Body = () => {
    const [start, setStart] = useState(0);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getComments = (start) => {
        setIsLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=3`).then((result) => {
            setComments([...comments, ...result.data])
            setIsLoading(false)
        })
    }

    useEffect(() => {
        getComments(start)
        setStart(val => val + 3)
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.cardsField}>
                {comments?.map(c => <Card key={c.id} comment={c}/>)}
            </div>
            {!isLoading ?
                <Button onClick={() => {
                    getComments(start);
                    setStart(val => val + 3)
                }}>
                    More
                </Button>
                : <Preloader/>
            }
        </div>
    );
};

export default Body;