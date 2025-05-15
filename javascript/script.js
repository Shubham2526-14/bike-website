// const lenis = new Lenis({
//     smooth: 10,
//     direction: 'vertical',
//     gestureOrientation: 'vertical',
//     smoothTouch: 5,
//     touchMultiplier: 2,
//   });
  
//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }
  
//   requestAnimationFrame(raf);




var trigger = document.getElementById("trigger");
var canvass = document.querySelector(".offcanvass"); 
let closed = document.querySelector(".close");


trigger.addEventListener("click", () => {
    let tl = gsap.timeline();

    tl.to(canvass, {
        zIndex: 1000,
        duration: 0.5
    });
    tl.to(canvass, {
        opacity: 1,
        duration: 1
    });

    gsap.fromTo(".stag", {
         y: 20,
          opacity: 0,
         },
        {
             y: 0,
             opacity: 1,
              stagger: 0.1, 
              delay: 1 
            }
    );

    gsap.fromTo(".stag2",{
         y: 20,
          opacity: 0,
         },
        {
             y: 0,
              opacity: 1, 
              stagger: 0.1,
               delay: 1.3 
            }
    );
});


closed.addEventListener("click", () => {
    let tl = gsap.timeline();

    // Animate out .stag2 and .stag in reverse
    tl.to(".stag2", {
        y: 20,
        opacity: 0,
        stagger: { each: 0.1, from: "end" }, // Reverse stagger
        duration: 0.3
    }, 0); // start at the beginning of the timeline

    tl.to(".stag", {
        y: 20,
        opacity: 0,
        stagger: { each: 0.1, from: "end" },
        duration: 0.3
    }, 0.1); // slight offset from stag2

    // Then fade out and hide the offcanvas
    tl.to(canvass, {
        opacity: 0,
        duration: 0.5
    });

    tl.to(canvass, {
        zIndex: -1,
        duration: 0.1
    });
});


// button


const button = document.querySelector('.button2');
const text = button.querySelector('p');
const logo1 = button.querySelector('.button-logo');

// Hover Enter: Fast & Responsive
button.addEventListener('mouseenter', () => {
  gsap.to(button, {
    '--before-top': '0px',
    duration: 0.30,
    ease: "power4.out",
  });

  gsap.to(button, {
    '--logo2-top': '0px',
    '--logo2-opacity': 1,
    duration: 0.30,
    ease: "power4.out",
  });

  gsap.to(text, {
    y: -50,
    duration: 0.30,
    ease:"power4.out",
  });

  gsap.to(logo1, {
    x:5,
    duration: 0.30,
    ease: "power4.out",
  });
});

// Hover Leave: Fast reset
button.addEventListener('mouseleave', () => {
  gsap.to(button, {
    '--before-top': '50px',
    duration: 0.30,
    ease: "power4.out",
  });

  gsap.to(button, {
    '--logo2-top': '50px',
    '--logo2-opacity': 0,
    duration: 0.30,
    ease: "power4.out",
  });

  gsap.to(text, {
    y: 0,
    duration: 0.30,
    ease: "power4.out",
  });

  gsap.to(logo1, {
    x:0,
    duration: 0.30,
    ease:"power4.out",
  });

  gsap.to(button, {
    x: 0,
    y: 0, 
    duration: 0.30,
    ease: "power4.out",
  });
});







// hero section video

gsap.to(".mask", {
    maskSize: "100%, 100vw 100vh",
    scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "",
        // markers: true,
        pin: true,
        scrub: 1,
    }
})


gsap.from(".video_text h3", {
    y: 50,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".parent",
        start: "top top",
    }
})



// about img


        gsap.to(".about_img", {
  backgroundPositionX: "50%",  // Move horizontally
  backgroundPositionY: "50%",  
//   scale: 1.2,
  y:0,
  // ease: "power4.out",
  scrollTrigger: {
      trigger: ".about_img_parent",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
  }
});




/* packages section */


$(document).ready(function(){
    var owl = $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false, // Disable default navigation arrows
        dots: false, // Disable dots navigation
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 2 },
            1200: {items: 3}
        }
    });
    
    // Custom navigation
    $('.custom-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    
    $('.custom-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});













 // Fade IN background up to 50% of the section
gsap.to(".choose_bg1", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg1",
    start: "top 60%",
    end: "40% 60%", // halfway point of the element
    scrub: true,
    markers: true
  }
});

// Fade OUT background back to white after 50%
gsap.from(".choose_bg1", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg1",
    start: "center center",
    end: "bottom center",
    scrub: true,
    // markers: true
  }
});
gsap.to(".choose_bg2", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg2",
    start: "top 60%",
    end: "40% 60%", // halfway point of the element
    scrub: true,
    markers: true
  }
});

// Fade OUT background back to white after 50%
gsap.from(".choose_bg2", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg2",
    start: "center center",
    end: "bottom center",
    scrub: true,
    // markers: true
  }
});
gsap.to(".choose_bg3", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg3",
    start: "top 60%",
    end: "40% 60%", // halfway point of the element
    scrub: true,
    markers: true
  }
});

// Fade OUT background back to white after 50%
gsap.from(".choose_bg3", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg3",
    start: "center center",
    end: "bottom center",
    scrub: true,
    // markers: true
  }
});
gsap.to(".choose_bg4", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg4",
    start: "top 60%",
    end: "40% 60%", // halfway point of the element
    scrub: true,
    markers: true
  }
});

// Fade OUT background back to white after 50%
gsap.from(".choose_bg4", {
  "--bg-color": "#ffffff5c",
  scrollTrigger: {
    trigger: ".choose_bg4",
    start: "center center",
    end: "bottom center",
    scrub: true,
    // markers: true
  }
});
