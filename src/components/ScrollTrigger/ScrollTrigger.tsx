import styles from "./ScrollTrigger.module.scss";
import classNames from "classnames";
import {gsap} from "gsap";
import { ScrollTrigger as GsapScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(GsapScrollTrigger)


const ScrollTrigger = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const context = gsap.context(() => {
      gsap.to(`.${styles.box5}`, {
        xPercent: 100,
        rotation: 360,
        duration: 2,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom",
          scrub: true,
          markers: true,
        }
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: "top",
          end: "bottom",
          scrub: true,
          pin: true,
        }})
        .to(`.${styles.box6}`, {
          top: "-100%",
          duration: 2,
        })
        .to(`.${styles.text}`,
        {
          opacity: 1,
          duration: 1
        }, "<")
    })

    return () => context.revert()
  }, []);
  return (
    <div className="wrapper">
      <h2>ScrollTrigger</h2>
      <div className={styles.wrapper2} ref={wrapperRef}>
        <div className={classNames(styles.box5, "green")}/>
        <div className={classNames(styles.box5, "purple")}/>
        <div className={classNames(styles.box5, "blue")}/>
      </div>

      <div className={styles.pinWrapper} ref={pinWrapperRef}>
        <p className={styles.text}>Pin</p>
        <div className={classNames(styles.box6, "green")}/>
        <div className={classNames(styles.box6, "purple")}/>
        <div className={classNames(styles.box6, "blue")}/>
      </div>
    </div>
  );
};

export default ScrollTrigger;
