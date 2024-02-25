let loadingAnimation = ()=>{
  let tl = gsap.timeline();

tl.to(".yellow-loader1", {
  top: "-100%",
  delay: 0.5,
  duration: 0.7,
  ease: "expo.out",
});

tl.from(".yellow-loader2",{
    top: "100%",
    delay: 0.6,
    duration: 0.7,
    ease: "expo.out",
  },"same");

tl.to(".loader h1",{
    delay:0.6,
    duration: 0.7,
    color: "black",
  },"same");

tl.to(".loader",{
   opacity:0,
   zIndex:1,
})

tl.from(".loader",{
    diplay:"none",
    zIndex:1,
})
}

loadingAnimation();


let locoAnimation = ()=>{
  
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

let boxs = document.querySelectorAll(".box");
let main= document.querySelector(".page2")
boxs.forEach((box) => {
  box.addEventListener("mouseover",()=>{
     let boxImg = box.getAttribute("data-img")
     main.style.backgroundImage = `url(${boxImg})`
  })
});


let backTop = document.querySelector(".footer h2");

backTop.addEventListener("click",()=>{
  scroll.scrollTo(0)
})
}

locoAnimation();


let navIcon = document.querySelector(".icon img");
let rigthSlider = document.querySelector(" .nav-rigth .rigth-heaing");
let first = document.querySelector(".first");
let navtl = gsap.timeline();

let isRotated = false;
navIcon.addEventListener("click",()=> {
  if (!isRotated) {
    navIcon.style.transform = `rotate(-135deg)`;
    navtl.to(".over .first,.over .sec,.rigth-heaing", {
      x: "0%",
      ease: Power1,
    });
    navtl.to(".over .first,.over .sec", {
      x: "0%",
      opacity: 1,
      stagger:0.5,
      ease: Power1,
    });
    isRotated = true;
  } else {
    navIcon.style.transform = `rotate(0deg)`;
    navtl.to(".over .first,.over .sec,.rigth-heaing", {
      x: "68%",
      stagger:1,
      ease: Power1,
    });
    navtl.to(".over .first,.over .sec", {
      x: "100%",
      opacity: 0,
      stagger:1,
      ease: Power1,
    });
    isRotated = false;
  }
})


