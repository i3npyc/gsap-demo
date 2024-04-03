import styles from './PositionTimeline.module.scss'
import classNames from "classnames";
import {gsap} from 'gsap'
import {useEffect} from "react";


const PositionTimeline = () => {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.timeline({yoyo: true, repeat: -1})
        .to(`.${styles.green}`, {duration: 1, x: 300})
        .to(`.${styles.purple}`, {duration: 1, x: 300}, "+=1")
        .to(`.${styles.blue}`, {duration: 1, x: 300}, "+=1")
    })

    return () => context.revert()
  }, []);

  return (
    <div className="wrapper">
      <h2>PositionTimeline</h2>
      <div className={styles.wrapper}>
        <div className={classNames(styles.box2, styles.green)}/>
        <div className={classNames(styles.box2, styles.purple)}/>
        <div className={classNames(styles.box2, styles.blue)}/>
      </div>
    </div>
  );
};

export default PositionTimeline;
