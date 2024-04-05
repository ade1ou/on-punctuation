gsap.timeline({
    scrollTrigger: {
      trigger: ".grid-container",
      start: "top top",
      end: () => innerHeight * 4,
      scrub: true,
      pin: ".grid",
      anticipatePin: 1
    }
  })
  .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
  .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
  .from(".gridLayer", {
    scale: 3.3333,
    ease: "none",
  });
  
  
  const bigImg = new Image;    
  bigImg.addEventListener("load", function () {
    gsap.to(".centerPiece .gridBlock", {autoAlpha: 1, duration: 0.5});
  });
  
  bigImg.src = "./Home Images test/image-1.jpg";
  
  const gridBlocks = document.querySelectorAll('.gridBlock');
  
  gridBlocks.forEach((block, index) => {
    block.style.backgroundImage = `url('Home Images test/image-${index + 1}.jpg')`;
  });
  