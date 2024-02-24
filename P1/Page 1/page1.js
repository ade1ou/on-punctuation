gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    pinSpacing: false,
    scrub: 0.5,
    start: "top top", 
  }
});

gsap.utils.toArray(".stack").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    pin: true, 
    pinSpacing: false,
    markers: true
  });
});
