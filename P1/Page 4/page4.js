gsap.registerPlugin(ScrollTrigger);

var panels = gsap.utils.toArray(".panel");

panels.pop(); 
panels.forEach((panel, i) => {
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: panel,
      start: "bottom bottom",
      pinSpacing: false,
      pin: true,
      scrub: true,
  
      onRefresh: () => gsap.set(panel, {transformOrigin: "center " + (panel.offsetHeight - window.innerHeight / 2) + "px"})
    }
  });
  
  tl.fromTo(panel, 1, {y:0, rotate:0, scale:1, opacity:1}, {y:0, rotateX:0, scale:0.5, opacity:0.5}, 0)
    .to(panel, 0.1, {opacity:0})
    
});
