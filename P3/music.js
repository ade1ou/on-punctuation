document.addEventListener("DOMContentLoaded", function() {
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  toggleBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.classList.toggle('item-hidden');
      

      if (!content.classList.contains('item-hidden')) {
        // If visible, create the p5.js canvas
        // createP5Canvas(content.querySelector('.canvas-container'));
        createP5Canvas(content.querySelector('.left-canvas .canvas-container'));
        createP5Canvas(content.querySelector('.right-canvas .canvas-container'));
      }
    });
  });

  // Function to create p5.js canvas
  function createP5Canvas(container) {
    let mic, fft;

    function sketch(p) {
      p.setup = function() {
        p.createCanvas(300, 200);
        p.noFill();

        mic = new p5.AudioIn();
        mic.start();
        fft = new p5.FFT();
        fft.setInput(mic);
      }

      p.draw = function() {
        p.background(255);

        let spectrum = fft.analyze();
        p.stroke(255, 0, 0); 
        p.strokeWeight(1);    

        p.beginShape();
        for (let i = 0; i < spectrum.length; i++) {
          p.vertex(i, p.map(spectrum[i], 0, 255, p.height, 0));
        }
        p.endShape();
      }
    }

    new p5(sketch, container);
  }
});

