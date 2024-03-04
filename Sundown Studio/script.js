
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});


let page3ImageAnimation = ()=>{
    let fixedBox = document.querySelector(".page3-fixed-box");
let pageContainer = document.querySelector(".page3-container");

fixedBox.addEventListener("mouseenter",()=>{
    fixedBox.style.display = "block";
})

pageContainer.addEventListener("mouseenter",()=>{
    fixedBox.style.display = "block";
})


pageContainer.addEventListener("mouseleave",()=>{
    fixedBox.style.display = "none";
})


let boxs = document.querySelectorAll(".page3-container .box");

boxs.forEach((box) => {
    box.addEventListener("mouseenter",()=>{
       let image = box.getAttribute("data-image");
       fixedBox.style.backgroundImage = `url(${image})`
    })
  
});
}


let page4Animation = ()=>{
  
  let firstH1 = document.querySelectorAll(".page4-left h1");
let singleH1 = document.querySelector(".page4-left h1");
let page4Paragarph = document.querySelector(".page4-paragarph p");
let page4Right = document.querySelector(".page4-right");
let currentImg = page4Right.querySelector("img");
let currentPara = page4Right.querySelector("p");
let currentH1;

firstH1.forEach((h1) => {
  h1.addEventListener("click", (event) => {
    if (event.target.matches("h1")) {
      let bgImg = event.target.getAttribute("data-img");
      let para = event.target.getAttribute("data-para");
      if (bgImg) {
        if (currentImg) {
          currentImg.src = bgImg;
        } else {
          currentImg = document.createElement("img");
          currentImg.src = bgImg;
          page4Right.appendChild(currentImg);
        }
        if (page4Paragarph) {
          page4Paragarph.innerText = para;
        } else {
          let newPara = document.createElement("p");
          newPara.innerText = para;
          page4Right.appendChild(newPara);
        }

        if (currentH1) {
          currentH1.classList.remove("active");
         }
        h1.classList.add("active");
        currentH1 = h1;
      } else {
        console.error("Data-img attribute not found");
      }
    }
  });
});


}

let swiperAnimation = ()=>{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
  
  });
}


let navAnimation = ()=>{
  let fullScr = document.querySelector(".nav-full-scr");
let navBtn = document.querySelector(".meun-div");
let navImg = document.querySelector(".nav-left img");
let firstCencel = document.querySelector("#firstCencel");
let sceCencel = document.querySelector("#sceCencel");
let condition = 0;

navBtn.addEventListener("click",()=>{
 console.log("helo");
  if (condition == 0) {
    
     fullScr.style.zIndex = 80;
     fullScr.style.top = 0;
     navImg.style.opacity = 0;
     firstCencel.style.transform = `rotate(${40}deg)`
    //  firstCencel.style.transform = `rotate(${24}deg)`
     sceCencel.style.transform = `rotate(${139}deg)`
     sceCencel.style.top = `50%`
     firstCencel.style.top = `50%`
     condition = 1;

  } else {
    fullScr.style.top = "-200%";
    fullScr.style.zIndex = "80";
    navImg.style.opacity = 1;
    firstCencel.style.transform = `rotate(${0}deg)`
    sceCencel.style.transform = `rotate(${0}deg)`
    sceCencel.style.top = `38%`
    condition = 0;
  }
})
}

let loader = document.querySelector(".loader");
setInterval(() => {
  loader.style.top = "-200%";
}, 4030);


page3ImageAnimation();
page4Animation();
swiperAnimation();
navAnimation();