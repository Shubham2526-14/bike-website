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





  //  packages section


$(document).ready(function(){
    var owl = $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    // stagePadding: 40, // This shows part of the next/previous item
    responsive: {
        0: {
            items: 1,
            stagePadding: 30 // Adjust this value to control how much of the next item shows
        },
        600: {
            items: 2,
            stagePadding: 0
        },
        1000: {
            items: 2,
            stagePadding: 0
        },
        1200: {
            items: 3,
            stagePadding: 0
        }
    }
});

    
    // Custom navigation
    $('.custom-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    
    $('.custom-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });


     // why choose us



window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);


  gsap.to(".choose_bg1 img", {
    scale: 1.1,
    rotate: "2deg",
    ease: "back.out(1)",
    scrollTrigger: {
        trigger: ".choose_bg1",
        start: "top center", 
        end: "80% center", 
 
        toggleActions: "play reverse play reverse" 
    }
});
  gsap.to(".choose_bg2 img", {
    scale: 1.1,
    rotate: "2deg",
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".choose_bg2",
        start: "top center", 
        end: "80% center", 
 
        toggleActions: "play reverse play reverse" 
    }
});
  gsap.to(".choose_bg3 img", {
    scale: 1.1,
    rotate: "2deg",
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".choose_bg3",
        start: "top center", 
        end: "80% center", 
     
        toggleActions: "play reverse play reverse" 
    }
});

 


  // video section


// gsap.to(".mask", {
//     maskSize: "100%, 100vw 100vh",
//     scrollTrigger: {
//         trigger: ".parent",
//         start: "top top",
//         end: "",
//         pin: true,
//         scrub: 1,
//     }
// })


// gsap.from(".video_text h3", {
//     y: 50,
//     opacity: 0,
//     stagger: 0.3,
//     scrollTrigger:{
//         trigger: ".parent",
//         start: "top top",
//     }
// })


});

});






// photos section





const slides = gsap.utils.toArray(".carousel-slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let activeSlide;
let firstRun = true;

// override CSS to prevent native scrolling
gsap.set(".carousel", { overflow:"visible", "scroll-snap-type": "none" });

// display the prev / next buttons
gsap.set(".carousel-nav", { display: "block" });

// create seamless horizontal loop
const loop = horizontalLoop(slides, {
  paused: true,       // no auto-scroll
//   paddingRight: 10,   // match the 10px flex gap
  center: true,       // snap the active slide to the center
  draggable: true,    // requires Draggable & InertiaPlugin
  onChange: (slide, index) => { // called when the active slide changes
    if (activeSlide) {
      gsap.to(".carousel h2, .carousel h5", { overwrite: true, opacity: 0, ease: "power3" });
      gsap.to(".active-not", { opacity: 0.3 });
      activeSlide.classList.remove("active-not");
    }
    slide.classList.add("active-not");
    activeSlide = slide;
    
    // intro animation for new active slide
    gsap.timeline({ defaults:{ ease:"power1.inOut" } })
      .to(".active-not", { opacity: 1, ease: "power2.inOut" }, 0)
      .to(".carousel-nav div", { duration: 0.2, opacity: 0, ease: "power1.in" }, 0)
      .set(".carousel-nav div", { innerText: `${index + 1}/${slides.length}` }, 0.2)
      .to(".carousel-nav div", { duration: 0.4, opacity: 0.5, ease: "power1.inOut" }, 0.2)
      .to(".active-not h2, .active-not h5", { opacity: 1, ease: "power1.inOut" }, 0.3)
      .fromTo(".active-not h2, .active-not h5", { y:(i)=>[40,60][i] },{ duration: 1.5, y: 0, ease: "expo" }, 0.3)
      .progress( firstRun? 1: 0 ) // skip active slide animation on first run
  }
});

// prev / next button behavior
function arrowBtnOver(e) { gsap.to(e.target, { opacity: 0.4 }); }
function arrowBtnOut(e) { gsap.to(e.target, { opacity: 1 }); }

next.addEventListener("pointerover", arrowBtnOver);
next.addEventListener("pointerout", arrowBtnOut);
next.addEventListener("click", () => loop.next({ duration: 1, ease: "expo" }));

prev.addEventListener("pointerover", arrowBtnOver);
prev.addEventListener("pointerout", arrowBtnOut);
prev.addEventListener("click", () => loop.previous({ duration: 1, ease: "expo" }));

// each slide can function as a button to activate itself
slides.forEach((slide, i) => {
  slide.addEventListener("click", () => loop.toIndex(i, { duration: 1, ease: "expo" }));
});

// set initial opacity for slides
gsap.set(".carousel-slide", { opacity: (i) => (i === 0 ? 1 : 0.3) })
gsap.set(".carousel-slide h2", { opacity: (i) => (i === 0 ? 1 : 0) })
gsap.set(".carousel-slide h5", { opacity: (i) => (i === 0 ? 1 : 0) })

// center on initial slide
loop.toIndex(0, { duration: 0 }); 
firstRun = false;

// image parallax, horizontalLoop() was customized to call this function onUpdate of the carousel timeline
function slideImgUpdate(){
  slides.forEach( slide => {
    const rect = slide.getBoundingClientRect();
    const prog = gsap.utils.mapRange(-rect.width, innerWidth, 0, 1, rect.x);
    const val = gsap.utils.clamp(0, 1, prog );
    gsap.set(slide.querySelector("img"), {
      xPercent: gsap.utils.interpolate(0, -50, val)
    });
  });
}






function horizontalLoop(items, config) {
  let timeline;
  items = gsap.utils.toArray(items);
  config = config || {};
  gsap.context(() => { // use a context so that if this is called from within another context or a gsap.matchMedia(), we can perform proper cleanup like the "resize" event handler on the window
    let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
        
          slideImgUpdate(); // custom function added to create parallax movement on the images
        
          let i = tl.closestIndex();
          if (lastIndex !== i) {
            lastIndex = i;
            onChange(items[i], i);
          }
        }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      spaceBefore = [],
      xPercents = [],
      curIndex = 0,
      indexIsDirty = false,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth,
      getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
      populateWidths = () => {
        let b1 = container.getBoundingClientRect(), b2;
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
          xPercent: i => xPercents[i]
        });
        totalWidth = getTotalWidth();
      },
      timeWrap,
      populateOffsets = () => {
        timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
        center && times.forEach((t, i) => {
          times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
        });
      },
      getClosest = (values, value, wrap) => {
        let i = values.length,
          closest = 1e10,
          index = 0, d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) {
            d = wrap - d;
          }
          if (d < closest) {
            closest = d;
            index = i;
          }
        }
        return index;
      },
      populateTimeline = () => {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = xPercents[i] / 100 * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
            .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        timeWrap = gsap.utils.wrap(0, tl.duration());
      },
      refresh = (deep) => {
        let progress = tl.progress();
        tl.progress(0, true);
        populateWidths();
        deep && populateTimeline();
        populateOffsets();
        deep && tl.draggable && tl.paused() ? tl.time(times[curIndex], true) : tl.progress(progress, true);
      },
      onResize = () => refresh(true),
      proxy;
    gsap.set(items, {x: 0});
    populateWidths();
    populateTimeline();
    populateOffsets();
    window.addEventListener("resize", onResize);
    function toIndex(index, vars) {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      if (time < 0 || time > tl.duration()) {
        vars.modifiers = {time: timeWrap};
      }
      curIndex = newIndex;
      vars.overwrite = true;
      gsap.killTweensOf(proxy);    
      return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
    }
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.closestIndex = setCurrent => {
      let index = getClosest(times, tl.time(), tl.duration());
      if (setCurrent) {
        curIndex = index;
        indexIsDirty = false;
      }
      return index;
    };
    tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
    tl.next = vars => toIndex(tl.current()+1, vars);
    tl.previous = vars => toIndex(tl.current()-1, vars);
    tl.times = times;
    tl.progress(1, true).progress(0, true); // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    if (config.draggable && typeof(Draggable) === "function") {
      proxy = document.createElement("div")
      let wrap = gsap.utils.wrap(0, 1),
        ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX, wasPlaying,
        align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.closestIndex(true);
      typeof(InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "x",
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          refresh();
          ratio = 1 / totalWidth;
          initChangeX = (startProgress / -ratio) - x;
          gsap.set(proxy, {x: startProgress / -ratio});
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value) {
          //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
          if (Math.abs(startProgress / -ratio - this.x) < 10) {
            return lastSnap + initChangeX
          }
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = timeWrap(time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease() {
          syncIndex();
          draggable.isThrowing && (indexIsDirty = true);
        },
        onThrowComplete: () => {
          syncIndex();
          wasPlaying && tl.play();
        }
      })[0];
      tl.draggable = draggable;
    }
    tl.closestIndex(true);
    lastIndex = curIndex;
    onChange && onChange(items[curIndex], curIndex);
    timeline = tl;
    return () => window.removeEventListener("resize", onResize); // cleanup
  });
  return timeline;
}
// Auto slide every 5 seconds
let autoSlide = gsap.delayedCall(4, function autoAdvance() {
  loop.next({ duration: 1.2, ease: "power3.inOut" });
  autoSlide.restart(true); // schedule next auto-slide
});




















