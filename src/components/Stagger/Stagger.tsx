import styles from "./Stagger.module.scss";
import classNames from "classnames";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

const Stagger = () => {
  const boxesRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(`.${styles.box3}`, {
        y: 50,
        duration: 1.5,
        stagger: {
          each: 0.1,
          from: "end",
          yoyo: true,
          repeat: -1,
        },
      });
    })

    return () => context.revert();
  }, []);

  useEffect(() => {
    const fadeIn = (targets: gsap.TweenTarget) => gsap.fromTo(targets, { opacity: 0, scale: 0.5 }, {
      opacity: 1,
      scale: 1,
      stagger: {
        each: 0.2,
        from: "start"
      },
    });


    const observer = new IntersectionObserver((entries, self) => {
      const targets = entries.map((entry) => {
        if(entry.isIntersecting) {
          self.unobserve(entry.target);
          return entry.target;
        }
      })

      fadeIn(targets)
    })

    if(boxesRefs.current) {
      boxesRefs.current.forEach((box) => {
        observer.observe(box)
      })
    }

    return () => {
      if(boxesRefs.current) {
        boxesRefs.current.forEach((box) => {
          observer.unobserve(box)
        })
      }
    }

  }, [boxesRefs]);


  return (
    <div className="wrapper">
      <h2>Stagger</h2>
      <div className={styles.wrapper1}>
        <div className={classNames(styles.box3, styles.green)}/>
        <div className={classNames(styles.box3, styles.purple)}/>
        <div className={classNames(styles.box3, styles.blue)}/>
        <div className={classNames(styles.box3, styles.green)}/>
        <div className={classNames(styles.box3, styles.purple)}/>
        <div className={classNames(styles.box3, styles.blue)}/>
        <div className={classNames(styles.box3, styles.green)}/>
        <div className={classNames(styles.box3, styles.purple)}/>
        <div className={classNames(styles.box3, styles.blue)}/>
      </div>

      <div className={styles.wrapperBox}>
        {new Array(25).fill(25).map((_, index) =>
          <div ref={(node) => {
            if (node) {
              boxesRefs.current[index] = node;
            }
          }} key={index} className={classNames(styles.box4, "purple")}/>
        )}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "blue")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "blue")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "blue")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "blue")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "blue")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "blue")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
        {/*<div className={classNames(styles.box4, "purple")}/>*/}
        {/*<div className={classNames(styles.box4, "green")}/>*/}
      </div>
    </div>
  )
};

export default Stagger;
