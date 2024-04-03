import {gsap} from 'gsap'
import styles from './BasicTween.module.scss'
import {useEffect} from "react";
import classNames from 'classnames'

const BasicTween = () => {
    useEffect(() => {
        const context = gsap.context(() => {
            gsap.to(`.${styles.green}`, {rotation: 360, x: 100, duration: 1});

            gsap.from(`.${styles.purple}`, {rotation: -360, x: -100, duration: 1});

            gsap.fromTo(`.${styles.blue}`, {x: -100},{rotation: 360, x: 100, duration: 1});
        })

        return () => context.revert()
    }, []);

    return (
        <div className="wrapper">
            <h2>BasicTween</h2>
            <div className={styles.wrapper}>
                <div className={classNames(styles.box, styles.green)}/>
                <div className={classNames(styles.box, styles.purple)}/>
                <div className={classNames(styles.box, styles.blue)}/>
            </div>
        </div>
    );
};

export default BasicTween;
