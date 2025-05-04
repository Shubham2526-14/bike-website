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
