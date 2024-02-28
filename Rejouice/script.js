function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  
}

init()


let movingCursor = ()=>{
let cursor = document.querySelector(".cursor");
let pageContent = document.querySelector(".page1-content")

pageContent.addEventListener("mousemove",(e)=>{
   gsap.to(cursor,{
       opacity:1,
       x: e.clientX,
       y:e.clientY,

   }) 
})
pageContent.addEventListener("mouseenter",(e)=>{
   gsap.to(cursor,{
       scale:1,
       opacity:1,
   }) 
})
pageContent.addEventListener("mouseleave",(e)=>{
   gsap.to(cursor,{
        scale:0,
        opacity:0,

   }) 
})
}

movingCursor();


let pagetextAnimation = () =>{
  let tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:".page2",
      scroller:"main",
      start:"top 40%",
      end:"top 37%",
      scrub:2,
      // markers: true,
  }
})

tl3.from(".page2-bottom .elem h1",{
  y:120,
  stagger:0.25,
  duration:2,

})

gsap.from(".page3 .page3-top .elem h2",{
  y:120,
  stagger:0.25,
  duration:2,
  scrollTrigger:{
          trigger:".page2",
          scroller: "main",
          start:"top -40%",
          end:"top -0%",
          scrub:3,
          // markers:true,
  }
})
}

pagetextAnimation();

let loaderAnimation = ()=>{
  var tl = gsap.timeline();

tl.from(".loader h2",{
     x:"40",
     opacity:0,
     duration:1,
     stagger:0.1,
})

tl.to(".loader h2",{
  opacity:0,
  x:"-40",
  duration:1,
  stagger:0.1,
})

tl.to(".loader",{
  opacity:0,
})

tl.from(".page1 .page1-content h1 span",{
  y:"100",
  opacity:0,
  duration:0.5,
  stagger:0.2,
  delay:-0.5,
})
tl.to(".loader",{
    display:"none",
})

}

loaderAnimation();

let sliderAnimation = ()=> {
  var swiper = new Swiper(".mySwiper", {
    // slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}

sliderAnimation();



let footerAnimation = ()=>{
  gsap.from(".footer-end h1 span",{
    y:"-100",
    opacity:0,
    duration:0.4,
    stagger:0.1,
    // delay:-0.5,
    scrollTrigger:{
            trigger:".page2",
            scroller: "main",
            start: "top -450%",
            end: "top -350%",
            scrub:1,
            // markers:true,
  
    }
  })
}

footerAnimation();