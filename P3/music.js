document.addEventListener("DOMContentLoaded", function() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
  
    toggleBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('item-hidden');
      });
    });
  });
  