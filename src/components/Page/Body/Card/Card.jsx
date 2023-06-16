import React, {useEffect, useState} from 'react';
import styles from "./Card.module.scss";
import star from '../../../../assets/star.png'
import Button from "../../../../UI/Button/Button";
import axios from "axios";
import Preloader from "../../../../UI/Preloader/Preloader";

const Card = ({comment}) => {

    const [photoUrl, setPhotoUrl] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [rating, setRating] = useState('')

    const ratings = ['1','2','3','4','5'];

    useEffect(() => {
        if (comment.id) {
            setIsLoading(true)
            axios.get(`https://jsonplaceholder.typicode.com/photos/${comment.id}`).then((result) => {
                setPhotoUrl(result.data.url)
                setIsLoading(false)
            })
        }
        setRating(ratings[(Math.floor(Math.random() * ratings.length))])
    },[comment.id])

    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>

                {!isLoading
                    ? <img className={styles.bg_image} src={photoUrl} alt=""/>
                    : <div className={styles.bg_image}><Preloader/></div>}

                <div className={styles.content}>

                    <div className={styles.column}>

                        <p className={styles.column__title}>ELIZEO@GARDNER.BIZ</p>
                        <div className={styles.column__rating}>
                            <div>{rating}</div>
                            <div><img src={star} alt="star"/></div>
                        </div>

                    </div>

                    <div className={styles.description}>
                        <div className={styles.description__copy}>
                            {comment.body}
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <Button>Visit comment</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;