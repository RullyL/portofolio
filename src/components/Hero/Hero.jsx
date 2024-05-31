import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rully Lukmansyah</h1>
        <p className={styles.description}>
          I am a Junior Frontend Web Developer skilled in using HTML, CSS, and JavaScript to create responsive and user-friendly interfaces. I also have experience with frameworks like React.js And Next.Js. If you'd like to learn more, feel free to reach out!
        </p>
        <div style={{ display: 'flex', gap:'20px' }}>
          <a href="mailto:rullylukmansy10@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="/assets/cv/CV_Rully_Lukmansyah.pdf" className={styles.contactBtn}>Donwload Cv Here</a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
