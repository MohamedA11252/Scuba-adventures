import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initPageAnimations = () => {
  const fadeUps = document.querySelectorAll("[data-animate='fade-up']");
  fadeUps.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%"
        }
      }
    );
  });

  const hero = document.querySelector("[data-animate='hero']");
  if (hero) {
    gsap.fromTo(
      hero,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }
};
