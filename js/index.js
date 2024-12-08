
//* animation in count section

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

    function animateCounters() {
        let counters = document.querySelectorAll('.singl-counter h3');
        
        counters.forEach(counter => {
          let target = +counter.innerText;
          counter.innerText = '0';
          
         let updateCounter = () => {
            let current = +counter.innerText;
            let increment = target / 100; 
    
            if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCounter, 20); 
            } else {
              counter.innerText = target;
            }
          };
          
          updateCounter();
        });
      }
    
    document.addEventListener('DOMContentLoaded', animateCounters);

    ////////////////////////////////////////////////////&

      //* animation in header section
    document.addEventListener("DOMContentLoaded", function () {
      const typedElement = document.getElementById("typed");
      const words = ["Designer", "Developer", "Freelancer", "Photographer"];
      const typingSpeed = 150; 
      const eraseSpeed = 100;
      const delayBetweenWords = 2000; 
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
    
      function type() {
        const currentWord = words[wordIndex];
        if (!isDeleting && charIndex < currentWord.length) {
          // &Add next character
          typedElement.textContent += currentWord.charAt(charIndex);
          charIndex++;
          setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
          //^ Remove the last character
          typedElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, eraseSpeed);
        } else {
          // *Move to next word or start erasing
          if (!isDeleting) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords);
          } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
          }
        }
      }
    
      type();
    });
    
   ////////////////////////////////////////////////////&

     //* underline in nav section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
 
        const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]:not(.dropdown-toggle)`);

        if (entry.isIntersecting) {
          
            navLink.classList.add("active");
        } else {
           
            navLink.classList.remove("active");
        }
    });
}, {
    threshold: 0.1 
});

sections.forEach(section => {
    observer.observe(section);
});


