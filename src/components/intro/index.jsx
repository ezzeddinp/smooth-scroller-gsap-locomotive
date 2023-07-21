"use client";

import styles from '../intro/style.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react'; // recommended by gsap to implemented in reactjs

export default function Intro() {

    // using useRef to make the 2 element be able to animate it
    // these r the 2 element that were targeted
    const backgroundImage = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top",
                end: "+=500px",
                scrub: "true",
                markers: true
            }
        })

        timeline
            .from(backgroundImage.current, { clipPath: "inset(15%)" })
            .to(introImage.current, { height: "240px" }, 0)
    }, []);

    return (
        <div className={styles.intro}>
            <div ref={backgroundImage} className={styles.backgroundImage}>
                <Image
                    src={"/images/10.JPG"}
                    fill={true}
                    alt="background image"
                />
            </div>

            <div className={styles.introContainer}>
                {/* data-scroll data-scroll-speed="0.3" */}
                <div
                    ref={introImage}
                    data-scroll data-scroll-speed="0.3"
                    className={styles.introImage}>
                    <Image
                        src={"/images/3.png"}
                        width={250}
                        height={375}
                        alt="background image"
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7">Smooth scroll</h1>
            </div>
        </div>
    )
}
