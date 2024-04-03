import styles from "./TimelineTween.module.scss";
import classNames from "classnames";
import {useEffect} from "react";
import {gsap} from "gsap"

const TimelineTween = () => {
    useEffect(() => {
        const context = gsap.context(() => {
            const timeline = gsap.timeline();
            timeline
                .to(`.${styles.green}`, { duration: 2, x: 100 })
                .to(`.${styles.purple}`, { duration: 1, y: 200 })
                .to(`.${styles.blue}`, { duration: 3, rotation: 360 });
        })

        return () => context.revert()
    }, []);
    return (
        <div className="wrapper">
            <h2>TimelineTween</h2>
            <div className={styles.wrapper}>
                <div className={classNames(styles.box1, styles.green)}/>
                <div className={classNames(styles.box1, styles.purple)}/>
                <div className={classNames(styles.box1, styles.blue)}/>
            </div>
        </div>
    );
};

export default TimelineTween;
