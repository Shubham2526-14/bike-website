var trigger = document.getElementById("trigger");
var canvass = document.querySelector(".offcanvass"); 
let closed = document.querySelector(".close");
trigger.addEventListener("click", ()=>{
    let tl = gsap.timeline();
    
    tl.to(canvass, {
        zIndex: 1000,
        duration: 0.5
    })
    tl.to(canvass, {
        opacity: 1,
        duration:1
    })

})

closed.addEventListener("click", ()=>{
    let tl = gsap.timeline();
    tl.to(canvass, {
        opacity: 0,
        duration:0.5
    })
    tl.to(canvass, {
        zIndex: -1,
        duration: 0.5
    })
})


