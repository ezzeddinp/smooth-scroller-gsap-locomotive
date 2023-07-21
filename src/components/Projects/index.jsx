import styles from './style.module.css'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
    {
        title: "Salar de Atacana",
        src: "8.JPG"
    },
    {
        title: "Vale de la luna",
        src: "5.JPG"
    },
    {
        title: "Toba Lake",
        src: "2.jpg"
    },
    {
        title: "Miniques Lagoons",
        src: "1.jpg"
    },
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin:true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p> Per aspera ad astra, Audentes Fortuna luvat, In vino veritas</p>
                </div>
                <div className={styles.column}>
                    <p>Ecclesia haec continet ut, cum quis sub vino vel iis quae inebriant, veritas facilior detegi vel exponi possit.
                        Terminus hic significat quod, cum quis temulentus vel sopitus sit, verius et apertius de cogitationibus, sensibus,
                        vel rebus, quae fortasse apertis sensibus in statu vigili non dicuntur, esse possit.</p>
                </div>
            </div>
            <div className={styles.projectList}>
                {
                    projects.map((project, index) => {
                        return (
                            <div className="styles projectEl" key={`p_${index}`} onMouseOver={() => {setSelectedProject(index)}}>
                                <h2>{project.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}