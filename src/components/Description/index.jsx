import React from 'react';
import styles from "./style.module.css";
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {
    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"];

    return (
        <div className={styles.description}>
            {phrases.map((photo, index) => {
                return (
                    <AnimatedText key={index}>{photo}</AnimatedText>
                )
            })}
        </div>
    );
};


function AnimatedText({ children }) {

    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=600px bottom",
                scrub: true
            },
            left: "-200px",
            opacity: 0
        })
    }, []);

    return (
        <p ref={text}>{children}</p>
    )
}
