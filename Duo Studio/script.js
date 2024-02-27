function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()


let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main")

gsap.from(".page1 h1,.page1 h2",{
    y:10,
    rotate:10,
    opacity:0,
    delay:0.3,
    duration:0.7,
})



document.addEventListener("mousemove",(evt)=>{
    gsap.to(".cursor",{
        x: evt.clientX + "px",
        y: evt.clientY + "px",
    })
    
})



let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 27%",
        end:"top 0",
        scrub:3,
    
    }
})

tl.to(".page1 h1",{
    x:"-70",
},"same")
tl.to(".page1 h2",{
    x:"70",
},"same")
tl.to(".page1 video",{
    width:"90%",
},"same")

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        start:"top -120%",
        end:"top -130%",
        scrub:3,
     
    }
})

tl2.to(".main",{
    backgroundColor:"#fff",
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start: "top -280%",
        end: "top -300%",
        scrub:3,
     
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D",
})


let navDiv = document.querySelector(".nav-div");
let Div = document.querySelector(".nav-div .div");
let h4 = document.querySelectorAll("nav .nav-part1 h4");


h4.forEach((h4)=> {
    h4.addEventListener("mouseenter",()=>{
            var heading = h4.getAttribute("data-heading");
            navDiv.style.display = "flex";
            navDiv.style.opacity = "1";
            var cuttler = "";
            for (var index = 0; index <= 20; index++) {
                cuttler += `<h1 class="head">${heading}</h1>`;             
            }
            Div.innerHTML = cuttler;   
    })
    h4.addEventListener("mouseleave",()=>{
            navDiv.style.display = "none";
            navDiv.style.opacity = "0";
            Div.innerHTML = "";

    })
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(e){
        var yPosition = e.clientY - elem.getBoundingClientRect().top;
        var att = elem.getAttribute("data-image")
        elem.style.top = `${yPosition}`;
        cursor.style.width = "400px"
        cursor.style.height = "370px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        // elem.style.top = `${yPosition}`;
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "15px"
        cursor.style.height = "15px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
        
    })
})
