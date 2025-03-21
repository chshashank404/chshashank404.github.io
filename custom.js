// Navbar burger toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
    var burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if (burgers.length > 0) {
      burgers.forEach(function(el) {
        el.addEventListener('click', function () {
          var target = el.dataset.target;
          var $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
  
  // UFO Escape Code
  document.addEventListener("DOMContentLoaded", function() {
    const footer = document.getElementById("footer");
    const ufo = document.getElementById("ufo");
  
    function moveUFO() {
      const footerRect = footer.getBoundingClientRect();
      const newLeft = Math.random() * (footerRect.width - ufo.offsetWidth);
      const newTop = Math.random() * (footerRect.height - ufo.offsetHeight);
      ufo.style.left = newLeft + "px";
      ufo.style.top = newTop + "px";
    }
  
    // When mouse moves over footer, check distance to UFO and move if too close
    footer.addEventListener("mousemove", function(e) {
      const ufoRect = ufo.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(e.clientX - (ufoRect.left + ufoRect.width / 2), 2) +
        Math.pow(e.clientY - (ufoRect.top + ufoRect.height / 2), 2)
      );
      if (distance < 50) {  // Move UFO if cursor is within 50px
        moveUFO();
      }
    });
  
    // Initial UFO positioning
    moveUFO();
  
    // Optionally, reposition UFO every 5 seconds
    setInterval(moveUFO, 5000);
  });
  